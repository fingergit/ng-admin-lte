import {AfterViewInit, Component, OnInit} from '@angular/core';

// "bower_components/bootstrap-daterangepicker/daterangepicker.css",
// "bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css",
// "node_modules/admin-lte/plugins/iCheck/all.css",
// "node_modules/admin-lte/bower_components/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.min.css",
// "node_modules/admin-lte/plugins/timepicker/bootstrap-timepicker.min.css",
// "node_modules/admin-lte/bower_components/select2/dist/css/select2.min.css",

//   "node_modules/admin-lte/bower_components/select2/dist/js/select2.full.min.js",
//   "node_modules/admin-lte/plugins/input-mask/jquery.inputmask.js",
//   "node_modules/admin-lte/plugins/input-mask/jquery.inputmask.date.extensions.js",
//   "node_modules/admin-lte/plugins/input-mask/jquery.inputmask.extensions.js",
//   "node_modules/admin-lte/bower_components/moment/min/moment.min.js",
//   "node_modules/admin-lte/bower_components/bootstrap-daterangepicker/daterangepicker.js",
//   "node_modules/admin-lte/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js",
//   "node_modules/admin-lte/bower_components/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js",
//   "node_modules/admin-lte/plugins/timepicker/bootstrap-timepicker.min.js",
//   "node_modules/admin-lte/bower_components/jquery-slimscroll/jquery.slimscroll.min.js",
//   "node_modules/admin-lte/plugins/iCheck/icheck.min.js",
//   "node_modules/admin-lte/bower_components/fastclick/lib/fastclick.js"
import {} from 'jquery';

@Component({
  selector: 'alt-advanced-elements',
  templateUrl: './advanced-elements.component.html',
  styleUrls: ['./advanced-elements.component.scss'],
  preserveWhitespaces: true
})
export class AdvancedElementsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // Initialize Select2 Elements
    $('.select2').select2();

    // Datemask dd/mm/yyyy
    $('#datemask').inputmask('dd/mm/yyyy', { 'placeholder': 'dd/mm/yyyy' });
    // Datemask2 mm/dd/yyyy
    $('#datemask2').inputmask('mm/dd/yyyy', { 'placeholder': 'mm/dd/yyyy' });
    // Money Euro
    $('[data-mask]').inputmask();

    // Date range picker
    $('#reservation').daterangepicker();
    // Date range picker with time picker
    $('#reservationtime').daterangepicker({ timePicker: true, timePickerIncrement: 30, format: 'MM/DD/YYYY h:mm A' });

    // Date range as a button
    $('#daterange-btn').daterangepicker(
      {
        ranges   : {
          'Today'       : [moment(), moment()],
          'Yesterday'   : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
          'Last 7 Days' : [moment().subtract(6, 'days'), moment()],
          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
          'This Month'  : [moment().startOf('month'), moment().endOf('month')],
          'Last Month'  : [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        startDate: moment().subtract(29, 'days'),
        endDate  : moment()
      },
      function (start, end) {
        $('#daterange-btn span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
      }
    );

    // Date picker
    $('#datepicker').datepicker({
      autoclose: true
    });

    // iCheck for checkbox and radio inputs
    $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
      checkboxClass: 'icheckbox_minimal-blue',
      radioClass   : 'iradio_minimal-blue'
    });

    // Red color scheme for iCheck
    $('input[type="checkbox"].minimal-red, input[type="radio"].minimal-red').iCheck({
      checkboxClass: 'icheckbox_minimal-red',
      radioClass   : 'iradio_minimal-red'
    });

    // Flat red color scheme for iCheck
    $('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
      checkboxClass: 'icheckbox_flat-green',
      radioClass   : 'iradio_flat-green'
    });

    // Colorpicker
    $('.my-colorpicker1').colorpicker();
    // color picker with addon
    $('.my-colorpicker2').colorpicker();

    // Timepicker
    $('.timepicker').timepicker({
      showInputs: false
    });
  }

}
