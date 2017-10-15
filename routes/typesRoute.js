let express = require('express');
let route = express.Router();
let typesDB = require("../db/typesDB");

route.get('/getAllSubjectType',(req,resp)=>{
	typesDB.getAllSubjectType().then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

route.get('/getAllDepartmentes',(req,resp)=>{
	typesDB.getAllDepartmentes().then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

route.get('/getAllSubjectLevel',(req,resp)=>{
	typesDB.getAllSubjectLevel().then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

route.get('/getAllTopics',(req,resp)=>{
	typesDB.getAllTopics().then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

//拿到选中的４个id
route.post('/getAllSubjects',(req,resp)=>{
	// console.log(req.body);
	var subjectType_id = req.body.subjectType_id;
	var department_id = req.body.department_id;
	var subjectLevel_id = req.body.subjectLevel_id;
	var topic_id = req.body.topic_id;

	typesDB.getAllSubjects(subjectType_id,department_id,subjectLevel_id,topic_id).then((data)=>{
		// console.log("ppp:",data);
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

//审核通过　未通过
route.post('/getCheckPass',(req,resp)=>{
	var subject_id=req.body.subject_id;
	var subject_checkState=req.body.subject_checkState;
	typesDB.getCheckPass(subject_id,subject_checkState).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});

});

//显示选项信息
route.post('/getChoice',(req,resp)=>{
	var subjectId=req.body.subjectId;
	typesDB.getChoice(subjectId).then((data)=>{
		// console.log("所有数据:",data);
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

//显示解析
route.post('/getParse',(req,resp)=>{
	var analysis=req.body.analysis;
	var answer=req.body.answer;
	console.log("两个数据是：",analysis,answer);
	typesDB.getParse(analysis,answer).then((data)=>{
		console.log("解析:",data);
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	})
})
　


module.exports=route;