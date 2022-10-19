const express = require('express')
const app = express()
//const students = require('./data/students') 
PORT = 3000
const students =
[
    {name:"Samira",lastName:"rassas" ,id:1},
    {name:"Sandra",lastName:"Murad" ,id:2},
    {name:"Sandra",lastName:"rassas",id:3},
    {name:"Wael",lastName:"Mashal", id:4},
    {name:"dima",lastName:"id" ,id:5},
    {name:"dania",lastName:"abuzahrie", id:6},
    {name:"dania",lastName:"rassas" ,id:7}
]

app.get('', (req, res) => {
  res.send('Welcome')
})



app.get('/students', (req, res) => {
    if(!req.query.name){
            res.status(400).send("you must provide a name")
    }else {
        console.log(students)
        let result =students.filter( std => std.name.toLowerCase() == req.query.name.toLocaleLowerCase())
        if(result.length == 0){
            res.status(404).send('student '+ req.query.name + ' was not found') 

        }else {
            res.send(JSON.stringify(result))
          
        }
        
    }
    
    
 })

  app.listen(PORT , ()=> {
    console.log('Server is up and listening on port ' +   PORT)
  }) 