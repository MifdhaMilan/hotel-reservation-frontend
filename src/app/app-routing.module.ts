import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractComponent } from './components/contract/contract.component';
import { ViewContractComponent } from './components/contract/view-contract/view-contract.component';
import { HotelComponent } from './components/hotel/hotel.component';

const routes: Routes = [
  { path: '', component: HotelComponent },
  { path: 'contract', component: ContractComponent },
  { path: 'contract/:id', component: ViewContractComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
