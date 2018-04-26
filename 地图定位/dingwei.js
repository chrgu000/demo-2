locationPhone = function() {
    var longitude = '';
    var latitude = '';
    var city = '';
    var region = '';
    mapObj = new AMap.Map('iCenter');
    mapObj.plugin('AMap.Geolocation', function() {
        geolocation = new AMap.Geolocation({
            enableHighAccuracy: true, //是否使用高精度定位，默认:true
            timeout: 10000, //超过10秒后停止定位，默认：无穷大
            maximumAge: 0, //定位结果缓存0毫秒，默认：0
            convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
            showButton: false, //显示定位按钮，默认：true
            buttonPosition: 'LB', //定位按钮停靠位置，默认：'LB'，左下角
            buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            showMarker: false, //定位成功后在定位到的位置显示点标记，默认：true
            showCircle: false, //定位成功后用圆圈表示定位精度范围，默认：true
            panToLocation: false, //定位成功后将定位到的位置作为地图中心点，默认：true
            zoomToAccuracy: false //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        });
        mapObj.addControl(geolocation);
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', onComplete); //返回定位信息
        AMap.event.addListener(geolocation, 'error', onError); //返回定位出错信息
    });
    //解析定位结果
    function onComplete(data) {
        longitude = JSON.stringify(data.position.lng); //经度
        latitude = JSON.stringify(data.position.lat); //纬度
        var url = 'http://restapi.amap.com/v3/geocode/regeo?key=a852e2127d48a6f1474a193b0a03e8d2&location=' + longitude + ',' + latitude + '';
        Ext.Ajax.request({
            url: url,
            //method: 'POST',
            success: function(response) {
                var responseText = Ext.util.JSON.decode(response.responseText);
                city = responseText.regeocode.addressComponent.province; //省级
                var district = responseText.regeocode.addressComponent.district; //市、区
                var township = responseText.regeocode.addressComponent.township;
                var formatted_address = responseText.regeocode.formatted_address;
                //						    	alert(formatted_address);
                if (responseText.status == "1") {
                    if (isEmpty(longitude) || isEmpty(latitude) || isEmpty(region)) {
                        Ext.Msg.alert('', '定位失败');
                    }
                    Ext.Ajax.request({
                        url: __ctxPath + '/creditFlow/gpsu/saveGpsMailGpsu.do',
                        params: {
                            longitude: longitude,
                            dimension: latitude,
                            region: formatted_address,
                            userId: curUserInfo.userId
                        },
                        success: function(response) {
                            var responseText = Ext.util.JSON.decode(response.responseText);
                            var msg = responseText.msg;
                            Ext.Msg.alert('', msg);
                        }
                    })
                } else {
                    Ext.Msg.alert('', '定位失败');
                }
            }
        });
    }
    //解析定位错误信息
    function onError(data) {
        //alert(data.message);
        Ext.Msg.alert('', '获取定位失败');
    }
}