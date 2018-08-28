import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;

  beforeEach(() => {
    component = new PageNotFoundComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('initial custom message should be empty', () => {
    expect(component.customMessage).toBeUndefined();
  });

  it('should set custom message', () => {
    const message = 'this is not an error';

    component.customMessage = message;

    expect(component.customMessage).toBe(message);
  });

  it('should set default message', () => {
    component.setDefaultMessage();

    expect(component.customMessage).toBe('foo');
  });
});
