import { EmployeeManagementAppPage } from './app.po';

describe('employee-management-app App', () => {
  let page: EmployeeManagementAppPage;

  beforeEach(() => {
    page = new EmployeeManagementAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
