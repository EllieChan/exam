require('babel-polyfill');
//加载ｍｙｓｑｌ模块
let mysql = require('mysql');


let pool = global.pool;
if(!pool){
	//创建连接池
	 pool = mysql.createPool({
		database:'exam',
		user:'root',
		password:'root'
		});

//将连接挂载到global
global.pool = pool;
}
//获取链接
function getConnection(){
	return new Promise(function(resolve,reject){
		pool.getConnection(function(err,conn){
			if(!err){
			   resolve(conn);	
			}else{
				reject(err);
			}	
		});
	});
}
//执行Ｓｑｌ
function execute(sql){
	return new Promise(function(resolve,reject){
		 var connection;
         getConnection().then(function(conn){
			connection=conn;
            conn.query(sql,function(err,result){
                if(!err){
                    resolve(result);
                }else{
                    reject(err);
                }
            });
        }).catch(function(err){
			// console.log("连接池异常：",err);
            reject(err);
        }).finally(function(){
			if(connection){
			connection.release();
            console.log('释放完成');
			}	
		});
    });
}

module.exports={
	getConnection,
	execute
};