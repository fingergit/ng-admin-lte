
interface JQuery {
  button: any;

  layout(e): any;

  // jquery-sparkline
  knob(options?): any;
  sparkline(selector?, data?): any;

  slider();

  // Select2
  select2();
  // Datemask
  inputmask(format?, options?);

  daterangepicker(options?, func?);
  datepicker(options?);
  timepicker(options?);

  iCheck(options?);

  colorpicker();

  wysihtml5();

  DataTable(options?);

  bridge(selector, any);

  sortable(options);

  vectorMap(options);
  slimScroll(options);

  todoList(options);
}

interface JQueryStatic {
  widget: JQuery;
  ui: JQuery;

  // jquery.flot.js
  plot(selector, array, options): any;

  // jquery-sparkline
  range_map(data);
}

// chart.js
declare class Chart {
  constructor(any);
  Line(data, options);
  Doughnut(data, options);
  Bar(data, options);
}

// Morris
declare namespace Morris {
  class Area {
    constructor(options);
    redraw();
  }
  class Line {
    constructor(options);
    redraw();
  }
  class Donut {
    constructor(options);
    redraw();
  }
  class Bar {
    constructor(options);
    redraw();
  }
}

declare namespace CKEDITOR {
  function replace(options);
}

declare function moment(inp?: any, format?: any, strict?: boolean): any;
