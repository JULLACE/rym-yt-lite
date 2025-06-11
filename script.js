// ==UserScript==
// @name         RYM YT Filter
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Replace YouTube links with YouTube-Lite links
// @author       JULLACE
// @match        https://rateyourmusic.com/song/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rateyourmusic.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const YTregex = /watch\?v=.+/;

    const replacer = () => {
        const arr = document.getElementsByClassName('ui_media_link_btn ui_media_link_btn_youtube');
        for (let item of arr) {
            item.href = `https://youtube-lite.js.org/#/${item.href.match(YTregex)}`;
            observer.disconnect();
        }
    };

    const observer = new MutationObserver(() => {
        replacer();
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
