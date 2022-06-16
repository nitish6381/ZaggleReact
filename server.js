const path = require('path');
const express = require('express');
const app = express();
console.log(__dirname);
//const publicPath = path.join('my-app2', 'public');
const port = process.env.PORT || 3000;
app.use(express.static('build'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build'));
});
app.listen(port, () => {
    console.log('Server is up!');
    console.log(__dirname + 'test');
    // console.log(publicPath);
});