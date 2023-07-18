import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { sortByInt, sortByInte } from '../../helpers/sort-by';

@Component({
  selector: 'app-top-characters-list',
  templateUrl: './top-characters-list.component.html',
  styleUrls: ['./top-characters-list.component.scss'],
})
export class TopCharactersListComponent {
  topCharactersDataList = this.activatedRoute.snapshot.data['characters'];
  searchText: string = '';
  swtichSort: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) {}

  onSearchTextEntered(search: string) {
    this.searchText = search;
  }

  sortOnClick() {
    this.swtichSort = !this.swtichSort;
    sortByInt(this.topCharactersDataList.data, 'favorites', this.swtichSort);
  }
}
