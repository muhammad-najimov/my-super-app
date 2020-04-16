const express = require('express')
const app = express()
const PORT = process.env.PORT || 4004

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.get('/', (request, response) => {
	response.render('home')
})

app.listen(PORT, () => {
	console.log('Server ready at ' + PORT)
})