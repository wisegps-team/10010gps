/**
 * 关于项目所有的配置
 */
const CONFIG = {}

//本地测试时使用
console.debug(
    W.setCookie('_app_config_', '{"smsEngine":{"weixin":{"sdkappkey":"e50b94fbd56a595484e9c6f6f744567f","sdkappid":"1400017134"}},"devKey":"ab00e7339368a72a9f997e581ff9d916","devSecret":"c1ff234daefe3481146773a5d95d4985","objectId":770933352235667500,"desc":"中国联通位置服务平台","name":"中国联通位置服务平台","enterUrl":"\/10010gps\/index.html","devId":836600645996908500,"sid":836600693577093100,"appKey":"8334669c70d54730bce519b8d0c40cdc","appSecret":"f1517784d6d8821cf78e481dd3311117","wxAppKey":"wxa59f6d089fdef4fe"}', 30)
);

let keys = W.getCookie('_app_config_');
try {
    keys = JSON.parse(keys);
    Object.assign(CONFIG, keys);
    ___.app_name = CONFIG.name;
} catch (error) {
    alert('app key error');
}


export default CONFIG;