import { NgModule } from '@angular/core';

import { SearchComponent } from './components';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [SearchComponent],
  exports: [CommonModule, SearchComponent],
})
export class SharedModule {}
