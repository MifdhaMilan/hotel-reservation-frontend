import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ContractService } from 'src/app/services/contract.service';
import { HotelService } from 'src/app/services/hotel.service';
import { DeleteRoomTypeContractComponent } from './delete-room-type-contract/delete-room-type-contract.component';

@Component({
  selector: 'app-view-contract',
  templateUrl: './view-contract.component.html',
  styleUrls: ['./view-contract.component.css']
})
export class ViewContractComponent implements OnInit {

  addRoomTypeForm: FormGroup;
  cid: any;
  rid: any;
  hid: any;
  contract: any;
  roomTypes: any;
  model: any;
  edit: boolean = false;
  roomType: any;
  noOfRooms: any;
  price: any;

  constructor(
    private contractService: ContractService,
    private fb: FormBuilder,
    private hotelService: HotelService,
    private toastr: ToastrService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.getContractById();
    // this.getRoomTypeByHotel();

  }
  initializeForm() {
    this.addRoomTypeForm = this.fb.group({
      roomType: ['', Validators.required],
      noOfRooms: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  getContractById() {
    this.cid = localStorage.getItem("token");
    this.contractService.getContractById(this.cid).subscribe(data => {
      this.contract = data;
      console.log(this.contract);
      this.roomTypes = this.contract.hotel.roomTypes;
      console.log(this.roomTypes);

    })
    console.log("this.contract");
    

  }

  onAddRoomTypeSubmit() {
    this.model = {
      "rid": this.addRoomTypeForm.value.roomType,
      "cid": localStorage.getItem("token"),
      "noOfRooms": this.addRoomTypeForm.value.noOfRooms,
      "price": this.addRoomTypeForm.value.price,
    }

    console.log(this.model);

    this.contractService.createRoomTypeContract(this.model).subscribe(data => {
      this.toastr.success('Dress added successfully');
    }, error => {

      this.toastr.error('Dress adding failed');
    });
    window.location.reload();
  }

  displayedColumns: string[] = ['Room_Type', 'No_of_Rooms', 'Price', 'action'];

  onEditRoomType(roomType, noOfRooms, price) {
    this.edit = true;
    this.addRoomTypeForm.get("roomType").setValue(roomType);
    this.addRoomTypeForm.get("noOfRooms").setValue(noOfRooms);
    this.addRoomTypeForm.get("price").setValue(price);
  }
  onAddRoomType() {
    this.edit = false;
    window.location.reload();
  }
  onDeleteRoomType(rid, cid, name) {
    this.contractService.setId(rid);
    this.contractService.setCId(cid);
    this.contractService.setName(name);
    const dialogRef = this.dialog.open(DeleteRoomTypeContractComponent, {
      width: '250px',
    });
  }

}
