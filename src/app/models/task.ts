export class Task {
	id: number;
	projectId: string;
	taskName: string;
	personId: number;
	cost: number;
	start: string;
	end: string;

	constructor(id: number, projectId: string, taskName: string, personId: number, cost: number, start: string, end: string) {
		this.id = id;
		this.projectId = projectId;
		this.taskName = taskName;
		this.personId = personId;
		this.cost = cost;
		this.start = start;
		this.end = end;
	}
}