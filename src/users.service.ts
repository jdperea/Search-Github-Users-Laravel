import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  apiSearch = 'https://api.github.com/search/users';
  apiURL = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  // Obtener users
  getAllUsers() {
    //return this.http.get(`${this.apiSearch}?q=jdperea&per_page=10`);
    return this.http.get(`${this.apiURL}?/per_page=10`);
  }

  // Obtener solo un user
  getFilteredUser(username: string) {
    //return this.http.get(`${this.apiURL}/${username}`);
    return this.http.get(`${this.apiSearch}?q=${username}&per_page=10`);
    //https://api.github.com/search/users?q=jdpere&per_page=10
  }
  // Obtener solo un user
  getSingleUser(username: string) {
    return this.http.get(`${this.apiURL}/${username}`);
  }
}
