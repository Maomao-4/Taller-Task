import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { TaskListComponent } from './component/task-list/task-list.component';
import { TaskFormComponent } from './component/task-form/task-form.component';
import { TaskItemComponent } from './component/task-item/task-item.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TaskListComponent,
    TaskItemComponent,
    TaskFormComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    TaskListComponent,
    TaskFormComponent
  ]
})
export class TaskModule {}
