export class ShoppingResultsPage {

    
    get destination(){ return $('input[name=fsc-destination-search]')}
    get oneWay(){return $('input#fsc-trip-type-selector-one-way')}
    get startDate(){return $('button#depart-fsc-datepicker-button')}
    get endDate(){return $('button#return-fsc-datepicker-button')}
    get directFlight(){return $('button[name=directOnly]')}
    get submitSearch(){return $('button[type=submit]')}
    get priceOver70(){return $("//a//span[contains(text(),'Up to £25')]")}

    navigate(){browser.url('https://www.skyscanner.net/')}

    searchOneWayFlight(){
        this.destination.setValue('New York')
        this.oneWay.click()
        this.directFlight.click()
        this.submitSearch.click()
    }

}

export const shopping= new ShoppingResultsPage()