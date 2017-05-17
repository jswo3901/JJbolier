const express = require ('express');

const app = express();

app.use('/', express.static(__dirname + '/../../public'));

const p1 = require ('./routes/p1')(app);
app.use('/p1', p1);

const port = 3000;
const server = app.listen(port, () => {
    console.log('Express listening on', port);
});
