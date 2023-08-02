import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { sortByInt } from '../../helpers/sort-by';
import { PageEvent } from '@angular/material/paginator';
import { TopCharactersService } from '../../services/top-characters.service';

@Component({
  selector: 'app-top-characters-list',
  templateUrl: './top-characters-list.component.html',
  styleUrls: ['./top-characters-list.component.scss'],
})
export class TopCharactersListComponent {
  topCharactersDataList = this.activatedRoute.snapshot.data['characters'];
  searchText: string = '';
  swtichSort: boolean = false;
  searchTitle: string = 'name';
  length: number = this.topCharactersDataList.pagination.items.total;
  pageSize: number = this.topCharactersDataList.pagination.items.per_page;
  indexOfPage: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private topCharactersService: TopCharactersService
  ) {}

  onSearchTextEntered(search: string) {
    this.searchText = search;
  }

  sortOnClick() {
    this.swtichSort = !this.swtichSort;
    sortByInt(this.topCharactersDataList.data, 'favorites', this.swtichSort);
  }

  onPageChange(event: PageEvent) {
    this.indexOfPage = event.pageIndex + 1;
    this.topCharactersService
      .getCharactersByPage(event.pageIndex + 1)
      .subscribe((val) => {
        return (this.topCharactersDataList = val);
      });
  }
}
