import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  powers = [ 'Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
 
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck OverStreet');

  submitted = false;

  onSubmit(){
    this.submitted = true
  }
  newHero(){
    this.model = new Hero(42, '', '')
  }

}
