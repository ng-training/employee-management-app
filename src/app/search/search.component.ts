import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() triggerIfEmpty: boolean;

  @Output() textChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onKeyUp(newText: string) {
    const isEmpty = newText && newText.length > 0;
    if (!isEmpty || this.triggerIfEmpty) {
      this.textChanged.next(newText);
    }
  }
}
