import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Person } from "../Models/person.model";
import { catchError, map } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable()
export class DataService {
	constructor(private httpClient: HttpClient) {}
	url =
		"https://proyectopersonas-23548-default-rtdb.firebaseio.com/personsData.json";
	readPersonsOnDB() {
		return this.httpClient.get<Person[]>(this.url);
	}

	savePersonsOnDB(persons: Person[]) {
		this.httpClient
			.put(this.url, persons)
			.pipe(
				map((response: any) => {
					return response;
				}),
				catchError((error) => {
					console.log(error);
					return throwError(() => error);
				})
			)
			.subscribe();
	}
}
