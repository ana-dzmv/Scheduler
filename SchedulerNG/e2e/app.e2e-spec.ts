import { SchedulerNGPage } from './app.po';

describe('scheduler-ng App', () => {
  let page: SchedulerNGPage;

  beforeEach(() => {
    page = new SchedulerNGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
