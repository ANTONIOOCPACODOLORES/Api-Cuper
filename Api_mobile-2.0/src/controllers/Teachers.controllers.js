import teachersDAO from "../dao/teachers.dao.js";
const Teacherscontrollers = [];
Teacherscontrollers.getall = (req, res) => {
  teachersDAO.getall()
    .then((teachers) => {
      res.json({
        data: teachers,
      });
    })
    .catch((error) => {
      res.json({
        data: {
          message: error.message || "Error al obtener los profesores",
        },
      });
    });
};
export default Teacherscontrollers;
