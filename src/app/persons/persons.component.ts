import { Component } from "@angular/core";
import { Person } from "../Models/person.model";

@Component({
	selector: "app-persons",
	templateUrl: "./persons.component.html",
})
export class PersonsComponent {
	persons: Person[] = [
		new Person("Juan", "Perez"),
		new Person("Laura", "Juarez"),
		new Person("Carlotta", "Limon"),
	];

	addToPersons = (person: Person) => {
		this.persons.push(person);
	};
}
