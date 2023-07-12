import {
	Component,
	Output,
	EventEmitter,
	ViewChild,
	ElementRef,
} from "@angular/core";
import { Person } from "../Models/person.model";

@Component({
	selector: "app-person-form",
	templateUrl: "./person-form.component.html",
})
export class PersonFormComponent {
	@Output() objectNewPerson: EventEmitter<Person> =
		new EventEmitter<Person>();

	@ViewChild("exampleInputRef") 
	exampleInputRef: ElementRef;

	lastNameInput: string = "";

	addNewPerson = (nameInputRef: HTMLInputElement) => {
		console.log(this.exampleInputRef.nativeElement.value);
		const newPerson = new Person(nameInputRef.value, this.lastNameInput);
		this.objectNewPerson.emit(newPerson);
	};
}
