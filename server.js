var path = require('path')
var express = require('express')

var app = express()

app.use(express.static(path.join(__dirname, 'dist')))
// app.use(/(\/[a-z]+)\/\d+|(\/[a-z]+\/)|(\/[a-z]+)/g,express.static(path.join(__dirname, 'dist')))
app.use(/\/quiz/,express.static(path.join(__dirname, 'dist')))

app.set('port', process.env.PORT || 8080)

var server = app.listen(app.get('port'), function () {
  console.log('listening on port ', server.address().port)
})
