import { Component, Input } from "@angular/core";
import { Person } from "../Models/person.model";

@Component({
	selector: "app-person",
	templateUrl: "./person.component.html",
})
export class PersonComponent {
	@Input() person: Person = new Person("", "");
	@Input() index: number;

	constructor() {}
}
