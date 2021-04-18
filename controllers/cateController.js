const daCongit = require('../utils/dbconfig');

getCate = (req,res) => {
    const sql = "select id,categort from cate";
    let sqlArr = [];
    let callBack = (err,data) => {
      console.log(err)
      if(err){
        console.log('连接失败');
      }else{
        res.send({
          "list":data
        })
      }
    }
  
    daCongit.sqlConnect(sql,sqlArr,callBack);
}

// 获取指定分类的文章列表
getPostCate=(req,res) => {
  let {id} = req.query;
  const sql = `select * from post where cate_id=?`;
  const sqlArr = [id];
  let callBack = (err,data) => {
    console.log(err)
    if(err){
      console.log('连接失败');
    }else{
      res.send({
        "list":data
      })
    }
  }

  daCongit.sqlConnect(sql,sqlArr,callBack);
}

module.exports = {
    getCate,
    getPostCate
}