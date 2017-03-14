#usr/bin/perl
use strict;
use warnings;

# - Very simple (& single page) hello-world-like plugin generator
# - To finish installation, must add the module name to ./src/app/app-module.js
# - -  and (temp) add the folder/controller/module field to the
# - -  ./mock_data/vertical-navigation file.

print "Welcome to the bare-bones Patternfly-AngularJS module generator\n";

print "Enter the name for the module folder (e.g., vm-overview): ";
my $directoryName = <STDIN>;
chomp($directoryName);

print "Enter your desired module name (e.g., vmOvewviewModule): ";
my $moduleName = <STDIN>;
chomp($moduleName);

print "Enter your desired controller name (e.g., vmOverviewController): ";
my $controllerName = <STDIN>;
chomp($controllerName);

print "Enter your desired common name (e.g., overview): ";
my $commonName = <STDIN>;
chomp($commonName);

# Heredocs to hold templates for the files

my $htmlFile = <<HTML_FILE;
<div class="container-fluid container-cards-pf">
  <ol class="breadcrumb" style="margin-bottom: 0px;">
    <li>$commonName</li>
  </ol>

  <div class="blank-slate-pf" style="">
    <div class="blank-slate-pf-icon">
      <i class="fa fa-globe"></i>
    </div>

    <h1>$commonName!</h1>
    <p>All your $commonName are belong to us!</p>

    <div class="blank-slate-pf-main-action">
      <p>Hello World: $commonName!</p>
    </div>
  </div>
</div>
HTML_FILE

my $moduleFile = <<MODULE_FILE;
angular.module( 'apf.$moduleName',
  [])
  .config(['\$routeProvider', function (\$routeProvider) {
    'use strict';
    \$routeProvider
      .when('/$directoryName', {
        templateUrl: 'src/$directoryName/$directoryName.html',
        controller: '$controllerName'
      });
  }]);
MODULE_FILE

my $controllerFile = <<CONTROLLER_FILE;
angular.module('apf.$moduleName').controller('$controllerName', []);
CONTROLLER_FILE

if (-d "./src/".$directoryName) {
    print "Directory already exists.\n";
} else {
    mkdir "./src/".$directoryName;
    print "Directory ./src/$directoryName created\n";
}


open (my $fh, ">", "./src/$directoryName/$directoryName.html") or die $!;
print $fh $htmlFile;
close $fh;
print "File ./src/$directoryName/$directoryName.html created\n";

open ($fh, ">", "./src/$directoryName/$directoryName-controller.js") or die $!;
print $fh $controllerFile;
close $fh;
print "File ./src/$directoryName/$directoryName-controller.js created";

open ($fh, ">", "./src/$directoryName/$directoryName-module.js") or die $!;
print $fh $moduleFile;
close $fh;
print "File ./src/$directoryName/$directoryName.html created\n";

print "Module creation complete!\n";