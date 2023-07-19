import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() searchHolder;
  @Output() searchTextChanged: EventEmitter<string> =
    new EventEmitter<string>();
  enteredSearchValue: string = '';

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
}
