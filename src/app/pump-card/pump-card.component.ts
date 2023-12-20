import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pump } from '../pump.model';
import { PumpService } from '../pump.service';

@Component({
  selector: 'app-pump-card',
  templateUrl: './pump-card.component.html',
  styleUrls: ['./pump-card.component.scss']
})
export class PumpCardComponent {
@Input() pump!: Pump;
@Output() updatePumpData = new EventEmitter();

constructor(private pumpService: PumpService) {}

changeStatus(pump:Pump){
  pump.status = pump.status === 'Active' ? 'Disabled' : 'Active';
  this.pumpService.updatePumpStatus(pump)
  .subscribe(() => this.updatePumpData.emit(pump));
}
deletePump(pump:Pump){
  this.pumpService.deletePump(pump.id).subscribe(() => this.updatePumpData.emit(pump));
}
}
