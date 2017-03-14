# Thermostat Web Playground

AngularJS & Patternfly Demo Application: Thermostat UI

An instance of this skeleton project can be found running inside an Openshift v2 DIY cartridge at: http://webplayground-umestudios.rhcloud.com

## How to use

As far as launching and cleaning up this project, I've included two bash scripts to help streamline the process.

> bash setup.sh

This should take care of gathering/installing the dependencies, creating the distribution folder (& contents), and actually launching the application. If asked to specify versions for jquery, patternfly, or any other dependency, I've opted for the newest one.

Once the dependencies and packages are locally installed, subsequent launches can be done via:

> grunt server

A script for teardown has also been included, and may useful when wanting a fresh install, or to clean up old files:

> bash teardown.sh

Note that this removes the node modules and bower components, so to restart the project you'll need to run the setup.sh script again.

## Plugin Generator

I have included a very basic perl script that generates a module, controller, and html file for a plugin based on user input. After creation, there is a bit of manual configuration to be done. The module must be included in the /src/app/app-module.js file, and must be paired with a plugin at mock_data/vertical-navigation. 

## Development tips

The grunt-contrib-watch module when running will check for changes to the code, and update accordingly. This is particularly nice during development because a quick rebuild will take place between changes and you can visually see the changes you've made. As far as IDEs go, it's all personal preference but I've found intellij has nice plugins for web programming, and VS Code has been responsive and a good option as well.

## TODO:
- Get protractor working for testing
- Start adding actual JavaScript logic (e.g., /mock_data should be replaced)
- Use Web-API to get and display some data dynamically
  - Plugins that may be easier to do first would be overview -> cpu -> memory
- Figure out a nice way to display host information, and toggle between numerous hosts
- Have the vertical navigation be drawn dynamically
  - Perhaps some VMs may not utilize all the plugins (i.e, non-NUMA machines may not want to see the NUMA plugin by default)
- Look into Angular 4 and how it can be included  
  
### Reference

Original demo application that this is based on can be found here: https://github.com/patternfly/angular-patternfly-demo-app

I have included a text file called dependencies.txt in the root of this project, that goes over some of the more common packages and what they are used for. At the bottom of that file I've posted a couple blog posts about Angular app structure, you may find it to be an interesting read.