import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopNavigationComponent} from './top-navigation/top-navigation.component';
import {BoxedComponent} from './boxed/boxed.component';
import {FixedComponent} from './fixed/fixed.component';
import {CollapsedSidebarComponent} from './collapsed-sidebar/collapsed-sidebar.component';
import {AltPageType} from 'ng-admin-lte';
import {FourOFourErrorComponent} from '../examples/four-o-four-error/four-o-four-error.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'top-nav', component: TopNavigationComponent,
        data: {
          page: {title: 'Top Navigation', subTitle: 'Example 2.0', pageType: AltPageType.TOP_NAVIGATION},
        }
      },
      {path: 'boxed', component: BoxedComponent,
        data: {
          page: {title: 'Boxed Layout', subTitle: 'Blank example to the boxed layout'},
        }},
      {path: 'fixed', component: FixedComponent,
        data: {
          page: {title: 'Fixed Layout', subTitle: 'Blank example to the fixed layout'},
        }},
      {path: 'collapsed-sidebar', component: CollapsedSidebarComponent,
        data: {
          page: {title: 'Sidebar Collapsed', subTitle: 'Layout with collapsed sidebar on load'},
        }},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutOptionsRoutingModule { }
