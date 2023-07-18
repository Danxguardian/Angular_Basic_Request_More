import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PersonsComponent } from 
          "./persons/persons.component";
import { PersonFormComponent } from 
          "./persons/person-form/person-form.component";

const routes: Routes = [
	{ path: "", component: PersonsComponent },
	{ path: "persons", component: PersonsComponent },
	{ path: "persons/add", component: PersonFormComponent },
	{ path: "persons/:id", component: PersonFormComponent },
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
