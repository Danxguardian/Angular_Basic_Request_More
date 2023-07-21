import { Component, Input } from "@angular/core";
import { Person } from "../../Models/person.model";
import { PersonsService } from "../../Services/personsService.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-person",
	templateUrl: "./person.component.html",
})
export class PersonComponent {
	@Input() person: Person = new Person("", "");
	@Input() index: number;

	constructor(private router: Router) {}

	sendData = (index: number) => {
		this.router.navigate(["persons", index]);
	};
}
