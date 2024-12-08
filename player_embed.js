/*!
 * © Copyright IBM Corp. 2024
 * All Rights Reserved.
 * This software is the confidential and proprietary information
 * of the IBM Corporation. (‘Confidential Information’). Redistribution
 * of the source code or binary form is not permitted without prior authorization
 * from the IBM Corporation.
 *
 */!function(){"undefined"!=typeof __webpack_require__&&Object.defineProperty(__webpack_require__,"p",{get:function(){try{if("function"!=typeof getWebpackBasePath)throw new Error("WebpackRequireFrom: 'getWebpackBasePath' is not a function or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return getWebpackBasePath()}catch(e){return console.error(e),""}},set:function(e){console.warn("WebpackRequireFrom: something is trying to override webpack public path. Ignoring the new value"+e+".")}});const e=window.ustreamPlayer;if(e){const t=ustream.vars.embedChannelUrl,n=ustream.vars.embedVideoUrl;e.initialize(),window.addEventListener("message",(e=>{var a,r;const o=e.data;let i,c,s,l,d={};try{d=JSON.parse(o),i=d.cmd,c=d.args}catch(e){d=!1}if(d&&d.event&&d.event.contentAvailable){const e=new URLSearchParams(window.location.href).get("t");e&&window.postMessage(JSON.stringify({cmd:"seek",args:[parseInt(e,10)]}),window.location.origin)}d&&c&&"load"===i&&(s=null===(a=c)||void 0===a?void 0:a[0],l=null===(r=c)||void 0===r?void 0:r[1],s&&l&&t&&n&&window.history.replaceState(null,document.title,"channel"===s?t.replace("xCHANNELIDx",l):n.replace("xVIDEOIDx",l)))}))}}();