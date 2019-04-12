import { ActivatedRoute } from '@angular/router';
import { EventCalendar } from '../../models/eventcalendar';
import { Task } from '../../models/task';
import { TasksService } from '../../services/tasks.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { OptionsInput } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarComponent } from 'ng-fullcalendar';
import { Location } from '@angular/common';

@Component({
	selector: 'app-day-grid-month',
	templateUrl: './day-grid-month.component.html',
	styleUrls: ['./day-grid-month.component.css']
})

export class DayGridMonthComponent implements OnInit {

	options: OptionsInput;
	eventsModel: any;
	@ViewChild('fullcalendar') fullcalendar: CalendarComponent;
	personTask: Task[] = [];
	personIds: any[] = [];
	constructor(
		private tasksService: TasksService,
		private route: ActivatedRoute,
		private location: Location
	) { }

	ngOnInit() {
		this.getPersonId();
		const value = +this.route.snapshot.paramMap.get('personId');
		this.getPerson(value);
	}

	eventClick(model) {
		console.log(model);
	}

	eventDragStop(model) {
		console.log(model);
	}

	dateClick(model) {
		console.log(model);
	}

	clickButton(model) {
		console.log(model);
	}

	updateEvents() {
		this.eventsModel = [{
			title: 'Updaten Event',
			start: this.yearMonth,
			end: this.yearMonth
		}];
	}

	get yearMonth(): string {
		const dateObj = new Date();
		return dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
	}

	// chuyen doi dinh dang ngay thang theo dung format trong event
	convertDate(date: string): string {
		var MM = new Date(date).getMonth() + 1;
		var dd = new Date(date).getDate();
		return new Date(date).getFullYear() + "-" + (MM < 10 ? '0' : '') + MM + "-" + (dd < 10 ? '0' : '') + dd;
	}

	// lay danh sach task theo person truyen vao event cua fullcalendar
	getPerson(value: any): void {
		this.tasksService.getPerson(value)
			.subscribe(t => {
				if ( t == 0 ) {
					alert.call(this.goBack(), "khong tim thay id");
				} else {
					this.personTask = t
					var eventjson: Object[] = [];
					for (var i = 0; i < this.personTask.length; i++) {
						eventjson.push(new EventCalendar(this.personTask[i].taskName, this.convertDate(this.personTask[i].start), this.convertDate(this.personTask[i].end) + "T24:00:00"));
					}
					this.options = {
						editable: true,
						events: eventjson,
						customButtons: {
							myCustomButton: {
								text: 'custom!',
								click: function () {
									alert('clicked the custom button!');
								}
							}
						},
						header: {
							left: 'prev,next today myCustomButton',
							center: 'title',
							right: 'dayGridMonth,timeGridWeek,timeGridDay'
						},
						plugins: [dayGridPlugin, interactionPlugin]
					};

				}
			})

	}

	// thay doi person hien thi
	onChange(value: any) {
		if (value != "") {
			this.options = null;
		}
		this.getPerson(value)
	}

	// lay danh sach idperson trong db dua len the select
	getPersonId() {
		this.tasksService.getTasks().subscribe(
			t => {
				for (var i = 0; i < t.length; i++) {
					if (!this.personIds.includes(t[i].personId)) {
						this.personIds.push(t[i].personId);
					}
				}
			}
		)
	}

	// tro lai trang truoc
	goBack(): void {	
		this.location.back();
	}
}