import { setWorldConstructor,World } from 'cucumber'


 export class GoogleHomePage implements World{




    constructor(){
    }

    get searchbox(){ return $('input[name=q]')}
    get submitsearch(){ return $('input[name=btnK]')}
    get mangoSearchResults(){return $("//a//h3[contains(text(),'Mango')]")}

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
