import {setWorldConstructor} from 'cucumber'
import {World} from 'cucumber'
import {Browser} from 'webdriverio'

export default class GoogleHomePage implements World{

    driver: Browser
    variable: any

    constructor(){
        console.log('test')
    }

    navigation(number: any){
       console.log('test')
    }


}

setWorldConstructor(GoogleHomePage)
