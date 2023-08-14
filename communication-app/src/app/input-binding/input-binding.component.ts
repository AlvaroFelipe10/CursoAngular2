import { Component, Input } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent {

  @Input() name: string | undefined;
  @Input('othername') lastName: string | undefined;
  @Input()age: number | undefined;

  clients!: Client[];

  constructor(){
    this.clients = [
      {id: 1, name: "Bob", age:30},
      {id: 2, name: "Ana", age:20},
      {id: 3, name: "Augusto", age:4},
      {id: 4, name: "Maria", age:33}

    ]
  }
}
