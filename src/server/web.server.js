const express = require('express');

export default class WebServer {
    constructor() {
        this.app = express()
        this.app.use(express.static('dist/public'))
    }
    start(){
        return new Promise((resolve,reject) =>{
            try {
                this.server = this.app.listen(3000,function(){
                    resolve();
                })
            } catch (error) {
                console.log(error);
                reject(e);                
            }
        })
    }
    stop(){
        return new Promise((resolve,reject) => {
            try {
                this.server.close(()=>{
                    resolve();
                });
            } catch (error) {
                console.log(error);
                reject(error);
            }
        })
    }
}