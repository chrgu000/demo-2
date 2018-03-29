function userBrowser() {
    var browserName = navigator.userAgent.toLowerCase();
    if (/msie/i.test(browserName) && !/opera/.test(browserName)) {
        alert("这是IE浏览器!");
        return;
    } else if (/firefox/i.test(browserName)) {
        alert("这是Firefox浏览器!");
        return;
    } else if (/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)) {
        alert("这是Chrome浏览器!");
        return;
    } else if (/opera/i.test(browserName)) {
        alert("这是Opera浏览器!");
        return;
    } else if (!(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))) {
        alert("这是Safari浏览器!");
        return;
    } else {
        alert("这是unKnow浏览器!");
    }
}