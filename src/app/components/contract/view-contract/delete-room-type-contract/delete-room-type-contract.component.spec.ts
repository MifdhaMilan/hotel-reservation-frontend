import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRoomTypeContractComponent } from './delete-room-type-contract.component';

describe('DeleteRoomTypeContractComponent', () => {
  let component: DeleteRoomTypeContractComponent;
  let fixture: ComponentFixture<DeleteRoomTypeContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRoomTypeContractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRoomTypeContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
