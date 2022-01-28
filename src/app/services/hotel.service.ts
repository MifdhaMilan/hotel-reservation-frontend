import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private apiUrl = "http://localhost:8080/";
  private id: number;
  private name:String;

  constructor(private http: HttpClient) { }

  public createHotel(formData: FormData) {
    return this.http.post(this.apiUrl + 'create-hotel', formData);
  }
  public getAllHotels() {
    console.log(this.http.get(this.apiUrl + 'get-all-hotels'));
    return this.http.get(this.apiUrl + 'get-all-hotels');

  }
  public deleteHotel(id: number) {
    return this.http.delete(this.apiUrl + 'delete-hotel/' + id);
  }

  editHotel(formData: FormData){
    return this.http.put(this.apiUrl +'update-hotel', formData);
  }
  public getHotelById(hid : number) {
    return this.http.get(this.apiUrl + 'get-hotel-by-id/' + hid);

  }


  public setId(id: number) {
    this.id = id;
  }
  public getId(){
    return this.id;
  }
  
  public setName(name: String) {
    this.name = name;
  }
  public getName(){
    return this.name;
  }
}
