import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-delete-room-type-contract',
  templateUrl: './delete-room-type-contract.component.html',
  styleUrls: ['./delete-room-type-contract.component.css']
})

export class DeleteRoomTypeContractComponent implements OnInit {

  rid: any;
  cid:any;
  name: any;
  constructor(
    private contractService : ContractService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.rid = this.contractService.getId();
    console.log(this.contractService.getId());
    this.cid = this.contractService.getCId();
    console.log(this.contractService.getCId());
    this.name = this.contractService.getName();
    
  }

  onDeleteRoomTypeContract(){
    this.contractService.deleteRoomTypeContract(this.rid,this.cid).subscribe(next =>{
      this.toastr.success('Contract deleted successfully');
    }, error => {
    
      this.toastr.error('Contract deleting failed');
    });
    window.location.reload();
  }

}
