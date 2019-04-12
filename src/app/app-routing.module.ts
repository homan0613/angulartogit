import { DayGridMonthComponent } from './pages/day-grid-month/day-grid-month.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskDetailComponent } from './pages/task-detail/task-detail.component';
import { TasksComponent } from './pages/tasks/tasks.component';

const routes: Routes = [
	{ path: '', redirectTo: '/tasks', pathMatch: 'full' },
	{ path:'detail/:id', component: TaskDetailComponent },
	{ path:'tasks', component: TasksComponent },
	{ path:'personTasks/:personId', component: DayGridMonthComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
