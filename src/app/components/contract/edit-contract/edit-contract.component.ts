import { Component, OnInit } from '@angular/core';import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContractService } from 'src/app/services/contract.service';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-edit-contract',
  templateUrl: './edit-contract.component.html',
  styleUrls: ['./edit-contract.component.css']
})


export class EditContractComponent implements OnInit {

  editContractForm: FormGroup;
  model: any;
  allHotels: any;
  id:any;
  contract: any;

  constructor(
    public dialogRef: MatDialogRef<EditContractComponent>,
    private fb: FormBuilder,
    private _route: ActivatedRoute,
    private toastr: ToastrService,
    private hotelService: HotelService,
    private contractService: ContractService,
  ) { }

  ngOnInit(): void {
    this.addContract();
    this.getAllHotels();
    console.log(this.allHotels);
    
  }
  addContract() {
    this.editContractForm = this.fb.group({
      hotel: ['', Validators.required],
      start: ['', Validators.required],
      end: ['', Validators.required],
    });

    this.id = this.contractService.getId();

    this.contractService.getContractById(this.id).subscribe(data => {
      this.contract = data;
      console.log(this.contract)
      this.editContract();
      
    });

  }
  editContract() {
    this.editContractForm.get("hotel").setValue(this.contract.hotel.hid);
    this.editContractForm.get("start").setValue(this.contract.startDate);
    this.editContractForm.get("end").setValue(this.contract.endDate);

  }

  getAllHotels() {
    this.hotelService.getAllHotels().subscribe(data => {
      this.allHotels = data;
      console.log(this.allHotels);
    }, error => {

      this.toastr.error('getting Hotels failed');
    });

  }

 

  onEditContractSubmit() {

    this.model = {
      "cid": this.contractService.getId(),
      "hid": this.editContractForm.value.hotel,
      "startDate": new Date(this.editContractForm.value.start),
      "endDate": new Date(this.editContractForm.value.end)
    }

    console.log(this.model);

    this.contractService.editContract(this.model).subscribe(data => {
      this.toastr.success('Contract edited successfully');
     }, error => {
 
       this.toastr.error('Contract editing failed');
     });
     window.location.reload();
  }

}
