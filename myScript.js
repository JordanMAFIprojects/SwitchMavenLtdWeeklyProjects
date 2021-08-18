let express = require('express')
let path = require('path')
let app = express()

app.use(express.static('./'))
app.use(express.static('./images'))
app.use(express.static('./css'))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'))
	console.log(req)
});

app.get('/home', function(request, response){
    response.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/break', function(request, response){
    response.sendFile(path.join(__dirname, 'breakPhn.html'))
})

app.get('/suicide', function(request, response){
    response.sendFile(path.join(__dirname, 'attemptSuicide.html'))
})

 app.get('/paper', function(request, response){
    response.sendFile(path.join(__dirname, 'paper.html'))
 })

 app.get('/ansCall', function(request, response){
     response.sendFile(path.join(__dirname, 'ansCall.html'))
 })

 app.get('/followAddress', function(request, response){
     response.sendFile(path.join(__dirname, 'followAddress.html'))
 })

 app.get('/breakPaper', function(request, response){
     response.sendFile(path.join(__dirname, 'breakPaper.html'))
 })
 
 app.get('/about', function(request, response){
	 response.sendFile(path.join(__dirname, 'about.html'))
 })
 
 app.get('/contact', function(request, response){
	 response.sendFile(path.join(__dirname, 'contact.html'))
 })
app.listen(2000)
console.log("The port is listening at 2000/home")