import { AngularCounterPage } from './app.po';

describe('angular-counter App', () => {
  let page: AngularCounterPage;

  beforeEach(() => {
    page = new AngularCounterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
