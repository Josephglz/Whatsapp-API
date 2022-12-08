const express = require('express');
const path = require('path');
const apiRoute = require(path.join(__dirname, './routes/routes'));
const app = express();

const PORT = process.env.PORT || 80;

//estatic the file logs.txt
app.use(express.static(path.join(__dirname, './logs.txt')));

app.use(express.json());
app.use('/whatsapp', apiRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});