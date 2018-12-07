import {Component, Inject, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {AltAppConfig, AltPageConfig, AltPageType, defaultAltAppConfig} from 'ng-admin-lte';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'alt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-admin-lte';

  pageConfig: AltPageConfig = {title: ''};
  appConfig: AltAppConfig = defaultAltAppConfig;
  PageType = AltPageType;

  constructor(private router: Router,
              @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.router.events.subscribe(value => {
      if ( value instanceof NavigationEnd) {
        this.configPage();
      }
    });
  }

  private configPage() {
    let _route = this.router.routerState.root.snapshot;
    if (!_route.children || !_route.children[0]) {
      return;
    }

    while (_route.children && _route.children.length > 0) {
      _route = _route.children[0];

      if (_route.children && _route.children.length > 0) {
        continue;
      }

      if (!_route.data || !_route.data['page']) {
        return;
      }

      const page = _route.data['page'];
      this.setProperty(page, 'title', undefined);
      this.setProperty(page, 'subTitle', undefined);
      this.setProperty(page, 'customUI', undefined);
      this.setProperty(page, 'containerFluid', undefined);
      this.setProperty(page, 'pageType');

      if (this.pageConfig.pageType === AltPageType.TOP_NAVIGATION) {
        this.document.body.classList.add('layout-top-nav');
      } else {
        this.document.body.classList.remove('layout-top-nav');
      }
    }
  }

  private setProperty(obj: any, key: string, defaultVal?: any) {
    if (obj.hasOwnProperty(key)) {
      this.pageConfig[key] = obj[key];
    } else {
      this.pageConfig[key] = defaultVal;
    }
  }
}
