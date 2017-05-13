import { LoggerService } from './logger.service';

describe('LoggerService', () => {

  let logger: LoggerService;

  beforeEach(() => {
    logger = new LoggerService();
  });

  it('can create it', () => {
    expect(logger).toBeTruthy();
  });

  it('can call log', () => {
    spyOn(logger, 'log');

    logger.log('foo');

    expect(logger.log).toHaveBeenCalled();
  });

  // Who knows why we don't have coverage on the error method ?
  it('can call error', () => {
    spyOn(logger, 'error');

    const errorMessage = 'Nasty error';
    logger.error(errorMessage);

    expect(logger.error).toHaveBeenCalledWith(errorMessage);
  });

  it('can call info implementation', () => {
    spyOn(logger, 'info').and.callThrough();

    logger.info('new message');

    expect(logger.info).toHaveBeenCalled();
  });

  it('can call warning fake', () => {
    spyOn(logger, 'warn').and.callFake(() => console.log('this is not happening'));

    logger.warn('foo');

    expect(logger.warn).toHaveBeenCalledTimes(1);
  });

});
