import { Given,When,Then } from 'cucumber'
import {homepage} from 'support/google-home-page'

    
    Given('I navigate to google home page', function () {
        browser.deleteCookies()
        homepage.navigate()
    })

    When('I search for mangoes', function () {
       homepage.searchForMangoes()
    })

    Then('I get relevant information', function () {
       expect(homepage.mangoSearchResults).toHaveTextContaining('Mango')
    })
