import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './components';
import { ReversePipe, TitlePrefixPipe } from './pipes';

@NgModule({
  imports: [CommonModule],
  declarations: [SearchComponent, ReversePipe, TitlePrefixPipe],
  exports: [CommonModule, SearchComponent, ReversePipe, TitlePrefixPipe],
})
export class SharedModule {}
