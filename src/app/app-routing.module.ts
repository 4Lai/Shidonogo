import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AnimeListComponent } from './pages/anime-list/anime-list.component';
import { AnimeSingleComponent } from './pages/anime-single/anime-single.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ShonenJumpComponent } from './shared/components/shonen-jump/shonen-jump.component';
import { ComedyComponent } from './shared/components/comedy/comedy.component';
import { RomanceComponent } from './shared/components/romance/romance.component';
import { MusicComponent } from './shared/components/music/music.component';
import { AdventureComponent } from './shared/components/adventure/adventure.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'anime-list',
    component: AnimeListComponent,
    children: [
      {
        path: 'shonen-jump',
        component: ShonenJumpComponent,
      },
      {
        path: 'comedy',
        component: ComedyComponent,
      },
      {
        path: 'romance',
        component: RomanceComponent,
      },
      {
        path: 'music',
        component: MusicComponent,
      },
      {
        path: 'adventure',
        component: AdventureComponent,
      },
    ],
  },
  // { path: 'anime-single/:slug', component: AnimeSingleComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
