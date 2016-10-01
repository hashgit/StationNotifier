// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ngCordova', 'ionic.ion.autoListDivider']);

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
});

app.controller('GeoCtrl', ['$scope', '$cordovaToast', '$cordovaGeolocation', '$cordovaLocalNotification', function($scope, $cordovaToast, $cordovaGeolocation, $cordovaLocalNotification) {
	$scope.coords = { latitude: 0, longitude: 0 };
	
	$scope.toggleItem = function (item) {
		item.isSelected = (item.isSelected === true ? false : true);
		
		if (item.isSelected) {
			$scope.showToast('Alarm added on ' + item.name, 'long', 'bottom');
		} else {
			$scope.showToast('Alarm removed from ' + item.name, 'long', 'bottom');
		}
	};
	
	$scope.Destinations = [
		 {
		   "longitude": 150.891938209534,
		   "latitude": -32.1668578769923,
		   "name": "Aberdeen Station"
		 },
		 {
		   "longitude": 151.7200756073,
		   "latitude": -32.9338120929286,
		   "name": "Adamstown Station"
		 },
		 {
		   "longitude": 150.799133777618,
		   "latitude": -34.5633155872904,
		   "name": "Albion Park Station - Albion Park Rail, NSW"
		 },
		 {
		   "longitude": 151.1142,
		   "latitude": -33.96962,
		   "name": "Allawah Station"
		 },
		 {
		   "longitude": 151.14733,
		   "latitude": -33.93642,
		   "name": "Arncliffe Station"
		 },
		 {
		   "longitude": 151.18521,
		   "latitude": -33.80888,
		   "name": "Artarmon Station"
		 },
		 {
		   "longitude": 151.10805,
		   "latitude": -33.68872,
		   "name": "Asquith Station"
		 },
		 {
		   "longitude": 151.03276,
		   "latitude": -33.84922,
		   "name": "Auburn Station"
		 },
		 {
		   "longitude": 150.929188728333,
		   "latitude": -34.3064348677537,
		   "name": "Austinmer Station"
		 },
		 {
		   "longitude": 151.541805267334,
		   "latitude": -33.0131259310651,
		   "name": "Awaba Station"
		 },
		 {
		   "longitude": 151.14039,
		   "latitude": -33.94536,
		   "name": "Banksia Station"
		 },
		 {
		   "longitude": 151.0346,
		   "latitude": -33.91786,
		   "name": "Bankstown Station"
		 },
		 {
		   "longitude": 151.12481,
		   "latitude": -33.93162,
		   "name": "Bardwell Park Station"
		 },
		 {
		   "longitude": 150.580115318298,
		   "latitude": -34.2914029022595,
		   "name": "Bargo Station"
		 },
		 {
		   "longitude": 149.583234786987,
		   "latitude": -33.4257107761292,
		   "name": "Bathurst Station"
		 },
		 {
		   "longitude": 151.06634,
		   "latitude": -33.7498,
		   "name": "Beecroft Station"
		 },
		 {
		   "longitude": 150.27937,
		   "latitude": -33.50658,
		   "name": "Bell Station"
		 },
		 {
		   "longitude": 150.910091400146,
		   "latitude": -34.3626036433513,
		   "name": "Bellambi Station"
		 },
		 {
		   "longitude": 151.08871,
		   "latitude": -33.91721,
		   "name": "Belmore Station"
		 },
		 {
		   "longitude": 151.03225,
		   "latitude": -33.87194,
		   "name": "Berala Station"
		 },
		 {
		   "longitude": 151.658449172974,
		   "latitude": -32.7997206928277,
		   "name": "Beresfield Station"
		 },
		 {
		   "longitude": 151.15304,
		   "latitude": -33.62348,
		   "name": "Berowra Station"
		 },
		 {
		   "longitude": 150.69637298584,
		   "latitude": -34.7805004611218,
		   "name": "Berry Station"
		 },
		 {
		   "longitude": 151.080894470215,
		   "latitude": -33.9491984970868,
		   "name": "Beverly Hills Station"
		 },
		 {
		   "longitude": 151.11344,
		   "latitude": -33.93756,
		   "name": "Bexley North Station"
		 },
		 {
		   "longitude": 151.024,
		   "latitude": -33.89332,
		   "name": "Birrong Station"
		 },
		 {
		   "longitude": 150.2841,
		   "latitude": -33.63334,
		   "name": "Blackheath Station"
		 },
		 {
		   "longitude": 150.909576416016,
		   "latitude": -33.7690876114474,
		   "name": "Blacktown Station"
		 },
		 {
		   "longitude": 150.60959815979,
		   "latitude": -33.7436476615767,
		   "name": "Blaxland Station"
		 },
		 {
		   "longitude": 150.609769821167,
		   "latitude": -34.8537489831732,
		   "name": "Bomaderry (Nowra) Station"
		 },
		 {
		   "longitude": 150.85352,
		   "latitude": -34.65895,
		   "name": "Bombo Station"
		 },
		 {
		   "longitude": 151.247234344482,
		   "latitude": -33.8911868387871,
		   "name": "Bondi Junction Station"
		 },
		 {
		   "longitude": 151.604976654053,
		   "latitude": -32.9716597629034,
		   "name": "Booragul Station"
		 },
		 {
		   "longitude": 150.416693687439,
		   "latitude": -34.4781537878719,
		   "name": "Bowral Station"
		 },
		 {
		   "longitude": 151.345467567444,
		   "latitude": -32.6623197100393,
		   "name": "Branxton Station"
		 },
		 {
		   "longitude": 151.734237670898,
		   "latitude": -32.9230418122506,
		   "name": "Broadmeadow Station"
		 },
		 {
		   "longitude": 150.414848327637,
		   "latitude": -33.7235544016156,
		   "name": "Bullaburra Station"
		 },
		 {
		   "longitude": 150.914897918701,
		   "latitude": -34.3340101084634,
		   "name": "Bulli Station"
		 },
		 {
		   "longitude": 150.299406051636,
		   "latitude": -34.6560510146948,
		   "name": "Bundanoon  Station"
		 },
		 {
		   "longitude": 150.397923588753,
		   "latitude": -34.4943415822403,
		   "name": "Burradoo Station"
		 },
		 {
		   "longitude": 151.103982925415,
		   "latitude": -33.8771498499492,
		   "name": "Burwood Station"
		 },
		 {
		   "longitude": 150.93882,
		   "latitude": -33.89488,
		   "name": "Cabramatta Station"
		 },
		 {
		   "longitude": 151.024203300476,
		   "latitude": -33.8187326229118,
		   "name": "Camellia Station - Rosehill, NSW"
		 },
		 {
		   "longitude": 150.814347267151,
		   "latitude": -34.0637878320653,
		   "name": "Campbelltown Station"
		 },
		 {
		   "longitude": 151.10285,
		   "latitude": -33.9105,
		   "name": "Campsie Station"
		 },
		 {
		   "longitude": 150.94393,
		   "latitude": -33.88687,
		   "name": "Canley Vale Station"
		 },
		 {
		   "longitude": 151.118659973145,
		   "latitude": -33.9121311456447,
		   "name": "Canterbury Station"
		 },
		 {
		   "longitude": 151.662697792053,
		   "latitude": -32.9416278299872,
		   "name": "Cardiff Station"
		 },
		 {
		   "longitude": 151.12238,
		   "latitude": -34.04159,
		   "name": "Caringbah Station"
		 },
		 {
		   "longitude": 151.04691,
		   "latitude": -33.78226,
		   "name": "Carlingford Station"
		 },
		 {
		   "longitude": 151.123595237732,
		   "latitude": -33.9684913452638,
		   "name": "Carlton Station"
		 },
		 {
		   "longitude": 150.96148,
		   "latitude": -33.88432,
		   "name": "Carramar Station"
		 },
		 {
		   "longitude": 150.91194,
		   "latitude": -33.94987,
		   "name": "Casula Station - Casula Mall, NSW"
		 },
		 {
		   "longitude": 151.20592,
		   "latitude": -33.88373,
		   "name": "Central Station - Haymarket, NSW"
		 },
		 {
		   "longitude": 151.18089,
		   "latitude": -33.79765,
		   "name": "Chatswood Station"
		 },
		 {
		   "longitude": 151.07855,
		   "latitude": -33.75569,
		   "name": "Cheltenham Station"
		 },
		 {
		   "longitude": 150.99937,
		   "latitude": -33.88354,
		   "name": "Chester Hill Station"
		 },
		 {
		   "longitude": 151.2107,
		   "latitude": -33.86138,
		   "name": "Circular Quay Station - The Rocks, NSW"
		 },
		 {
		   "longitude": 151.772603988647,
		   "latitude": -32.9266080370003,
		   "name": "Civic Station - Newcastle West, NSW"
		 },
		 {
		   "longitude": 150.787954330444,
		   "latitude": -33.6086685366095,
		   "name": "Clarendon Station"
		 },
		 {
		   "longitude": 151.01738,
		   "latitude": -33.83624,
		   "name": "Clyde Station - Granville, NSW"
		 },
		 {
		   "longitude": 150.97732,
		   "latitude": -34.24205,
		   "name": "Coalcliff Station"
		 },
		 {
		   "longitude": 151.623687744141,
		   "latitude": -32.9426722770864,
		   "name": "Cockle Creek Station - Argenton, NSW"
		 },
		 {
		   "longitude": 150.943393707275,
		   "latitude": -34.2894173472216,
		   "name": "Coledale Station"
		 },
		 {
		   "longitude": 151.06796,
		   "latitude": -34.00423,
		   "name": "Como Station"
		 },
		 {
		   "longitude": 151.08554,
		   "latitude": -33.84885,
		   "name": "Concord West Station"
		 },
		 {
		   "longitude": 150.885028839111,
		   "latitude": -34.4379559243268,
		   "name": "Coniston Station"
		 },
		 {
		   "longitude": 150.904973745346,
		   "latitude": -34.3754888043994,
		   "name": "Corrimal Station"
		 },
		 {
		   "longitude": 151.17215,
		   "latitude": -33.59353,
		   "name": "Cowan Station"
		 },
		 {
		   "longitude": 150.877947807312,
		   "latitude": -34.4664432041266,
		   "name": "Cringila Station"
		 },
		 {
		   "longitude": 151.15149,
		   "latitude": -34.0558,
		   "name": "Cronulla Station"
		 },
		 {
		   "longitude": 151.11547,
		   "latitude": -33.88323,
		   "name": "Croydon Station"
		 },
		 {
		   "longitude": 150.791816711426,
		   "latitude": -34.4928339198256,
		   "name": "Dapto Station"
		 },
		 {
		   "longitude": 151.08725,
		   "latitude": -33.7998,
		   "name": "Denistone Station"
		 },
		 {
		   "longitude": 151.18276,
		   "latitude": -33.93412,
		   "name": "Domestic Airport Station - Sydney Domestic Airport, NSW"
		 },
		 {
		   "longitude": 150.86837,
		   "latitude": -33.76399,
		   "name": "Doonside Station"
		 },
		 {
		   "longitude": 151.500864028931,
		   "latitude": -33.0836671722832,
		   "name": "Dora Creek Station"
		 },
		 {
		   "longitude": 150.709848403931,
		   "latitude": -34.1832282858822,
		   "name": "Douglas Park Station"
		 },
		 {
		   "longitude": 151.14079,
		   "latitude": -33.91097,
		   "name": "Dulwich Hill Station"
		 },
		 {
		   "longitude": 151.03336,
		   "latitude": -33.80377,
		   "name": "Dundas Station - Oatlands, NSW"
		 },
		 {
		   "longitude": 151.759643554688,
		   "latitude": -32.4018493810999,
		   "name": "Dungog Station"
		 },
		 {
		   "longitude": 150.840139389038,
		   "latitude": -34.6062965274538,
		   "name": "Dunmore (Shellharbour) Station"
		 },
		 {
		   "longitude": 150.98476,
		   "latitude": -33.96178,
		   "name": "East Hills Station"
		 },
		 {
		   "longitude": 151.587381362915,
		   "latitude": -32.7450528231265,
		   "name": "East Maitland Station"
		 },
		 {
		   "longitude": 150.759029388428,
		   "latitude": -33.6017165329736,
		   "name": "East Richmond Station"
		 },
		 {
		   "longitude": 151.08224,
		   "latitude": -33.79021,
		   "name": "Eastwood Station"
		 },
		 {
		   "longitude": 151.23619,
		   "latitude": -33.87904,
		   "name": "Edgecliff Station"
		 },
		 {
		   "longitude": 150.67227,
		   "latitude": -33.74556,
		   "name": "Emu Plains Station"
		 },
		 {
		   "longitude": 151.01469,
		   "latitude": -34.06775,
		   "name": "Engadine Station"
		 },
		 {
		   "longitude": 151.185479164124,
		   "latitude": -33.9002704608133,
		   "name": "Erskineville Station"
		 },
		 {
		   "longitude": 150.317344665527,
		   "latitude": -34.6138905181599,
		   "name": "Exeter Station"
		 },
		 {
		   "longitude": 150.95697,
		   "latitude": -33.87243,
		   "name": "Fairfield Station"
		 },
		 {
		   "longitude": 150.89635848999,
		   "latitude": -34.3954015558009,
		   "name": "Fairy Meadow Station"
		 },
		 {
		   "longitude": 151.58166,
		   "latitude": -32.98268,
		   "name": "Fassifern Station"
		 },
		 {
		   "longitude": 150.53454,
		   "latitude": -33.69537,
		   "name": "Faulconbridge Station"
		 },
		 {
		   "longitude": 151.0698,
		   "latitude": -33.86486,
		   "name": "Flemington Station - Homebush, NSW"
		 },
		 {
		   "longitude": 150.81753,
		   "latitude": -34.74451,
		   "name": "Gerringong Station"
		 },
		 {
		   "longitude": 150.620455741882,
		   "latitude": -33.7689449118897,
		   "name": "Glenbrook Station"
		 },
		 {
		   "longitude": 150.89297,
		   "latitude": -33.97231,
		   "name": "Glenfield Station"
		 },
		 {
		   "longitude": 151.15449,
		   "latitude": -33.75608,
		   "name": "Gordon Station"
		 },
		 {
		   "longitude": 151.341218948364,
		   "latitude": -33.4234900826391,
		   "name": "Gosford Station"
		 },
		 {
		   "longitude": 149.719491004944,
		   "latitude": -34.7583616004034,
		   "name": "Goulburn Station"
		 },
		 {
		   "longitude": 151.01252,
		   "latitude": -33.83319,
		   "name": "Granville Station"
		 },
		 {
		   "longitude": 151.202516555786,
		   "latitude": -33.9061832006722,
		   "name": "Green Square Station - Zetland, NSW"
		 },
		 {
		   "longitude": 151.383962631226,
		   "latitude": -32.6864505993384,
		   "name": "Greta Station"
		 },
		 {
		   "longitude": 150.98443,
		   "latitude": -33.85437,
		   "name": "Guildford Station"
		 },
		 {
		   "longitude": 151.08547,
		   "latitude": -34.03488,
		   "name": "Gymea Station"
		 },
		 {
		   "longitude": 151.748485565186,
		   "latitude": -32.9183946976724,
		   "name": "Hamilton Station - Islington, NSW"
		 },
		 {
		   "longitude": 151.00763,
		   "latitude": -33.82321,
		   "name": "Harris Park Station"
		 },
		 {
		   "longitude": 151.22693,
		   "latitude": -33.54659,
		   "name": "Hawkesbury River Station - Brooklyn, NSW"
		 },
		 {
		   "longitude": 150.454158782959,
		   "latitude": -33.7237328704582,
		   "name": "Hazelbrook Station"
		 },
		 {
		   "longitude": 151.00809,
		   "latitude": -34.08798,
		   "name": "Heathcote Station"
		 },
		 {
		   "longitude": 150.99479,
		   "latitude": -34.17683,
		   "name": "Helensburgh Station"
		 },
		 {
		   "longitude": 151.684284210205,
		   "latitude": -32.8294761987901,
		   "name": "Hexham Station"
		 },
		 {
		   "longitude": 151.563348770142,
		   "latitude": -32.741659783098,
		   "name": "High Street Station - Maitland NSW"
		 },
		 {
		   "longitude": 151.649823188782,
		   "latitude": -32.5046949224319,
		   "name": "Hilldale Station"
		 },
		 {
		   "longitude": 150.95656,
		   "latitude": -33.9632,
		   "name": "Holsworthy Station - Voyager Point, NSW"
		 },
		 {
		   "longitude": 151.0864,
		   "latitude": -33.86682,
		   "name": "Homebush Station"
		 },
		 {
		   "longitude": 151.09853,
		   "latitude": -33.7029,
		   "name": "Hornsby Station"
		 },
		 {
		   "longitude": 151.13184,
		   "latitude": -33.91055,
		   "name": "Hurlstone Park Station"
		 },
		 {
		   "longitude": 151.1024,
		   "latitude": -33.96736,
		   "name": "Hurstville Station"
		 },
		 {
		   "longitude": 150.864686965942,
		   "latitude": -33.9973512537369,
		   "name": "Ingleburn Station"
		 },
		 {
		   "longitude": 151.1661,
		   "latitude": -33.93529,
		   "name": "International Airport Station - Sydney International Airport, NSW"
		 },
		 {
		   "longitude": 151.06466,
		   "latitude": -34.01611,
		   "name": "Jannali Station"
		 },
		 {
		   "longitude": 150.310907363892,
		   "latitude": -33.7116675414225,
		   "name": "Katoomba Station"
		 },
		 {
		   "longitude": 150.817952156067,
		   "latitude": -34.469981318072,
		   "name": "Kembla Grange Station"
		 },
		 {
		   "longitude": 150.854816436768,
		   "latitude": -34.6723233272055,
		   "name": "Kiama Station"
		 },
		 {
		   "longitude": 151.16168,
		   "latitude": -33.76545,
		   "name": "Killara Station"
		 },
		 {
		   "longitude": 151.22232,
		   "latitude": -33.87482,
		   "name": "Kings Cross Station"
		 },
		 {
		   "longitude": 151.10044,
		   "latitude": -33.94063,
		   "name": "Kingsgrove Station"
		 },
		 {
		   "longitude": 150.7198,
		   "latitude": -33.75824,
		   "name": "Kingswood Station"
		 },
		 {
		   "longitude": 151.07118,
		   "latitude": -34.035,
		   "name": "Kirrawee Station"
		 },
		 {
		   "longitude": 151.13261,
		   "latitude": -33.96219,
		   "name": "Kogarah Station"
		 },
		 {
		   "longitude": 151.318559646606,
		   "latitude": -33.4664611545375,
		   "name": "Koolewong Station"
		 },
		 {
		   "longitude": 151.69780254364,
		   "latitude": -32.941555798698,
		   "name": "Kotara Station - Kotara Fair, NSW"
		 },
		 {
		   "longitude": 151.07603,
		   "latitude": -33.92006,
		   "name": "Lakemba Station"
		 },
		 {
		   "longitude": 150.642857551575,
		   "latitude": -33.7742959826631,
		   "name": "Lapstone Station"
		 },
		 {
		   "longitude": 150.430040359497,
		   "latitude": -33.7190211686007,
		   "name": "Lawson Station"
		 },
		 {
		   "longitude": 150.98494,
		   "latitude": -33.88149,
		   "name": "Leightonfield Station - Villawood, NSW"
		 },
		 {
		   "longitude": 150.830225944519,
		   "latitude": -34.0509882559031,
		   "name": "Leumeah Station"
		 },
		 {
		   "longitude": 150.330948829651,
		   "latitude": -33.7121673224391,
		   "name": "Leura Station"
		 },
		 {
		   "longitude": 151.14733,
		   "latitude": -33.89331,
		   "name": "Lewisham Station"
		 },
		 {
		   "longitude": 151.04512,
		   "latitude": -33.86382,
		   "name": "Lidcombe Station"
		 },
		 {
		   "longitude": 150.505056381226,
		   "latitude": -33.7149160660364,
		   "name": "Linden Station"
		 },
		 {
		   "longitude": 151.16901,
		   "latitude": -33.77503,
		   "name": "Lindfield Station"
		 },
		 {
		   "longitude": 151.369972229004,
		   "latitude": -33.3823970088228,
		   "name": "Lisarow Station"
		 },
		 {
		   "longitude": 150.157828330994,
		   "latitude": -33.4804221688293,
		   "name": "Lithgow Station - Bowenfels, NSW"
		 },
		 {
		   "longitude": 150.92708,
		   "latitude": -33.92505,
		   "name": "Liverpool Station"
		 },
		 {
		   "longitude": 151.449451446533,
		   "latitude": -32.7207933568906,
		   "name": "Lochinvar Station"
		 },
		 {
		   "longitude": 151.05132,
		   "latitude": -34.04518,
		   "name": "Loftus Station"
		 },
		 {
		   "longitude": 150.875887870789,
		   "latitude": -34.4535632028808,
		   "name": "Lysaghts Station - Mount Saint Thomas, NSW"
		 },
		 {
		   "longitude": 150.796837806702,
		   "latitude": -34.0721065200187,
		   "name": "Macarthur Station - Englorie Park, NSW"
		 },
		 {
		   "longitude": 151.18631,
		   "latitude": -33.89664,
		   "name": "Macdonaldtown Station - Erskineville, NSW"
		 },
		 {
		   "longitude": 150.878591537476,
		   "latitude": -33.9851465942604,
		   "name": "Macquarie Fields Railway Station"
		 },
		 {
		   "longitude": 151.552019119263,
		   "latitude": -32.7380861225157,
		   "name": "Maitland Station"
		 },
		 {
		   "longitude": 150.90018,
		   "latitude": -33.74641,
		   "name": "Marayong Station"
		 },
		 {
		   "longitude": 151.154751777649,
		   "latitude": -33.914303644803,
		   "name": "Marrickville Station - Marrickville South, NSW"
		 },
		 {
		   "longitude": 151.211786270142,
		   "latitude": -33.8680281321938,
		   "name": "Martin Place Station - Sydney, NSW"
		 },
		 {
		   "longitude": 151.618494987488,
		   "latitude": -32.5586418095461,
		   "name": "Martins Creek Station - Vacy, NSW"
		 },
		 {
		   "longitude": 150.007839202881,
		   "latitude": -34.7094799826406,
		   "name": "Marulan Station"
		 },
		 {
		   "longitude": 151.18743,
		   "latitude": -33.92302,
		   "name": "Mascot Station - Sydney Domestic Airport, NSW"
		 },
		 {
		   "longitude": 151.089777946472,
		   "latitude": -33.8168429306412,
		   "name": "Meadowbank Station"
		 },
		 {
		   "longitude": 150.280652046204,
		   "latitude": -33.6736399602263,
		   "name": "Medlow Bath Station"
		 },
		 {
		   "longitude": 150.744867324829,
		   "latitude": -34.1035963724391,
		   "name": "Menangle Park Station"
		 },
		 {
		   "longitude": 150.992531776428,
		   "latitude": -33.8366291469218,
		   "name": "Merrylands Station"
		 },
		 {
		   "longitude": 151.618323326111,
		   "latitude": -32.7653722622717,
		   "name": "Metford Station"
		 },
		 {
		   "longitude": 151.21182,
		   "latitude": -33.8459,
		   "name": "Milsons Point Station - Kirribilli, NSW"
		 },
		 {
		   "longitude": 151.58429145813,
		   "latitude": -32.6691478234414,
		   "name": "Mindaribba Station - Woodville, NSW"
		 },
		 {
		   "longitude": 150.842499732971,
		   "latitude": -34.0274106462047,
		   "name": "Minto Station"
		 },
		 {
		   "longitude": 151.10249,
		   "latitude": -34.03629,
		   "name": "Miranda Station"
		 },
		 {
		   "longitude": 150.447463989258,
		   "latitude": -34.4528908405603,
		   "name": "Mittagong Station"
		 },
		 {
		   "longitude": 151.487731933594,
		   "latitude": -33.1090496203651,
		   "name": "Morisset Station"
		 },
		 {
		   "longitude": 151.08132,
		   "latitude": -33.97055,
		   "name": "Mortdale Station"
		 },
		 {
		   "longitude": 150.371460914612,
		   "latitude": -34.5479232553084,
		   "name": "Moss Vale Station"
		 },
		 {
		   "longitude": 151.114883422852,
		   "latitude": -33.6717113529749,
		   "name": "Mount Colah Station"
		 },
		 {
		   "longitude": 150.81987,
		   "latitude": -33.76956,
		   "name": "Mount Druitt Station"
		 },
		 {
		   "longitude": 151.13687,
		   "latitude": -33.65312,
		   "name": "Mount Kuring-gai Station"
		 },
		 {
		   "longitude": 150.25722026825,
		   "latitude": -33.5878823444835,
		   "name": "Mount Victoria Station"
		 },
		 {
		   "longitude": 150.830354690552,
		   "latitude": -33.6265910394425,
		   "name": "Mulgrave Station"
		 },
		 {
		   "longitude": 150.89017868042,
		   "latitude": -32.2673942457495,
		   "name": "Muswellbrook Station"
		 },
		 {
		   "longitude": 151.344394683838,
		   "latitude": -33.3947950485147,
		   "name": "Narara Station"
		 },
		 {
		   "longitude": 151.783761978149,
		   "latitude": -32.9265359934785,
		   "name": "Newcastle Station"
		 },
		 {
		   "longitude": 151.17956,
		   "latitude": -33.89792,
		   "name": "Newtown Station"
		 },
		 {
		   "longitude": 151.354233026505,
		   "latitude": -33.3830062023649,
		   "name": "Niagara Park Station"
		 },
		 {
		   "longitude": 151.096472740173,
		   "latitude": -33.721162883323,
		   "name": "Normanhurst Station"
		 },
		 {
		   "longitude": 151.08808,
		   "latitude": -33.85892,
		   "name": "North Strathfield Station"
		 },
		 {
		   "longitude": 151.20702,
		   "latitude": -33.84111,
		   "name": "North Sydney Station - North Sydney Shoppingworld, NSW"
		 },
		 {
		   "longitude": 150.891208648682,
		   "latitude": -34.412787029572,
		   "name": "North Wollongong Station - Gwynneville, NSW"
		 },
		 {
		   "longitude": 150.81606388092,
		   "latitude": -34.5704717865379,
		   "name": "Oak Flats Station"
		 },
		 {
		   "longitude": 151.07902,
		   "latitude": -33.98085,
		   "name": "Oatley Station"
		 },
		 {
		   "longitude": 151.069264411926,
		   "latitude": -33.8465740017076,
		   "name": "Olympic Park Station - Homebush Bay, NSW"
		 },
		 {
		   "longitude": 151.005706787109,
		   "latitude": -34.2110568753567,
		   "name": "Otford Station"
		 },
		 {
		   "longitude": 151.369972229004,
		   "latitude": -33.3597463145646,
		   "name": "Ourimbah Station"
		 },
		 {
		   "longitude": 151.03231,
		   "latitude": -33.95192,
		   "name": "Padstow Station"
		 },
		 {
		   "longitude": 150.99777,
		   "latitude": -33.95435,
		   "name": "Panania Station"
		 },
		 {
		   "longitude": 151.00521,
		   "latitude": -33.81744,
		   "name": "Parramatta Station"
		 },
		 {
		   "longitude": 151.614418029785,
		   "latitude": -32.6023255136287,
		   "name": "Paterson Station"
		 },
		 {
		   "longitude": 150.95632,
		   "latitude": -33.80138,
		   "name": "Pendle Hill Station"
		 },
		 {
		   "longitude": 151.071753501892,
		   "latitude": -33.7387229284056,
		   "name": "Pennant Hills Station"
		 },
		 {
		   "longitude": 150.69632,
		   "latitude": -33.75004,
		   "name": "Penrith Station"
		 },
		 {
		   "longitude": 150.211687088013,
		   "latitude": -34.6726409761218,
		   "name": "Penrose Station"
		 },
		 {
		   "longitude": 151.088619232178,
		   "latitude": -33.9661778581977,
		   "name": "Penshurst Station"
		 },
		 {
		   "longitude": 151.15528,
		   "latitude": -33.8939,
		   "name": "Petersham Station"
		 },
		 {
		   "longitude": 150.612516403198,
		   "latitude": -34.1790390040379,
		   "name": "Picton Station"
		 },
		 {
		   "longitude": 151.32705,
		   "latitude": -33.44734,
		   "name": "Point Clare Station - Tascott, NSW"
		 },
		 {
		   "longitude": 150.888118743896,
		   "latitude": -34.4729885969998,
		   "name": "Port Kembla North Station - Warrawong, NSW"
		 },
		 {
		   "longitude": 150.90142250061,
		   "latitude": -34.4773047373595,
		   "name": "Port Kembla Station"
		 },
		 {
		   "longitude": 151.05569,
		   "latitude": -33.92543,
		   "name": "Punchbowl Station"
		 },
		 {
		   "longitude": 151.14192,
		   "latitude": -33.74467,
		   "name": "Pymble Station"
		 },
		 {
		   "longitude": 150.88666,
		   "latitude": -33.72795,
		   "name": "Quakers Hill Station"
		 },
		 {
		   "longitude": 151.19841,
		   "latitude": -33.89215,
		   "name": "Redfern Station"
		 },
		 {
		   "longitude": 151.02412,
		   "latitude": -33.88302,
		   "name": "Regents Park Station"
		 },
		 {
		   "longitude": 151.01481,
		   "latitude": -33.95247,
		   "name": "Revesby Station"
		 },
		 {
		   "longitude": 151.08698,
		   "latitude": -33.83055,
		   "name": "Rhodes Station"
		 },
		 {
		   "longitude": 150.752549171448,
		   "latitude": -33.5989641710008,
		   "name": "Richmond Station - Windsor, NSW"
		 },
		 {
		   "longitude": 150.86035,
		   "latitude": -33.67911,
		   "name": "Riverstone Station"
		 },
		 {
		   "longitude": 151.05204,
		   "latitude": -33.95154,
		   "name": "Riverwood Station"
		 },
		 {
		   "longitude": 151.13687,
		   "latitude": -33.95194,
		   "name": "Rockdale Station"
		 },
		 {
		   "longitude": 150.844302177429,
		   "latitude": -33.7717275104,
		   "name": "Rooty Hill Station"
		 },
		 {
		   "longitude": 151.021885871887,
		   "latitude": -33.823545801397,
		   "name": "Rosehill Station"
		 },
		 {
		   "longitude": 151.176424026489,
		   "latitude": -33.7837130554728,
		   "name": "Roseville Station"
		 },
		 {
		   "longitude": 151.02918,
		   "latitude": -33.81002,
		   "name": "Rydalmere Station - Camellia, NSW"
		 },
		 {
		   "longitude": 151.702523231506,
		   "latitude": -32.8715496928783,
		   "name": "Sandgate Station, NSW"
		 },
		 {
		   "longitude": 150.965495109558,
		   "latitude": -34.2652678254321,
		   "name": "Scarborough Station - Wombarra, NSW"
		 },
		 {
		   "longitude": 150.867004394531,
		   "latitude": -32.0469333807978,
		   "name": "Scone Station"
		 },
		 {
		   "longitude": 151.01141,
		   "latitude": -33.88525,
		   "name": "Sefton Station"
		 },
		 {
		   "longitude": 150.935840606689,
		   "latitude": -33.7743673280157,
		   "name": "Seven Hills Station"
		 },
		 {
		   "longitude": 151.165266036987,
		   "latitude": -32.5719878476493,
		   "name": "Singleton Station"
		 },
		 {
		   "longitude": 150.56273,
		   "latitude": -33.69843,
		   "name": "Springwood Station"
		 },
		 {
		   "longitude": 151.2112,
		   "latitude": -33.8704,
		   "name": "St James Station - Sydney, NSW"
		 },
		 {
		   "longitude": 151.19419,
		   "latitude": -33.82239,
		   "name": "St Leonards Station"
		 },
		 {
		   "longitude": 150.77594,
		   "latitude": -33.76224,
		   "name": "St Marys Station"
		 },
		 {
		   "longitude": 151.1803,
		   "latitude": -33.90741,
		   "name": "St Peters Station"
		 },
		 {
		   "longitude": 151.16388,
		   "latitude": -33.89452,
		   "name": "Stanmore Station"
		 },
		 {
		   "longitude": 150.981,
		   "latitude": -34.22646,
		   "name": "Stanwell Park Station"
		 },
		 {
		   "longitude": 151.09432,
		   "latitude": -33.87181,
		   "name": "Strathfield Station"
		 },
		 {
		   "longitude": 151.13939,
		   "latitude": -33.89051,
		   "name": "Summer Hill Station"
		 },
		 {
		   "longitude": 151.05709,
		   "latitude": -34.03191,
		   "name": "Sutherland Station"
		 },
		 {
		   "longitude": 151.16651,
		   "latitude": -33.91451,
		   "name": "Sydenham Station"
		 },
		 {
		   "longitude": 150.590071678162,
		   "latitude": -34.2234419024609,
		   "name": "Tahmoor Station"
		 },
		 {
		   "longitude": 150.086331367493,
		   "latitude": -34.7184049746781,
		   "name": "Tallong Station"
		 },
		 {
		   "longitude": 151.12833,
		   "latitude": -33.73228,
		   "name": "Tarramurra Station - Turramurra, NSW"
		 },
		 {
		   "longitude": 151.669435501099,
		   "latitude": -32.8090631913711,
		   "name": "Tarro Station"
		 },
		 {
		   "longitude": 151.318731307983,
		   "latitude": -33.4509582141917,
		   "name": "Tascott Station"
		 },
		 {
		   "longitude": 151.539659500122,
		   "latitude": -32.7237539430427,
		   "name": "Telarah Station"
		 },
		 {
		   "longitude": 151.04159,
		   "latitude": -33.79372,
		   "name": "Telopea Station"
		 },
		 {
		   "longitude": 151.15638,
		   "latitude": -33.92457,
		   "name": "Tempe Station"
		 },
		 {
		   "longitude": 151.603860855103,
		   "latitude": -32.9624784205784,
		   "name": "Teralba Station"
		 },
		 {
		   "longitude": 150.918760299683,
		   "latitude": -34.3181678576806,
		   "name": "Thirroul  Station"
		 },
		 {
		   "longitude": 151.07834,
		   "latitude": -33.73186,
		   "name": "Thornleigh Station"
		 },
		 {
		   "longitude": 151.639738082886,
		   "latitude": -32.7835944573398,
		   "name": "Thornton Station"
		 },
		 {
		   "longitude": 150.95145,
		   "latitude": -33.78732,
		   "name": "Toongabbie Station"
		 },
		 {
		   "longitude": 151.20666,
		   "latitude": -33.87383,
		   "name": "Town Hall Station - Sydney, NSW"
		 },
		 {
		   "longitude": 150.90142250061,
		   "latitude": -34.3841397899996,
		   "name": "Towradgi Station"
		 },
		 {
		   "longitude": 151.420226097107,
		   "latitude": -33.3078281907024,
		   "name": "Tuggerah Station"
		 },
		 {
		   "longitude": 151.13991,
		   "latitude": -33.92994,
		   "name": "Turrella Station"
		 },
		 {
		   "longitude": 150.84593296051,
		   "latitude": -34.4548017508796,
		   "name": "Unanderra Station"
		 },
		 {
		   "longitude": 150.583763122559,
		   "latitude": -33.7045274950377,
		   "name": "Valley Heights Station"
		 },
		 {
		   "longitude": 151.593775749207,
		   "latitude": -32.7510444718455,
		   "name": "Victoria Street Station - East Maitland NSW"
		 },
		 {
		   "longitude": 150.97608,
		   "latitude": -33.88091,
		   "name": "Villawood Station"
		 },
		 {
		   "longitude": 150.8508,
		   "latitude": -33.64951,
		   "name": "Vineyard Station"
		 },
		 {
		   "longitude": 151.117,
		   "latitude": -33.71753,
		   "name": "Wahroonga Station"
		 },
		 {
		   "longitude": 151.10437,
		   "latitude": -33.71002,
		   "name": "Waitara Station"
		 },
		 {
		   "longitude": 151.695871353149,
		   "latitude": -32.4961530762397,
		   "name": "Wallarobba Station"
		 },
		 {
		   "longitude": 151.710703969002,
		   "latitude": -32.8874347268229,
		   "name": "Warabrook Station"
		 },
		 {
		   "longitude": 151.731791496277,
		   "latitude": -32.902830490644,
		   "name": "Waratah Station - Georgetown, NSW"
		 },
		 {
		   "longitude": 151.44880771637,
		   "latitude": -33.2474093717319,
		   "name": "Warnervale Station"
		 },
		 {
		   "longitude": 151.12177,
		   "latitude": -33.7243,
		   "name": "Warrawee Station"
		 },
		 {
		   "longitude": 150.59888,
		   "latitude": -33.72092,
		   "name": "Warrimoo Station"
		 },
		 {
		   "longitude": 150.93507,
		   "latitude": -33.91337,
		   "name": "Warwick Farm Station"
		 },
		 {
		   "longitude": 150.99448,
		   "latitude": -34.13441,
		   "name": "Waterfall Station"
		 },
		 {
		   "longitude": 151.19768,
		   "latitude": -33.83811,
		   "name": "Waverton Station"
		 },
		 {
		   "longitude": 150.38094,
		   "latitude": -33.71409,
		   "name": "Wentworth Falls Station"
		 },
		 {
		   "longitude": 150.97262,
		   "latitude": -33.80716,
		   "name": "Wentworthville Station"
		 },
		 {
		   "longitude": 150.757441520691,
		   "latitude": -33.759169426529,
		   "name": "Werrington Station - Werrington County, NSW"
		 },
		 {
		   "longitude": 151.09027,
		   "latitude": -33.80714,
		   "name": "West Ryde Station"
		 },
		 {
		   "longitude": 150.98796,
		   "latitude": -33.80848,
		   "name": "Westmead Station"
		 },
		 {
		   "longitude": 151.761145591736,
		   "latitude": -32.9249510211554,
		   "name": "Wickham Station"
		 },
		 {
		   "longitude": 151.06729,
		   "latitude": -33.92297,
		   "name": "Wiley Park Station"
		 },
		 {
		   "longitude": 150.811042785645,
		   "latitude": -33.6138687692064,
		   "name": "Windsor Station"
		 },
		 {
		   "longitude": 150.158472061157,
		   "latitude": -34.6920858282457,
		   "name": "Wingello Station"
		 },
		 {
		   "longitude": 151.738949,
		   "latitude": -32.46813,
		   "name": "Wirragulla Station - Wallarobba, NSW"
		 },
		 {
		   "longitude": 151.15331,
		   "latitude": -33.9285,
		   "name": "Wolli Creek Station"
		 },
		 {
		   "longitude": 150.888075828552,
		   "latitude": -34.4275848504598,
		   "name": "Wollongong Station - Coniston, NSW"
		 },
		 {
		   "longitude": 151.19175,
		   "latitude": -33.83187,
		   "name": "Wollstonecraft Station - Greenwich, NSW"
		 },
		 {
		   "longitude": 150.953307151794,
		   "latitude": -34.275552610873,
		   "name": "Wombarra Station"
		 },
		 {
		   "longitude": 151.25701,
		   "latitude": -33.49178,
		   "name": "Wondabyne Station - Phegans Bay, NSW"
		 },
		 {
		   "longitude": 150.482053756714,
		   "latitude": -33.7356180600103,
		   "name": "Woodford Station"
		 },
		 {
		   "longitude": 151.14405,
		   "latitude": -34.04767,
		   "name": "Woolooware Station"
		 },
		 {
		   "longitude": 150.915155410767,
		   "latitude": -34.3494950547786,
		   "name": "Woonona Station"
		 },
		 {
		   "longitude": 151.32073,
		   "latitude": -33.48796,
		   "name": "Woy Woy Station"
		 },
		 {
		   "longitude": 151.486916542053,
		   "latitude": -33.1805915035399,
		   "name": "Wyee Station"
		 },
		 {
		   "longitude": 151.20568,
		   "latitude": -33.86595,
		   "name": "Wynyard Station - Sydney, NSW"
		 },
		 {
		   "longitude": 151.425161361694,
		   "latitude": -33.2859832190325,
		   "name": "Wyong Station"
		 },
		 {
		   "longitude": 151.02417,
		   "latitude": -33.90655,
		   "name": "Yagoona Station"
		 },
		 {
		   "longitude": 150.97105,
		   "latitude": -33.86469,
		   "name": "Yennora Station"
		 },
		 {
		   "longitude": 150.543551445007,
		   "latitude": -34.3717430134557,
		   "name": "Yerrinbool  Station"
		 }
		];
	
	$scope.distanceCalculator = function(lat1,lon1,lat2,lon2) {
	  var R = 6371; // Radius of the earth in km
	  var dLat = $scope.deg2rad(lat2-lat1);  // deg2rad below
	  var dLon = $scope.deg2rad(lon2-lon1); 
	  var a = 
		Math.sin(dLat/2) * Math.sin(dLat/2) +
		Math.cos($scope.deg2rad(lat1)) * Math.cos($scope.deg2rad(lat2)) * 
		Math.sin(dLon/2) * Math.sin(dLon/2)
		; 
	  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	  var d = R * c; // Distance in km
	  return d;
	};

	$scope.deg2rad = function(deg) {
	  return deg * (Math.PI/180)
	}	
	
	document.addEventListener('deviceready', function() {		
	   var callbackFn = function(location) {
			backgroundGeolocation.finish();
			
			for (var i = 0; i < $scope.Destinations.length; i++)
			{
				if ($scope.Destinations[i].isSelected) {
					var kms = $scope.distanceCalculator(location.latitude, location.longitude, $scope.Destinations[i].latitude, $scope.Destinations[i].longitude);
					if (kms <= 1) {
						$scope.showToast($scope.Destinations[i].name, 'short', 'bottom');
						$scope.scheduleSingleNotification($scope.notificationId, $scope.Destinations[i].name);
					}
				}
			}
		};
	 
		var failureFn = function(error) {
			console.log('BackgroundGeolocation error');
		};
	 
		// BackgroundGeolocation is highly configurable. See platform specific configuration options 
		backgroundGeolocation.configure(callbackFn, failureFn, {
			desiredAccuracy: 100,
			stationaryRadius: 3,
			distanceFilter: 5,
			interval: 3000
		});
	 
		// Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app. 
		backgroundGeolocation.start();
		$scope.showToast('Click on a station to start monitoring', 'long', 'bottom');
	});
	
	$scope.notificationId = 1;
	$scope.scheduleSingleNotification = function (notificationId, t) {
	  $cordovaLocalNotification.schedule({
		id: $scope.notificationId,
		title: 'Arrival Notification',
		text: t,
		data: {		}
	  }).then(function (result) {
		// ...
	  });
	};
	

    $scope.showToast = function(message, duration, location) {
        $cordovaToast.show(message, duration, location).then(function(success) {
            
        }, function (error) {
            console.log("The toast was not shown due to " + error);
        });
    };	
}]);