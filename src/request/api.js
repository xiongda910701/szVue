/**
 * api接口统一管理
 */
import { get, post } from './http'

/**
 * 定义接口
 */
export const getQrCodeApi = params => post('/api/WechatPublic/get_qrcode', params);//获取微信注册二维码接口
export const scanQrCodeApi = params => post('/api/WechatPublic/scan_stat', params);//动态扫描二维码接口
export const getMessageCodeApi = params => post('/api/Login/send_codes', params);//获取短信验证码接口
export const phoneRegisterApi = params => post('/api/Login/register', params);//手机号码注册接口
export const createAccountApi = params => post('/api/Login/createAccount', params);//创建账号接口
export const phoneLoginApi = params => post('/api/Login/login', params);//手机号码登录接口
export const logoutApi = params => post('/api/Mp/logout', params);//退出登录接口
export const getMediaInfoApi = params => post('/api/Mp/getMediaInfo', params);//获取媒体用户信息接口
export const getMediaListApi = params => post('/api/Mp/getMpList', params);//获取媒体用户列表接口
export const saveCookieApi = params => post('/api/Mp/redir', params);//存取cookie接口



//样式中心
export const styleIndexApi = params => post('/Api/Style/index', params);//样式中心默认进入接口
export const styleFirstTypeApi = params => post('/Api/Style/getData', params);//点击样式中心一级分类接口
export const styleSecondTypeApi = params => post('/Api/Style/getSonData', params);//点击样式中心二级分类接口
export const styleCollectApi = params => post('/Api/Style/styleColl', params);//样式中心收藏接口
export const styleCancelCollectApi = params => post('/Api/Style/styleCollCancel', params);//样式中心取消收藏接口

//素材管理
export const getMaterialListApi = params => post('/Api/Matter/matter', params);//获取素材数据接口
export const MaterialDeleteApi = params => post('/Api/Matter/matterDelete', params);//素材删除接口


export const resetPasswordApi = params => post('/api/Login/changePass', params);//重置密码接口

export const changePasswordApi = params => post('/api/Mp/changePass', params);//修改密码接口
export const bindWxApi = params => post('/api/Mp/bindScan', params);//绑定微信接口轮训二维码(token,sess)
export const unbindWxApi = params => post('/api/Mp/untWechat', params);//微信解绑接口(token,sess)
export const bindAccountApi = params => post('/api/Login/bindHaving', params);//绑定已有账号接口
export const checkRegisterApi = params => post('/api/Login/checkRegister', params);//检验账号是否已注册接口
export const editContactApi = params => post('/api/Mp/editMediaInfo', params);//修改联系人和QQ接口
export const getQQApi = params => get('https://www.mbian.com/api/Login/getQq', params);//获取随机客服QQ接口
export const feedbackApi = params => post('/api/User/feedback', params);//获取随机客服QQ接口
export const uploadApi = params => post('https://www.mbian.com/api/User/importMediaPublic', params);//excel表格上传接口
export const hotApi = params => post('https://www.mbian.com/api/Hot/getList', params);//热点中心接口





//==================失效==============
export const editMediaInfoApi = params => post('/api/Mp/editMediaInfo', params);//编辑用户信息接口(accessToken必须)
export const uploadUserHeadApi = params => post('/api/Mp/upload', params);//上传用户头像接口(accessToken必须)








