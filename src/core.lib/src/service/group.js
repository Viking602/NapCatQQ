const _0x272d4d=_0x4570;(function(_0x290c04,_0x306c5d){const _0x3eaa04=_0x4570,_0x19ec71=_0x290c04();while(!![]){try{const _0x42fd61=-parseInt(_0x3eaa04(0x1c7))/0x1+-parseInt(_0x3eaa04(0x1cf))/0x2*(-parseInt(_0x3eaa04(0x1e1))/0x3)+parseInt(_0x3eaa04(0x1d4))/0x4*(-parseInt(_0x3eaa04(0x1d7))/0x5)+parseInt(_0x3eaa04(0x1d8))/0x6+parseInt(_0x3eaa04(0x1db))/0x7*(-parseInt(_0x3eaa04(0x1d2))/0x8)+-parseInt(_0x3eaa04(0x1d5))/0x9*(parseInt(_0x3eaa04(0x1ca))/0xa)+parseInt(_0x3eaa04(0x1d3))/0xb;if(_0x42fd61===_0x306c5d)break;else _0x19ec71['push'](_0x19ec71['shift']());}catch(_0x453497){_0x19ec71['push'](_0x19ec71['shift']());}}}(_0x1e83,0x82547));import{Wrapper as _0x301f0d}from'../qqnt';import{GroupListener}from'../qqnt/listeners';function _0x4570(_0x319576,_0xefa420){const _0x1e833a=_0x1e83();return _0x4570=function(_0x4570d4,_0x705044){_0x4570d4=_0x4570d4-0x1c6;let _0x3e8181=_0x1e833a[_0x4570d4];return _0x3e8181;},_0x4570(_0x319576,_0xefa420);}function _0x1e83(){const _0x34cbdb=['addKernelGroupListener','4926453nwgLmG','get','NodeIKernelGroupListener','assign','onGroupListUpdate','uin','1402659pkMwwD','CPHRt','has','kernelService','forEach','416430zBvuNE','addGroupListener','onMemberInfoChange','26710tGoMaX','listener','infos','set','getNextMemberList','2lPQbVC','groupMemberList_MainWindow','groupCode','8oCaCZw','11971124DgfcpI','499616Iejgjr','2007HzlDYA','map','10lsAdtJ','5661864hDPimK','split'];_0x1e83=function(){return _0x34cbdb;};return _0x1e83();}import{groupMembers,groups,uid2UinMap}from'@/common/data';export class NapCatCoreServiceGroup{[_0x272d4d(0x1e4)]=null;[_0x272d4d(0x1cb)];constructor(){const _0x44d1d2=_0x272d4d;this[_0x44d1d2(0x1cb)]=new GroupListener();}['init'](_0x2e5d77){const _0x28c4b1=_0x272d4d,_0x14c109={'CPHRt':function(_0x3e6451,_0x4bdfb9){return _0x3e6451!==_0x4bdfb9;}};if(_0x14c109[_0x28c4b1(0x1e2)](this['kernelService'],null))throw new Error('GroupService\x20already\x20initialized!');this[_0x28c4b1(0x1e4)]=_0x2e5d77,this[_0x28c4b1(0x1cb)][_0x28c4b1(0x1df)]=(_0x5875cb,_0xd8f4fa)=>{const _0x58b7c0=_0x28c4b1;_0xd8f4fa[_0x58b7c0(0x1d6)](_0x5a86be=>{const _0x30734d=_0x58b7c0,_0x15d0a4=groups[_0x30734d(0x1dc)](_0x5a86be[_0x30734d(0x1d1)]);if(_0x15d0a4)Object[_0x30734d(0x1de)](_0x15d0a4,_0x5a86be);else{groups['set'](_0x5a86be[_0x30734d(0x1d1)],_0x5a86be);const _0x36abff=this['kernelService']?.['createMemberListScene'](_0x5a86be[_0x30734d(0x1d1)],_0x30734d(0x1d0));this[_0x30734d(0x1e4)]?.[_0x30734d(0x1ce)](_0x36abff,undefined,0xbb8)['then'](_0x380338=>{});}});},this[_0x28c4b1(0x1cb)]['onMemberListChange']=_0x4df092=>{const _0x2e0dfb=_0x28c4b1,_0x58edf8=_0x4df092['sceneId'][_0x2e0dfb(0x1d9)]('_')[0x0];if(groupMembers[_0x2e0dfb(0x1e3)](_0x58edf8)){const _0x282b5f=groupMembers[_0x2e0dfb(0x1dc)](_0x58edf8);_0x4df092[_0x2e0dfb(0x1cc)]['forEach']((_0x519e85,_0x169583)=>{const _0x25dedd=_0x2e0dfb,_0x3f2d12=_0x282b5f[_0x25dedd(0x1dc)](_0x169583);_0x3f2d12?Object[_0x25dedd(0x1de)](_0x3f2d12,_0x519e85):_0x282b5f[_0x25dedd(0x1cd)](_0x169583,_0x519e85);});}else groupMembers['set'](_0x58edf8,_0x4df092[_0x2e0dfb(0x1cc)]);},this[_0x28c4b1(0x1cb)][_0x28c4b1(0x1c9)]=(_0x423889,_0x37480a,_0x4a53f9)=>{const _0x334f9d=_0x28c4b1;_0x4a53f9[_0x334f9d(0x1c6)]((_0x28f00a,_0x311f90)=>{const _0x1c972a=_0x334f9d;uid2UinMap[_0x311f90]=_0x28f00a[_0x1c972a(0x1e0)];});const _0x361ce8=groupMembers[_0x334f9d(0x1dc)](_0x423889);_0x361ce8?_0x4a53f9[_0x334f9d(0x1c6)]((_0x4b3d2a,_0x23af3f)=>{const _0x22c54c=_0x334f9d,_0x4e16de=_0x361ce8[_0x22c54c(0x1dc)](_0x23af3f);_0x4e16de?Object['assign'](_0x4e16de,_0x4b3d2a):_0x361ce8[_0x22c54c(0x1cd)](_0x23af3f,_0x4b3d2a);}):groupMembers[_0x334f9d(0x1cd)](_0x423889,_0x4a53f9);},this[_0x28c4b1(0x1e4)][_0x28c4b1(0x1da)](new _0x301f0d['NodeIKernelGroupListener'](this[_0x28c4b1(0x1cb)]));}[_0x272d4d(0x1c8)](_0xd6ab4f){const _0x2a6a66=_0x272d4d;return this[_0x2a6a66(0x1e4)]?.[_0x2a6a66(0x1da)](new _0x301f0d[(_0x2a6a66(0x1dd))](_0xd6ab4f));}}