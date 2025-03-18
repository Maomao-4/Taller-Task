import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task/interface/task.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
  
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
