import { NgModule } from '@angular/core';

import { SearchComponent } from './search/search.component';

@NgModule({
    declarations: [SearchComponent],
    exports: [SearchComponent],
})
export class SharedModule { }
