import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task_app';
  newTask: string = '';
  tasks : Array<{ done: boolean; text: string }> = [
    { done: false, text: 'Install Dependencies' },
    { done: false, text: 'Product Feature' },
    { done: false, text: 'Write Unit test' },
    { done: false, text: 'Deploy app' },
];
//Ajouter tache
addTask(newTask: string): void {
  if (newTask.trim() !== '') {
    this.tasks.push({ done: false, text: newTask });
    this.newTask = '';
  }
}

//modifier tache
modifyTask(task:any){
  const index = this.tasks.indexOf(task)
  this.tasks[index].text = "New task";
}

//supprimer tache
deleteTask(task:any): void {
  const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?');
  const index = this.tasks.indexOf(task)
  if (confirmDelete) {
    this.tasks.splice(index, 1);
  }
}

//effacer toutes les taches
clearTasks(): void {
  this.tasks = [];
}
}
