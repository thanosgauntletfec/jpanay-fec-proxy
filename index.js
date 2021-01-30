const express = require('express');
const { createProxyMiddleware }  = require('http-proxy-middleware');
const path = require('path')
const cors = require('cors')

const app = express();

const PORT = 3080;

app.use(cors())
app.use(express.static('./public'));

app.listen(PORT, () =>  {
  console.log(`Listening on PORT: ${port}`)
})

// app.get('/info', (req, res) => {
//   res.send('this is a proxy service for fec thanos')
// });

// const matt = {
//   target: "http://localhost:2080/",
//   changeOrigin: true,
//   pathRewrite: {
//     [`^/matt`]: '',
// },
// }

// const chase = {
//   target: "http://localhost:3000/",
//   changeOrigin: true,
//   pathRewrite: {
//     [`^/chase`]: '',
//   },
// }

// const jason = {
//   target: "http://localhost:8080/",
//   changeOrigin: true,
//   pathRewrite: {
//     [`^/jason`]: '',
//   },
// }

// app.use('/chase/*', createProxyMiddleware(chase));
// app.use('/matt/*', createProxyMiddleware(matt));
// app.use ('/jason/*', createProxyMiddleware(jason))