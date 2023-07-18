import { EventEmitter, Injectable } from "@angular/core";
import { Person } from "../Models/person.model";
import { LoggingService } from "./loggingService.service";

@Injectable()
export class PersonsService {
	constructor(
		private loggingService: LoggingService
	) {}
	
	persons: Person[] = [
		new Person("Juan", "Perez"),
		new Person("Laura", "Juarez"),
		new Person("Carlotta", "Limon"),
	];

	personIndex = new EventEmitter<number>();

	addToPersons = (person: Person) => {
		this.persons.push(person);
		this.loggingService.sendMessageToConsole
			(JSON.stringify(person));
	};
}
