const express = require('express');
const router = express.Router();
const lista = [{id: 1, pizza:'calabresa', valor:"55.00"},
    {id:2, pizza:"marguerita", valor:"45.00"
    }];

router.get('/', (require, response)=>{
    response.send('servidor rodando na porta 3000')
});

router.get('/listar', (require,response)=>{
    response.send(lista);
});


module.exports = router;