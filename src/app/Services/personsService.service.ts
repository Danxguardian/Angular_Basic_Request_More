import { EventEmitter, Injectable } from "@angular/core";
import { Person } from "../Models/person.model";
import { LoggingService } from "./loggingService.service";
import { DataService } from "./dataService.service";
import { catchError, map } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable()
export class PersonsService {
	constructor(
		private loggingService: LoggingService,
		private dataService: DataService
	) {}

	persons: Person[] = [];

	personIndex = new EventEmitter<number>();
	dataLoaded = new EventEmitter<boolean>();
	loadPersonsData = () => {
		return this.dataService
			.readPersonsOnDB()
			.pipe(
				map((personsResponse: Person[]) => {
					if (personsResponse) 
						this.persons = personsResponse;
					else 
						this.persons = [];

					this.dataLoaded.emit(true);
				}),
				catchError((error) => {
					console.log(error);
					return throwError(() => error);
				})
			)
			.subscribe();
	};


	
	addToPersons = (person: Person) => {
		this.persons.push(person);
		this.dataService.savePersonsOnDB(this.persons);
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
