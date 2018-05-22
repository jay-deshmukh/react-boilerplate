import WebServer from './web.server'

describe("Started" , ()=>{
    let webServer = null;
    
    beforeAll(()=>{
        webServer =  new WebServer();
    })
    
    test("Should Start And Trigger A Callback",async () => {
        let promise = webServer.start();
        await expect(promise).resolves.toBeUndefined()
    })

    test("Should Stop Server And Trigger a Callback" , async () =>{
        let promise = webServer.stop();
        await expect(promise).resolves.toBeUndefined()
    })
})          