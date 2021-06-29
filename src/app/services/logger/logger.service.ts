import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  log(value: string) {
    console.log(`[LOG] ${value}`);
  }

  info(value: string) {
    console.log(`[INFO] ${value}`);
  }

  warn(value: string) {
    console.warn(`[WARN] ${value}`);
  }

  error(value: string) {
    console.error(`[ERROR] ${value}`);
  }
}
