import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() searchTextChanged: EventEmitter<string> =
    new EventEmitter<string>();
  enteredSearchValue: string = '';

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
}
