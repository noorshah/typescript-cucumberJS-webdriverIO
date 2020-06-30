import{Given,When,Then} from 'cucumber'
import {homepage} from 'support/google-home-page'
import {shopping} from 'support/shopping-results-page'

Given('I navigate to google shopping page', function () {
  browser.url('https://www.google.com/shopping?hl=en')
})

When('I search for dresses', function () {
  homepage.searchbox.setValue('dresses')
  browser.keys('\uE006')
  shopping.priceOver70.click()
})

Then('I can filter by price', function () {
  
})