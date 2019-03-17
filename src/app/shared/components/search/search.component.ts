import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  @Input() placeholderText: string;

  @Output() textChanged = new EventEmitter<string>();

  onKeyUp(newText: string) {
    this.textChanged.emit(newText);
  }
}
