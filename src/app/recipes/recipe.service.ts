import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppinglist.service';

@Injectable()
export class RecipeService {

	recipeSelected = new EventEmitter<Recipe>()

	private recipes: Recipe[] = [
		new Recipe(
			'Test recipe', 
			'This is a simple beef recipe', 
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/480px-Recipe_logo.jpeg',
			[
				new Ingredient('Meat', 1),
				new Ingredient('French Fries', 20),
			]
		),
		new Recipe(
			'Another test recipe', 
			'This is a simple chicken recipe', 
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/480px-Recipe_logo.jpeg',
			[
				new Ingredient('Buns', 2),
				new Ingredient('Meat', 1),
			]
		)
	]

	constructor(private slService: ShoppingListService){}

	getRecipes() {
		return this.recipes.slice()
	}

	getRecipe(id: number) {
		return this.recipes[id]
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients)
	}
}