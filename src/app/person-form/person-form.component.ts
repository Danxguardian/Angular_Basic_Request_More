import { Component, Output, EventEmitter } from "@angular/core";
import { Person } from "../Models/person.model";

@Component({
	selector: "app-person-form",
	templateUrl: "./person-form.component.html",
})
export class PersonFormComponent {
	@Output() objectNewPerson: EventEmitter<Person> =
		new EventEmitter<Person>();

	nameInput: string = "";
	lastNameInput: string = "";

	addNewPerson = () => {
		const newPerson = new Person(this.nameInput, this.lastNameInput);
		this.objectNewPerson.emit(newPerson);
	};
}
