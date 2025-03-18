import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService, Task } from '../../services/task.service';
import { TaskModule } from '../../tasks.module';



@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
  standalone: false
})
export class TaskFormComponent {

  taskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService
  ) {

    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]], 
      description: ['', Validators.required], 
      date: ['', Validators.required],
      done: [false]
    });

  }

  minDate = new Date().toISOString();

  async submit() {
    if (this.taskForm.valid) {
      try {
        const response = await this.taskService.addTask(this.taskForm.value);
        console.log(response);


        this.taskForm.reset();
      } catch (error) {
        console.error('Error al agregar la nota:', error);
      }
    }
  }

  ngOnInit() {}
  
}
