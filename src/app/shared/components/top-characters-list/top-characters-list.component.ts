import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-top-characters-list',
  templateUrl: './top-characters-list.component.html',
  styleUrls: ['./top-characters-list.component.scss'],
})
export class TopCharactersListComponent {
  topCharactersDataList = this.activatedRoute.snapshot.data['characters'];
  searchText: string = '';

  
  constructor(private activatedRoute: ActivatedRoute) {}
  
  onSearchTextEntered(search: string) {
    this.searchText = search;
  }
}
