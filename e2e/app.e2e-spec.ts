import { StockItToMePage } from './app.po';

describe('stock-it-to-me App', () => {
  let page: StockItToMePage;

  beforeEach(() => {
    page = new StockItToMePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
