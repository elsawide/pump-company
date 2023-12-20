import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pump } from '../pump.model';
import { PumpService } from '../pump.service';

@Component({
  selector: 'app-new-pump-modal',
  templateUrl: './new-pump-modal.component.html',
  styleUrls: ['./new-pump-modal.component.scss'],
  providers: [FormsModule],
})
export class NewPumpModalComponent implements OnInit {
  @Output() modalAction = new EventEmitter();
  newPump: Pump = {
    id: '',
    area: '',
    status: 'Active',
  };
  modal: any;
  warningMessage ='';

  constructor(private pumpService: PumpService) {}

  ngOnInit(): void {
    this.modal = document.querySelector('#modal');
    this.modal.showModal();
  }

  addPump(){
    this.newPump.id = this.newPump.id.trim();
    this.newPump.area = this.newPump.area.trim().toUpperCase();
    if(!this.newPump.id) { this.warningMessage = 'Please enter a pump number'; return}
    if(!this.newPump.area) { this.warningMessage = 'Please enter an area'; return}
    this.pumpService.validateUniqueId(this.newPump.id)
    .subscribe(pump => {
      if(!pump){
        this.pumpService.addPump(this.newPump)
    .subscribe(() => {
      this.onModalAction('Save',this.newPump)
    });
      } else {
        this.warningMessage = 'Please enter a unique pump number'
      }
    });
  }

  onModalAction(action: string, pump: Pump = {id:'',area:'',status:''}) {
    const data = {
      action: action,
      pump:pump
    }
    this.modalAction.emit(data);
  }
}
