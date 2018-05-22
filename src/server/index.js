import WebServer from './web.server';

let webServer = new WebServer();

webServer.start()
    .then(()=>{
        console.log("Awesome !! I Just Started A Server")
    })
    .catch((err)=>{
        console.log(err);
        console.log("oops!! Something Went Wrong")
    })