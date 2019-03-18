import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppinglist.service';

@Injectable()
export class RecipeService {

	private recipes: Recipe[] = [
		new Recipe(
			'Tasty Schnitzel', 
			'A super-tasty Schnitzel - just awesome!', 
			'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
			[
				new Ingredient('Meat', 1),
				new Ingredient('French Fries', 20),
			]
		),
		new Recipe(
			'Big Fat Burger', 
			'What else you need to say?', 
			'https://upload.wikimedia.org/wikipedia/commons/f/f5/Burger_au_taureau_de_Camargue.jpg',
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