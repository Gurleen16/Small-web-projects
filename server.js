var express = require('express')
var app = express()
var port = 3000

app.use(express.json());
app.use(logger);

app.use(function(req,res,next)
{
  console.log("Second middleware");
  next();
});
app.use(function(req,res,next)
{
  console.log(req.path);
  next();
});
// app.use(function(req,res,next)
// {
//   res.end("terminated");
//   next();
// });
function logger(req,res,next)
{
  console.log("sds");
  next();
}
app.use('/test',function(req,res,next)
{
  console.log('route for test');
  next();
})
// app.get('/',function(req,res){
//     res.send("welcome");
// });
// app.get('/',logger,function(req,res,next){
//     res.send("welcome");
//     res.end();
// });
app.get('/',function(req,res,next){
    res.end("welcome");
    next();
},logger);

app.get('/test',function(req,res){
  res.send('test');
});
app.listen(port , ()=>{console.log(`Listening on Port ${port}`)})
