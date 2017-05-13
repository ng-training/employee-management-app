import {
  Component,
  Output,
  Input,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  @Input() triggerIfEmpty: boolean;

  @Output() textChanged = new EventEmitter<string>();

  onKeyUp(newText: string) {
    const isEmpty = newText && newText.length > 0;
    if (!isEmpty || this.triggerIfEmpty) {
      this.textChanged.next(newText);
    }
  }
}
