import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age:  number = 45;

  get capitalizedName():string {
    return this.name.charAt(0).toUpperCase() + this.name.slice(1)
  }

  getHeroDescription():string{
    return `${this.capitalizedName} - ${this.age}`
  }

  changeHero():void {

    if (this.name === "ironman") {
      this.name = "spiderman";
    }else{
      this.name = "ironman"
    } 
  }
    
  changeAge():void {
    if (this.age === 45){
      this.age = 32;
    }else{
      this.age = 45;
    }
  }
}
