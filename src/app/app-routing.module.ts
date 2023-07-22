import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PersonsComponent } from "./persons/persons.component";
import { PersonFormComponent } from "./persons/person-form/person-form.component";
import { ErrorComponent } from "./error/error.component";

const routes: Routes = [
	{ path: "", component: PersonsComponent },
	{
		path: "persons",
		component: PersonsComponent,
		children: [
			{ path: "add", component: PersonFormComponent },
			{ path: ":id", component: PersonFormComponent },
		],
	},
	{ path: "**", component: ErrorComponent },
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
