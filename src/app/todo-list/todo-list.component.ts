import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  editableId: number | null = null;
  newTask: string = '';
  tasks: any[] = [
    {
      title: 'Crear la lista de tareas',
      completed: true,
    },
    {
      title: 'Realizar la estructura HTML',
      completed: true,
    },
    {
      title: 'Desplegar el proyecto en la web',
      completed: false,
    },
  ];

  searchTerm: string = ''; // Propiedad para almacenar el término de búsqueda


  addTask() {
    const task = {
      title: this.newTask,
      completed: false,
    }
    this.tasks.push(task);
    this.newTask = '';
  }
  
  updateTask(task: any, title: string) {
    const index = this.tasks.indexOf(task);
    const updateTask = {
      title,
      completed: task.completed
    }
    this.tasks[index] = { ...task, ...updateTask };
  }

  deleteTask(task: any) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }

  startEdit(id: number): void {
    this.editableId = id;
  }

  stopEdit(task: any, title: string): void {
    this.editableId = null;
    this.updateTask(task, title);
  }

  onSearchChange() {
    // No necesitas hacer nada aquí, la búsqueda se realizará al hacer clic en el botón
  }

  // Función para filtrar la lista de tareas en función del término de búsqueda
  filterTasks(): any[] {
    if (!this.searchTerm) {
      return this.tasks;
    }
  
    return this.tasks.filter((task) =>
      task.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}