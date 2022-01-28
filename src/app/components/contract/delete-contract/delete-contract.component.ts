import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-delete-contract',
  templateUrl: './delete-contract.component.html',
  styleUrls: ['./delete-contract.component.css']
})
export class DeleteContractComponent implements OnInit {

  id: number;
  constructor(
    private contractService : ContractService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.id = this.contractService.getId();
    console.log(this.contractService.getId());
    
  }

  onDeleteContract(){
    this.contractService.deleteContract(this.id).subscribe(next =>{
      this.toastr.success('Contract deleted successfully');
    }, error => {
    
      this.toastr.error('Contract deleting failed');
    });
    window.location.reload();
  }

}
