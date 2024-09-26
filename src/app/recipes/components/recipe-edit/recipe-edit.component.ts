import {Component, EventEmitter, inject, Output} from '@angular/core';
import {Recipe} from "../../model/recipe.model";
import {FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {TimeUnit} from "../../model/TimeUnit.model";
import {difficultyOptions, IngredientForm, portionUnitOptions, RecipeForm, timeUnitOptions} from "../../model/recipe-form.model";
import {Difficulty} from "../../model/Difficulty.model";
import {PortionUnits} from "../../model/PortionUnit.model";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {Router} from "@angular/router";
import {RecipesService} from "../../services/recipes.service";
import {MarkInvalidDirective} from "../../../shared/directives/mark-invalid.directive";


@Component({
  selector: 'app-recipe-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FaIconComponent,
    MarkInvalidDirective
  ],
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.scss'
})
export class RecipeEditComponent {

  @Output()
  public recipeUpdated = new EventEmitter<Recipe>()

  protected recipeForm: FormGroup<RecipeForm>
  protected readonly timeUnitOptions = timeUnitOptions
  protected readonly difficultyOptions = difficultyOptions
  protected readonly portionUnitOptions = portionUnitOptions

  private readonly formBuilder = inject(NonNullableFormBuilder)
  private readonly router = inject(Router)
  private readonly service = inject(RecipesService)


  constructor() {
    this.recipeForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      servings: [1, [Validators.required, Validators.min(1), Validators.max(10)]],
      duration: this.formBuilder.group({
        value: [0, [Validators.min(1), Validators.max(120)]],
        unit: [TimeUnit.MINUTES, [Validators.required]]
      }),
      difficulty: [Difficulty.EASY, [Validators.required]],
      ingredients: this.formBuilder.array([
        this.createIngredientFormGroup(),
        this.createIngredientFormGroup()
      ]),
      preparation: ["", [Validators.required, Validators.min(10), Validators.max(15000)]]
    })
  }


  onSubmit() {
    // Fülle Rezept mit Werten aus Formular
    let recipe = {
      ...this.recipeForm.getRawValue(),
      img: "/recipe_pictures/default.jpg",
      lastEdited: new Date().toISOString()
    } as Recipe

    // Speichere Rezept (Variante A)
    this.service.addRecipe(recipe)
      .subscribe(() => {
        this.router.navigate(["recipes"])
      })

    // Informiere Elternkomponente über Änderung (Variante B)
    // ACHTUNG! Jetzt muss die Elternkomponente den Service aufrufen.
    // this.recipeUpdated.emit(recipe)
  }


  onCancel() {
    console.log("Abbrechen")
  }


  private createIngredientFormGroup(): FormGroup<IngredientForm> {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      unit: [PortionUnits.NONE],
      quantity: [1, [Validators.required, Validators.min(0.1)]],
    })
  }


  protected addIngredientFormGroup() {
    this.recipeForm.controls.ingredients.push(this.createIngredientFormGroup());
  }


  protected removeIngredientFormGroup(index: number) {
    this.recipeForm.controls.ingredients.removeAt(index);
  }


  protected readonly Object = Object;
}
