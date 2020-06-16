import { setWorldConstructor,World } from 'cucumber'


 export class GoogleHomePage implements World{




    constructor(){
    }

    get searchbox(){ return $('input[name=q]')}
    get submitsearch(){ return $('input[name=btnK]')}

    navigate(){
        browser.url('https://www.google.co.uk')
        
    }

    searchForMangoes(){
    this.searchbox.setValue('mangoes')
    this.submitsearch.click()

    }

}

export const homepage: GoogleHomePage = new GoogleHomePage()

setWorldConstructor(GoogleHomePage)
