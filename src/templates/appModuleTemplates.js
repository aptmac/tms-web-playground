angular.module('apf.appModule').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/app/controllers/heading.html',
    "<span class=\"heading-class\">{{notificationGroup.heading}}</span> <span class=\"panel-counter sub-heading\">{{notificationGroup.unreadCount}} New {{notificationGroup.heading}}</span>"
  );


  $templateCache.put('src/app/controllers/subheading.html',
    "<span class=\"subheading-class\">{{notificationGroup.unreadCount}} New</span>"
  );


  $templateCache.put('src/vm-byteman/graph/graph.html',
    "<div class=\"container-fluid container-cards-pf\"><ol class=\"breadcrumb\" style=\"margin-bottom: 0px\"><li>Byteman</li><li>Graph</li></ol><div class=\"blank-slate-pf\" style=\"\"><div class=\"blank-slate-pf-icon\"><i class=\"fa fa-globe\"></i></div><h1>Byteman Graph!</h1><p>This is where a byteman graph will go!</p><div class=\"blank-slate-pf-main-action\"><p>WOOO Byteman graph!</p></div></div></div>"
  );


  $templateCache.put('src/vm-byteman/metrics/metrics.html',
    "<div class=\"container-fluid container-cards-pf\"><ol class=\"breadcrumb\" style=\"margin-bottom: 0px\"><li>Byteman</li><li>Metrics</li></ol><div class=\"blank-slate-pf\" style=\"\"><div class=\"blank-slate-pf-icon\"><i class=\"fa fa-globe\"></i></div><h1>Byteman Metrics!</h1><p>This is where byteman metrics will go!</p><div class=\"blank-slate-pf-main-action\"><p>WOOO Byteman Metrics!</p></div></div></div>"
  );


  $templateCache.put('src/vm-byteman/rules/rules.html',
    "<div class=\"container-fluid container-cards-pf\"><ol class=\"breadcrumb\" style=\"margin-bottom: 0px\"><li>Byteman</li><li>Rules</li></ol><div class=\"blank-slate-pf\" style=\"\"><div class=\"blank-slate-pf-icon\"><i class=\"fa fa-globe\"></i></div><h1>Byteman Rules!</h1><p>This is where byteman rules will go!</p><div class=\"blank-slate-pf-main-action\"><p>WOOO Byteman rules!</p></div></div></div>"
  );


  $templateCache.put('src/vm-classes/vm-classes.html',
    "<div class=\"container-fluid container-cards-pf\"><ol class=\"breadcrumb\" style=\"margin-bottom: 0px\"><li>Classes</li></ol><div class=\"blank-slate-pf\" style=\"\"><div class=\"blank-slate-pf-icon\"><i class=\"fa fa-globe\"></i></div><h1>Classes!</h1><p>All your Classes are belong to us!</p><div class=\"blank-slate-pf-main-action\"><p>Hello World: Classes!</p></div></div></div>"
  );


  $templateCache.put('src/vm-compiler/vm-compiler.html',
    "<div class=\"container-fluid container-cards-pf\"><ol class=\"breadcrumb\" style=\"margin-bottom: 0px\"><li>Compiler</li></ol><div class=\"blank-slate-pf\" style=\"\"><div class=\"blank-slate-pf-icon\"><i class=\"fa fa-globe\"></i></div><h1>Compiler!</h1><p>All your Compiler are belong to us!</p><div class=\"blank-slate-pf-main-action\"><p>Hello World: Compiler!</p></div></div></div>"
  );


  $templateCache.put('src/vm-cpu/vm-cpu.html',
    "<div class=\"container-fluid container-cards-pf\"><ol class=\"breadcrumb\" style=\"margin-bottom: 0px\"><li>CPU</li></ol><div class=\"blank-slate-pf\" style=\"\"><div class=\"blank-slate-pf-icon\"><i class=\"fa fa-globe\"></i></div><h1>CPU!</h1><p>This is where CPU stats will be shown!</p><div class=\"blank-slate-pf-main-action\"><p>WOOO CPU!</p></div></div></div><div class=\"container-fluid container-cards-pf\"><div class=\"row row-cards-pf\"><!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  --><div class=\"col-md-12\"><div class=\"card-pf card-pf-utilization\"><div class=\"card-pf-heading\"><h2 class=\"card-pf-title\">Utilization</h2></div><div class=\"card-pf-body\"><div class=\"row\"><div class=\"col-xs-12 col-sm-4 col-md-4\"><h3 class=\"card-pf-subtitle\">CPU</h3><p class=\"card-pf-utilization-details\"><span class=\"card-pf-utilization-card-details-count\">50</span> <span class=\"card-pf-utilization-card-details-description\"><span class=\"card-pf-utilization-card-details-line-1\">Available</span> <span class=\"card-pf-utilization-card-details-line-2\">of 1000 MHz</span></span></p><div id=\"chart-pf-donut-1\" ng-controller=\"vmCpuDonutChartController\"></div><div class=\"chart-pf-sparkline\" id=\"chart-pf-sparkline-1\" ng-controller=\"vmCpuSparklineChartController\"></div></div></div></div></div></div></div><!-- /row --></div><!-- /container -->"
  );


  $templateCache.put('src/vm-gc/vm-gc.html',
    "<div class=\"container-fluid container-cards-pf\"><ol class=\"breadcrumb\" style=\"margin-bottom: 0px\"><li>Garbage Collection</li></ol><div class=\"blank-slate-pf\" style=\"\"><div class=\"blank-slate-pf-icon\"><i class=\"fa fa-globe\"></i></div><h1>Garbage Collection!</h1><p>All your Garbage Collection are belong to us!</p><div class=\"blank-slate-pf-main-action\"><p>Hello World: Garbage Collection!</p></div></div></div>"
  );


  $templateCache.put('src/vm-heap-analysis/vm-heap-analysis.html',
    "<div class=\"container-fluid container-cards-pf\"><ol class=\"breadcrumb\" style=\"margin-bottom: 0px\"><li>Heap Analyzer</li></ol><div class=\"blank-slate-pf\" style=\"\"><div class=\"blank-slate-pf-icon\"><i class=\"fa fa-globe\"></i></div><h1>Heap Analyzer!</h1><p>All your Heap Analyzer are belong to us!</p><div class=\"blank-slate-pf-main-action\"><p>Hello World: Heap Analyzer!</p></div></div></div>"
  );


  $templateCache.put('src/vm-io/vm-io.html',
    "<div class=\"container-fluid container-cards-pf\"><ol class=\"breadcrumb\" style=\"margin-bottom: 0px\"><li>IO</li></ol><div class=\"blank-slate-pf\" style=\"\"><div class=\"blank-slate-pf-icon\"><i class=\"fa fa-globe\"></i></div><h1>IO!</h1><p>All your IO are belong to us!</p><div class=\"blank-slate-pf-main-action\"><p>Hello World: IO!</p></div></div></div>"
  );


  $templateCache.put('src/vm-memory/memory/memory.html',
    "<div class=\"container-fluid container-cards-pf\"><ol class=\"breadcrumb\" style=\"margin-bottom: 0px\"><li>Memory</li><li>Memory</li></ol><div class=\"blank-slate-pf\" style=\"\"><div class=\"blank-slate-pf-icon\"><i class=\"fa fa-globe\"></i></div><h1>Memory Regions!</h1><p>This is where memory information will go!</p><div class=\"blank-slate-pf-main-action\"><p>WOOO Memory!</p></div></div></div>"
  );


  $templateCache.put('src/vm-memory/tlab/tlab.html',
    "<div class=\"container-fluid container-cards-pf\"><ol class=\"breadcrumb\" style=\"margin-bottom: 0px\"><li>Memory</li><li>TLAB</li></ol><div class=\"blank-slate-pf\" style=\"\"><div class=\"blank-slate-pf-icon\"><i class=\"fa fa-globe\"></i></div><h1>Memory TLAB!</h1><p>This is where TLAB information will go!</p><div class=\"blank-slate-pf-main-action\"><p>WOOO Memory TLAB!</p></div></div></div>"
  );


  $templateCache.put('src/vm-notes/vm-notes.html',
    "<div class=\"container-fluid container-cards-pf\"><ol class=\"breadcrumb\" style=\"margin-bottom: 0px\"><li>Notes</li></ol><div class=\"blank-slate-pf\" style=\"\"><div class=\"blank-slate-pf-icon\"><i class=\"fa fa-globe\"></i></div><h1>Notes!</h1><p>All your Notes are belong to us!</p><div class=\"blank-slate-pf-main-action\"><p>Hello World: Notes!</p></div></div></div>"
  );


  $templateCache.put('src/vm-notifications/vm-notifications.html',
    "<div class=\"container-fluid container-cards-pf\"><ol class=\"breadcrumb\" style=\"margin-bottom: 0px\"><li>JMX Notifications</li></ol><div class=\"blank-slate-pf\" style=\"\"><div class=\"blank-slate-pf-icon\"><i class=\"fa fa-globe\"></i></div><h1>JMX Notifications!</h1><p>All your JMX Notifications are belong to us!</p><div class=\"blank-slate-pf-main-action\"><p>Hello World: JMX Notifications!</p></div></div></div>"
  );


  $templateCache.put('src/vm-numa/vm-numa.html',
    "<div class=\"container-fluid container-cards-pf\"><ol class=\"breadcrumb\" style=\"margin-bottom: 0px\"><li>NUMA</li></ol><div class=\"blank-slate-pf\" style=\"\"><div class=\"blank-slate-pf-icon\"><i class=\"fa fa-globe\"></i></div><h1>NUMA!</h1><p>All your NUMA are belong to us!</p><div class=\"blank-slate-pf-main-action\"><p>Hello World: NUMA!</p></div></div></div>"
  );


  $templateCache.put('src/vm-overview/vm-overview.html',
    "<div class=\"container-fluid container-cards-pf\"><ol class=\"breadcrumb\" style=\"margin-bottom: 0px\"><li>Overview</li></ol><div class=\"blank-slate-pf\" style=\"\"><div class=\"blank-slate-pf-icon\"><i class=\"fa fa-globe\"></i></div><h1>OVERVIEW!</h1><p>This is where an overview will go!</p><div class=\"blank-slate-pf-main-action\"><p>WOOO Overview!</p></div></div></div>"
  );


  $templateCache.put('src/vm-profiler/table/table.html',
    "<div class=\"container-fluid container-cards-pf\"><ol class=\"breadcrumb\" style=\"margin-bottom: 0px\"><li>Profiler</li><li>Table</li></ol><div class=\"blank-slate-pf\" style=\"\"><div class=\"blank-slate-pf-icon\"><i class=\"fa fa-globe\"></i></div><h1>Profiler Table!</h1><p>This is where a table will go!</p><div class=\"blank-slate-pf-main-action\"><p>WOOO Profiler Table!</p></div></div></div>"
  );


  $templateCache.put('src/vm-profiler/treemap/treemap.html',
    "<div class=\"container-fluid container-cards-pf\"><ol class=\"breadcrumb\" style=\"margin-bottom: 0px\"><li>Profiler</li><li>Treemap</li></ol><div class=\"blank-slate-pf\" style=\"\"><div class=\"blank-slate-pf-icon\"><i class=\"fa fa-globe\"></i></div><h1>Profiler Treemap!</h1><p>This is where a Treemap will go!</p><div class=\"blank-slate-pf-main-action\"><p>WOOO Profiler Treemap!</p></div></div></div>"
  );


  $templateCache.put('src/vm-threads/count/count.html',
    "<div class=\"container-fluid container-cards-pf\"><ol class=\"breadcrumb\" style=\"margin-bottom: 0px\"><li>Threads</li><li>Thread Count</li></ol><div class=\"blank-slate-pf\" style=\"\"><div class=\"blank-slate-pf-icon\"><i class=\"fa fa-globe\"></i></div><h1>Thread Count!</h1><p>This is where thread counts will go!</p><div class=\"blank-slate-pf-main-action\"><p>WOOO Thread Counts!</p></div></div></div>"
  );


  $templateCache.put('src/vm-threads/locks/locks.html',
    "<div class=\"container-fluid container-cards-pf\"><ol class=\"breadcrumb\" style=\"margin-bottom: 0px\"><li>Threads</li><li>Locks</li></ol><div class=\"blank-slate-pf\" style=\"\"><div class=\"blank-slate-pf-icon\"><i class=\"fa fa-globe\"></i></div><h1>Thread Locks!</h1><p>This is where thread locks will go!</p><div class=\"blank-slate-pf-main-action\"><p>WOOO Thread Locks!</p></div></div></div>"
  );


  $templateCache.put('src/vm-threads/stacktrace/stacktrace.html',
    "<div class=\"container-fluid container-cards-pf\"><ol class=\"breadcrumb\" style=\"margin-bottom: 0px\"><li>Threads</li><li>Stacktrace Profiler</li></ol><div class=\"blank-slate-pf\" style=\"\"><div class=\"blank-slate-pf-icon\"><i class=\"fa fa-globe\"></i></div><h1>Stacktrace Profiler!</h1><p>This is where the stacktrace profiler will go!</p><div class=\"blank-slate-pf-main-action\"><p>WOOO Stacktrace Profiler!</p></div></div></div>"
  );


  $templateCache.put('src/vm-threads/timeline/timeline.html',
    "<div class=\"container-fluid container-cards-pf\"><ol class=\"breadcrumb\" style=\"margin-bottom: 0px\"><li>Threads</li><li>Timeline</li></ol><div class=\"blank-slate-pf\" style=\"\"><div class=\"blank-slate-pf-icon\"><i class=\"fa fa-globe\"></i></div><h1>Timeline!</h1><p>This is where thread timeline will go!</p><div class=\"blank-slate-pf-main-action\"><p>WOOO Thread Timeline!</p></div></div></div>"
  );

}]);
