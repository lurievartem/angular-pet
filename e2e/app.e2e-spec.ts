import { AngularPetPage } from './app.po';

describe('angular-pet App', () => {
  let page: AngularPetPage;

  beforeEach(() => {
    page = new AngularPetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
