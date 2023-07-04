import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AnimeListComponent } from './pages/anime-list/anime-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SingleRecommendedComponent } from './shared/components/single-recommended/single-recommended.component';
import { MangaListComponent } from './pages/manga-list/manga-list.component';
import { FeaturedBookRecommendedComponent } from './shared/components/featured-book-recommended/featured-book-recommended.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'anime-list', component: AnimeListComponent },
  { path: 'anime-list/:genre', component: SingleRecommendedComponent },
  { path: 'manga-list', component: MangaListComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
