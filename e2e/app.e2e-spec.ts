import { CoffemachinePage } from './app.po';

describe('coffemachine App', () => {
  let page: CoffemachinePage;

  beforeEach(() => {
    page = new CoffemachinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
