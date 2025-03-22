const express = require('express')
const app = express();
const router = require('./src/router')
app.use(router);



app.listen(3000,'localhost',()=>{
    console.log('servidor ok')
});

// utilize "dev": "nodemon server.js" -> npm run dev