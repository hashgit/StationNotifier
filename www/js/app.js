// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ngCordova']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.factory('bgGeoService',function($rootScope){
  return {
  callbackFn : function (location) {},
  failureFn : function (err) {},
  initialize : function(){

  var bgGeo = window.BackgroundGeolocation;

    // BackgroundGeoLocation is highly configurable.
    bgGeo.configure(this.callbackFn, this.failureFn, {
        // Geolocation config
        desiredAccuracy: 0,
        stationaryRadius: 3,
        distanceFilter: 10,
        disableElasticity: true, // <-- [iOS] Default is 'false'.  Set true to disable speed-based distanceFilter elasticity
        locationUpdateInterval: 10,
        minimumActivityRecognitionConfidence: 10,   // 0-100%.  Minimum activity-confidence for a state-change 
        fastestLocationUpdateInterval: 5000,
        activityRecognitionInterval: 1,
        stopDetectionDelay: 1,  // Wait x minutes to engage stop-detection system
        stopTimeout: 1,  // Wait x miutes to turn off location system after stop-detection
        activityType: 'AutomotiveNavigation',

        // Application config
        debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
        forceReloadOnLocationChange: false,  // <-- [Android] If the user closes the app **while location-tracking is started** , reboot app when a new location is recorded (WARNING: possibly distruptive to user) 
        forceReloadOnMotionChange: false,    // <-- [Android] If the user closes the app **while location-tracking is started** , reboot app when device changes stationary-state (stationary->moving or vice-versa) --WARNING: possibly distruptive to user) 
        forceReloadOnGeofence: false,        // <-- [Android] If the user closes the app **while location-tracking is started** , reboot app when a geofence crossing occurs --WARNING: possibly distruptive to user) 
        stopOnTerminate: false,              // <-- [Android] Allow the background-service to run headless when user closes the app.
        startOnBoot: true,                   // <-- [Android] Auto start background-service in headless mode when device is powered-up.

        // HTTP / SQLite config
        url: 'https://www.somerandomurl.com1234',
        method: 'POST',
        batchSync: false,       // <-- [Default: false] Set true to sync locations to server in a single HTTP request.
        autoSync: true,         // <-- [Default: true] Set true to sync each location to server as it arrives.
        maxDaysToPersist: 1  ,  // <-- Maximum days to persist a location in plugin's SQLite database when HTTP fails
        // headers: {
        //     "X-FOO": "bar"
        // },
         //params: {
             // Add your parameters here 
         //}
       });

  bgGeo.changePace(true); // Setting pace to fast to enable aggresive tracking as soon as the plugin is started
                          // Comment it to enable default behaviour
   
  
  $rootScope.bgGeo = bgGeo;
    // Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app.
    // bgGeo.start();

    // If you wish to turn OFF background-tracking, call the #stop method.
    // bgGeo.stop()

    },
  start : function(){
      $rootScope.bgGeo.start();
    },
  stop : function(){
      $rootScope.bgGeo.stop();  
    }
  
    }
});

app.controller('GeoCtrl', function($scope, $cordovaToast, $cordovaGeolocation, bgGeoService) {
	$scope.coords = { latitude: 0, longitude: 0 };
	
	bgGeoService.initialize();
	bgGeoService.callbackFn = function (location) {
		$scope.showToast(location, 'long', 'bottom');
	};
	
	bgGeoService.failureFn = function (err) {
		
	};

	
	// navigator.geolocation.getCurrentPosition(function(position) {
		// $scope.$apply(function() {
			// $scope.coords.latitude = position.coords.latitude;
			// $scope.coords.longitude = position.coords.longitude;
		// });
	// });
  
	// var watchOptions = {
		// timeout : 3000,
		// enableHighAccuracy: false // may cause errors if true
	// };

	// var watch = $cordovaGeolocation.watchPosition(watchOptions);
	// watch.then(
		// null,
		// function(err) {
			// console.log(err);
		// },
		// function(position) {
			// $scope.coords.latitude = position.coords.latitude;
			// $scope.coords.longitude = position.coords.longitude;
			// $scope.showToast($scope.coords.latitude + ' ' + $scope.coords.longitude, 'long', 'bottom');
		// });
  
    $scope.showToast = function(message, duration, location) {
        $cordovaToast.show(message, duration, location).then(function(success) {
        }, function (error) {
            console.log("The toast was not shown due to " + error);
        });
    };
});