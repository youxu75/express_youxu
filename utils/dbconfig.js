const mysql = require('mysql');


module.exports = {
    // 连接数据库配置
    config:{
        host:'localhost',
        port:'3306',
        user:'exapp',
        password:'123321',
        database:'exapp',
    },

    // 连接池对象
    sqlConnect:function(sql,sqlArr,callBack){
        let pool = mysql.createPool(this.config);
        pool.getConnection((err,conn) => {
            if(err){
                console.log(err)
                console.log('连接失败');
                return;
            }
            // 事件驱动回调
            conn.query(sql,sqlArr,callBack);
            // 释放连接
            conn.release();
        })
    }
}