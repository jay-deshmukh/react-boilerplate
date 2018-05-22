import WebServer from './web.server'
// import App from './app'
// import React from 'react'
// import {shallow} from 'enzyme'

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
// describe('App', () => {
//   test('should match snapshot', () => {
//     const wrapper = shallow(<App/>)
//     expect(wrapper.find('div').text()).toBe('Welcome to React Boilerplate App')
//     expect(wrapper).toMatchSnapshot()
//   })
// })