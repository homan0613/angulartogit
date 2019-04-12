import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from 'ng-fullcalendar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TaskDetailComponent } from './pages/task-detail/task-detail.component';
import { DayGridMonthComponent } from './pages/day-grid-month/day-grid-month.component';

@NgModule({
	declarations: [
		AppComponent,
		TasksComponent,
		TaskDetailComponent,
		DayGridMonthComponent
	],
	imports: [
		BrowserModule,
		FullCalendarModule,
		FormsModule,
		HttpClientModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
