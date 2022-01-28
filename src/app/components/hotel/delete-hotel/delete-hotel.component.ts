import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-delete-hotel',
  templateUrl: './delete-hotel.component.html',
  styleUrls: ['./delete-hotel.component.css']
})
export class DeleteHotelComponent implements OnInit {

  id: number;
  name: String;
  constructor(
    private hotelService : HotelService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.id = this.hotelService.getId();
    this.name = this.hotelService.getName();
  }

  onDeleteHotel(){
    this.hotelService.deleteHotel(this.id).subscribe(next =>{
      this.toastr.success('Dress deleted successfully');
    }, error => {
    
      this.toastr.error('Dress deleting failed');
    });
    window.location.reload();
  }
  

}
