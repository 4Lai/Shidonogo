import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AnimeListComponent } from './pages/anime-list/anime-list.component';
import { AnimeSingleComponent } from './pages/anime-single/anime-single.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RandomQuotesComponent } from './shared/components/random-quotes/random-quotes.component';
import { AnimeRecomendedComponent } from './shared/components/anime-recomended/anime-recomended.component';
import { BooksRecomendedComponent } from './shared/components/books-recomended/books-recomended.component';
import { FeaturedBookComponent } from './shared/components/featured-book/featured-book.component';
import { FeaturedMangaComponent } from './shared/components/featured-manga/featured-manga.component';
import { HttpClientModule } from '@angular/common/http';
import { LinkComponent } from './shared/components/link/link.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { IframeComponent } from './shared/components/iframe/iframe.component';
import { RandomQuotesContentComponent } from './shared/components/random-quotes-content/random-quotes-content.component';
import { LinkFooterComponent } from './shared/components/link-footer/link-footer.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { SingleRecommendedComponent } from './shared/components/single-recommended/single-recommended.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimeListComponent,
    AnimeSingleComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    RandomQuotesComponent,
    AnimeRecomendedComponent,
    BooksRecomendedComponent,
    FeaturedBookComponent,
    FeaturedMangaComponent,
    LinkComponent,
    ModalComponent,
    IframeComponent,
    RandomQuotesContentComponent,
    LinkFooterComponent,
    NavComponent,
    ClickOutsideDirective,
    SingleRecommendedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
