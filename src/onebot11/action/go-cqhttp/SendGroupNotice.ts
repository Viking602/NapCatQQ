import { checkFileReceived, uri2local } from '@/common/utils/file';
import BaseAction from '../BaseAction';
import { ActionName } from '../types';
import { NTQQGroupApi, WebApi } from '@/core/apis';
import { unlink } from 'node:fs';
import { FromSchema, JSONSchema } from 'json-schema-to-ts';
const SchemaData = {
    type: 'object',
    properties: {
        group_id: { type: 'number' },
        content: { type: 'string' },
        image: { type: 'string' },
        pinned: { type: 'number' },
        confirmRequired: { type: 'number' }
    },
    required: ['group_id', 'content']
} as const satisfies JSONSchema;

type Payload = FromSchema<typeof SchemaData>;

export class SendGroupNotice extends BaseAction<Payload, null> {
    actionName = ActionName.GoCQHTTP_SendGroupNotice;
    protected async _handle(payload: Payload) {
        let UploadImage: { id: string, width: number, height: number } | undefined = undefined;
        if (payload.image) {
            //公告图逻辑
            let Image_path, Image_errMsg, Image_IsLocal = false;
            let Uri2LocalRet = (await uri2local(payload.image));
            Image_errMsg = Uri2LocalRet.errMsg;
            Image_path = Uri2LocalRet.path;
            Image_IsLocal = Uri2LocalRet.isLocal;
            if (Image_errMsg) {
                throw `群公告${payload.image}设置失败,image字段可能格式不正确`;
            }
            if (!Image_path) {
                throw `群公告${payload.image}设置失败,获取资源失败`;
            }
            await checkFileReceived(Image_path, 5000); // 文件不存在QQ会崩溃，需要提前判断
            let ImageUploadResult = await NTQQGroupApi.uploadGroupBulletinPic(payload.group_id.toString(), Image_path);
            if (ImageUploadResult.errCode != 0) {
                throw `群公告${payload.image}设置失败,图片上传失败`;
            }
            if (!Image_IsLocal) {
                unlink(Image_path, () => { });
            }
            UploadImage = ImageUploadResult.picInfo;
        }
        let Notice_Pinned = 0;
        let Notice_confirmRequired = 0;
        if (!payload.pinned) {
            Notice_Pinned = 0;
        }
        if (!payload.confirmRequired) {
            Notice_confirmRequired = 0;
        }
        let PublishGroupBulletinResult = await NTQQGroupApi.publishGroupBulletin(payload.group_id.toString(), payload.content, UploadImage, Notice_Pinned, Notice_confirmRequired);

        if (PublishGroupBulletinResult.result! = 0) {
            throw `设置群公告失败,错误信息:${PublishGroupBulletinResult.errMsg}`;
        }
        // 下面实现扬了
        //await WebApi.setGroupNotice(payload.group_id, payload.content) ;
        return null;
    }
}