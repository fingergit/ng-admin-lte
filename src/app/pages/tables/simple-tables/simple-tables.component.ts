import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AltTableHeadData, AltTableRowData} from '../../../../../library/ng-admin-lte/src/lib/alt-ui-elements/alt-table/alt-table-data';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'alt-simple-tables',
  templateUrl: './simple-tables.component.html',
  styleUrls: ['./simple-tables.component.scss']
})
export class SimpleTablesComponent implements OnInit, AfterViewInit {

  headData: AltTableHeadData = {
    checkable: false,
    cols: [
      {title: '#', style: { width: '10px'}},
      {title: 'Task'},
      {title: 'Progress'},
      {title: 'Label', style: { width: '40px'}},
    ]
  };

  headData2: AltTableHeadData = {
    checkable: false,
    cols: [
      {title: 'ID'},
      {title: 'User'},
      {title: 'Date'},
      {title: 'Status'},
      {title: 'Reason'},
    ]
  };

  dataSet: AltTableRowData[];
  dataSet2: AltTableRowData[];

  @ViewChild('progress') progressRef: TemplateRef<any>;
  @ViewChild('badgeTemplate') badgeTemplateRef: TemplateRef<any>;
  @ViewChild('statusTemplate') statusTemplateRef: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    of(true).pipe(delay(0)).subscribe(v => {
      this.dataSet = [
        {
          displayData: [
            {value: '1.'},
            {value: 'Update software'},
            {value: {param: {color: 'danger', percent: 55}}, template: this.progressRef},
            {value: {param: {color: 'red', percent: 55}}, template: this.badgeTemplateRef},
          ]
        },
        {
          displayData: [
            {value: '2.'},
            {value: 'Clean database'},
            {value: {param: {color: 'yellow', percent: 70}}, template: this.progressRef},
            {value: {param: {color: 'yellow', percent: 70}}, template: this.badgeTemplateRef},
          ]
        },
        {
          displayData: [
            {value: '3.'},
            {value: 'Cron job running'},
            {value: {param: {color: 'primary', percent: 30, active: true}}, template: this.progressRef},
            {value: {param: {color: 'blue', percent: 30}}, template: this.badgeTemplateRef},
          ]
        },
        {
          displayData: [
            {value: '4.'},
            {value: 'Fix and squish bugs'},
            {value: {param: {color: 'success', percent: 90, active: true}}, template: this.progressRef},
            {value: {param: {color: 'green', percent: 90}}, template: this.badgeTemplateRef},
          ]
        },
      ];

      const reason = 'Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.';
      const date = '11-7-2014';
      this.dataSet2 = [
        { displayData: [
            {value: '183'}, {value: 'John Doe'}, {value: date},
            {value: {param: {color: 'success', title: 'Approved'}}, template: this.statusTemplateRef},
            {value: reason},
          ]},
        { displayData: [
            {value: '219'}, {value: 'Alexander Pierce'}, {value: date},
            {value: {param: {color: 'warning', title: 'Pending'}}, template: this.statusTemplateRef},
            {value: reason},
          ]},
        { displayData: [
            {value: '657'}, {value: 'Bob Doe'}, {value: date},
            {value: {param: {color: 'primary', title: 'Approved'}}, template: this.statusTemplateRef},
            {value: reason},
          ]},
        { displayData: [
            {value: '175'}, {value: 'Mike Doe'}, {value: date},
            {value: {param: {color: 'danger', title: 'Denied'}}, template: this.statusTemplateRef},
            {value: reason},
          ]},
      ];
    });
  }

  onSearch(text: string) {
    alert(text);
  }

  onSearchTextChange(text: string) {
    console.log(text);
  }
}
