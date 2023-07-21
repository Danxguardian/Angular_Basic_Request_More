import { EventEmitter, Injectable } from "@angular/core";
import { Person } from "../Models/person.model";
import { LoggingService } from "./loggingService.service";

@Injectable()
export class PersonsService {
	constructor(private loggingService: LoggingService) {}

	persons: Person[] = [
		new Person("Juan", "Perez"),
		new Person("Laura", "Juarez"),
		new Person("Carlotta", "Limon"),
	];

	personIndex = new EventEmitter<number>();

	addToPersons = (person: Person) => {
		this.persons.push(person);
		this.loggingService.sendMessageToConsole(JSON.stringify(person));
	};

	findPerson = (index: number) => {
		let person: Person = this.persons[index];
		return person;
	};

	editPerson = (index: number, newPerson: Person) => {
		this.persons[index] = newPerson;
	};

	deletePerson = (index: number) => {
		this.persons.splice(index, 1);
	};
}
