import StudentDAO from "../dao/students.dao.js";
const studentscontrollers= {};
studentscontrollers.getall=(req,res)=>{
    StudentDAO.getall()
    .then((students)=>{
        console.log(students);
        /*res.json({  
            data:students
        });*/
        res.render('../src/views/index.ejs',{students});
    })
    
    .catch((error)=>{
        res.json({
            data:{
                message:error
            }
        })
    })
}
studentscontrollers.getOne=(req,res)=>{
    StudentDAO.getOne(req.params.student_id)
    .then((student)=>{
      /* if(student!=null)
        res.json({data:student})
       else
        res.json({data:{message: "Student not found"}})*/
    res.render('.../src/views/edit.ejs',{student});
    })
}
studentscontrollers.insert=(req,res)=>{
    StudentDAO.insert(req.body)
    .then((response)=>{
      /* res.json({
        data:{
            message:"Student  saved",
            student:response
        }
       })*/
      res.redirect('api/students/getall');
    })
    .catch((error)=>{
        res.json({
            data:{message:error}
        });
    });
};
export default studentscontrollers;