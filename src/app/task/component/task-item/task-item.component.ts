import { Component, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interface/task.interface';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  standalone: false,
})
export class TaskItemComponent {
  @Input() task!: Task;

  isEditing = false;
  editableTask!: Task;

  constructor(private taskService: TaskService) {}

  toggleDone() {
    this.task.done = !this.task.done;
    this.taskService.updateTask(this.task);
  }

  async deleteTask(task: Task) {
    if (confirm('¿Estás seguro de eliminar esta nota?')) {
      const response = await this.taskService.deleteTask(task);
    }
  }

  async updateTask(task: Task) {
    const response = await this.taskService.updateTask(task);
  }

  async updateAllTask(task: Task) {
    const response = await this.taskService.updateAllTask(task);
  }

  toggleEdit() {
    if (this.isEditing) {
      this.updateAllTask(this.editableTask);
    }
    this.isEditing = !this.isEditing;
  }

  ngOnInit() {

    this.editableTask = { ...this.task };

  }
}
