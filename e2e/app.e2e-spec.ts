import { WebappCursoPage } from './app.po';

describe('webapp-curso App', () => {
  let page: WebappCursoPage;

  beforeEach(() => {
    page = new WebappCursoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
