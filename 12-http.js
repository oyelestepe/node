const http = require('http')

const server = http.createServer((req,res)=>{
if(req.url === '/'){
    res.end('Welcome to our homepage')
}
if(req.url === '/about'){
    res.end('Here is our short history')
}
res.end(`
    <h1>Opps!</h1>
    <p>We cant seem to find the page you are looking </p>
    <a href="/">back home</a>
    `)
})

server.listen(5000)