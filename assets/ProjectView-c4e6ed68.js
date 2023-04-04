import{d as A,c as o,F as u9,r as U,a as W,b as j,w as G,o as F9,e as R9,T as J,f as q9,i as Z9,g as U9,n as p9,_ as N,h as B,j as H,k as O,l as z,m as _9,p as w9,q as W9,s as G9,t as J9}from"./index-5103c1f4.js";function M(e,s){s===void 0&&(s={});var n=s.insertAt;if(e&&typeof document<"u"){var i=document.head||document.getElementsByTagName("head")[0],b=document.createElement("style");b.type="text/css",n==="top"&&i.firstChild?i.insertBefore(b,i.firstChild):i.appendChild(b),b.styleSheet?b.styleSheet.cssText=e:b.appendChild(document.createTextNode(e))}}M(".vel-fade-enter-active,.vel-fade-leave-active{-webkit-transition:all .3s ease;transition:all .3s ease}.vel-fade-enter-from,.vel-fade-leave-to{opacity:0}.vel-img-swiper{display:block;position:relative}.vel-modal{background:rgba(0,0,0,.5);bottom:0;left:0;margin:0;position:fixed;right:0;top:0;z-index:9998}.vel-img-wrapper{left:50%;margin:0;position:absolute;top:50%;-webkit-transform:translate(-50% -50%);transform:translate(-50% -50%);-webkit-transition:.3s linear;transition:.3s linear;will-change:transform opacity}.vel-img,.vel-img-wrapper{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vel-img{background-color:rgba(0,0,0,.7);-webkit-box-shadow:0 5px 20px 2px rgba(0,0,0,.7);box-shadow:0 5px 20px 2px rgba(0,0,0,.7);display:block;max-height:80vh;max-width:80vw;position:relative;-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out}@media (max-width:750px){.vel-img{max-height:95vh;max-width:85vw}}.vel-btns-wrapper{position:static}.vel-btns-wrapper .btn__close,.vel-btns-wrapper .btn__next,.vel-btns-wrapper .btn__prev{-webkit-tap-highlight-color:transparent;color:#fff;cursor:pointer;font-size:32px;opacity:.6;outline:none;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:.15s linear;transition:.15s linear;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vel-btns-wrapper .btn__close:hover,.vel-btns-wrapper .btn__next:hover,.vel-btns-wrapper .btn__prev:hover{opacity:1}.vel-btns-wrapper .btn__close.disable,.vel-btns-wrapper .btn__close.disable:hover,.vel-btns-wrapper .btn__next.disable,.vel-btns-wrapper .btn__next.disable:hover,.vel-btns-wrapper .btn__prev.disable,.vel-btns-wrapper .btn__prev.disable:hover{cursor:default;opacity:.2}.vel-btns-wrapper .btn__next{right:12px}.vel-btns-wrapper .btn__prev{left:12px}.vel-btns-wrapper .btn__close{right:10px;top:24px}@media (max-width:750px){.vel-btns-wrapper .btn__next,.vel-btns-wrapper .btn__prev{font-size:20px}.vel-btns-wrapper .btn__close{font-size:24px}.vel-btns-wrapper .btn__next{right:4px}.vel-btns-wrapper .btn__prev{left:4px}}.vel-modal.is-rtl .vel-btns-wrapper .btn__next{left:12px;right:auto}.vel-modal.is-rtl .vel-btns-wrapper .btn__prev{left:auto;right:12px}@media (max-width:750px){.vel-modal.is-rtl .vel-btns-wrapper .btn__next{left:4px;right:auto}.vel-modal.is-rtl .vel-btns-wrapper .btn__prev{left:auto;right:4px}}.vel-modal.is-rtl .vel-img-title{direction:rtl}");M('.vel-loading{left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vel-loading .ring{display:inline-block;height:64px;width:64px}.vel-loading .ring:after{-webkit-animation:ring 1.2s linear infinite;animation:ring 1.2s linear infinite;border-color:hsla(0,0%,100%,.7) transparent;border-radius:50%;border-style:solid;border-width:5px;content:" ";display:block;height:46px;margin:1px;width:46px}@-webkit-keyframes ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}');M(".vel-on-error{left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vel-on-error .icon{color:#aaa;font-size:80px}");M(".vel-img-title{bottom:60px;color:#ccc;cursor:default;font-size:12px;left:50%;line-height:1;max-width:80%;opacity:.8;overflow:hidden;position:absolute;text-align:center;text-overflow:ellipsis;-webkit-transform:translate(-50%);transform:translate(-50%);-webkit-transition:opacity .15s;transition:opacity .15s;white-space:nowrap}.vel-img-title:hover{opacity:1}");M(".vel-icon{fill:currentColor;height:1em;overflow:hidden;vertical-align:-.15em;width:1em}");M(".vel-toolbar{border-radius:4px;bottom:8px;display:-webkit-box;display:-ms-flexbox;display:flex;left:50%;opacity:.9;overflow:hidden;padding:0;position:absolute;-webkit-transform:translate(-50%);transform:translate(-50%)}.vel-toolbar,.vel-toolbar .toolbar-btn{background-color:#2d2d2d;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vel-toolbar .toolbar-btn{-ms-flex-negative:0;-webkit-tap-highlight-color:transparent;color:#fff;cursor:pointer;flex-shrink:0;font-size:20px;outline:none;padding:6px 10px}.vel-toolbar .toolbar-btn:active,.vel-toolbar .toolbar-btn:hover{background-color:#3d3d3d}");const h="vel",_=A({name:"SvgIcon",props:{type:{type:String,default:""}},setup:e=>()=>o("svg",{class:`${h}-icon icon`,"aria-hidden":"true"},[o("use",{"xlink:href":`#icon-${e.type}`},null)])}),I=typeof window<"u",k=()=>{};let x9=!1;if(I)try{const e={};Object.defineProperty(e,"passive",{get(){x9=!0}}),window.addEventListener("test-passive",k,e)}catch{}const m9=function(e,s,n){let i=arguments.length>3&&arguments[3]!==void 0&&arguments[3];I&&e.addEventListener(s,n,!!x9&&{capture:!1,passive:i})},b9=(e,s,n)=>{I&&e.removeEventListener(s,n)},K9=e=>{e.preventDefault()},Q9=Object.prototype.toString,t9=e=>s=>Q9.call(s).slice(8,-1)===e,ee=e=>!!e&&t9("Object")(e),g9=e=>!!e&&t9("String")(e);function te(e){return e!=null}const oe=A({name:"Toolbar",props:{zoomIn:{type:Function,default:k},zoomOut:{type:Function,default:k},rotateLeft:{type:Function,default:k},rotateRight:{type:Function,default:k},resize:{type:Function,default:k},rotateDisabled:{type:Boolean,default:!1},zoomDisabled:{type:Boolean,default:!1}},setup:e=>()=>o("div",{class:`${h}-toolbar`},[!e.zoomDisabled&&o(u9,null,[o("div",{role:"button","aria-label":"zoom in button",class:"toolbar-btn toolbar-btn__zoomin",onClick:e.zoomIn},[o(_,{type:"zoomin"},null)]),o("div",{role:"button","aria-label":"zoom out button",class:"toolbar-btn toolbar-btn__zoomout",onClick:e.zoomOut},[o(_,{type:"zoomout"},null)])]),o("div",{role:"button","aria-label":"resize image button",class:"toolbar-btn toolbar-btn__resize",onClick:e.resize},[o(_,{type:"resize"},null)]),!e.rotateDisabled&&o(u9,null,[o("div",{role:"button","aria-label":"image rotate left button",class:"toolbar-btn toolbar-btn__rotate",onClick:e.rotateLeft},[o(_,{type:"rotate-left"},null)]),o("div",{role:"button","aria-label":"image rotate right button",class:"toolbar-btn toolbar-btn__rotate",onClick:e.rotateRight},[o(_,{type:"rotate-right"},null)])])])}),le=()=>o("div",{class:`${h}-loading`},[o("div",{class:"ring"},null)]),ne=()=>o("div",{class:`${h}-on-error`},[o("div",{class:"ring"},null),o(_,{type:"img-broken"},null)]),ae=(e,s)=>{let{slots:n}=s;return o("div",{class:`${h}-img-title`},[n.default?n.default():""])},ie=A({name:"DefaultIcons",setup:()=>()=>o("svg",{"aria-hidden":!0,style:"position: absolute; width: 0; height: 0; overflow: hidden; visibility: hidden;"},[o("symbol",{id:"icon-rotate-right",viewBox:"0 0 1024 1024"},[o("path",{d:"M275.199914 450.496179v20.031994c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399a120.255962 120.255962 0 0 1-72.991978-24.895992c-21.503993-15.839995-35.359989-38.751988-41.567987-68.735979h60.831981c9.247997 23.007993 27.167992 34.495989 53.759983 34.49599 37.535988-0.384 56.863982-21.407993 57.983982-63.071981v-38.751988c-28.095991 8.863997-54.303983 13.119996-78.623975 12.735996a91.263971 91.263971 0 0 1-68.447979-27.711991c-18.847994-18.303994-28.095991-47.231985-27.711991-86.847973z m62.55998 24.863992c7.103998 24.799992 25.215992 37.343988 54.271983 37.663989 27.103992-0.288 44.703986-11.327996 52.831984-33.11999 3.135999-8.383997 2.655999-29.599991-1.28-38.559988-8.607997-19.615994-25.791992-29.695991-51.551984-30.20799-28.383991 0.576-46.303986 12.639996-53.759983 36.159988a58.719982 58.719982 0 0 0-0.512 28.063991z m390.335878 115.711964v-116.895963c-1.12-41.311987-20.447994-62.335981-57.983981-63.07198-37.727988 0.768-56.959982 21.791993-57.695982 63.07198v116.895963c0.768 41.663987 19.999994 62.68798 57.695982 63.071981 37.535988-0.384 56.863982-21.407993 57.983981-63.071981z m-174.815945 3.391999v-123.935961c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399-31.10399-0.384-57.887982-10.751997-80.319975-31.10399-23.935993-20.543994-36.127989-49.791984-36.479989-87.679973z m282.559912-479.07185A509.887841 509.887841 0 0 0 511.99984 0.00032C229.215928 0.00032 0 229.216248 0 512.00016s229.215928 511.99984 511.99984 511.99984 511.99984-229.215928 511.99984-511.99984c0-3.743999-0.032-7.455998-0.128-11.167997-1.631999-11.295996-8.159997-27.103992-31.87199-27.103991-27.487991 0-31.67999 21.247993-32.03199 32.06399l0.032 4.127999a30.62399 30.62399 0 0 0 0.16 2.079999H959.9997c0 247.423923-200.575937 447.99986-447.99986 447.99986S63.99998 759.424083 63.99998 512.00016 264.575917 64.0003 511.99984 64.0003a446.079861 446.079861 0 0 1 277.439913 96.22397l-94.91197 91.679971c-25.439992 24.607992-17.439995 44.991986 17.887994 45.599986l188.031942 3.295999a64.31998 64.31998 0 0 0 65.055979-62.84798l3.295999-188.127942C969.407697 15.040315 949.311703 5.792318 923.871711 30.368311l-87.999972 85.023973z",fill:""},null)]),o("symbol",{id:"icon-rotate-left",viewBox:"0 0 1024 1024"},[o("path",{d:"M275.199914 450.496179v20.031994c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399a120.255962 120.255962 0 0 1-72.991978-24.895992c-21.503993-15.839995-35.359989-38.751988-41.567987-68.735979h60.831981c9.247997 23.007993 27.167992 34.495989 53.759983 34.49599 37.535988-0.384 56.863982-21.407993 57.983982-63.071981v-38.751988c-28.095991 8.863997-54.303983 13.119996-78.623975 12.735996a91.263971 91.263971 0 0 1-68.447979-27.711991c-18.847994-18.303994-28.095991-47.231985-27.711991-86.847973z m62.55998 24.863992c7.103998 24.799992 25.215992 37.343988 54.271983 37.663989 27.103992-0.288 44.703986-11.327996 52.831984-33.11999 3.135999-8.383997 2.655999-29.599991-1.28-38.559988-8.607997-19.615994-25.791992-29.695991-51.551984-30.20799-28.383991 0.576-46.303986 12.639996-53.759983 36.159988a58.719982 58.719982 0 0 0-0.512 28.063991z m390.335878 115.711964v-116.895963c-1.12-41.311987-20.447994-62.335981-57.983981-63.07198-37.727988 0.768-56.959982 21.791993-57.695982 63.07198v116.895963c0.768 41.663987 19.999994 62.68798 57.695982 63.071981 37.535988-0.384 56.863982-21.407993 57.983981-63.071981z m-174.815945 3.391999v-123.935961c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399-31.10399-0.384-57.887982-10.751997-80.319975-31.10399-23.935993-20.543994-36.127989-49.791984-36.479989-87.679973zM188.159941 115.392284A509.887841 509.887841 0 0 1 511.99984 0.00032c282.783912 0 511.99984 229.215928 511.99984 511.99984s-229.215928 511.99984-511.99984 511.99984S0 794.784072 0 512.00016c0-3.743999 0.032-7.455998 0.128-11.167997 1.631999-11.295996 8.159997-27.103992 31.87199-27.103991 27.487991 0 31.67999 21.247993 32.03199 32.06399L63.99998 509.920161a30.62399 30.62399 0 0 1-0.16 2.079999H63.99998c0 247.423923 200.575937 447.99986 447.99986 447.99986s447.99986-200.575937 447.99986-447.99986S759.423763 64.0003 511.99984 64.0003a446.079861 446.079861 0 0 0-277.439913 96.22397l94.91197 91.679971c25.439992 24.607992 17.439995 44.991986-17.887994 45.599986L123.551961 300.800226a64.31998 64.31998 0 0 1-65.055979-62.84798l-3.295999-188.127942C54.591983 15.040315 74.687977 5.792318 100.127969 30.368311l87.999972 85.023973z",fill:""},null)]),o("symbol",{id:"icon-resize",viewBox:"0 0 1024 1024"},[o("path",{d:"M456.036919 791.8108 270.553461 791.8108 460.818829 601.572038l-39.593763-39.567157L231.314785 751.915162l0.873903-183.953615c0-15.465227-12.515035-27.981285-27.981285-27.981285s-27.981285 12.515035-27.981285 27.981285l0 251.829516c0 8.3072 3.415796 14.975063 8.826016 19.564591 5.082762 5.192256 12.132318 8.416693 19.947308 8.416693l251.036453 0c15.46625 0 27.981285-12.514012 27.981285-27.981285C484.018204 804.325835 471.504192 791.8108 456.036919 791.8108zM838.945819 184.644347c-5.082762-5.191232-12.132318-8.416693-19.947308-8.416693L567.961034 176.227654c-15.46625 0-27.981285 12.515035-27.981285 27.981285 0 15.46625 12.514012 27.981285 27.981285 27.981285l185.483458 0L563.206754 422.427962l39.567157 39.567157 189.910281-189.910281-0.873903 183.953615c0 15.46625 12.514012 27.981285 27.981285 27.981285s27.981285-12.514012 27.981285-27.981285L847.772858 204.208938C847.771835 195.902762 844.356039 189.234899 838.945819 184.644347zM847.771835 64.303538 176.227142 64.303538c-61.809741 0-111.924115 50.115398-111.924115 111.924115l0 671.544693c0 61.809741 50.114374 111.924115 111.924115 111.924115l671.544693 0c61.809741 0 111.924115-50.114374 111.924115-111.924115l0-671.544693C959.69595 114.418936 909.581576 64.303538 847.771835 64.303538zM903.733381 847.772346c0 30.878265-25.056676 55.962569-55.962569 55.962569L176.227142 903.734916c-30.90487 0-55.962569-25.084305-55.962569-55.962569l0-671.544693c0-30.9325 25.056676-55.962569 55.962569-55.962569l671.544693 0c30.90487 0 55.962569 25.03007 55.962569 55.962569L903.734404 847.772346z"},null)]),o("symbol",{id:"icon-img-broken",viewBox:"0 0 1024 1024"},[o("path",{d:"M810.666667 128H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333333 85.333333h597.333334c46.933333 0 85.333333-38.4 85.333333-85.333333V213.333333c0-46.933333-38.4-85.333333-85.333333-85.333333z m0 682.666667H213.333333v-195.413334l42.24 42.24 170.666667-170.666666 170.666667 170.666666 170.666666-170.24L810.666667 530.346667V810.666667z m0-401.493334l-43.093334-43.093333-170.666666 171.093333-170.666667-170.666666-170.666667 170.666666-42.24-42.666666V213.333333h597.333334v195.84z"},null)]),o("symbol",{id:"icon-prev",viewBox:"0 0 1024 1024"},[o("path",{d:"M784.652701 955.6957 346.601985 517.644983c-2.822492-2.822492-2.822492-7.902977 0-11.289967l439.179713-439.179713c6.77398-6.77398 10.725469-16.370452 10.725469-25.966924L796.507166 36.692393c0-20.32194-16.370452-36.692393-36.692393-36.692393l-4.515987 0c-9.596472 0-19.192944 3.951488-25.966924 10.725469L250.072767 489.420066c-12.418964 12.418964-12.418964 32.740904 0 45.159868l477.565601 477.565601c7.338479 7.338479 17.499449 11.854465 28.224917 11.854465l0 0c22.015436 0 40.079383-18.063947 40.079383-40.079383l0 0C796.507166 973.759647 791.99118 963.598677 784.652701 955.6957z"},null)]),o("symbol",{id:"icon-next",viewBox:"0 0 1024 1024"},[o("path",{d:"M246.121279 955.6957l438.050717-438.050717c2.822492-2.822492 2.822492-7.902977 0-11.289967L244.992282 67.175303c-6.77398-6.77398-10.725469-16.370452-10.725469-25.966924L234.266814 36.692393C234.266814 16.370452 250.637266 0 270.959206 0l4.515987 0c9.596472 0 19.192944 3.951488 25.966924 10.725469l478.694598 478.694598c12.418964 12.418964 12.418964 32.740904 0 45.159868l-477.565601 477.565601c-7.338479 7.338479-17.499449 11.854465-28.224917 11.854465l0 0c-22.015436 0-40.079383-18.063947-40.079383-40.079383l0 0C234.266814 973.759647 238.7828 963.598677 246.121279 955.6957z"},null)]),o("symbol",{id:"icon-zoomin",viewBox:"0 0 1024 1024"},[o("path",{d:"M725.504 652.864c46.4-61.44 71.744-136.448 71.744-218.752C797.248 230.464 632.768 64 430.656 64S64 230.464 64 434.112C64 639.36 228.48 805.76 430.656 805.76c86.656 0 164.48-30.144 227.52-81.088L889.984 960 960 891.264l-234.496-238.4z m-294.848 67.456c-155.776 0-282.624-128.896-282.624-286.208s126.848-286.208 282.624-286.208 282.624 128.896 282.624 286.208-126.912 286.208-282.624 286.208z"},null),o("path",{d:"M235.712 369.92h390.72v127.104H235.712z"},null),o("path",{d:"M367.488 238.144h127.104v390.72H367.488z"},null)]),o("symbol",{id:"icon-close",viewBox:"0 0 1024 1024"},[o("path",{d:"M570.24 512l259.2 259.2-58.88 58.24L512 570.24l-261.12 261.12-58.24-58.24L453.76 512 194.56 252.8l58.24-58.24L512 453.76l261.12-261.12 58.24 58.24z"},null)]),o("symbol",{id:"icon-zoomout",viewBox:"0 0 1024 1024"},[o("path",{d:"M725.504 652.864c46.4-61.44 71.744-136.448 71.744-218.752C797.248 230.464 632.768 64 430.656 64S64 230.464 64 434.112C64 639.36 228.48 805.76 430.656 805.76c86.656 0 164.48-30.144 227.52-81.088L889.984 960 960 891.264l-234.496-238.4z m-294.848 67.456c-155.776 0-282.624-128.896-282.624-286.208s126.848-286.208 282.624-286.208 282.624 128.896 282.624 286.208-126.912 286.208-282.624 286.208z"},null),o("path",{d:"M235.712 369.92h390.72v127.104H235.712z"},null)])])}),T=I?window:global;let v9=Date.now();function re(e){const s=Date.now(),n=Math.max(0,16-(s-v9)),i=setTimeout(e,n);return v9=s+n,i}function K(e){return(T.requestAnimationFrame||re).call(T,e)}function f9(e){(T.cancelAnimationFrame||T.clearTimeout).call(T,e)}function h9(e,s){const n=e.clientX-s.clientX,i=e.clientY-s.clientY;return Math.sqrt(n*n+i*i)}function Q(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Z9(e)}var e9=A({name:"VueEasyLightbox",props:{imgs:{type:[Array,String],default:()=>""},visible:{type:Boolean,default:!1},index:{type:Number,default:0},scrollDisabled:{type:Boolean,default:!0},escDisabled:{type:Boolean,default:!1},moveDisabled:{type:Boolean,default:!1},titleDisabled:{type:Boolean,default:!1},maskClosable:{type:Boolean,default:!0},teleport:{type:[String,Object],default:null},swipeTolerance:{type:Number,default:50},loop:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1},zoomScale:{type:Number,default:.12},maxZoom:{type:Number,default:3},minZoom:{type:Number,default:.1},rotateDisabled:{type:Boolean,default:!1},zoomDisabled:{type:Boolean,default:!1}},emits:{hide:()=>!0,"on-error":e=>!0,"on-prev":(e,s)=>!0,"on-next":(e,s)=>!0,"on-prev-click":(e,s)=>!0,"on-next-click":(e,s)=>!0,"on-index-change":(e,s)=>!0,"on-rotate":e=>!0},setup(e,s){let{emit:n,slots:i}=s;const{imgRef:b,imgState:u,setImgSize:w}=(()=>{const t=U(),l=W({width:0,height:0,maxScale:1});return{imgRef:t,imgState:l,setImgSize:()=>{if(t.value){const{width:c,height:m,naturalWidth:v}=t.value;l.maxScale=v/c,l.width=c,l.height=m}}}})(),p=U(0),Y=U(""),a=W({scale:1,lastScale:1,rotateDeg:0,top:0,left:0,initX:0,initY:0,lastX:0,lastY:0,touches:[]}),r=W({loadError:!1,loading:!1,dragging:!1,gesturing:!1,wheeling:!1}),g=j(()=>{return t=e.imgs,t9("Array")(t)?e.imgs.map(l=>typeof l=="string"?{src:l}:function(c){return ee(c)&&g9(c.src)}(l)?l:void 0).filter(te):g9(e.imgs)?[{src:e.imgs}]:[];var t}),o9=j(()=>{var l;return(l=g.value[p.value])==null?void 0:l.src}),l9=j(()=>{var t;return(t=g.value[p.value])==null?void 0:t.title}),y9=j(()=>{var t;return(t=g.value[p.value])==null?void 0:t.alt}),k9=j(()=>({cursor:r.loadError?"default":e.moveDisabled?r.dragging?"grabbing":"grab":"move",top:`calc(50% + ${a.top}px)`,left:`calc(50% + ${a.left}px)`,transition:r.dragging||r.gesturing?"none":"",transform:`translate(-50%, -50%) scale(${a.scale}) rotate(${a.rotateDeg}deg)`})),$=()=>{n("hide")},n9=()=>{a.scale=1,a.lastScale=1,a.rotateDeg=0,a.top=0,a.left=0,r.loadError=!1,r.dragging=!1,r.loading=!0},P=(t,l)=>{const c=p.value;n9(),p.value=t,g.value[p.value]===g.value[t]&&p9(()=>{r.loading=!1}),e.visible&&c!==t&&(l&&l(c,t),n("on-index-change",c,t))},D=()=>{const t=p.value,l=e.loop?(t+1)%g.value.length:t+1;!e.loop&&l>g.value.length-1||P(l,(c,m)=>{n("on-next",c,m),n("on-next-click",c,m)})},S=()=>{const t=p.value;let l=t-1;if(t===0){if(!e.loop)return;l=g.value.length-1}P(l,(c,m)=>{n("on-prev",c,m),n("on-prev-click",c,m)})},a9=t=>{Math.abs(1-t)<.05?t=1:Math.abs(u.maxScale-t)<.05&&(t=u.maxScale),a.lastScale=a.scale,a.scale=t},X=()=>{const t=a.scale+e.zoomScale;t<u.maxScale*e.maxZoom&&a9(t)},E=()=>{const t=a.scale-e.zoomScale;t>e.minZoom&&a9(t)},i9=()=>{const t=a.rotateDeg%360;n("on-rotate",Math.abs(t<0?t+360:t))},C=()=>{a.rotateDeg-=90,i9()},V=()=>{a.rotateDeg+=90,i9()},F=()=>{a.scale=1,a.top=0,a.left=0},R=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return!e.moveDisabled&&t===0},{onMouseDown:z9,onMouseMove:M9,onMouseUp:D9}=((t,l,c)=>{let m,v=!1;return{onMouseDown:d=>{t.initX=t.lastX=d.clientX,t.initY=t.lastY=d.clientY,l.dragging=!0,v=!1,d.stopPropagation()},onMouseUp:d=>{c(d.button)&&f9(m),l.dragging=!1,v=!1},onMouseMove:d=>{if(l.dragging)if(c(d.button)){if(v)return;v=!0,m=K(()=>{const{top:y,left:f,lastY:q,lastX:Z}=t;t.top=y-q+d.clientY,t.left=f-Z+d.clientX,t.lastX=d.clientX,t.lastY=d.clientY,v=!1})}else t.lastX=d.clientX,t.lastY=d.clientY;d.stopPropagation()}}})(a,r,R),{onTouchStart:S9,onTouchMove:C9,onTouchEnd:L9}=((t,l,c,m)=>{let v,d=!1;return{onTouchStart:y=>{const{touches:f}=y;f.length>1?(c.gesturing=!0,l.touches=f):(l.initX=l.lastX=f[0].clientX,l.initY=l.lastY=f[0].clientY,c.dragging=!0),y.stopPropagation()},onTouchMove:y=>{if(d)return;const{touches:f}=y,{lastX:q,lastY:Z,left:I9,top:P9,scale:V9}=l;if(!c.gesturing&&c.dragging){if(!f[0])return;const{clientX:L,clientY:x}=f[0];m()?v=K(()=>{l.lastX=L,l.lastY=x,l.top=P9-Z+x,l.left=I9-q+L,d=!1}):(l.lastX=L,l.lastY=x)}else c.gesturing&&l.touches.length>1&&f.length>1&&(v=K(()=>{const L=(h9(l.touches[0],l.touches[1])-h9(f[0],f[1]))/t.width;l.touches=f;const x=V9-1.3*L;x>.5&&x<1.5*t.maxScale&&(l.scale=x),d=!1}))},onTouchEnd:()=>{f9(v),c.dragging=!1,c.gesturing=!1,d=!1}}})(u,a,r,R),j9=()=>{a.scale!==u.maxScale?(a.lastScale=a.scale,a.scale=u.maxScale):a.scale=a.lastScale},T9=t=>{r.loadError||r.gesturing||r.loading||r.dragging||r.wheeling||!e.scrollDisabled||e.zoomDisabled||(r.wheeling=!0,setTimeout(()=>{r.wheeling=!1},80),t.deltaY<0?X():E())},r9=t=>{const l=t;e.visible&&(!e.escDisabled&&l.key==="Escape"&&e.visible&&$(),l.key==="ArrowLeft"&&(e.rtl?D():S()),l.key==="ArrowRight"&&(e.rtl?S():D()))},B9=()=>{e.maskClosable&&$()},Y9=()=>{w()},$9=()=>{r.loading=!1},X9=t=>{r.loading=!1,r.loadError=!0,n("on-error",t)},s9=()=>{e.visible&&w()};G(()=>e.index,t=>{t<0||t>=g.value.length||P(t)}),G(()=>r.dragging,(t,l)=>{const c=!t&&l;if(!R()&&c){const m=a.lastX-a.initX,v=a.lastY-a.initY,d=e.swipeTolerance;Math.abs(m)>Math.abs(v)&&(m<-1*d?D():m>d&&S())}}),G(()=>e.visible,t=>{if(t){n9();const l=g.value.length;if(l===0)return p.value=0,r.loading=!1,void p9(()=>r.loadError=!0);p.value=e.index>=l?l-1:e.index<0?0:e.index,e.scrollDisabled&&E9()}else e.scrollDisabled&&c9()});const E9=()=>{document&&(Y.value=document.body.style.overflowY,document.body.style.overflowY="hidden")},c9=()=>{document&&(document.body.style.overflowY=Y.value)};F9(()=>{m9(document,"keydown",r9),m9(window,"resize",s9)}),R9(()=>{b9(document,"keydown",r9),b9(window,"resize",s9),c9()});const H9=()=>r.loading?i.loading?i.loading({key:"loading"}):o(le,{key:"img-loading"},null):r.loadError?i.onerror?i.onerror({key:"onerror"}):o(ne,{key:"img-on-error"},null):o("div",{class:`${h}-img-wrapper`,style:k9.value,key:"img-wrapper"},[o("img",{alt:y9.value,ref:b,draggable:"false",class:`${h}-img`,src:o9.value,onMousedown:z9,onMouseup:D9,onMousemove:M9,onTouchstart:S9,onTouchmove:C9,onTouchend:L9,onLoad:Y9,onDblclick:j9,onDragstart:t=>{t.preventDefault()}},null)]),O9=()=>{if(i["prev-btn"])return i["prev-btn"]({prev:S});if(g.value.length<=1)return;const t=!e.loop&&p.value<=0;return o("div",{role:"button","aria-label":"previous image button",class:"btn__prev "+(t?"disable":""),onClick:S},[e.rtl?o(_,{type:"next"},null):o(_,{type:"prev"},null)])},A9=()=>{if(i["next-btn"])return i["next-btn"]({next:D});if(g.value.length<=1)return;const t=!e.loop&&p.value>=g.value.length-1;return o("div",{role:"button","aria-label":"next image button",class:"btn__next "+(t?"disable":""),onClick:D},[e.rtl?o(_,{type:"prev"},null):o(_,{type:"next"},null)])},N9=()=>{if(l9.value&&!e.titleDisabled&&!r.loading&&!r.loadError)return i.title?i.title():o(ae,null,{default:()=>[l9.value]})},d9=()=>{let t;if(e.visible)return o("div",{onTouchmove:K9,class:[`${h}-modal`,e.rtl?"is-rtl":""],onClick:U9(B9,["self"]),onWheel:T9},[o(ie,null,null),o(J,{name:`${h}-fade`,mode:"out-in"},Q(t=H9())?t:{default:()=>[t]}),o("img",{style:"display:none;",src:o9.value,onError:X9,onLoad:$9},null),o("div",{class:`${h}-btns-wrapper`},[O9(),A9(),N9(),i["close-btn"]?i["close-btn"]({close:$}):o("div",{role:"button","aria-label":"close image preview button",class:"btn__close",onClick:$},[o(_,{type:"close"},null)]),i.toolbar?i.toolbar({toolbarMethods:{zoomIn:X,zoomOut:E,rotate:C,rotateLeft:C,rotateRight:V,resize:F},zoomIn:X,zoomOut:E,rotate:C,rotateLeft:C,rotateRight:V,resize:F}):o(oe,{zoomIn:X,zoomOut:E,resize:F,rotateLeft:C,rotateRight:V,rotateDisabled:e.rotateDisabled,zoomDisabled:e.zoomDisabled},null)])])};return()=>{let t;if(e.teleport){let l;return o(q9,{to:e.teleport},{default:()=>[o(J,{name:`${h}-fade`},Q(l=d9())?l:{default:()=>[l]})]})}return o(J,{name:`${h}-fade`},Q(t=d9())?t:{default:()=>[t]})}}});const se=Object.assign(e9,{install:e=>{e.component(e9.name,e9)}});const ce={props:{image:{type:String,required:!0},description:{type:String,default:""}},name:"picture-card"},de={class:"picture-card"},ue=["src","alt"],pe=["innerHTML"];function me(e,s,n,i,b,u){return B(),H("div",de,[O("img",{class:"picture-card__image",src:n.image,alt:n.description},null,8,ue),O("h2",{class:"picture-card__description",innerHTML:n.description},null,8,pe)])}const be=N(ce,[["render",me]]),ge={methods:{showImg(e){this.index=e,this.visible=!0},handleHide(){this.visible=!1}},data(){return{visible:!1,index:0}},props:{images:{type:Array,default:()=>[]}},components:{VueEasyLightbox:se,PictureCard:be},name:"picture-list"},ve={key:0},fe=["onClick"];function he(e,s,n,i,b,u){const w=z("picture-card"),p=z("masonry-wall"),Y=z("vue-easy-lightbox");return n.images.length?(B(),H("div",ve,[o(p,{items:n.images,"column-width":520,gap:10},{default:_9(({item:a,index:r})=>[O("div",{class:"picture-list__item1",onClick:g=>u.showImg(r)},[o(w,{image:a.src,description:a.title},null,8,["image","description"])],8,fe)]),_:1},8,["items"]),o(Y,{visible:b.visible,imgs:n.images,index:b.index,"move-disabled":"",onHide:u.handleHide},null,8,["visible","imgs","index","onHide"])])):w9("",!0)}const _e=N(ge,[["render",he]]);const we={props:{description:{type:String,default:""},videos:{type:Array,default:()=>[]},images:{type:Array,default:()=>[]}},components:{PictureList:_e},name:"project-detail"},xe={class:"project-detail"},ye={key:0,class:"project-detail__item"},ke=["innerHTML"];function ze(e,s,n,i,b,u){const w=z("picture-list");return B(),H("div",xe,[n.description?(B(),H("div",ye,[O("div",{class:"project-detail__description",innerHTML:n.description},null,8,ke)])):w9("",!0),o(w,{class:"project-detail__item",images:n.images},null,8,["images"])])}const Me=N(we,[["render",ze]]),De={computed:{project(){return W9[this.$route.params.id]}},mounted(){document.title=this.project.name},components:{ThePage:G9,ProjectDetail:Me},name:"view"};function Se(e,s,n,i,b,u){const w=z("project-detail"),p=z("the-page");return B(),J9(p,{title:u.project.name,link:u.project.link,tags:u.project.tags},{default:_9(()=>[o(w,{description:u.project.detail||u.project.description,videos:u.project.videos,images:u.project.images},null,8,["description","videos","images"])]),_:1},8,["title","link","tags"])}const Le=N(De,[["render",Se]]);export{Le as default};
