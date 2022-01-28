import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private apiUrl = "http://localhost:8080/";
  private id: any;
  private model: any;

  constructor(private http: HttpClient) { }

  public createRoom(model: any) {
    return this.http.post(this.apiUrl + 'create-room-type', model);
  }
  public getRoomsByHotel(hid: number) {
    return this.http.get(this.apiUrl + 'get-room-type-by-hotel/'+ hid );

  }
  public deleteRoomType(id: number) {
    return this.http.delete(this.apiUrl + 'delete-room-type/' + id);
  }
  editRoomType(model: any){
    return this.http.put(this.apiUrl +'update-room-type', model);
  }
  public getRoomById(rid : number) {
    return this.http.get(this.apiUrl + 'get-room-type-by-id/' + rid);

  }
}
