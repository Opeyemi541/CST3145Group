const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());

app.use('/lessons', (req, res) => {
    const lessons = [
        {'topic': 'Math', 'location': 'Hendon', 'price': 100},
        {'topic': 'Math', 'location': 'Colindale', 'price': 80},
        {'topic': 'Math', 'location': 'Brent Cross', 'price': 90},
        {'topic': 'Math', 'location': 'Golders Green', 'price': 120}
    ];
    res.json(lessons);
});

app.use('/user', (req, res) => {
  res.send('{"email": "user@email.com", "password": "mypassword"}');
});

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin',"*")
    next()
  })


app.listen(3000, () => {
    console.log('Server running on port 3000');
});
