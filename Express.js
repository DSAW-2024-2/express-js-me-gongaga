const express = require('express');
const app = express();
const port = 3000;

const userInfo = {
    name: "Sebastian ",
    Lastname: "Quintero Venegas",
    Email: "gyrateplace@gmail.com",
    Id: "0000280492"
};

app.get('/user-info/1', (req, res) => {
    res.json(userInfo);  
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
