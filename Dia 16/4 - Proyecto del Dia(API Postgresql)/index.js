const express = require("express");
const app = express();

const myPostgres = require("./connection");

app.use(express.json());

// Students CRUD
app.get("/students", (request, response) => {
    myPostgres.connection.query('SELECT * FROM students', function(error, results) {
        if (error) throw error;
        response.send(results.rows);
        console.log('Estudiantes consultados');
    });
})

app.get("/students/:id", (request, response) => {
    myPostgres.connection.query('SELECT students.id, students.name AS student_name, califications.calification, courses.name AS course_name, courses.teacher AS teacher_name FROM students LEFT JOIN califications ON students.id = califications.student_id LEFT JOIN courses ON califications.course_id = courses.id WHERE students.id = '
        + request.params.id, function(error, results) {
        if (error) throw error;
        console.log(results);
        response.send(results.rows);
        console.log('Estudiante consultado');
    });
})

app.post("/students/create", (request, response) => {
    const id = request.body.id;
    const name = request.body.name;
    const email = request.body.email;
    const created_at = request.body.created_at;
    const updated_at = request.body.updated_at;
    myPostgres.connection.query('INSERT INTO students (id, name, email, created_at, updated_at) VALUES ($1, $2, $3, $4, $5) RETURNING *', [id, name, email, created_at, updated_at], function (error, results) {
        if(error) throw error;
        response.status(201).json(results.rows[0]);
        console.log('Estudiante creado');
    });
})

app.put("/students/:id", (request, response) => {
    const id = String(request.body.id);
    const name = request.body.name;
    const email = request.body.email;
    myPostgres.connection.query('UPDATE students SET name = $2, email = $3 WHERE id = $1 RETURNING *', [id, name, email], function (error, results) {
        if(error) throw error;
        response.status(200).send(results.rows);
        console.log('Estudiande actualizado');
    });
})

app.delete("/students/:id", (request, response) => {
    const id = String(request.params.id);
    myPostgres.connection.query('DELETE FROM students where id = $1', [id], function (error, results) {
        if(error) throw error;
        response.status(200).send(`The student was deleted with ID: ${request.params.id}`);
        console.log('Estudiante eliminado');
    });
})

// Courses CRUD
app.get("/courses", (request, response) => {
    myPostgres.connection.query('SELECT * FROM courses', function(error, results) {
        if (error) throw error;
        response.send(results.rows);
        console.log('Cursos consultados');
    });
})

app.get("/courses/:id", (request, response) => {
    myPostgres.connection.query('SELECT id, name, teacher, description FROM courses WHERE id = ' + request.params.id, function(error, results) {
        if (error) throw error;
        response.send(results.rows);
        console.log('Curso consultado');
    });
})

app.post("/courses/create", (request, response) => {
    const id = request.body.id;
    const name = request.body.name;
    const teacher = request.body.teacher;
    const description = request.body.description;
    const created_at = request.body.created_at;
    const updated_at = request.body.updated_at;
    myPostgres.connection.query('INSERT INTO courses (id, name, teacher, description, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [id, name, teacher, description, created_at, updated_at], function (error, results) {
        if(error) throw error;
        response.status(201).json(results.rows[0]);
        console.log('Curso creado');
    });
})

app.put("/courses/:id", (request, response) => {
    console.log(request.body);
    const id = request.body.id;
    const name = request.body.name;
    const teacher = request.body.teacher;
    const description = request.body.description;
    myPostgres.connection.query('UPDATE courses SET name = $2, teacher = $3, description = $4 WHERE id = $1 RETURNING *', [id, name, teacher, description], function (error, results) {
        if(error) throw error;
        response.status(200).send(results.rows);
        console.log('Curso actualizado');
    });
})

app.delete("/courses/:id", (request, response) => {
    const id = String(request.params.id);
    myPostgres.connection.query('DELETE FROM courses where id = $1', [id], function (error, results) {
        if(error) throw error;
        response.status(200).send(`The course was deleted with ID: ${request.params.id}`);
        console.log('Curso eliminado');
    });
})

// Califications CRUD
app.get("/califications", (request, response) => {
    myPostgres.connection.query('SELECT * FROM califications', function(error, results) {
        if (error) throw error;
        response.send(results.rows);
        console.log('Calificaciones consultadas');
    });
})

app.get("/califications/:id", (request, response) => {
    myPostgres.connection.query('SELECT id, calification FROM califications WHERE id = ' + request.params.id, function(error, results) {
        if (error) throw error;
        response.send(results.rows);
        console.log('Calificacion consultado');
    });
})

app.post("/califications/create", (request, response) => {
    const id = request.body.id;
    const student_id = request.body.student_id;
    const course_id = request.body.course_id;
    const calification = request.body.calification;
    const date = request.body.date;
    const created_at = request.body.created_at;
    const updated_at = request.body.updated_at;
    myPostgres.connection.query('INSERT INTO califications (id, student_id, course_id, calification, date, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [id, student_id, course_id, calification, date, created_at, updated_at], function (error, results) {
        if(error) throw error;
        response.status(201).json(results.rows[0]);
        console.log('Calificacion creado');
    });
})

app.put("/califications/:id", (request, response) => {
    console.log(request.body);
    const id = request.body.id;
    const student_id = request.body.student_id;
    const course_id = request.body.course_id;
    const calification = request.body.calification;
    const date = request.body.date;
    myPostgres.connection.query('UPDATE califications SET student_id = $2, course_id = $3, calification = $4, date = $5 WHERE id = $1 RETURNING *', [id, student_id, course_id, calification, date], function (error, results) {
        if(error) throw error;
        response.status(200).send(results.rows);
        console.log('Calificacion actualizado');
    });
})

app.delete("/califications/:id", (request, response) => {
    const id = String(request.params.id);
    myPostgres.connection.query('DELETE FROM califications where id = $1', [id], function (error, results) {
        if(error) throw error;
        response.status(200).send(`The course was deleted with ID: ${request.params.id}`);
        console.log('Curso eliminado');
    });
})

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log("El servidor esta en linea");
})