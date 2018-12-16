import {Component, OnInit} from '@angular/core';
import {AltButtonGroupOption, AltButtonOption} from '../../../../../library/ng-admin-lte/src/lib/model/alt-button-option';
import {AltButtonColor, AltColor} from 'ng-admin-lte';
import {AltSize} from '../../../../../library/ng-admin-lte/src/lib/model/alt-size';

@Component({
  selector: 'alt-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  colors = [AltButtonColor.DEFAULT, AltButtonColor.PRIMARY, AltButtonColor.SUCCESS, AltButtonColor.INFO,
    AltButtonColor.DANGER, AltButtonColor.WARNING];

  buttons: AltButtonOption[][] = [];

  socials = [
    {name: 'bitbucket', title: 'Sign in with Bitbucket', icon: 'fa-bitbucket'},
    {name: 'dropbox', title: 'Sign in with Dropbox', icon: 'fa-dropbox'},
    {name: 'facebook', title: 'Sign in with Facebook', icon: 'fa-facebook'},
    {name: 'flickr', title: 'Sign in with Flickr', icon: 'fa-flickr'},
    {name: 'foursquare', title: 'Sign in with Foursquare', icon: 'fa-foursquare'},
    {name: 'github', title: 'Sign in with GitHub', icon: 'fa-github'},
    {name: 'google', title: 'Sign in with Google', icon: 'fa-google-plus'},
    {name: 'instagram', title: 'Sign in with Instagram', icon: 'fa-instagram'},
    {name: 'linkedin', title: 'Sign in with LinkedIn', icon: 'fa-linkedin'},
    {name: 'tumblr', title: 'Sign in with Tumblr', icon: 'fa-tumblr'},
    {name: 'twitter', title: 'Sign in with Twitter', icon: 'fa-twitter'},
    {name: 'vk', title: 'Sign in with VK', icon: 'fa-vk'},
  ];
  constructor() {
    this.colors.forEach(color => {
      const buttons: AltButtonOption[] = [
        {color: color},
        {color: color, size: AltSize.LARGE},
        {color: color, size: AltSize.SMALL},
        {color: color, size: AltSize.X_SMALL},
        {color: color, flat: true},
        {color: color, disabled: true},
      ];
      this.buttons.push(buttons);
    });
  }

  ngOnInit() {
  }

}
