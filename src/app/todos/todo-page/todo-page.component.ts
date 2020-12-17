import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from 'src/app/todos/todo.actions';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  completadoToggle: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  toggleAll = () => {
    this.completadoToggle = !this.completadoToggle;
    this.store.dispatch(actions.toggleAll({completado: this.completadoToggle}));    
  }

}
