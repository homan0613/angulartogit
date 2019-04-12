import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Task } from '../models/task';

const endpoint = '/api';

@Injectable({
	providedIn: 'root'
})

export class TasksService {

	constructor(private http: HttpClient) { }

	// lay danh sach task tu server
	getTasks(): Observable<any> {
		return this.http.get(endpoint + 'lists/getall')
			.pipe(
				catchError(this.handleError<any>('gettasks'))
			)
	}

	// lay task theo id
	getTask(id: number): Observable<Task> {
		return this.http.get<Task>(endpoint + '/lists/gettask?id=' + id)
			.pipe(
				catchError(this.handleError<Task>('gettasks'))
			)
	}

	//lay person theo id
	getPerson(personId: number): Observable<any> {
		return this.http.get(endpoint + '/lists/getperson?personid=' + personId)
			.pipe(
				catchError(this.handleError<any>('gettasks'))
			)
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			console.log(`${operation} failed: ${error.message}`);
			return of(result as T);
		};
	}
}
