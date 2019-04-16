import { Component, OnInit } from '@angular/core';

import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/task';

@Component({
	selector: 'app-tasks',
	templateUrl: './tasks.component.html',
	styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

	tasks: Task[];
	arrToFind: Task[];
	countPage: Number;
	pages: Number[];
	task: Task;
	personId: any = null;

	constructor(
		private tasksService: TasksService
	) { }

	ngOnInit() {
		this.getTasks()
	}

//lay danh sach task tu database
	getTasks(): void {
		this.tasksService.getTasks()
			.subscribe(
				tasks => {
					this.arrToFind=tasks;
					this.tasks = tasks.slice(0, 10);
					this.pages = [];
					this.countPage = tasks.length / 10;
					for (var i = 1; i <= this.countPage; i++) {
						this.pages[i - 1] = i;
					}
				}
			)
	}

// phan trang
	partionPage(start: number): void {
		this.tasksService.getTasks()
			.subscribe(
				tasks => {
					this.tasks = tasks.slice((start - 1) * 10, start * 10);
				}
			)
	}

	activeDetail() {
		console.log("da active");
		document.getElementById("detail").style.display="block";
		document.getElementById("calendar").style.display="none";
	} 
	
	findTask(value : any){
		var flat=0;
		for (var x of this.arrToFind)
		{
			flat++;
			if(x.taskName == value || x.id == value){
				this.tasks=[];
				this.tasks.push(x);
				break;
			} else if(flat == this.arrToFind.length){
				this.getTasks();
			}
		}
	}
}
