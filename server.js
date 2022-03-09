const express = require('express')
const app = express ()
const cors = require('cors')
const PORT = 8000


app.use(cors())

let flia = {
    'guille':{
    'age': 28,
    'birth': 'guille',
    'nacimiento': 'uruguay',

}, 
'emi':{
    'age': 27,
    'birth': 'emi',
    'nacimiento': 'salto',
}, 
'papa':{
    'age': 61,
    'birth': 'mario',
    'nacimiento': 'maldonado',
}, 
desconocido:{
    'age': 0,
    'birth': 'no se',
    'nacimiento': 'no se',
}
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
}) 

app.get('/api/flia/:nombreFlia', (request, response) => {
    const nomFlia = request.params.nombreFlia.toLocaleLowerCase()
    console.log(nomFlia)
    if (flia[nomFlia]) {
    response.json(flia[nomFlia])
    }else {
        response.json(flia['desconocido']);
    }
})


app.listen(process.env.PORT || PORT, ()=> {

console.log(`Server running on port ${PORT}`)

})

