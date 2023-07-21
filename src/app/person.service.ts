import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Person } from './entities';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http:HttpClient) { }

  fetchAll() {
    return this.http.get<Person[]>(environment.serverUrl+'/api/person');
  }
  delete(person: Person) {
    return this.http.delete<void>(environment.serverUrl+'/api/person/' +person._id)
  }
  add(person: Person) {
    return this.http.post<Person>(environment.serverUrl+'/api/person/', person)
  }
}
