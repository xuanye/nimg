exports.tmproot  = '../data/nimg/temp'; //上传临时目录
exports.imgroot  = '../data/nimg/upload'; //图片存储目录
exports.errorlog = '../data/nimg/error.log'; //程序错误日志，记录

exports.port        = 9000;
exports.appname     = 'Nimg';
exports.maxFileSize = 1024*1024;//1024kb 1mb
exports.maxSide     = 1920; //最大截图边长
exports.minSide     = 10; //最小截图边长
exports.root		= 'localhost'


exports.imgtypes={
        'gif': 'image/gif',
        'jpeg': 'image/jpeg',
        'jpg': 'image/jpeg',
        'png': 'image/png'
};
