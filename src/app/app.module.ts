import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelComponent } from './components/hotel/hotel.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';

import { AddHotelComponent } from './components/hotel/add-hotel/add-hotel.component';
import { AddRoomComponent } from './components/hotel/add-room/add-room.component';
import { EditHotelComponent } from './components/hotel/edit-hotel/edit-hotel.component';
import { EditRoomComponent } from './components/hotel/edit-room/edit-room.component';
import { DeleteHotelComponent } from './components/hotel/delete-hotel/delete-hotel.component';
import { DeleteRoomComponent } from './components/hotel/delete-room/delete-room.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {MatListModule} from '@angular/material/list';
import { ContractComponent } from './components/contract/contract.component';
import { AddContractComponent } from './components/contract/add-contract/add-contract.component';
import { ViewContractComponent } from './components/contract/view-contract/view-contract.component';
import { DeleteContractComponent } from './components/contract/delete-contract/delete-contract.component';
import { DeleteRoomTypeContractComponent } from './components/contract/view-contract/delete-room-type-contract/delete-room-type-contract.component';
import { EditContractComponent } from './components/contract/edit-contract/edit-contract.component';



@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    AddHotelComponent,
    AddRoomComponent,
    EditHotelComponent,
    EditRoomComponent,
    DeleteHotelComponent,
    DeleteRoomComponent,
    ContractComponent,
    AddContractComponent,
    ViewContractComponent,
    DeleteContractComponent,
    DeleteRoomTypeContractComponent,
    EditContractComponent
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    NgxDropzoneModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    NgxDropzoneModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
