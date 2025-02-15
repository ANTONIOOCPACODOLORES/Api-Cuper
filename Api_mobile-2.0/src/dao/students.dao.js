import Student from "../models/Students.js";

const StudentDAO = {};

// Obtener todos los estudiantes
StudentDAO.getAll = async () => {
    return await Student.find(); // Devuelve todos los estudiantes
};

// Obtener un solo estudiante por ID
StudentDAO.getOne = async (student_id) => {
    return await Student.findOne({ student_id: student_id });
};

// Insertar un nuevo estudiante
StudentDAO.insert = async (studentData) => {
    const newStudent = new Student(studentData); // Crear instancia del modelo
    return await newStudent.save(); // Guardar en la base de datos
};

export default StudentDAO;
