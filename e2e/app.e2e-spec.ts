import { JanAppPage } from './app.po';

describe('jan-app App', () => {
  let page: JanAppPage;

  beforeEach(() => {
    page = new JanAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
