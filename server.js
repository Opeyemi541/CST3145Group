const express = require('express');
const app = express();

app.get('/lessons', (req, res) => {
    const lessons = [
        {'topic': 'math', 'location': 'Hendon', 'price': 100},
        {'topic': 'math', 'location': 'Colindale', 'price': 80},
        {'topic': 'math', 'location': 'Brent Cross', 'price': 90},
        {'topic': 'math', 'location': 'Golders Green', 'price': 120}
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
