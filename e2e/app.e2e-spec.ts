import { UniSenderPage } from './app.po';

describe('uni-sender App', function() {
  let page: UniSenderPage;

  beforeEach(() => {
    page = new UniSenderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
