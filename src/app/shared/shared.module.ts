import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from './components';
import { ReversePipe, TitlePrefixPipe } from './pipes';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [SearchComponent, ReversePipe, TitlePrefixPipe],
  exports: [
    CommonModule,
    FormsModule,
    SearchComponent,
    ReversePipe,
    TitlePrefixPipe,
  ],
})
export class SharedModule {}
