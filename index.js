// ==UserScript==
// @name         Download all images in a Facebook Album
// @namespace    http://tampermonkey.net/
// @version      0.1
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// @match        https://www.facebook.com/*/photos/*
// @match        https://www.facebook.com/photo.php?*
// @match        https://www.facebook.com/media/set/*
// @grant        GM_download
// @description  try to take over the world!
// @author       Brad Barrows
// @icon         https://www.bradbarrows.com/favicon.ico
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);

let allHBs = [];
let currentHB = 0;

const downloadCurrentDLLink = () => {
    try {
        $("span:contains('Download')").each((index, dlb) => {
            try {
                dlb.click();
            } catch (e) {
                
            }
        });
    } catch (e) {
        
    }
}

const downloadFromHB = () => {
    if (currentHB > allHBs) {
        throw new Error("Either we downloaded all photos or none of the little hamburger buttons with the download links inside were found");
    }

    try {
        const chb = allHBs[currentHB];

        chb.click();
        setTimeout(downloadCurrentDLLink, 300);
    } catch (e) {
        
    }

    currentHB += 1;
    setTimeout(downloadFromHB, 1000);
}

const iterateOverAllHamburgers = () => {
    let x = 1;
    $("[aria-label='Edit']").each((index, hb) => {
        allHBs.push(hb);
    });

    //setInterval(downloadFromHB, 700);
    setTimeout(downloadFromHB, 1000);
};
(function() {
    'use strict';
    // alert('hy');
    // Your code here...
    // $$("[aria-label='Edit']")
    // $("span:contains('Download')")

    setTimeout(iterateOverAllHamburgers, 3000);

})();