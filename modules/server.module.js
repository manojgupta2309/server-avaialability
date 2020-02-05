const servers = require('../data/server.data')

const findServer = ()=>{
    let timout = Math.floor(Math.random()*10000)
    let onlineServer = getOnlineServer().sort((server1,server2)=>{
        if(server1.priority > server2.priority) return 1;
    })[0];
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(onlineServer)
            resolve(onlineServer)
            else
            reject("no online server")
        },timout)

    })
}

const findServerStatus = (id)=>{
   
    let server =  getOnlineServer().filter((server)=>{
        return server.id == id;
    })[0];
    if(server)
        return "server is online";
    else
        return "server is offline";
}

const initServer = ()=>{
    servers.forEach((server)=>{
        server.statusCode = Math.floor(Math.random()*350)
        server.id = Math.floor(Math.random()*100)
    })
}

const getOnlineServer = ()=>{
  return  servers.filter((server)=>{
        return server.statusCode >=200 && server.statusCode<300;
    })
}

module.exports ={
    findServer:findServer,
    findServerStatus : findServerStatus,
    initServer:initServer,
    getOnlineServer:getOnlineServer
}