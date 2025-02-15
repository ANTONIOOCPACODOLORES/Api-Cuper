import classroom from '../dao/classroom.dao.js'
const classroomController={};
classroomController.getall=async(req,res)=>{
    try {
        const classroom=await classroom.find();
        res.json(classroom);
    }catch
}