 export class GoogleHomePage{

    get searchbox(){ return $('input[name=q]')}
    get submitsearch(){ return $('input[name=btnK]')}
    get googleApps(){ return $("a[title='Google apps']")}
    get shopping(){return $("//a//span[contains(text(),'Shopping')]")}
    get mangoSearchResults(){return $("//a//h3[contains(text(),'Mango')]")}

    navigate(){
        browser.navigateTo('https://www.google.co.uk/')}

    searchForMangoes(){
        this.searchbox.setValue('mangoes')
        browser.keys('\uE006')}

}

export const homepage: GoogleHomePage = new GoogleHomePage()