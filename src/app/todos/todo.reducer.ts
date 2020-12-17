import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';
import { toggleAll } from './todo.actions';

export const estadoInicial: Todo[] = [];

const _todoReducer = createReducer(
    estadoInicial,
    on(actions.crear, (state, {texto}) => [...state, new Todo(texto)]),
    on(actions.toggle, (state, {id}) => state.map(todo => todo.id === id ? {...todo, completado : !todo.completado} : todo)),
    on(actions.editar, (state,{id, texto}) => state.map(todo => todo.id === id ? {...todo, texto} : todo)),
    on(actions.borrar, (state, {id}) => state.filter(todo => todo.id !== id)),
    on(actions.toggleAll, (state, {completado}) => state.map(todo => ({...todo, completado}))),
    on(actions.limpiarCompletados, (state) => state.filter(todo => !todo.completado))
  );
   
  export function todoReducer(state, action) {
    return _todoReducer(state, action);
  }