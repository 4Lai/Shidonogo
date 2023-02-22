import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from 'src/app/shared/services/anime.service';

@Component({
  selector: 'app-anime-single',
  templateUrl: './anime-single.component.html',
  styleUrls: ['./anime-single.component.scss'],
})
export class AnimeSingleComponent implements OnInit {
  slug = this.activatedRoute.snapshot.params['slug'];
  naruto = 'Naruto';
  constructor(
    private animeService: AnimeService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.animeService.getAnime(this.slug).subscribe((val) => {
      console.log(val);
    });
  }
}
