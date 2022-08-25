import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  url = "http://localhost:3000/product";

  constructor(private http: HttpClient) {  }

  users() {
    return this.http.get(this.url);
  }

  saveUser(data: any) {
    return this.http.post(this.url, data);
  }


  updateContact(contactId:any,updatedBody:any){
    const endPointUrl = 'http://localhost:3000/product/'+contactId;
    return this.http.put(endPointUrl,updatedBody)
  }


  deleteContact(contactId:any){
    const deleteEndPoint = "http://localhost:3000/product/"+contactId;
    return this.http.delete(deleteEndPoint);
  }

  
}
