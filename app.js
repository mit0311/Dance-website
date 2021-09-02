const express = require("express");
const path =require("path");
const app=express();
const port=80;
const bodyparser=require("body-parser");
// const path=require("path");


// express specific stuff 
app.use('/static', express.static('static'));            // fro serving static files
app.use(express.urlencoded());                            // for taking data form to express
app.use(bodyparser.urlencoded({extended:true}))

// ejs specific stuff

app.set('view engine', 'ejs');                         // set the template as ejs
// app.set('views', path.join(__dirname, 'views'));       // set the views directory

// //ENDPOINTS
// app.get('/', (req, res) => {                                       // this was used by me when i was using index.pug
    
//     const params = {  }
//     res.status(200).render('home.pug', params);       
// })

app.get('/', (req, res) => {                                     
    
    const params = {  }
    res.status(200).render('index', params);
})

app.get('/contact', (req, res) => {                                     
    
    const params = {  }
    res.status(200).render('contact', params);
})

app.get('/about', (req, res) => {                                     
    
    const params = {  }
    res.status(200).render('about', params);
})

// app.get('/contact', (req, res) => {                                     
    
//     const params = {  }
//     res.status(200).render('contact.pug', params);
// })


// app.get('/about', (req, res) => {                                     
    
//     const params = {  }
//     res.status(200).render('about.pug', params);
// })
// start the server 

app.listen(port, () => {
    console.log(`the application strated succesfully on port ${port}`);
});