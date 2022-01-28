import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})

export class AddHotelComponent implements OnInit {
  addHotelForm: FormGroup;
  model: any;
  file: File;
  

  constructor(
    public dialogRef: MatDialogRef<AddHotelComponent>,
    private fb: FormBuilder,
    private _route: ActivatedRoute,
    private hotelService: HotelService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
   
    this.addHotel();
  }
  addHotel() {
    this.addHotelForm = this.fb.group({
      name: ['', Validators.required],
      address: this.fb.group({
        no: ['', Validators.required],
        street: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required],
      }),
    });

  }


  onAddHotelSubmit() {

    const formData = new FormData();
    formData.append("name", this.addHotelForm.value.name);
    formData.append("file", this.file);
    formData.append("no", this.addHotelForm.value.address.no);
    formData.append("street", this.addHotelForm.value.address.street);
    formData.append("city", this.addHotelForm.value.address.city);
    formData.append("country", this.addHotelForm.value.address.country);

    this.hotelService.createHotel(formData).subscribe(next => {
      this.toastr.success('Hotel added successfully');
    }, error => {

      this.toastr.error('Hotel adding failed');
    });

    window.location.reload();
  }

  fileUpload(event) {
    this.file = event.target.files[0];
  }

}
