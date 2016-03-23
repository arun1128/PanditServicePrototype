﻿// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);
        
        document.addEventListener('WebComponentsReady', function () {
            var template = document.querySelector('template#app');
            template.page = 0;

            var Demo = document.querySelector("template#Demo");
            Demo.connections = [
                              'Christian',
                              'Hindu',
                              'Jain',
                              'Muslim'
            ];

            var Demo_reachIn = document.querySelector("template#Demo_reachIn");
            Demo_reachIn.connections = [
                              'Sev-name 01',
                              'Sev-name 02',
                              'Sev-name 03',
                              'Sev-name 04'
            ];
        });            
        
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();