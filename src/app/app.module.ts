import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AnimeListComponent } from './pages/anime-list/anime-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RandomQuotesComponent } from './shared/components/random-quotes/random-quotes.component';
import { AnimeRecomendedComponent } from './shared/components/anime-recomended/anime-recomended.component';
import { BooksRecomendedComponent } from './shared/components/books-recomended/books-recomended.component';
import { FeaturedBookComponent } from './shared/components/featured-book/featured-book.component';
import { FeaturedMangaComponent } from './shared/components/featured-manga/featured-manga.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LinkComponent } from './shared/components/link/link.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { IframeComponent } from './shared/components/iframe/iframe.component';
import { RandomQuotesContentComponent } from './shared/components/random-quotes-content/random-quotes-content.component';
import { LinkFooterComponent } from './shared/components/link-footer/link-footer.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { SingleRecommendedComponent } from './shared/components/single-recommended/single-recommended.component';
import { FeaturedBookRecommendedComponent } from './shared/components/featured-book-recommended/featured-book-recommended.component';
import { MangaListComponent } from './pages/manga-list/manga-list.component';
import { MangaDetailsComponent } from './shared/components/manga-details/manga-details.component';
import { TextShortenerPipe } from './shared/pipes/text-shortener.pipe';
import { TrendingAnimeListComponent } from './shared/components/trending-anime-list/trending-anime-list.component';
import { TrendingAnimeComponent } from './pages/trending-anime/trending-anime.component';
import { BackToHomeComponent } from './shared/components/back-to-home/back-to-home.component';
import { TrendingListReusableComponent } from './shared/components/trending-list-reusable/trending-list-reusable.component';
import { AnimeDetailsComponent } from './shared/components/anime-details/anime-details.component';
import { NewsletterComponent } from './shared/components/newsletter/newsletter.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { InfoComponent } from './pages/info/info.component';
import { AboutInfoComponent } from './shared/components/about-info/about-info.component';
import { SearchComponent } from './shared/components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopCharactersComponent } from './pages/top-characters/top-characters.component';
import { TopCharactersListComponent } from './shared/components/top-characters-list/top-characters-list.component';
import { SeasonsComponent } from './pages/seasons/seasons.component';
import { SeasonsAllComponent } from './shared/components/seasons-all/seasons-all.component';
import { SeasonsDetailsComponent } from './shared/components/seasons-details/seasons-details.component';
import { SafePipe } from './shared/pipes/safe.pipe';
import { OrderComponent } from './pages/order/order.component';
import { OrderProductComponent } from './shared/components/order-product/order-product.component';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ClickOutsideDirective } from './shared/directives/click-outside.directive';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimeListComponent,
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
    SingleRecommendedComponent,
    FeaturedBookRecommendedComponent,
    MangaListComponent,
    MangaDetailsComponent,
    TextShortenerPipe,
    TrendingAnimeListComponent,
    TrendingAnimeComponent,
    BackToHomeComponent,
    TrendingListReusableComponent,
    AnimeDetailsComponent,
    NewsletterComponent,
    LoadingSpinnerComponent,
    InfoComponent,
    AboutInfoComponent,
    SearchComponent,
    TopCharactersComponent,
    TopCharactersListComponent,
    SeasonsComponent,
    SeasonsAllComponent,
    SeasonsDetailsComponent,
    SafePipe,
    OrderComponent,
    OrderProductComponent,
    ClickOutsideDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
