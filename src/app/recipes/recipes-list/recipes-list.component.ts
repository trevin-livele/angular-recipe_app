import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'this is simply a test', 'https://cdn.pixabay.com/photo/2015/08/25/03/50/herbs-906140_960_720.jpg'),
    new Recipe('A test Recipe', 'this is simply a test', 'https://cdn.pixabay.com/photo/2015/08/25/03/50/herbs-906140_960_720.jpg')

    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
