window.__require=function e(o,t,c){function n(r,u){if(!t[r]){if(!o[r]){var s=r.split("/");if(s=s[s.length-1],!o[s]){var p="function"==typeof __require&&__require;if(!u&&p)return p(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+r+"'")}r=s}var a=t[r]={exports:{}};o[r][0].call(a.exports,function(e){return n(o[r][1][e]||e)},a,a.exports,e,o,t,c)}return t[r].exports}for(var i="function"==typeof __require&&__require,r=0;r<c.length;r++)n(c[r]);return n}({ball:[function(e,o){"use strict";cc._RF.push(o,"6c345aMtL9CKoE3N37CdKLJ","ball"),cc.Class({extends:cc.Component,properties:{goBtn:{default:null,type:cc.Button},pauseBtn:{default:null,type:cc.Button},blockGroup1:{default:null,type:cc.Node},blockGroup2:{default:null,type:cc.Node},blockGroup3:{default:null,type:cc.Node},blockGroup4:{default:null,type:cc.Node},blockGroup5:{default:null,type:cc.Node},blockGroup6:{default:null,type:cc.Node},blockGroup7:{default:null,type:cc.Node},blockGroup8:{default:null,type:cc.Node}},onLoad:function(){this.initVel=0,this.initPhysics(),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.boost,this),this.goBtn.node.on("click",this.start,this),cc.director.pause()},onDestroy:function(){cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.boost,this),this.goBtn.node.on("click",this.start,this)},initPhysics:function(){var e=cc.director.getPhysicsManager();e.enabled=!0,e.gravity=cc.v2(0,-100)},onBeginContact:function(e,o){var t=o.node.getComponent(cc.RigidBody);this.initVel?t.linearVelocity=cc.v2(0,this.initVel):this.initVel=t.linearVelocity.y},start:function(){cc.director.resume(),this.goBtn.node.x=-1e4,this.pauseBtn.node.x=884},boost:function(){this.initVel&&(this.node.getComponent(cc.RigidBody).linearVelocity=cc.v2(0,-1e4))}}),cc._RF.pop()},{}],"block - 001":[function(e,o,t){"use strict";cc._RF.push(o,"63e7anInoVHMavc/N/2nmwP","block - 001");var c,n=this&&this.__extends||(c=function(e,o){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])})(e,o)},function(e,o){function t(){this.constructor=e}c(e,o),e.prototype=null===o?Object.create(o):(t.prototype=o.prototype,new t)}),i=this&&this.__decorate||function(e,o,t,c){var n,i=arguments.length,r=i<3?o:null===c?c=Object.getOwnPropertyDescriptor(o,t):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,o,t,c);else for(var u=e.length-1;u>=0;u--)(n=e[u])&&(r=(i<3?n(r):i>3?n(o,t,r):n(o,t))||r);return i>3&&r&&Object.defineProperty(o,t,r),r};Object.defineProperty(t,"__esModule",{value:!0});var r=cc._decorator,u=r.ccclass,s=r.property,p=function(e){function o(){var o=null!==e&&e.apply(this,arguments)||this;return o.isStatic=!0,o.particleAreaNode=null,o.particleNode=null,o.originalX=0,o.s=null,o}return n(o,e),o.prototype.onLoad=function(){this.originalX=this.node.x},o.prototype.update=function(){this.node.x=this.originalX},o.prototype.onCollisionEnter=function(){this.initParticle(),this.playAudio(),this.node.parent.getComponent("blockgroup").count+=1,this.node.active=!1},o.prototype.playAudio=function(){this.s.play()},o.prototype.initParticle=function(){var e=cc.instantiate(this.particleNode);e.x=0,e.y=-170,this.particleAreaNode.addChild(e)},i([s],o.prototype,"isStatic",void 0),i([s(cc.Node)],o.prototype,"particleAreaNode",void 0),i([s(cc.Node)],o.prototype,"particleNode",void 0),i([s],o.prototype,"originalX",void 0),i([s(cc.AudioSource)],o.prototype,"s",void 0),i([u("block")],o)}(cc.Component);t.default=p,cc._RF.pop()},{}],blockgroup:[function(e,o,t){"use strict";cc._RF.push(o,"95345emS9RJ3pPqlqMdOvT8","blockgroup");var c,n=this&&this.__extends||(c=function(e,o){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])})(e,o)},function(e,o){function t(){this.constructor=e}c(e,o),e.prototype=null===o?Object.create(o):(t.prototype=o.prototype,new t)}),i=this&&this.__decorate||function(e,o,t,c){var n,i=arguments.length,r=i<3?o:null===c?c=Object.getOwnPropertyDescriptor(o,t):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,o,t,c);else for(var u=e.length-1;u>=0;u--)(n=e[u])&&(r=(i<3?n(r):i>3?n(o,t,r):n(o,t))||r);return i>3&&r&&Object.defineProperty(o,t,r),r};Object.defineProperty(t,"__esModule",{value:!0});var r=cc._decorator,u=r.ccclass,s=r.property,p={loop1:7,loop2:4,loop3:8,loop4:5},a={loop1:2400,loop2:1800,loop3:3200,loop4:2880},l={loop1:16,loop2:12,loop3:22,loop4:18},d=function(e){function o(){var o=null!==e&&e.apply(this,arguments)||this;return o.isStatic=!0,o.isEnd=!1,o.count=0,o.audioSource=null,o.audioSource2=null,o.metroNome=null,o.groupAreaNode=null,o.bg=null,o.star=null,o.starhide1=null,o.starhide2=null,o.starhide3=null,o.starhide4=null,o.starhide5=null,o.starhide6=null,o.starhide7=null,o.sceneName="",o}return n(o,e),o.prototype.onLoad=function(){cc.director.preloadScene(this.sceneName,this.preLoadSceneCallBack),this.hide1(),this.hide2(),this.hide3(),this.hide4(),this.hide5(),this.hide6(),this.hide7()},o.prototype.preLoadSceneCallBack=function(){console.log("\u9884\u52a0\u8f7d\u573a\u666fdone\u5b8c\u6210")},o.prototype.start=function(){this.isStatic=!1,console.log(this.node.childrenCount)},o.prototype.update=function(e){var o=a[cc.director.getScene().name]-236,t=-235-a[cc.director.getScene().name];this.isStatic||(this.node.x-=300*e,this.node.x<=-3e3&&1==this.isEnd&&(this.node.active=!1),this.node.x<=o&&0==this.audioSource.isPlaying&&(this.show(),this.starBlink(),this.audioSource.play()),this.node.x<=-235&&0==this.audioSource.isPlaying&&(this.starBlink(),this.audioSource.play()),this.node.getComponent("blockgroup").count!=this.node.childrenCount&&this.node.x<=t&&0==this.isEnd&&(console.log("again"),this.isEnd=!0,this.again()),this.node.getComponent("blockgroup").count==this.node.childrenCount&&this.node.x<=t&&0==this.isEnd&&(console.log("next"),this.isEnd=!0,this.next()))},o.prototype.again=function(){this.starBlink(),this.audioSource.play(),this.bg.getComponent("bg").initGroup(parseInt(this.node.name.replace(/[^0-9]/gi,"")))},o.prototype.next=function(){parseInt(this.node.name.replace(/[^0-9]/gi,""))===p[cc.director.getScene().name]?cc.director.loadScene(this.sceneName,this.loadSceneCallBack):(this.audioSource.mute=!0,this.audioSource2.play(),this.bg.getComponent("bg").initGroup(parseInt(this.node.name.replace(/[^0-9]/gi,""))+1))},o.prototype.loadSceneCallBack=function(){console.log("\u52a0\u8f7d\u573a\u666fdone\u5b8c\u6210")},o.prototype.starBlink=function(){var e=cc.blink(a[cc.director.getScene().name]/300,l[cc.director.getScene().name]);this.star.runAction(e)},o.prototype.hide1=function(){var e=cc.hide();this.starhide1.runAction(e)},o.prototype.hide2=function(){var e=cc.hide();this.starhide2.runAction(e)},o.prototype.hide3=function(){var e=cc.hide();this.starhide3.runAction(e)},o.prototype.hide4=function(){var e=cc.hide();this.starhide4.runAction(e)},o.prototype.hide5=function(){var e=cc.hide();this.starhide5.runAction(e)},o.prototype.hide6=function(){var e=cc.hide();this.starhide6.runAction(e)},o.prototype.hide7=function(){var e=cc.hide();this.starhide7.runAction(e)},o.prototype.show=function(){var e=cc.show();this.star.runAction(e)},i([s],o.prototype,"isStatic",void 0),i([s],o.prototype,"isEnd",void 0),i([s],o.prototype,"count",void 0),i([s(cc.AudioSource)],o.prototype,"audioSource",void 0),i([s(cc.AudioSource)],o.prototype,"audioSource2",void 0),i([s(cc.AudioSource)],o.prototype,"metroNome",void 0),i([s(cc.Node)],o.prototype,"groupAreaNode",void 0),i([s(cc.Node)],o.prototype,"bg",void 0),i([s(cc.Node)],o.prototype,"star",void 0),i([s(cc.Node)],o.prototype,"starhide1",void 0),i([s(cc.Node)],o.prototype,"starhide2",void 0),i([s(cc.Node)],o.prototype,"starhide3",void 0),i([s(cc.Node)],o.prototype,"starhide4",void 0),i([s(cc.Node)],o.prototype,"starhide5",void 0),i([s(cc.Node)],o.prototype,"starhide6",void 0),i([s(cc.Node)],o.prototype,"starhide7",void 0),i([s],o.prototype,"sceneName",void 0),i([u("blockgroup")],o)}(cc.Component);t.default=d,cc._RF.pop()},{}],button:[function(e,o,t){"use strict";cc._RF.push(o,"1e8cdUk7CtBwIB1hH92o1yA","button");var c,n=this&&this.__extends||(c=function(e,o){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])})(e,o)},function(e,o){function t(){this.constructor=e}c(e,o),e.prototype=null===o?Object.create(o):(t.prototype=o.prototype,new t)}),i=this&&this.__decorate||function(e,o,t,c){var n,i=arguments.length,r=i<3?o:null===c?c=Object.getOwnPropertyDescriptor(o,t):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,o,t,c);else for(var u=e.length-1;u>=0;u--)(n=e[u])&&(r=(i<3?n(r):i>3?n(o,t,r):n(o,t))||r);return i>3&&r&&Object.defineProperty(o,t,r),r};Object.defineProperty(t,"__esModule",{value:!0});var r=cc._decorator,u=r.ccclass,s=r.property,p=function(e){function o(){var o=null!==e&&e.apply(this,arguments)||this;return o.restartScene="",o.menuScene="",o}return n(o,e),o.prototype.onLoad=function(){cc.director.preloadScene(this.restartScene),this.preLoadSceneCallBack("restart"),cc.director.preloadScene(this.menuScene),this.preLoadSceneCallBack("menu")},o.prototype.preLoadSceneCallBack=function(e){console.log("\u9884\u52a0\u8f7d\u573a\u666f\u5b8c\u6210",e)},o.prototype.btnRestartClick=function(){cc.director.loadScene(this.restartScene),this.loadSceneCallBack("restart")},o.prototype.btnMenuClick=function(){cc.director.loadScene(this.menuScene),this.loadSceneCallBack("menu")},o.prototype.loadSceneCallBack=function(e){console.log("\u52a0\u8f7d\u573a\u666f\u5b8c\u6210",e)},i([s],o.prototype,"restartScene",void 0),i([s],o.prototype,"menuScene",void 0),i([u],o)}(cc.Component);t.default=p,cc._RF.pop()},{}],choose:[function(e,o,t){"use strict";cc._RF.push(o,"48010N//55KRKjap+r7ltsd","choose");var c,n=this&&this.__extends||(c=function(e,o){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])})(e,o)},function(e,o){function t(){this.constructor=e}c(e,o),e.prototype=null===o?Object.create(o):(t.prototype=o.prototype,new t)}),i=this&&this.__decorate||function(e,o,t,c){var n,i=arguments.length,r=i<3?o:null===c?c=Object.getOwnPropertyDescriptor(o,t):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,o,t,c);else for(var u=e.length-1;u>=0;u--)(n=e[u])&&(r=(i<3?n(r):i>3?n(o,t,r):n(o,t))||r);return i>3&&r&&Object.defineProperty(o,t,r),r};Object.defineProperty(t,"__esModule",{value:!0});var r=cc._decorator,u=r.ccclass,s=r.property,p=function(e){function o(){var o=null!==e&&e.apply(this,arguments)||this;return o.sceneName1="",o.sceneName2="",o.sceneName3="",o.sceneName4="",o}return n(o,e),o.prototype.onLoad=function(){cc.director.preloadScene(this.sceneName1,function(){cc.log("\u9884\u52a0\u8f7dloop1\u5b8c\u6210")}),cc.director.preloadScene(this.sceneName2,function(){cc.log("\u9884\u52a0\u8f7dloop2\u5b8c\u6210")}),cc.director.preloadScene(this.sceneName3,function(){cc.log("\u9884\u52a0\u8f7dloop3\u5b8c\u6210")}),cc.director.preloadScene(this.sceneName4,function(){cc.log("\u9884\u52a0\u8f7dloop4\u5b8c\u6210")})},o.prototype.btn1Click=function(){cc.director.loadScene(this.sceneName1),console.log("\u52a0\u8f7dloop1\u5b8c\u6210")},o.prototype.btn2Click=function(){cc.director.loadScene(this.sceneName2),console.log("\u52a0\u8f7dloop2\u5b8c\u6210")},o.prototype.btn3Click=function(){cc.director.loadScene(this.sceneName3),console.log("\u52a0\u8f7dloop3\u5b8c\u6210")},o.prototype.btn4Click=function(){cc.director.loadScene(this.sceneName4),console.log("\u52a0\u8f7dloop4\u5b8c\u6210")},i([s],o.prototype,"sceneName1",void 0),i([s],o.prototype,"sceneName2",void 0),i([s],o.prototype,"sceneName3",void 0),i([s],o.prototype,"sceneName4",void 0),i([u],o)}(cc.Component);t.default=p,cc._RF.pop()},{}],collide:[function(e,o){"use strict";cc._RF.push(o,"c4b2eh+UsFATbsl2uA/V7Yo","collide"),cc.Class({extends:cc.Component,properties:{is_enable:!0,is_debug:!1},start:function(){var e=cc.director.getCollisionManager();e.enabled=!0,e.enabledDebugDraw=!1,e.enabledDrawBoundingBox=!1}}),cc._RF.pop()},{}],game:[function(e,o){"use strict";cc._RF.push(o,"99377XlpdBIY5/qj3yqQ0uu","game");var t={loop1:2400,loop2:1800,loop3:3200,loop4:2880};cc.Class({name:"bg",extends:cc.Component,properties:{groupAreaNode:cc.Node,groupNode1:cc.Node,groupNode2:cc.Node,groupNode3:cc.Node,groupNode4:cc.Node,groupNode5:cc.Node,groupNode6:cc.Node,groupNode7:cc.Node,groupNode8:cc.Node,metroNome:{type:cc.AudioSource,default:null,_preload:!0,isPlaying:!1}},onLoad:function(){console.log(cc.director.getScene().name),this.initGroup()},initGroup:function(e){void 0===e&&(e=1);var o=this["groupNode"+e],c=t[cc.director.getScene().name]-236,n=cc.instantiate(o);n.active=!0,n.x=c,n.y=o.y,n.getComponent("blockgroup").isStatic=!1,this.groupAreaNode.addChild(n)}}),cc._RF.pop()},{}],menu:[function(e,o,t){"use strict";cc._RF.push(o,"254den8+C1E/63enu0v+AfG","menu");var c,n=this&&this.__extends||(c=function(e,o){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])})(e,o)},function(e,o){function t(){this.constructor=e}c(e,o),e.prototype=null===o?Object.create(o):(t.prototype=o.prototype,new t)}),i=this&&this.__decorate||function(e,o,t,c){var n,i=arguments.length,r=i<3?o:null===c?c=Object.getOwnPropertyDescriptor(o,t):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,o,t,c);else for(var u=e.length-1;u>=0;u--)(n=e[u])&&(r=(i<3?n(r):i>3?n(o,t,r):n(o,t))||r);return i>3&&r&&Object.defineProperty(o,t,r),r};Object.defineProperty(t,"__esModule",{value:!0});var r=cc._decorator,u=r.ccclass,s=r.property,p=function(e){function o(){var o=null!==e&&e.apply(this,arguments)||this;return o.sceneName="",o}return n(o,e),o.prototype.onLoad=function(){cc.director.preloadScene(this.sceneName,this.preLoadSceneCallBack)},o.prototype.preLoadSceneCallBack=function(){console.log("\u9884\u52a0\u8f7d\u573a\u666f\u5b8c\u6210")},o.prototype.btnStartClick=function(){cc.director.loadScene(this.sceneName,this.loadSceneCallBack)},o.prototype.loadSceneCallBack=function(){console.log("\u52a0\u8f7d\u573a\u666f\u5b8c\u6210")},o.prototype.btnQuitClick=function(){cc.game.end()},i([s],o.prototype,"sceneName",void 0),i([u],o)}(cc.Component);t.default=p,cc._RF.pop()},{}],pause:[function(e,o){"use strict";cc._RF.push(o,"f3952BuXQhN7YOyjv/rquhe","pause"),cc.Class({extends:cc.Component,properties:{pauseBtn:cc.Button,defaultSprite:cc.SpriteFrame,pressedSprite:cc.SpriteFrame,pauseMenu:{default:null,type:cc.Node},blockGroup1:{default:null,type:cc.Node},blockGroup2:{default:null,type:cc.Node},blockGroup3:{default:null,type:cc.Node},blockGroup4:{default:null,type:cc.Node},blockGroup5:{default:null,type:cc.Node},blockGroup6:{default:null,type:cc.Node},blockGroup7:{default:null,type:cc.Node},blockGroup8:{default:null,type:cc.Node}},onLoad:function(){console.log(this.pauseMenu.x),this.pauseBtn.node.x=1e4,this.pauseMenu.x=1e4,this.isButtonPressed=!1,this.pauseBtn.normalSprite=this.defaultSprite,this.pauseBtn.node.on("click",this.onButtonClicked,this);var e=this.blockGroup1,o=this.blockGroup2,t=this.blockGroup3,c=this.blockGroup4,n=this.blockGroup5,i=this.blockGroup6,r=this.blockGroup7,u=this.blockGroup8;this.audioSource1=e.getComponent("blockgroup").audioSource,this.audioSource12=e.getComponent("blockgroup").audioSource2,this.audioSource2=o.getComponent("blockgroup").audioSource,this.audioSource22=o.getComponent("blockgroup").audioSource2,this.audioSource3=t.getComponent("blockgroup").audioSource,this.audioSource32=t.getComponent("blockgroup").audioSource2,this.audioSource4=c.getComponent("blockgroup").audioSource,this.audioSource42=c.getComponent("blockgroup").audioSource2,this.audioSource5=n.getComponent("blockgroup").audioSource,this.audioSource52=n.getComponent("blockgroup").audioSource2,this.audioSource6=i.getComponent("blockgroup").audioSource,this.audioSource62=i.getComponent("blockgroup").audioSource2,this.audioSource7=r.getComponent("blockgroup").audioSource,this.audioSource72=r.getComponent("blockgroup").audioSource2,this.audioSource8=u.getComponent("blockgroup").audioSource,this.audioSource82=u.getComponent("blockgroup").audioSource2},onButtonClicked:function(){this.isButtonPressed=!this.isButtonPressed,this.isButtonPressed?(this.pauseBtn.normalSprite=this.pressedSprite,this.pauseMenu.x=0,console.log(this.pauseMenu,this.pauseMenu.x,this.pauseMenu.y),this.audioSource1.pause(),this.audioSource2.pause(),this.audioSource3.pause(),this.audioSource4.pause(),this.audioSource5.pause(),this.audioSource6.pause(),this.audioSource7.pause(),this.audioSource8.pause(),this.audioSource12.pause(),this.audioSource22.pause(),this.audioSource32.pause(),this.audioSource42.pause(),this.audioSource52.pause(),this.audioSource62.pause(),this.audioSource72.pause(),this.audioSource82.pause(),cc.director.pause()):(this.pauseBtn.normalSprite=this.defaultSprite,this.pauseMenu.x=1e4,console.log(this.pauseMenu,this.pauseMenu.x,this.pauseMenu.y),this.audioSource1.resume(),this.audioSource2.resume(),this.audioSource3.resume(),this.audioSource4.resume(),this.audioSource5.resume(),this.audioSource6.resume(),this.audioSource7.resume(),this.audioSource8.resume(),this.audioSource12.resume(),this.audioSource22.resume(),this.audioSource32.resume(),this.audioSource42.resume(),this.audioSource52.resume(),this.audioSource62.resume(),this.audioSource72.resume(),this.audioSource82.resume(),cc.director.resume())}}),cc._RF.pop()},{}]},{},["ball","block - 001","blockgroup","button","choose","collide","game","menu","pause"]);