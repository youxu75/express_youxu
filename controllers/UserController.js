

const { transporter ,sendEmailCode} = require('../utils/email')

const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
}

let validatePhoneCode = [];

const sendCodeP = (phone) => {
    for (let item of validatePhoneCode) {
        if (phone == item.phone) {
            return true
        }
        return false;
    }
}

let email = {
    title: '应用名还在装修中--邮箱验证码',
    htmlBody: '<h1>Hello!</h1><p style="font-size: 18px;color:#000;">当前验证码为：<u style="font-size: 16px;color:#1890ff;">' + rand(1000, 9999) + '</u></p><p style="font-size: 14px;color:#666;">10分钟内有效</p>'
}

let mailOptions = {
    from: 'wujunfeiai@163.com', // 发件人地址
    to: '', // 收件人地址，多个收件人可以使用逗号分隔
    subject: email.title, // 邮件标题
    html: email.htmlBody // 邮件内容
};

// 模拟发送验证码
sendCode = (req, res) => {
    let email = req.body.email;
    mailOptions.to = email;
    sendEmailCode(mailOptions).then(ress => {
        console.log(ress)
        res.send({
            code:200,
            msg:'验证码发送成功'
        })
    }).catch(e => {
        res.send({
            code:400,
            msg:'验证码发送失败'
        })
    })
    // if(sendCodeP(phone)){
    //     res.send({
    //         'code':400,
    //         'msg':'该手机号已发送过验证码,稍后再试',
    //     });
    //     return;
    // }
    // let code = rand(1000,9999);
    // res.send({
    //     'code':200,
    //     'msg':'发送成功',
    // });
    // validatePhoneCode.push({
    //     'phone':phone,
    //     'code':code
    // })
    // console.log(code);
}

// 验证验证码
const findCode = (code) => {
    for (let item of validatePhoneCode) {
        if (code == item.code) {
            return true
        }
    };
    return false
}

// 验证码登录
codePhoneLogin = (req, res) => {
    let { phone, code } = req.body;
    // 验证手机号是否发送验证码
    if (!sendCodeP(phone)) {
        res.send({
            'code': 400,
            'msg': '请先发送验证码',
        });
        return;
    }
    if (!findCode(code)) {
        res.send({
            'code': 400,
            'msg': '验证码不正确，请从新输入'
        });
        return;
    }
    res.send({
        'code': 200,
        'msg': '登录成功！'
    })
}

module.exports = {
    sendCode,
    codePhoneLogin
}