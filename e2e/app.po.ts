import { browser, by, element } from 'protractor';

export class StreetfoodPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
