import {Routes} from '@angular/router';
import {RecipeListComponent} from "./recipes/components/recipe-list/recipe-list.component";
import {RecipeDetailViewComponent} from "./recipes/components/recipe-detail-view/recipe-detail-view.component";
import {RecipeEditComponent} from "./recipes/components/recipe-edit/recipe-edit.component";


export const routes: Routes = [
  {
    path: "",
    redirectTo: "/recipes",
    pathMatch: "full"
  },
  {
    path: "recipes",
    component: RecipeListComponent,
  },
  {
    path: "recipes/new",
    component: RecipeEditComponent,
  },
  {
    path: "recipes/:recipeID",
    component: RecipeDetailViewComponent,
  },
  {
    path: "recipes/:recipeID/edit",
    component: RecipeEditComponent,
  }
];
