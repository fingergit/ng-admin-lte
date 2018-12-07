import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './pages/dashboard/dashboard.module#DashboardModule' },
  {path: 'pages/layout', loadChildren: './pages/layout-options/layout-options.module#LayoutOptionsModule' },
  {path: 'pages/widgets', loadChildren: './pages/widgets/widgets.module#WidgetsModule' },
  {path: 'pages/charts', loadChildren: './pages/charts/charts.module#ChartsModule' },
  {path: 'pages/UI', loadChildren: './pages/ui-elements/ui-elements.module#UiElementsModule' },
  {path: 'pages/forms', loadChildren: './pages/forms/forms.module#FormsModule' },
  {path: 'pages/tables', loadChildren: './pages/tables/tables.module#TablesModule' },
  {path: 'pages/calendar', loadChildren: './pages/calendar/calendar.module#CalendarModule' },
  {path: 'pages/mailbox', loadChildren: './pages/mail-box/mail-box.module#MailBoxModule' },
  {path: 'pages/examples', loadChildren: './pages/examples/examples.module#ExamplesModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
