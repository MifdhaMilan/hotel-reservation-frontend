import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ContractService } from 'src/app/services/contract.service';
import { AddContractComponent } from './add-contract/add-contract.component';
import { DeleteContractComponent } from './delete-contract/delete-contract.component';
import { ViewContractComponent } from './view-contract/view-contract.component';
import { Router } from '@angular/router';

export interface PeriodicElement {
  Contract_Id: number;
  Hotel_Name: string;
  Start_Date: Date;
  End_Date: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  displayedColumns: string[] = ['contract_id', 'hotel_name', 'start_date', 'end_date', 'view', 'edit', 'delete'];
  dataSource: any;
  allContracts: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    private contractService: ContractService,
    private toastr: ToastrService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    this.getAllHotels();
  }

  getAllHotels() {
    this.contractService.getAllContracts().subscribe(data => {
      this.allContracts = data;
     
      for(let i = 0; i < this.allContracts.length; i++){
        ELEMENT_DATA[i] = {
          Contract_Id: this.allContracts[i].cid,
          Hotel_Name: this.allContracts[i].hotel.name,
          Start_Date: this.allContracts[i].startDate.toLocaleString().substring(0,10),
          End_Date: this.allContracts[i].endDate.toLocaleString().substring(0,10)
        }
      }
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    }, error => {

      this.toastr.error('getting Contracts failed');
    });
  }

  openAddContractDialog(): void {
    const dialogRef = this.dialog.open(AddContractComponent, { 
      width: '400px'
    });
  }

  openViewContractDialog(cid: number): void {
    this.contractService.setId(cid);
    this.router.navigateByUrl('/contract/{cid}');
  }

  openDeleteContractDialog(cid:number): void{
    this.contractService.setId(cid);
    const dialogRef = this.dialog.open(DeleteContractComponent, {
      width: '250px',  
    });
  }

}
