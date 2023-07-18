import { Component, OnInit } from "@angular/core";
import { Person } from "../Models/person.model";
import { PersonsService } from "../Services/personsService.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-persons",
	templateUrl: "./persons.component.html",
	providers: [],
})
export class PersonsComponent implements OnInit {
	constructor(
		private personService: PersonsService,
		private router: Router
	) {}
	persons: Person[] = [];

	ngOnInit(): void {
		this.persons = this.personService.persons;
	}

	navigateToForm = () => {
		this.router.navigate(["persons/add"]);
	};
}
