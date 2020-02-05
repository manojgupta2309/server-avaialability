const express = require('express'),
app = express(),
PORT = 2000;

const ServerModule = require('./modules/server.module')
ServerModule.initServer();


const setTimeOut=(req,res,timeOut)=>{
  return  setTimeout(()=>{
    if(!timeOut.isTimeout)
        res.status(200).json({
            "message":"request timeout"
        })
    timeOut.isTimeout = true;
    },5000);   // we need to change the timeout time to less than 2000 as chai request timeout is 2000 
};


app.get('/getServer',async (req,res)=>{
    let timeOut = {
        isTimeout: false
    }
    const timeoutId = setTimeOut(req,res,timeOut);
     try{
        let server = await ServerModule.findServer();
        clearTimeout(timeoutId)
        if(!timeOut.isTimeout)
        res.status(200).json(server)
        else
        return;
    }catch(err){
        if(!timeOut.isTimeout)
          res.status(200).json({
            "message":err
        })
        else
        return;
    }
    
})

app.get('/getServerStatus/:id',async (req,res)=>{
    let timeOut = {
        isTimeout: false
    }
    const timeoutId =setTimeOut(req,res,timeOut);

    let {id} = req.params;

    try{
        let status = await ServerModule.findServerStatus(id);
        clearTimeout(timeoutId)
        if(!timeOut.isTimeout)
        res.status(200).json({
            "message":status
        })
        else
        return;
    }catch(err){
        if(!timeOut.isTimeout)
          res.status(200).json({
            "message":err
        })
        else
        return;
    }

})

app.get('/',()=>{
    res.status(404);
})
app.listen(PORT,()=>{
    console.log(`Server is live @localhost:${PORT}`)
})

module.exports = app;