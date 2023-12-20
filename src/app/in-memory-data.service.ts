import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pumps = [
      {
        id: '2001',
        area: 'A',
        status: 'Active',
      },
      {
        id: '2002',
        area: 'A',
        status: 'Disabled',
      },
      {
        id: '2003',
        area: 'B',
        status: 'Disabled',
      },
      {
        id: '2004',
        area: 'B',
        status: 'Active',
      },
      {
        id: '2005',
        area: 'C',
        status: 'Active',
      },
      {
        id: '2001',
        area: 'A',
        status: 'Active',
      },
      {
        id: '2002',
        area: 'A',
        status: 'Disabled',
      },
      {
        id: '2003',
        area: 'B',
        status: 'Disabled',
      },
      {
        id: '2004',
        area: 'B',
        status: 'Active',
      },
      {
        id: '2005',
        area: 'C',
        status: 'Active',
      },
      {
        id: '2001',
        area: 'A',
        status: 'Active',
      },
      {
        id: '2002',
        area: 'A',
        status: 'Disabled',
      },
      {
        id: '2003',
        area: 'B',
        status: 'Disabled',
      },
      {
        id: '2004',
        area: 'B',
        status: 'Active',
      },
      {
        id: '2005',
        area: 'C',
        status: 'Active',
      },
    ];
    return { pumps };
  }
  constructor() {}
}
