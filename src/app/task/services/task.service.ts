import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Task {
  id?: string;
  title: string;
  description: string;
  date: Date;
  done: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksCollection = collection(this.firestore, 'tasks'); 

  constructor(private firestore: Firestore) {}

  addTask(task: Task){
    const taskRef = collection(this.firestore, 'tasks');
    return addDoc(taskRef, task);
  }

  getTasks():Observable<Task[]>{
    const taskRef = collection(this.firestore, 'tasks');
    return collectionData(taskRef, {idField: 'id'}) as Observable<Task[]>;
  }

  deleteTask(task: Task){
    const taskRef = doc(this.firestore, `tasks/${task.id}`);
    return deleteDoc(taskRef);
  }
  
  updateTask(task: Task) {
    const taskDocRef = doc(this.firestore, `tasks/${task.id}`);
    return updateDoc(taskDocRef, { done: task.done });
  }

  updateAllTask(task: Task) {
    const taskDocRef = doc(this.firestore, `tasks/${task.id}`);
    return updateDoc(taskDocRef, { ...task });
  }

}
