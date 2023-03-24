// ==UserScript==
// @name         Bing Chat Font Optimize
// @namespace    me.relicx
// @version      0.0.2
// @author       Eva1ent
// @description  Fixes the font in the Bing Chat
// @icon         https://www.bing.com/favicon.ico
// @source       https://github.com/Nicify/bing-chat-font-optimize
// @supportURL   https://github.com/Nicify/bing-chat-font-optimize/issues
// @downloadURL  https://cdn.jsdelivr.net/gh/Nicify/bing-chat-font-optimize/dist/bing-chat-font-optimize.user.js
// @updateURL    https://cdn.jsdelivr.net/gh/Nicify/bing-chat-font-optimize/dist/bing-chat-font-optimize.user.js
// @match        https://www.bing.com/*
// @run-at       document-body
// ==/UserScript==

(function () {
  'use strict';

  function waitDOMContentLoaded() {
    return new Promise((resolve) => {
      switch (document.readyState) {
        case "interactive":
        case "complete": {
          resolve();
          break;
        }
        default: {
          window.addEventListener("DOMContentLoaded", () => resolve());
          break;
        }
      }
    });
  }
  const fontFamily = `'SF Pro Text', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`;
  const style = document.createElement("style");
  style.id = "bing-chat-font-optimize";
  style.innerHTML = `
    body {
        font-family: ${fontFamily} !important;
    }
    .cib-serp-main, .cib-serp-main *, .cib-serp-main *:before, .cib-serp-main *:after {
        --cib-font-text: ${fontFamily} !important;
    }
`;
  waitDOMContentLoaded().then(() => {
    document.head.append(style);
  });

})();
