import {AfterViewInit, Component, OnInit} from '@angular/core';

// "node_modules/admin-lte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css",
// "node_modules/admin-lte/bower_components/ckeditor/ckeditor.js",
// "node_modules/admin-lte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js"

@Component({
  selector: 'alt-editors',
  templateUrl: './editors.component.html',
  styleUrls: ['./editors.component.scss']
})
export class EditorsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // Replace the <textarea id="editor1"> with a CKEditor
    // instance, using default configuration.
    CKEDITOR.replace('editor1');
    // bootstrap WYSIHTML5 - text editor
    $('.textarea').wysihtml5();
  }

}
