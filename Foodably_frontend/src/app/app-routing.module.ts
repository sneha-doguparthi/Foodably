import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogArticleComponent } from './blogs/blog-article/blog-article.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blogs/:id', component: BlogArticleComponent },
  { path: 'profile',
    redirectTo: '/profile/shoppinglist',
    pathMatch: 'full'
  },
  { path: 'profile', component: ProfileComponent, children: [
      { path: 'shoppinglist', component: ShoppingListComponent }
    ]},
  { path: 'search', component: SearchComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'viewRecipe', component: ViewRecipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
