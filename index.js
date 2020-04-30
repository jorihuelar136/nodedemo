const http = require ("http")

const app =  http.createServer( function (req,res){

res.end("respuesta mundo holas joe "  )

}
).listen(3000)