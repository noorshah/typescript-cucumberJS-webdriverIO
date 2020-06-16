import { Given,When,Then } from 'cucumber'
import { assert } from 'chai'
import {homepage} from 'support/google-home-page'

    
    Given('I navigate to google home page', function () {
        homepage.navigate()
    })

    When('I search for mangoes', function () {
        homepage.searchForMangoes()
    })

    Then('I get relevant information', async function () {
        expect(homepage.mangoSearchResults).toHaveTextContaining('Mango')
    })
