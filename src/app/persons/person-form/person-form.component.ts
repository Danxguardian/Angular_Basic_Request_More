import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { Person } from "../../Models/person.model";
import { PersonsService } from "../../Services/personsService.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-person-form",
	templateUrl: "./person-form.component.html",
})
export class PersonFormComponent implements OnInit {
	constructor(
		private personsService: PersonsService,
		private router: Router
	) {}
	ngOnInit(): void {
		this.personsService.personIndex.subscribe((index: number) => {
			alert("Se ha seleccionado el elemento " + index);
		});
	}

	lastNameInput: string = "";
	nameInput: string = "";

	addNewPerson = () => {
		const newPerson = new Person(this.nameInput, this.lastNameInput);
		this.personsService.addToPersons(newPerson);
		this.router.navigate(["persons"]);
	};
}
