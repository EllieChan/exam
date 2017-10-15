let pool = require('./pool');

module.exports={
//类型
	getAllSubjectType(){
		var sql = "select * from tbl_exam_subjecttype";
		return pool.execute(sql);
	},
//方向
	getAllDepartmentes(){
		var sql = "select * from tbl_exam_epartment";
		return pool.execute(sql);
	},
//难度
	getAllSubjectLevel(){
		var sql = "select * from tbl_exam_subjectlevel";
		return pool.execute(sql);
	},
//知识点
	getAllTopics(){
		var sql = "select * from tbl_exam_topic";
		return pool.execute(sql);
	},
//获取id　 
	getAllSubjects(subjectType_id,department_id,subjectLevel_id,topic_id){
		var sql = "select * from tbl_exam_subject where subjectType_id="
		+subjectType_id+" and department_id="
		+department_id+" and subjectLevel_id="
		+subjectLevel_id+" and topic_id="+topic_id+"";
		return pool.execute(sql);
	},
//审核通过
	getCheckPass(subject_id,check){
		var sql ="update tbl_exam_subject set checkState='"+check+"' where id="+subject_id;
		// console.log(sql);
		return pool.execute(sql);
	},
//显示题目选项信息
　　　getChoice(subjectId){
		var sql = "select * from tbl_exam_choice where subject_id="+subjectId;
	// console.log(sql);
		return pool.execute(sql);
},
//显示解析
	getParse(analysis,answer){
		var sql="select * from tbl_exam_subject where analysis="+analysis+" and answer="+answer+"";
		console.log(sql);
		return pool.execute(sql);
	}




















　　　　
}

