import { IPersonalScore } from 'src/app/_models/interfaces/personal-score.interface';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { PERSONAL_SCORES } from 'src/app/_ constant-mocks/personal-scores.constants';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'deepwater-personal-reports',
  templateUrl: './personal-reports.component.html',
  styleUrls: ['./personal-reports.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PersonalReportsComponent implements OnInit {

 // @Input() 
  personalScoreData: IPersonalScore[] = PERSONAL_SCORES;

  public sort: SortDescriptor[] = [{
    field: 'Examinee',
    dir: 'asc'
  }];

  public view: GridDataResult;

  constructor() { }

  ngOnInit(): void {
    debugger;
    this.loadProducts();
  }

  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadProducts();
  }

  private loadProducts(): void {
    this.view = {
      data: orderBy(this.personalScoreData, this.sort),
      total: this.personalScoreData.length
    };
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    debugger;
  }

}
