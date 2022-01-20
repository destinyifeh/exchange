const express = require('express');
const path = require('path');


const app = express();


app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>console.log('Server running on port'+ " "+app.get('port')));