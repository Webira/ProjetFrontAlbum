import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class FetcherService {

	constructor(public http: HttpClient) { }

	// Crud Jeux video

	getUser() {
		return this.http.get('https://projetalbumback.azurewebsites.net/user');
	}

	getUserById(Userid: number) {
		return this.http.get('https://projetalbumback.azurewebsites.net/tag/' + Userid);
	}

	addUser(user: any) {
		return this.http.post('https://backbddgamedeploi.azurewebsites.net/jeux', user);
	}

	deleteUser(Userid: number) {
		return this.http.delete('https://backbddgamedeploi.azurewebsites.net/jeux/' + Userid);
	}

}