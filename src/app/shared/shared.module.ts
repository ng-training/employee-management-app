import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './components';
import { ReversePipe } from './pipes';

@NgModule({
  imports: [CommonModule],
  declarations: [SearchComponent, ReversePipe],
  exports: [CommonModule, SearchComponent, ReversePipe],
})
export class SharedModule {}
