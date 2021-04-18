
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: "smtp.163.com", // 网易的邮件地址
    port: 465, // 端口
    secureConnection: false, // use SSL
    auth: {
        "user": 'wujunfeiai@163.com', // 邮箱账号
        "pass": 'TALWHMOSLKEWVZRY' // 邮箱的授权码
    }
});

const sendEmailCode = (mailOptions) => {
    return new Promise((resolve,reject) => {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                reject(error);
                return;
            }
            resolve(info.messageId)
        });
    })
 
}

module.exports = {
    transporter ,
    sendEmailCode
}