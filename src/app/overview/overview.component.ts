import { Component } from '@angular/core';
import { PumpService } from '../pump.service';
import { Pump } from '../pump.model';
import { BehaviorSubject, switchMap } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  private filterOptionsSubject = new BehaviorSubject<{
    id: string;
    area: string;
    status: string;
  }>({
    id: '',
    area: '',
    status: '',
  });

  searchId = '';
  filterOptions$ = this.filterOptionsSubject.asObservable().pipe();

  openModal = false;
  filterOptions = {
    id: '',
    area: '',
    status: '',
  };

  pumps$ = this.filterOptions$.pipe(
    switchMap((options) => {
      return this.pumpService.getPumps(options);
    })
  );

  areas = ['A', 'B', 'C'];
  status = ['Active', 'Disabled'];

  constructor(private pumpService: PumpService) {}

  createNewPump() {
    this.openModal = true;
  }

  onModalAction(data:any) {
    if(data.action === 'Save'){
      this.refreshPumpData(data.pump)
      //setTimeout(() => this.updateFilter(data.pump.id,'id'), 100);
    }
    this.openModal = false;
  }

  updateFilter(filter: string, key: string) {

    if (key === 'id') this.filterOptions.id = filter;

    if (key === 'area') this.filterOptions.area = filter === 'No filter' ? '' : filter

    if (key === 'status') this.filterOptions.status = filter === 'No filter' ? '' : filter

    this.filterOptionsSubject.next(this.filterOptions);
  }

  refreshPumpData(pump: Pump) {
    this.filterOptions = {
      id: '',
      area: '',
      status: '',
    };
    this.filterOptionsSubject.next(this.filterOptions);
  }

}
