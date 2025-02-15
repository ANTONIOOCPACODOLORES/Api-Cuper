import teachers from "../models/teachers.js";
const teachersDAO={};
teachersDAO.getall=async()=>{
    return await teachers.find();//devuelve los estos con find
};
export default teachersDAO;