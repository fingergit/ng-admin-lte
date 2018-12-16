import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {} from 'jquery';
import {AltTableHeadData, AltTableRowData} from '../../../../../library/ng-admin-lte/src/lib/alt-ui-elements/alt-table/alt-table-data';
import {from, of} from 'rxjs';
import {delay, map} from 'rxjs/operators';

@Component({
  selector: 'alt-data-tables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.scss']
})
export class DataTablesComponent implements OnInit, AfterViewInit {

  @ViewChild('example1', {read: ElementRef}) example1: ElementRef;
  @ViewChild('example2') example2: ElementRef;

  headData: AltTableHeadData = {
    checkable: false,
    cols: [
      {title: 'Rendering engine'},
      {title: 'Browser'},
      {title: 'Platform(s)'},
      {title: 'Engine version'},
      {title: 'CSS grade'},
    ]
  };
  dataSet: AltTableRowData[];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const table = $(this.example1.nativeElement);
    table.DataTable();
    const table2 = $(this.example2.nativeElement);
    table2.DataTable({
      'paging': true,
      'lengthChange': false,
      'searching': false,
      'ordering': true,
      'info': true,
      'autoWidth': false
    });
    //
    // const dataSet: AltTableRowData[] = [
    //   {
    //     displayData: [
    //       {value: 'Trident'},
    //       {value: 'Internet\n' +
    //           '            Explorer 4.0'},
    //       {value: 'Win 95+'}, {value: '4'}, {value: 'X'}
    //     ]
    //   },
    //   {
    //     displayData: [
    //       {value: 'Trident'},
    //       {value: 'Internet\n' +
    //           '            Explorer 5.0'},
    //       {value: 'Win 95+'}, {value: '5'}, {value: 'C'}
    //     ]
    //   },
    //   {
    //     displayData: [
    //       {value: 'Trident'},
    //       {value: 'Internet\n' +
    //           '            Explorer 5.5'},
    //       {value: 'Win 95+'}, {value: '5'}, {value: 'A'}
    //     ]
    //   },
    //   {
    //     displayData: [
    //       {value: 'Trident'},
    //       {value: 'Internet\n' +
    //           '            Explorer 6'},
    //       {value: 'Win 98+'}, {value: '6'}, {value: 'A'}
    //     ]
    //   },
    //   {
    //     displayData: [
    //       {value: 'Trident'},
    //       {value: 'Internet\n' +
    //           '            Explorer 7'},
    //       {value: 'Win XP SP2+'}, {value: '7'}, {value: 'A'}
    //     ]
    //   },
    //   {
    //     displayData: [
    //       {value: 'Trident'},
    //       {value: 'AOL browser (AOL desktop)'},
    //       {value: 'Win XP'}, {value: '6'}, {value: 'A'}
    //     ]
    //   },
    //   { displayData: [
    //       {value: 'Gecko'}, {value: 'Firefox 1.0'},
    //       {value: 'Win 98+ / OSX.2+'}, {value: '1.7'}, {value: 'A'}
    //     ]},
    //   { displayData: [
    //       {value: 'Gecko'}, {value: 'Firefox 1.5'},
    //       {value: 'Win 98+ / OSX.2+'}, {value: '1.8'}, {value: 'A'}
    //     ]},
    //   { displayData: [
    //       {value: 'Gecko'}, {value: 'Firefox 2.0'},
    //       {value: 'Win 98+ / OSX.2+'}, {value: '1.8'}, {value: 'A'}
    //     ]},
    //   { displayData: [
    //       {value: 'Gecko'}, {value: 'Firefox 3.0'},
    //       {value: 'Win 2k+ / OSX.3+'}, {value: '1.9'}, {value: 'A'}
    //     ]},
    //   { displayData: [
    //       {value: 'Gecko'}, {value: 'Camino 1.0'},
    //       {value: 'OSX.2+'}, {value: '1.8'}, {value: 'A'}
    //     ]},
    //   { displayData: [
    //       {value: 'Gecko'}, {value: 'Camino 1.5'},
    //       {value: 'OSX.3+'}, {value: '1.8'}, {value: 'A'}
    //     ]},
    //   { displayData: [
    //       {value: 'Gecko'}, {value: 'Netscape 7.2'},
    //       {value: 'Win 95+ / Mac OS 8.6-9.2'}, {value: '1.7'}, {value: 'A'}
    //     ]},
    //   { displayData: [
    //       {value: 'Gecko'}, {value: 'Netscape Browser 8'},
    //       {value: 'Win 98SE+'}, {value: '1.7'}, {value: 'A'}
    //     ]},
    //   { displayData: [
    //       {value: 'Gecko'}, {value: 'Netscape Navigator 9'},
    //       {value: 'Win 98+ / OSX.2+'}, {value: '1.8'}, {value: 'A'}
    //     ]},
    //   { displayData: [
    //       {value: 'Gecko'}, {value: 'Mozilla 1.0'},
    //       {value: 'Win 95+ / OSX.1+'}, {value: '1'}, {value: 'A'}
    //     ]},
    //   { displayData: [
    //       {value: 'Gecko'}, {value: 'Mozilla 1.1'},
    //       {value: 'Win 95+ / OSX.1+'}, {value: '1.1'}, {value: 'A'}
    //     ]},
    //   { displayData: [
    //       {value: 'Gecko'}, {value: 'Mozilla 1.2'},
    //       {value: 'Win 95+ / OSX.1+'}, {value: '1.2'}, {value: 'A'}
    //     ]},
    //   { displayData: [
    //       {value: 'Gecko'}, {value: 'Mozilla 1.3'},
    //       {value: 'Win 95+ / OSX.1+'}, {value: '1.3'}, {value: 'A'}
    //     ]},
    //   { displayData: [
    //       {value: 'Gecko'}, {value: 'Mozilla 1.4'},
    //       {value: 'Win 95+ / OSX.1+'}, {value: '1.4'}, {value: 'A'}
    //     ]},
    //   { displayData: [
    //       {value: 'Gecko'}, {value: 'Mozilla 1.5'},
    //       {value: 'Win 95+ / OSX.1+'}, {value: '1.5'}, {value: 'A'}
    //     ]},
    //   { displayData: [
    //       {value: 'Gecko'}, {value: 'Mozilla 1.6'},
    //       {value: 'Win 95+ / OSX.1+'}, {value: '1.6'}, {value: 'A'}
    //     ]},
    //   { displayData: [
    //       {value: 'Gecko'}, {value: 'Mozilla 1.7'},
    //       {value: 'Win 98+ / OSX.1+'}, {value: '1.7'}, {value: 'A'}
    //     ]},
    //   { displayData: [
    //       {value: 'Gecko'}, {value: 'Mozilla 1.8'},
    //       {value: 'Win 98+ / OSX.1+'}, {value: '1.8'}, {value: 'A'}
    //     ]},
    //   { displayData: [
    //       {value: 'Gecko'}, {value: 'Seamonkey 1.1'},
    //       {value: 'Win 98+ / OSX.2+'}, {value: '1.8'}, {value: 'A'}
    //     ]},
    //   { displayData: [
    //       {value: 'Gecko'}, {value: 'Epiphany 2.20'},
    //       {value: 'Gnome'}, {value: '1.8'}, {value: 'A'}
    //     ]},
    // ];
  }

}
