import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@myorg/data';

@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todos';
  todos: Todo[] = [{ title: 'Todo 1'}, { title: 'Todo2'}];

  constructor(private http: HttpClient){
    this.fetch();
  }

  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe( t => ( this.todos = t ));
  }

  addTodo() {
    this.http.post('/api/addTodo', {} ).subscribe( () => this.fetch());
  }
}