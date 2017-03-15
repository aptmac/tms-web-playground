angular.module('apf.vmCpuModule').controller('vmCpuDonutChartController', [function VmCpuDonutChartController() {
  'use strict';
  var donutConfig = $().c3ChartDefaults().getDefaultDonutConfig('A');
  donutConfig.bindto = '#chart-pf-donut-1';
  donutConfig.color =  {
    pattern: ["#cc0000","#D1D1D1"]
  };
  donutConfig.data = {
    type: "donut",
    columns: [
      ["Used", 95],
      ["Available", 5]
    ],
    groups: [
      ["used", "available"]
    ],
    order: null
  };
  donutConfig.tooltip = {
    contents: function (d) {
      return '<span class="donut-tooltip-pf" style="white-space: nowrap;">' +
        Math.round(d[0].ratio * 100) + '%' + ' MHz ' + d[0].name +
        '</span>';
    }
  };

  var chart1 = c3.generate(donutConfig);
  var donutChartTitle = d3.select("#chart-pf-donut-1").select('text.c3-chart-arcs-title');
  donutChartTitle.text("");
  donutChartTitle.insert('tspan').text("950").classed('donut-title-big-pf', true).attr('dy', 0).attr('x', 0);
  donutChartTitle.insert('tspan').text("MHz Used").classed('donut-title-small-pf', true).attr('dy', 20).attr('x', 0);
}]);
