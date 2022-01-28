import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HotelService } from 'src/app/services/hotel.service';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-delete-room',
  templateUrl: './delete-room.component.html',
  styleUrls: ['./delete-room.component.css']
})

export class DeleteRoomComponent implements OnInit {

  id: number;
  name: String;
  constructor(
    private hotelService : HotelService,
    private toastr: ToastrService,
    private roomService : RoomService,
  ) { }

  ngOnInit(): void {
 this.id = this.hotelService.getId();
 this.name = this.hotelService.getName();
  }

  onDeleteRoomType(){
    this.roomService.deleteRoomType(this.id).subscribe(next =>{
      this.toastr.success('Dress deleted successfully');
    }, error => {
    
      this.toastr.error('Dress deleting failed');
    });
    window.location.reload();
  }
  

}
