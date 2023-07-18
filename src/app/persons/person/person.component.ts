import { Component, Input } from "@angular/core";
import { Person } from "../../Models/person.model";
import { PersonsService } from "../../Services/personsService.service";

@Component({
	selector: "app-person",
	templateUrl: "./person.component.html",
})
export class PersonComponent {
	@Input() person: Person = new Person("", "");
	@Input() index: number;

	constructor(private personsService: PersonsService) {}

	sendData = () => {
		this.personsService.personIndex.emit(this.index);
	};
}
