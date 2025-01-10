import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {
  todos: any[] = []; // Array para almacenar los todos

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    // Consultar los todos al cargar el componente
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data.slice(0, 10); // Mostrar solo los primeros 10 todos
    });
  }
}
