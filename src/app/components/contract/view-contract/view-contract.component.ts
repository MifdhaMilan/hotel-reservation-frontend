import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-view-contract',
  templateUrl: './view-contract.component.html',
  styleUrls: ['./view-contract.component.css']
})
export class ViewContractComponent implements OnInit {

  cid: any;
  contract: any;

  constructor(
    private contractService: ContractService,
  ) { }

  ngOnInit(): void {
    this.getContractById();
  }

  getContractById(){
    this.cid = this.contractService.getId();
    this.contractService.getContractById(this.cid).subscribe(data => {
      this.contract = data;

      console.log(this.contract);
    })
    
  }

  displayedColumns: string[] = ['Room_Type','No_of_Rooms', 'Price'];
  

}
