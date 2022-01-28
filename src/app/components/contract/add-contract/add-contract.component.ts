import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContractService } from 'src/app/services/contract.service';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {

  addContractForm: FormGroup;
  model: any;
  allHotels: any;

  constructor(
    public dialogRef: MatDialogRef<AddContractComponent>,
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

  getAllHotels() {
    this.hotelService.getAllHotels().subscribe(data => {
      this.allHotels = data;
      console.log(this.allHotels);
    }, error => {

      this.toastr.error('getting Hotels failed');
    });

  }

  addContract() {
    this.addContractForm = this.fb.group({
      hotel: ['', Validators.required],
      start: ['', Validators.required],
      end: ['', Validators.required],
    });

  }

  onAddContractSubmit() {

    this.model = {
      "hid": this.addContractForm.value.hotel,
      "startDate": new Date(this.addContractForm.value.start),
      "endDate": new Date(this.addContractForm.value.end)
    }

    console.log(this.model);

    this.contractService.createContract(this.model).subscribe(data => {
      this.toastr.success('Dress added successfully');
     }, error => {
 
       this.toastr.error('Dress adding failed');
     });
  }

}
