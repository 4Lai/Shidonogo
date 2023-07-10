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
import { homeAnimeRecommendationResolver } from './shared/resolvers/home-anime-recommendation.resolver';
import { TrendingAnimeComponent } from './pages/trending-anime/trending-anime.component';
import { animeListTrendingResolver } from './shared/resolvers/anime-list-trending.resolver';
import { mangaListResolver } from './shared/resolvers/manga-list.resolver';
import { animeListTrendingIdResolver } from './shared/resolvers/anime-list-trending-id.resolver';
import { TrendingAnimeListComponent } from './shared/components/trending-anime-list/trending-anime-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      data: homeMangaResolver,
      animeList: homeAnimeRecommendationResolver,
    },
  },
  {
    path: 'anime-list',
    component: AnimeListComponent,
  },
  {
    path: 'trending-anime',
    component: TrendingAnimeListComponent,
    resolve: { trendingAnime: animeListTrendingResolver },
  },
  {
    path: 'trending-anime/:id',
    component: TrendingAnimeComponent,
    resolve: { trendingAnime: animeListTrendingIdResolver },
  },
  { path: 'anime-list/:genre', component: SingleRecommendedComponent },
  {
    path: 'manga-list',
    component: MangaListComponent,
    resolve: { mangaList: mangaListResolver },
  },
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
