const _0x34f78a=_0x5382;(function(_0x1eeae4,_0x11dc6b){const _0x98b8e6=_0x5382,_0x2fcb87=_0x1eeae4();while(!![]){try{const _0x9fec81=-parseInt(_0x98b8e6(0x13e))/0x1*(parseInt(_0x98b8e6(0x146))/0x2)+parseInt(_0x98b8e6(0x143))/0x3*(parseInt(_0x98b8e6(0x186))/0x4)+-parseInt(_0x98b8e6(0x140))/0x5*(-parseInt(_0x98b8e6(0x14d))/0x6)+-parseInt(_0x98b8e6(0x149))/0x7*(parseInt(_0x98b8e6(0x161))/0x8)+parseInt(_0x98b8e6(0x150))/0x9+-parseInt(_0x98b8e6(0x17c))/0xa+parseInt(_0x98b8e6(0x17b))/0xb;if(_0x9fec81===_0x11dc6b)break;else _0x2fcb87['push'](_0x2fcb87['shift']());}catch(_0x4ee840){_0x2fcb87['push'](_0x2fcb87['shift']());}}}(_0x52bf,0xb22bb));import{AtType,ElementType,FaceIndex,FaceType,PicType}from'./index';import{promises as _0x4af065}from'node:fs';import _0x3917c9 from'fluent-ffmpeg';function _0x52bf(){const _0x5c11a2=['VIDEO','qFWeI','AniStickerPackId','FILE','4fWUkSf','QSid','PTT','yBpVl','mface','uploadFile','https://www.bilibili.com/','ark','end','FACE','MARKDOWN','markdown','then','time','AniStickerType','toString','[包剪锤]','dirname','tjvQS','PUbEr','HOscU','1230079tSztbf','fegxT','25pGPqLw','jiWif','Bot\x20Test','2037495rhlbJE','rps','video','2UtoYjd','OqpQG','MwWTu','8653309VxoOxk','Thumb','XfrVC','string','651666jbXVKg','获取视频信息失败','reply','604206CyfSsp','sysface','mp4','catch','dice','writeFile','fQTkm','error','stringify','AeTNg','zjiaY','ptt','zcVGf','[骰子]','notAt','sep','file','8tbyWOu','screenshots','get','aoeZB','UuhDl','text','xudxV','jpg','MFACE','RPS','width','gvOBQ','ARK','文件异常，大小为0','stat','https://tianquan.gtimg.cn/qqAIAgent/item/7/square.png','AniStickerId','unlink','getImageSize','FzeOL','REPLY','_0.png','PIC','[商城表情]','height','语音转换失败,\x20请检查语音文件是否正常','26358794gZUSjc','4895550SqiewB','gif','获取视频封面失败，使用默认封面','replace','JbcdN','xRfFr'];_0x52bf=function(){return _0x5c11a2;};return _0x52bf();}import{NTQQFileApi}from'@/core/apis/file';import{calculateFileMD5,isGIF}from'@/common/utils/file';import{logDebug,logError}from'@/common/utils/log';import{defaultVideoThumb,getVideoInfo}from'@/common/utils/video';import{encodeSilk}from'@/common/utils/audio';function _0x5382(_0x6883f5,_0x40f5a1){const _0x52bfdf=_0x52bf();return _0x5382=function(_0x53821d,_0x298314){_0x53821d=_0x53821d-0x137;let _0x305765=_0x52bfdf[_0x53821d];return _0x305765;},_0x5382(_0x6883f5,_0x40f5a1);}import _0x1be45e from'./face_config.json';import*as _0x17c989 from'node:path';import{SignMiniApp}from'../apis';export const mFaceCache=new Map();export class SendMsgElementConstructor{static[_0x34f78a(0x166)](_0x28dfa6){const _0x55a657=_0x34f78a;return{'elementType':ElementType['TEXT'],'elementId':'','textElement':{'content':_0x28dfa6,'atType':AtType[_0x55a657(0x15e)],'atUid':'','atTinyId':'','atNtUid':''}};}static['at'](_0x35bb71,_0x245c70,_0x4dc219,_0x115d3b){return{'elementType':ElementType['TEXT'],'elementId':'','textElement':{'content':'@'+_0x115d3b,'atType':_0x4dc219,'atUid':_0x35bb71,'atTinyId':'','atNtUid':_0x245c70}};}static[_0x34f78a(0x14f)](_0x91bc82,_0xd00003,_0x2d3ac8,_0x353ea1){const _0x55e852=_0x34f78a;return{'elementType':ElementType[_0x55e852(0x175)],'elementId':'','replyElement':{'replayMsgSeq':_0x91bc82,'replayMsgId':_0xd00003,'senderUin':_0x2d3ac8,'senderUinStr':_0x353ea1}};}static async['pic'](_0x505fee,_0x4963a1='',_0x42ad8a=0x0){const _0x5c0ad8=_0x34f78a,_0x5baa8f={'fegxT':function(_0x47babc,_0x5442e0){return _0x47babc===_0x5442e0;},'GNmmQ':function(_0x2030c7,_0x51f02e){return _0x2030c7(_0x51f02e);}},{md5:_0x5e7b39,fileName:_0x3fa9a2,path:_0xb4295f,fileSize:_0x9f47f1}=await NTQQFileApi[_0x5c0ad8(0x18b)](_0x505fee,ElementType[_0x5c0ad8(0x177)],_0x42ad8a);if(_0x5baa8f[_0x5c0ad8(0x13f)](_0x9f47f1,0x0))throw _0x5c0ad8(0x16e);const _0x2b7c89=await NTQQFileApi[_0x5c0ad8(0x173)](_0x505fee),_0x4b9bb8={'md5HexStr':_0x5e7b39,'fileSize':_0x9f47f1[_0x5c0ad8(0x138)](),'picWidth':_0x2b7c89?.['width'],'picHeight':_0x2b7c89?.[_0x5c0ad8(0x179)],'fileName':_0x3fa9a2,'sourcePath':_0xb4295f,'original':!![],'picType':_0x5baa8f['GNmmQ'](isGIF,_0x505fee)?PicType[_0x5c0ad8(0x17d)]:PicType[_0x5c0ad8(0x168)],'picSubType':_0x42ad8a,'fileUuid':'','fileSubId':'','thumbFileSize':0x0,'summary':_0x4963a1};return{'elementType':ElementType[_0x5c0ad8(0x177)],'elementId':'','picElement':_0x4b9bb8};}static async[_0x34f78a(0x160)](_0x2b123a,_0x3a4444=''){const _0xcfa28f=_0x34f78a,_0x5aee44={'zjiaY':function(_0x9ee29b,_0x576955){return _0x9ee29b===_0x576955;},'HOscU':'文件异常，大小为0','WfUKt':function(_0x372ac4,_0xff9162){return _0x372ac4||_0xff9162;}},{md5:_0x5bf828,fileName:_0x456758,path:_0x53c8eb,fileSize:_0x865b5b}=await NTQQFileApi[_0xcfa28f(0x18b)](_0x2b123a,ElementType[_0xcfa28f(0x185)]);if(_0x5aee44[_0xcfa28f(0x15a)](_0x865b5b,0x0))throw _0x5aee44[_0xcfa28f(0x13d)];const _0x5ca9cb={'elementType':ElementType[_0xcfa28f(0x185)],'elementId':'','fileElement':{'fileName':_0x5aee44['WfUKt'](_0x3a4444,_0x456758),'filePath':_0x53c8eb,'fileSize':_0x865b5b[_0xcfa28f(0x138)]()}};return _0x5ca9cb;}static async[_0x34f78a(0x145)](_0x33a4c9,_0x283806='',_0x131e53=''){const _0x305721=_0x34f78a,_0x27dbc6={'qFWeI':function(_0x5061d2,_0xdbf57e,_0x53b718){return _0x5061d2(_0xdbf57e,_0x53b718);},'jiWif':_0x305721(0x17e),'yBpVl':function(_0xa12aef,_0x4160ac){return _0xa12aef(_0x4160ac);},'JDYgS':_0x305721(0x157),'XfrVC':function(_0x2a7b5d,_0x3c559e){return _0x2a7b5d+_0x3c559e;},'aoeZB':_0x305721(0x18e),'nKsyh':function(_0x552b7e,_0xb65561){return _0x552b7e(_0xb65561);},'zcVGf':_0x305721(0x14e),'astDn':function(_0x3d6b17,_0x272c50){return _0x3d6b17(_0x272c50);},'UuhDl':function(_0x317b24,_0x5e7479){return _0x317b24||_0x5e7479;},'tjvQS':function(_0x3656ab,_0x5e98a0){return _0x3656ab+_0x5e98a0;}},{fileName:_0x2fc2a2,path:_0x40deb9,fileSize:_0x2185c6,md5:_0x159494}=await NTQQFileApi[_0x305721(0x18b)](_0x33a4c9,ElementType[_0x305721(0x182)]);if(_0x2185c6===0x0)throw _0x305721(0x16e);let _0x26f65f=_0x40deb9[_0x305721(0x17f)](_0x17c989['sep']+'Ori'+_0x17c989[_0x305721(0x15f)],_0x17c989[_0x305721(0x15f)]+_0x305721(0x14a)+_0x17c989['sep']);_0x26f65f=_0x17c989[_0x305721(0x13a)](_0x26f65f);let _0x2f1aa4={'width':0x780,'height':0x438,'time':0xf,'format':_0x305721(0x152),'size':_0x2185c6,'filePath':_0x33a4c9};try{_0x2f1aa4=await _0x27dbc6['nKsyh'](getVideoInfo,_0x40deb9);}catch(_0x405230){logError(_0x27dbc6[_0x305721(0x15c)],_0x405230);}const _0x2ebb05=new Promise((_0xbf9477,_0x3c0096)=>{const _0x29ec22=_0x305721,_0x81dcc5={'SZDuZ':function(_0x1f89cd,_0xfc262c){const _0x5069fe=_0x5382;return _0x27dbc6[_0x5069fe(0x189)](_0x1f89cd,_0xfc262c);},'lebaJ':function(_0x4fe218,_0x3d64bb){return _0x4fe218(_0x3d64bb);}},_0xcd5f46=_0x159494+_0x29ec22(0x176),_0x4b2fa9=_0x17c989['join'](_0x26f65f,_0xcd5f46);_0x3917c9(_0x33a4c9)['on'](_0x29ec22(0x18e),()=>{})['on'](_0x27dbc6['JDYgS'],_0x2635b3=>{const _0x95d0db=_0x29ec22;_0x27dbc6[_0x95d0db(0x183)](logDebug,_0x27dbc6[_0x95d0db(0x141)],_0x2635b3),_0x131e53?_0x4af065['copyFile'](_0x131e53,_0x4b2fa9)[_0x95d0db(0x192)](()=>{_0xbf9477(_0x4b2fa9);})['catch'](_0x3c0096):_0x4af065[_0x95d0db(0x155)](_0x4b2fa9,defaultVideoThumb)[_0x95d0db(0x192)](()=>{_0x81dcc5['SZDuZ'](_0xbf9477,_0x4b2fa9);})[_0x95d0db(0x153)](_0x3c0096);})[_0x29ec22(0x162)]({'timestamps':[0x0],'filename':_0xcd5f46,'folder':_0x26f65f,'size':_0x27dbc6[_0x29ec22(0x14b)](_0x2f1aa4[_0x29ec22(0x16b)],'x')+_0x2f1aa4[_0x29ec22(0x179)]})['on'](_0x27dbc6[_0x29ec22(0x164)],()=>{_0x81dcc5['lebaJ'](_0xbf9477,_0x4b2fa9);});}),_0xa87d92=new Map(),_0x216f43=await _0x2ebb05,_0x3e5be5=(await _0x4af065[_0x305721(0x16f)](_0x216f43))['size'];_0xa87d92['set'](0x0,_0x216f43);const _0x3683e7=await _0x27dbc6['astDn'](calculateFileMD5,_0x216f43),_0x3b9ad3={'elementType':ElementType[_0x305721(0x182)],'elementId':'','videoElement':{'fileName':_0x27dbc6[_0x305721(0x165)](_0x283806,_0x2fc2a2),'filePath':_0x40deb9,'videoMd5':_0x159494,'thumbMd5':_0x3683e7,'fileTime':_0x2f1aa4[_0x305721(0x193)],'thumbPath':_0xa87d92,'thumbSize':_0x3e5be5,'thumbWidth':_0x2f1aa4[_0x305721(0x16b)],'thumbHeight':_0x2f1aa4[_0x305721(0x179)],'fileSize':_0x27dbc6[_0x305721(0x13b)]('',_0x2185c6)}};return _0x3b9ad3;}static async[_0x34f78a(0x15b)](_0x2a31ae){const _0x52885f=_0x34f78a,_0x274771={'gvOBQ':_0x52885f(0x17a),'fQTkm':'文件异常，大小为0'},{converted:_0x39bd21,path:_0x40ae63,duration:_0x57de99}=await encodeSilk(_0x2a31ae);if(!_0x40ae63)throw _0x274771[_0x52885f(0x16c)];const {md5:_0x2f09b5,fileName:_0x3b833f,path:_0x547d99,fileSize:_0x224443}=await NTQQFileApi[_0x52885f(0x18b)](_0x40ae63,ElementType['PTT']);if(_0x224443===0x0)throw _0x274771[_0x52885f(0x156)];return _0x39bd21&&_0x4af065[_0x52885f(0x172)](_0x40ae63)[_0x52885f(0x192)](),{'elementType':ElementType[_0x52885f(0x188)],'elementId':'','pttElement':{'fileName':_0x3b833f,'filePath':_0x547d99,'md5HexStr':_0x2f09b5,'fileSize':_0x224443,'duration':_0x57de99||0x1,'formatType':0x1,'voiceType':0x1,'voiceChangeType':0x0,'canConvert2Text':!![],'waveAmplitudes':[0x0,0x12,0x9,0x17,0x10,0x11,0x10,0xf,0x2c,0x11,0x18,0x14,0xe,0xf,0x11],'fileSubId':'','playState':0x1,'autoConvertText':0x0}};}static['face'](_0x35f0b8){const _0x22622e=_0x34f78a,_0x976532={'MmuuF':function(_0x1f11be,_0x4b254a){return _0x1f11be(_0x4b254a);},'PUbEr':function(_0x1c496f,_0x1c543c){return _0x1c496f>=_0x1c543c;}},_0x1fb7b7=_0x1be45e[_0x22622e(0x151)],_0x2ca49d=_0x1be45e['emoji'],_0x497e62=_0x1fb7b7['find'](_0x2d29fe=>_0x2d29fe[_0x22622e(0x187)]===_0x35f0b8[_0x22622e(0x138)]());_0x35f0b8=_0x976532['MmuuF'](parseInt,_0x35f0b8['toString']());let _0x358e4f=0x1;return _0x976532[_0x22622e(0x13c)](_0x35f0b8,0xde)&&(_0x358e4f=0x2),_0x497e62[_0x22622e(0x137)]&&(_0x358e4f=0x3),{'elementType':ElementType['FACE'],'elementId':'','faceElement':{'faceIndex':_0x35f0b8,'faceType':_0x358e4f,'faceText':_0x497e62['QDes'],'stickerId':_0x497e62[_0x22622e(0x171)],'stickerType':_0x497e62['AniStickerType'],'packId':_0x497e62[_0x22622e(0x184)],'sourceType':0x1}};}static[_0x34f78a(0x18a)](_0x2f54ca,_0x461898,_0x48f238,_0x5d8103){const _0x6fde9=_0x34f78a;return{'elementType':ElementType[_0x6fde9(0x169)],'marketFaceElement':{'emojiPackageId':_0x2f54ca,'emojiId':_0x461898,'key':_0x48f238,'faceName':_0x5d8103||mFaceCache[_0x6fde9(0x163)](_0x461898)||_0x6fde9(0x178)}};}static[_0x34f78a(0x154)](_0x36a57a){const _0x2476d6=_0x34f78a,_0x95dbf7={'FzeOL':_0x2476d6(0x15d)};return{'elementType':ElementType['FACE'],'elementId':'','faceElement':{'faceIndex':FaceIndex[_0x2476d6(0x154)],'faceType':FaceType[_0x2476d6(0x154)],'faceText':_0x95dbf7[_0x2476d6(0x174)],'packId':'1','stickerId':'33','sourceType':0x1,'stickerType':0x2,'surpriseId':''}};}static[_0x34f78a(0x144)](_0x4aa606){const _0x260e44=_0x34f78a;return{'elementType':ElementType[_0x260e44(0x18f)],'elementId':'','faceElement':{'faceIndex':FaceIndex[_0x260e44(0x16a)],'faceText':_0x260e44(0x139),'faceType':0x3,'packId':'1','stickerId':'34','sourceType':0x1,'stickerType':0x2,'surpriseId':''}};}static[_0x34f78a(0x18d)](_0x1ba093){const _0xda99e1=_0x34f78a,_0x27f14a={'xudxV':function(_0xfb03f,_0x47a008){return _0xfb03f!==_0x47a008;}};return _0x27f14a[_0xda99e1(0x167)](typeof _0x1ba093,_0xda99e1(0x14c))&&(_0x1ba093=JSON[_0xda99e1(0x158)](_0x1ba093)),{'elementType':ElementType['ARK'],'elementId':'','arkElement':{'bytesData':_0x1ba093,'linkInfo':null,'subElementType':null}};}static[_0x34f78a(0x191)](_0x5da173){const _0x578448=_0x34f78a;return{'elementType':ElementType[_0x578448(0x190)],'elementId':'','markdownElement':{'content':_0x5da173}};}static async['miniapp'](){const _0x27948c=_0x34f78a,_0x55f885={'OqpQG':function(_0x3e9059,_0x37168c){return _0x3e9059(_0x37168c);},'JbcdN':_0x27948c(0x142),'AeTNg':_0x27948c(0x170),'MwWTu':_0x27948c(0x18c),'xRfFr':'https://tianquan.gtimg.cn/shoal/qqAIAgent/3e9d70c9-d98c-45b8-80b4-79d82971b514.png'};let _0x276db2=await _0x55f885[_0x27948c(0x147)](SignMiniApp,{'prompt':_0x27948c(0x142),'title':_0x55f885[_0x27948c(0x180)],'preview':_0x55f885[_0x27948c(0x159)],'jumpUrl':_0x55f885[_0x27948c(0x148)],'tag':_0x55f885[_0x27948c(0x180)],'tagIcon':_0x55f885['xRfFr'],'source':_0x55f885[_0x27948c(0x180)],'sourcelogo':_0x55f885[_0x27948c(0x181)]});return{'elementType':ElementType[_0x27948c(0x16d)],'elementId':'','arkElement':{'bytesData':_0x276db2,'linkInfo':null,'subElementType':null}};}}