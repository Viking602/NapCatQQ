(function(_0x29c259,_0x56fda5){const _0xd8cbb8=_0x4c87,_0x41cf3a=_0x29c259();while(!![]){try{const _0x11f1ce=-parseInt(_0xd8cbb8(0xe0))/0x1+parseInt(_0xd8cbb8(0xef))/0x2*(-parseInt(_0xd8cbb8(0xf7))/0x3)+parseInt(_0xd8cbb8(0x10a))/0x4*(parseInt(_0xd8cbb8(0xf9))/0x5)+-parseInt(_0xd8cbb8(0xe7))/0x6+-parseInt(_0xd8cbb8(0xe4))/0x7+-parseInt(_0xd8cbb8(0xe1))/0x8*(-parseInt(_0xd8cbb8(0x109))/0x9)+parseInt(_0xd8cbb8(0xf4))/0xa;if(_0x11f1ce===_0x56fda5)break;else _0x41cf3a['push'](_0x41cf3a['shift']());}catch(_0x3c5898){_0x41cf3a['push'](_0x41cf3a['shift']());}}}(_0x4694,0x4aa5c));import{logDebug}from'@/common/utils/log';import{NTQQUserApi}from'./user';import{selfInfo}from'../data';import{RequestUtil}from'@/common/utils/request';function _0x4694(){const _0x47f8a5=['genBkn','\x5c/\x5c/','iSoxg','AvmGn',';\x20uin=o','https://h5.qzone.qq.com/v2/vip/tx/trpc/ark-share/GenNewSignedArk?g_tk=','p_skey','qwzTU',';\x20skey=','com.tencent.miniapp.lua','title','aykmh','18IWOXEi','373860sWFoRR','SsUTQ','169719LzGrGR','2100856GCINQv','FjBUg','GET','3201037ONZgmu','data','tDFCg','1542678iaMMoJ','tagIcon','tag','getQzoneCookies','MiniApp\x20JSON\x20消息生成失败','miniapp','PLcjX','HttpGetJson','170OxBniS','&ark=','uin','source','tianxuan.imgJumpArk','6745450iOHTnH','sourcelogo','normal','10245apqhVt','oCWfX','15AOKISF','p_skey=','replace','preview'];_0x4694=function(){return _0x47f8a5;};return _0x4694();}import{WebApi}from'./webapi';function _0x4c87(_0x58db78,_0x3fa61d){const _0x469427=_0x4694();return _0x4c87=function(_0x4c87b5,_0x31a4a9){_0x4c87b5=_0x4c87b5-0xe0;let _0xcb2930=_0x469427[_0x4c87b5];return _0xcb2930;},_0x4c87(_0x58db78,_0x3fa61d);}export async function SignMiniApp(_0x2e9d16){const _0x326440=_0x4c87,_0x7dacb6={'SsUTQ':_0x326440(0xf3),'tDFCg':_0x326440(0xec),'oCWfX':_0x326440(0xfe),'HpKyo':function(_0x15e743,_0x3187f6){return _0x15e743+_0x3187f6;},'sOsae':function(_0x40fd53,_0x30a91b){return _0x40fd53+_0x30a91b;},'PLcjX':function(_0x270089,_0x5dab18){return _0x270089+_0x5dab18;},'aykmh':_0x326440(0xfa),'cXvhQ':';\x20p_uin=o','FjBUg':function(_0x460c91,_0x247dab){return _0x460c91+_0x247dab;},'TkqEx':function(_0x2cbe23,_0x192edb){return _0x2cbe23+_0x192edb;},'AvmGn':_0x326440(0xf0),'EwsSP':function(_0x3dace0,_0x28fd7f){return _0x3dace0(_0x28fd7f);},'nJnYw':_0x326440(0xe3),'qwzTU':function(_0x4fb2e1,_0x4ec187,_0x4ea55d){return _0x4fb2e1(_0x4ec187,_0x4ea55d);},'iSoxg':_0x326440(0xeb)};let _0x3c1e1c={'app':_0x326440(0x106),'bizsrc':_0x7dacb6[_0x326440(0x10b)],'view':_0x7dacb6[_0x326440(0xe6)],'prompt':_0x2e9d16['prompt'],'config':{'type':_0x326440(0xf6),'forward':0x1,'autosize':0x0},'meta':{'miniapp':{'title':_0x2e9d16[_0x326440(0x107)],'preview':_0x2e9d16[_0x326440(0xfc)][_0x326440(0xfb)](/\\/g,_0x7dacb6[_0x326440(0xf8)]),'jumpUrl':_0x2e9d16['jumpUrl'][_0x326440(0xfb)](/\\/g,_0x7dacb6[_0x326440(0xf8)]),'tag':_0x2e9d16[_0x326440(0xe9)],'tagIcon':_0x2e9d16[_0x326440(0xe8)][_0x326440(0xfb)](/\\/g,_0x7dacb6[_0x326440(0xf8)]),'source':_0x2e9d16[_0x326440(0xf2)],'sourcelogo':_0x2e9d16[_0x326440(0xf5)][_0x326440(0xfb)](/\\/g,_0x7dacb6[_0x326440(0xf8)])}}};const _0x43f740=await NTQQUserApi['getSkey']();let _0x162301=await NTQQUserApi[_0x326440(0xea)]();const _0x5cca8f=WebApi[_0x326440(0xfd)](_0x162301[_0x326440(0x103)]),_0x3f889b=_0x7dacb6['HpKyo'](_0x7dacb6['sOsae'](_0x7dacb6['sOsae'](_0x7dacb6['HpKyo'](_0x7dacb6[_0x326440(0xed)](_0x7dacb6['sOsae'](_0x7dacb6[_0x326440(0x108)],_0x162301['p_skey']),_0x326440(0x105)),_0x162301['skey'])+_0x7dacb6['cXvhQ'],selfInfo[_0x326440(0xf1)]),_0x326440(0x101)),selfInfo['uin']);let _0x2c2205=_0x7dacb6[_0x326440(0xe2)](_0x7dacb6['TkqEx'](_0x326440(0x102),_0x5cca8f)+_0x7dacb6[_0x326440(0x100)],_0x7dacb6['EwsSP'](encodeURIComponent,JSON['stringify'](_0x3c1e1c))),_0x5e0c68='';try{let _0xfdf7eb=await RequestUtil[_0x326440(0xee)](_0x2c2205,_0x7dacb6['nJnYw'],undefined,{'Cookie':_0x3f889b});_0x5e0c68=_0xfdf7eb[_0x326440(0xe5)]['signed_ark'];}catch(_0x30d6fa){_0x7dacb6[_0x326440(0x104)](logDebug,_0x7dacb6[_0x326440(0xff)],_0x30d6fa);}return _0x5e0c68;}