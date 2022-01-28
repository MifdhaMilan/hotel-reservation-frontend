import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private apiUrl = "http://localhost:8080/";
  private id: number;

  constructor(private http: HttpClient) { }

  createContract(model: any){
    
    return this.http.post(this.apiUrl + 'create-contract', model);
  }

  getAllContracts() {
    return this.http.get(this.apiUrl + 'get-all-contracts');

  }

  getContractById(cid: number) {
    return this.http.get(this.apiUrl + 'get-contract-by-id/' + cid);

  }

  public deleteContract(id: number) {
    console.log("called");
    
    return this.http.delete(this.apiUrl + 'delete-contract/' + id);
  }

  public setId(id: number) {
    this.id = id;
  }
  public getId(){
    return this.id;
  }
}
