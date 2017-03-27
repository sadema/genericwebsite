import { GenericwebsitePage } from './app.po';

describe('genericwebsite App', () => {
  let page: GenericwebsitePage;

  beforeEach(() => {
    page = new GenericwebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
