import { SayerPage } from './app.po';

describe('sayer App', () => {
  let page: SayerPage;

  beforeEach(() => {
    page = new SayerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
