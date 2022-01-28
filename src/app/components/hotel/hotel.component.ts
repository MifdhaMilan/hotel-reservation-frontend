import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HotelService } from 'src/app/services/hotel.service';
import { RoomService } from 'src/app/services/room.service';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { DeleteHotelComponent } from './delete-hotel/delete-hotel.component';
import { DeleteRoomComponent } from './delete-room/delete-room.component';
import { EditHotelComponent } from './edit-hotel/edit-hotel.component';
import { EditRoomComponent } from './edit-room/edit-room.component';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  allHotels: any;
  allRooms: any;
  dataSource:any;

  constructor(
    public dialog: MatDialog,
    private hotelService: HotelService,
    private toastr: ToastrService,
    private roomService : RoomService
    ) { }

  ngOnInit(): void {
    this.getAllHotels();
   
  }

  getAllHotels() {
    this.hotelService.getAllHotels().subscribe(data => {
      this.allHotels = data;
      console.log(this.allHotels);
    }, error => {

      this.toastr.error('getting Hotels failed');
    });

  }

  displayedColumns: string[] = ['type','adult', 'action'];
 
  openAddHotelDialog(): void {
    const dialogRef = this.dialog.open(AddHotelComponent, { 
      width: '500px'
    });
  }

  openDeleteHotelDialog(hid : number, name:string): void{
    this.hotelService.setId(hid);
    this.hotelService.setName(name);
    const dialogRef = this.dialog.open(DeleteHotelComponent, {
      width: '250px',  
    });
  }
  
  openEditHotelDialog(hid:number): void{
    this.hotelService.setId(hid);
    const dialogRef = this.dialog.open(EditHotelComponent, {
      width: '500px',  
    });
  }

  openAddRoomDialog(id: number): void{
    this.hotelService.setId(id);
    const dialogRef = this.dialog.open(AddRoomComponent, {
      width: '500px',  
    });
  }

  openDeleteRoomDialog(rid:number, name: String): void{
    this.hotelService.setId(rid);
    this.hotelService.setName(name);
    const dialogRef = this.dialog.open(DeleteRoomComponent, {
      width: '250px',  
    });
  }
  
  openEditRoomDialog(rid:number): void{
    this.hotelService.setId(rid);
    const dialogRef = this.dialog.open(EditRoomComponent, {
      width: '500px',  
    });
  }
}

