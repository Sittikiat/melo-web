import { StreetfoodPage } from './app.po';

describe('streetfood App', () => {
  let page: StreetfoodPage;

  beforeEach(() => {
    page = new StreetfoodPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
