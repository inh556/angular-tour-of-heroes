// always import the Component symbol from the Angular core library 
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
// @Component is a decorator function that specifies 
// the Angular metadata for the component.

@Component({  // annotate the component class with @Component.
  // the component's CSS element selector
  selector: 'app-heroes', // matches the name of the HTML element
                          //  that identifies this component 
                          // within a parent component's template
  // the location of the component's template file
  templateUrl: './heroes.component.html',
  // the location of the component's private CSS styles
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes = HEROES;

  constructor() { }

  ngOnInit() {
    // The ngOnInit is a lifecycle hook Angular calls ngOnInit shortly
    //  after creating a component. It's a good place to put initialization logic.
    
  }
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

