angular.module('apf.vmCpuModule').controller('vmCpuSparklineChartController',[function () {
  'use strict';
  var sparklineConfig = $().c3ChartDefaults().getDefaultSparklineConfig();
  sparklineConfig.bindto = '#chart-pf-sparkline-1';
  sparklineConfig.data = {
    columns: [
      ['%', 10, 50, 28, 20, 31, 27, 60, 36, 52, 55, 62, 68, 69, 88, 74, 88, 95],
    ],
    type: 'area'
  };
  var chart2 = c3.generate(sparklineConfig);
}]);

