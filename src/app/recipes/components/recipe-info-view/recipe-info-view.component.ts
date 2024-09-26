import {Component, input} from '@angular/core';
import {Recipe} from "../../model/recipe.model";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faClock} from "@fortawesome/free-regular-svg-icons";
import {faCircleExclamation} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-recipe-info-view',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './recipe-info-view.component.html',
  styleUrl: './recipe-info-view.component.scss'
})
export class RecipeInfoViewComponent {

  public recipe = input.required<Recipe>()
  protected readonly faClock = faClock;
  protected readonly faExclamation = faCircleExclamation;

}
