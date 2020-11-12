import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeItemComponent } from './recipes/recipe-section/recipe-item/recipe-item.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogSectionComponent } from './blogs/blog-section/blog-section.component';
import { BlogItemComponent } from './blogs/blog-section/blog-item/blog-item.component';
import { RecipeSectionComponent } from './recipes/recipe-section/recipe-section.component';
import { AuthorItemComponent } from './shared/articles/author-item/author-item.component';
import { BlogItemFeaturedComponent } from './blogs/blog-section/blog-item-featured/blog-item-featured.component';
import { BlogItemTopComponent } from './blogs/blog-section/blog-item-top/blog-item-top.component';
import { BlogSectionLandingComponent } from './blogs/blog-section-landing/blog-section-landing.component';
import { LoginComponent } from './shared/forms/login/login.component';
import { SignUpComponent } from './shared/forms/sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { RecipePageSectionComponent } from './recipes/recipe-page-section/recipe-page-section.component';
import { RecipePageItemComponent } from './recipes/recipe-page-section/recipe-page-item/recipe-page-item.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { MoreRecipeSectionComponent } from './view-recipe/more-recipe-section/more-recipe-section.component';
import { MoreRecipeItemComponent } from './view-recipe/more-recipe-section/more-recipe-item/more-recipe-item.component';
import { CommentSectionComponent } from './view-recipe/comment-section/comment-section.component';
import { BlogArticleComponent } from './blogs/blog-article/blog-article.component';
import { AuthorComponent } from './shared/articles/author/author.component';
import { DatePipe } from '@angular/common';
import { ArticleImageComponent } from './shared/articles/article-image/article-image.component';
import { RandomBackgroundDirective } from './shared/directives/random-background.directive';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SearchComponent } from './search/search.component';
import { AdvSearchComponent } from './shared/forms/adv-search/adv-search.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule} from '@angular/material/menu';
import { SidebarModule } from 'ng-sidebar';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    RecipesComponent,
    RecipeItemComponent,
    BlogsComponent,
    BlogSectionComponent,
    BlogItemComponent,
    RecipeSectionComponent,
    AuthorItemComponent,
    BlogItemFeaturedComponent,
    BlogItemTopComponent,
    BlogSectionLandingComponent,
    LoginComponent,
    SignUpComponent,
    ProfileComponent,
    RecipePageSectionComponent,
    RecipePageItemComponent,
    ViewRecipeComponent,
    MoreRecipeSectionComponent,
    MoreRecipeItemComponent,
    CommentSectionComponent,
    BlogArticleComponent,
    AuthorComponent,
    ArticleImageComponent,
    RandomBackgroundDirective,
    ShoppingListComponent,
    SearchComponent,
    AdvSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatMenuModule,
    SidebarModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
