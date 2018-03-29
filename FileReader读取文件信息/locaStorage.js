//userData,做IE7 6 兼容
var UserData = { //新建一个UserData对象来做IE6 7的兼容,注意第一个字母大写
    userData: null, //用来判断是否有userData属性，也就是判断是否是IE6 7，或者说是否支持userData属性
    name: location.hostname,
    init: function() {
        if (!UserData.userData) {
            try {
                UserData.userData = document.createElement('INPUT');
                UserData.userData.type = "hidden";
                UserData.userData.style.display = "none";
                UserData.userData.addBehavior("#default#userData");
                document.body.appendChild(UserData.userData);
                var expires = new Date();
                expires.setDate(expires.getDate() + 365);
                UserData.userData.expires = expires.toUTCString();
            } catch (e) {
                return false;
            }
        }
        return true;
    },
    setItem: function(key, value) { //设置缓存
        if (UserData.init()) {
            UserData.userData.load(UserData.name);
            UserData.userData.setAttribute(key, value);
            UserData.userData.save(UserData.name);
        }
    },
    getItem: function(key) { //获取缓存
        if (UserData.init()) {
            UserData.userData.load(UserData.name);
            return UserData.userData.getAttribute(key)
        }
    },
    remove: function(key) { //删除缓存
        if (UserData.init()) {
            UserData.userData.load(UserData.name);
            UserData.userData.removeAttribute(key);
            UserData.userData.save(UserData.name);
        }
    },
    clear: function() { //清除所有缓存
        UserData.userData.load(UserData.name);
        var now = new Date();
        now = new Date(now.getTime() - 1);
        UserData.userData.expires = now.toUTCString();
        UserData.userData.save(UserData.name);
    }
};
//做W3C兼容  以及IE6 7的兼容，这里的代码是我自己参照上面的代码写的，原理一样
var LocalStorage = { //新建一个LocalStorage对象
    localStorage: null, //用来判断是否支持localStorage
    setItem: function(key, value) //设置缓存
        {
            if (!LocalStorage.localStorage) //如果支持localStorage，就使用它
            {
                localStorage.setItem(key, value)
            } else { //否则使用IE6 7的userData方法，也就是上面我们写的那个UserData对象的方法,下面的代码原理一样，就不备注了
                UserData.setItem(key, value)
            }
        },
    getItem: function(key) {
        if (!LocalStorage.localStorage) {
            return localStorage.getItem(key)
        } else {
            return UserData.setItem(key);
        }
    },
    removeItem: function(key) {
        if (!LocalStorage.localStorage) {
            return localStorage.removeItem(key)
        } else {
            return UserData.removeItem(key);
        }
    },
    clear: function() {
        if (!localStorage) {
            return localStorage.clear();
        } else {
            return UserData.clear()
        }
    }
};