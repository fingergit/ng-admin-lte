import {Component, OnInit} from '@angular/core';
import {AltBoxData, AltColor, AltInfoBoxData, AltSmallBoxData} from 'ng-admin-lte';

@Component({
  selector: 'alt-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {

  simpleInfoBoxes: AltInfoBoxData[] = [
    {text: 'Messages', num: '1,410', color: AltColor.INFO, icon: 'envelope-o'},
    {text: 'Bookmarks', num: '410', color: AltColor.SUCCESS, icon: 'flag-o'},
    {text: 'Uploads', num: '13,648', color: AltColor.WARNING, icon: 'files-o'},
    {text: 'Likes', num: '93,139', color: AltColor.DANGER, icon: 'star-o'},
  ];

  progressInfoBoxes: AltInfoBoxData[] = [
    {text: 'Bookmarks', num: '41,410', color: AltColor.INFO, icon: 'bookmark-o',
      progress: 70, progressDescription: '70% Increase in 30 Days', fullColor: true},
    {text: 'Likes', num: '41,410', color: AltColor.SUCCESS, icon: 'thumbs-o-up',
      progress: 70, progressDescription: '70% Increase in 30 Days', fullColor: true},
    {text: 'Events', num: '41,410', color: AltColor.WARNING, icon: 'calendar',
      progress: 70, progressDescription: '70% Increase in 30 Days', fullColor: true},
    {text: 'Comments', num: '41,410', color: AltColor.DANGER, icon: 'comments-o',
      progress: 70, progressDescription: '70% Increase in 30 Days', fullColor: true},
  ];

  smallBoxes: AltSmallBoxData[] = [
    {text: 'New Orders', num: 150, color: AltColor.INFO, icon: 'fa fa-shopping-cart',
      linkText: 'More info', linkExtUrl: '#'},
    {text: 'Bounce Rate', num: '53%', color: AltColor.SUCCESS, icon: 'ion-stats-bars',
      linkText: 'More info', routerLink: ['']},
    {text: 'User Registrations', num: 44, color: AltColor.WARNING, icon: 'ion ion-person-add',
      linkText: 'More info', linkExtUrl: '#'},
    {text: 'Unique Visitors', num: 65, color: AltColor.DANGER, icon: 'ion ion-pie-graph',
      linkText: 'More info', linkExtUrl: '#'},
  ];

  boxes: AltBoxData[] = [
    {title: 'Expandable', color: AltColor.INFO, collapsible: true,
      content: 'The body of the box',
      collapsed: true},
    {title: 'Removable', color: AltColor.SUCCESS, removable: true, content: 'The body of the box'},
    {title: 'Collapsible', color: AltColor.WARNING, collapsible: true, content: 'The body of the box'},
    {title: 'Loading state', color: AltColor.DANGER, withoutBorder: true, content: 'The body of the box', loading: true},
  ];

  solidBoxes: AltBoxData[]; // same as boxes but solid is true.

  constructor() {
    this.solidBoxes = JSON.parse(JSON.stringify(this.boxes));
    for (let i = 0; i < this.solidBoxes.length; i++) {
      this.solidBoxes[i].solid = true;
    }
  }

  ngOnInit() {
  }

}
