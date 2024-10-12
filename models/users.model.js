const {v4 : uuidv4}=require("uuid");
const users=[
    {
        id: uuidv4(),
        username:"Nasir uddin",
        email:"nasir.iit.du@gmail.com"
    },
    {
        id:uuidv4(),
        username:"Nafisa Tabassum Omi",
        email:"nafisa@gmail.com"

    }
]

module.exports=users;