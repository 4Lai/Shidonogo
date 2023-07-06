import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AnimeListComponent } from './pages/anime-list/anime-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SingleRecommendedComponent } from './shared/components/single-recommended/single-recommended.component';
import { MangaListComponent } from './pages/manga-list/manga-list.component';
import { MangaDetailsComponent } from './shared/components/manga-details/manga-details.component';
import { singleMangaResolverResolver } from './shared/resolvers/single-manga-resolver.resolver';
import { homeMangaResolver } from './shared/resolvers/home-manga.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    resolve: { data: homeMangaResolver },
  },
  { path: 'anime-list', component: AnimeListComponent },
  { path: 'anime-list/:genre', component: SingleRecommendedComponent },
  { path: 'manga-list', component: MangaListComponent },
  {
    path: 'manga-list/:id',
    component: MangaDetailsComponent,
    resolve: { data: singleMangaResolverResolver },
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
