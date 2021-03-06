// indlæs express modulet, dette er vores serverprogram
const express = require('express');
// opret en express applikation 
const app = express();



/* aktiver serverside console.log af side indlæsninger. 
 * Dette sættes op så vi kan følge med i hvilke HTML filer 
 * og ROUTES der forsøges at blive indlæst */
const logger = require('morgan');
app.use(logger('dev', {
   // hvis ALLE requests skal ses i loggen, udkommenter næste linje
   skip: req => (!req.url.endsWith(".html") && req.url.indexOf('.') > -1)
}));



// sæt viewengine til ejs 
app.set('view engine', 'ejs');
// peg på den mappe hvor alle views filerne er placeret
app.set('views', './server/views');

app.get('/home', function(req, res){

   let products =[
      {
        image:"https://images.pexels.com/photos/1630588/pexels-photo-1630588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title:"High School",
        description: "you can read here about my high school"
      },
      {
         image:"https://images.pexels.com/photos/1258264/pexels-photo-1258264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
         name:"speaker",
         price: "349"
      },
      {
         image:"https://images.pexels.com/photos/1116558/pexels-photo-1116558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
         name:"CD",
         price: "249"
      }
   ]
   res.render('home.ejs',{
       
       "title": "min fansy forside",
       "page":"home",
       "productsList": products,
   })
   
})

app.get('/product', function(req, res){
   res.render('product.ejs',{
      "productPage": "productPage",
      "page": "product"
   })
})

app.get('/contact', function(req, res){
   res.render('contact.ejs',{
      "contact": "contactpage",
      "page": "contact"
   })
})

app.get('/test', function (req, res){
   res.send('<h1>test.ejs</h1>')

})
/* indlæs alle de routes serveren skal håndtere
 * dette sker igennem en ny fil, for at splitte koden op i smartere blokke */
require('./server/routes/routes.js')(app);

/* sæt serveren op så den kan servere html/css/javascript
 * og billeder direkte fra public mappen, efter alle routes er kørt */
app.use(express.static('public'));



// start serveren på port 3000 
const port = 3000;
app.listen(port, (error) => {
   if (error) console.log(error);
   console.log('\x1b[35m%s\x1b[0m', '================================================================'); // udskriver en lilla streg i konsol
   console.log('Server is listening on port %s, address: %s', port, 'http://localhost:' + port);
});
