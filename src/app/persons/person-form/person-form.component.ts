import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { Person } from "../../Models/person.model";
import { PersonsService } from "../../Services/personsService.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
	selector: "app-person-form",
	templateUrl: "./person-form.component.html",
})
export class PersonFormComponent implements OnInit {
	constructor(
		private personsService: PersonsService,
		private router: Router,
		private route: ActivatedRoute
	) {}

	index: number;
	nameInput: string = "";
	lastNameInput: string = "";
	status: string;
	ngOnInit(): void {
		this.index = this.route.snapshot.params["id"];
		if (this.index) {
			let person: Person = this.personsService.findPerson(this.index);
			this.nameInput = person.name;
			this.lastNameInput = person.lastName;
		}

		this.status = this.route.snapshot.queryParams["status"];
	}

	addNewPerson = () => {
		const newPerson = new Person(this.nameInput, this.lastNameInput);
		if (this.index) {
			this.personsService.editPerson(this.index, newPerson);
		} else {
			this.personsService.addToPersons(newPerson);
		}
		this.router.navigate(["persons"]);
	};

	deletePerson = () => {
		if (this.status === "active") {
			this.personsService.deletePerson(this.index);
			this.router.navigate(["persons"]);
		}
	};
}
