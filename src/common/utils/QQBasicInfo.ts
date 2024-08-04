import path from 'node:path';
import fs from 'node:fs';
import { systemPlatform } from '@/common/utils/system';
import { getDefaultQQVersionConfigInfo, getQQVersionConfigPath } from './helper';
import AppidTable from '@/core/external/appid.json';
import { logNotice } from '@/onebot11/log';

//基础目录获取
export let QQMainPath = process.execPath;
export let QQPackageInfoPath: string = path.join(path.dirname(QQMainPath), 'resources', 'app', 'package.json');
export let QQVersionConfigPath: string | undefined = getQQVersionConfigPath(QQMainPath);

//基础信息获取 无快更则启用默认模板填充
export let { appid: QQVersionAppid, qua: QQVersionQua } = getAppidV2();
export let isQuickUpdate: boolean = !!QQVersionConfigPath;
export let QQVersionConfig: QQVersionConfigType = isQuickUpdate ? JSON.parse(fs.readFileSync(QQVersionConfigPath!).toString()) : getDefaultQQVersionConfigInfo();
export let QQPackageInfo: QQPackageInfoType = JSON.parse(fs.readFileSync(QQPackageInfoPath).toString());

//基础函数
export function getQQBuildStr() {
  return isQuickUpdate ? QQVersionConfig.buildId : QQPackageInfo.buildVersion;
}
export function getFullQQVesion() {
  return isQuickUpdate ? QQVersionConfig.curVersion : QQPackageInfo.version;
}
export function requireMinNTQQBuild(buildStr: string) {
  return parseInt(getQQBuildStr()) >= parseInt(buildStr);
}
//此方法不要直接使用
export function getQUAInternal() {
  return systemPlatform === 'linux' ? `V1_LNX_NQ_${getFullQQVesion()}_${getQQBuildStr()}_GW_B` : `V1_WIN_NQ_${getFullQQVesion()}_${getQQBuildStr()}_GW_B`;
}
export function getAppidV2(): { appid: string, qua: string } {
  let appidTbale = AppidTable as unknown as QQAppidTableType;
  try {
    let data = appidTbale[getFullQQVesion()];
    if (data) {
      return data;
    }
  }
  catch (e) {
    logNotice('[QQ版本兼容性检测] 版本兼容性不佳，可能会导致一些功能无法正常使用');
  }
  // 以下是兜底措施
  return { appid: systemPlatform === 'linux' ? '537237950' : '537237765', qua: getQUAInternal() };
}
// platform_type: 3,
// app_type: 4,
// app_version: '9.9.12-25765',
// qua: 'V1_WIN_NQ_9.9.12_25765_GW_B',
// appid: '537234702',
// platVer: '10.0.26100',
// clientVer: '9.9.9-25765',
// Linux
// app_version: '3.2.9-25765',
// qua: 'V1_LNX_NQ_3.2.10_25765_GW_B',
