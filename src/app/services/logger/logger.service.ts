import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  log(value) {
    console.log('[LOG]', value);
  }

  info(value) {
    console.log('[INFO]', value);
  }

  warn(value) {
    console.warn('[WARN]', value);
  }

  error(value) {
    console.error('[ERROR]', value);
  }
}
