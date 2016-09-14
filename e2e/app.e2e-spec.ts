import { UdacityDashboardPage } from './app.po';

describe('udacity-dashboard App', function() {
  let page: UdacityDashboardPage;

  beforeEach(() => {
    page = new UdacityDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
