(function() {

  'use strict';

  /**
   * @ngdoc function
   * @name aircheck.dashboard.controller:DashboardCtrl
   * @description
   * # DashboardCtrl
   * Dashboard Controller
   */
  angular.module('aircheck.map')
    .controller('TrackingCtrl', TrackingCtrl);

  TrackingCtrl.$inject = ['$scope', '$element', 'leafletData', 'trackingFactory'];
  function TrackingCtrl($scope, $element, leafletData, trackingFactory) {

    var vm = this;

    vm.markers = [];

    vm.pagOptions = {
      isFullscreen: false,
    };

    vm.center = {
      lat: 42,
      lng: -0.88,
      zoom: 10
    };     //Actual center of the map

    vm.city;

    vm.dangerZones = new Array();

    trackingFactory.getPosition()
      .then(function (position){
        if(position.coords.latitude != undefined) {
          vm.updateCenter(position.coords.latitude, position.coords.longitude, 12);
        }else{
          vm.updateCenter(42, -0.88, 12);
        }
        trackingFactory.getDangerZones(position.coords.latitude, position.coords.longitude)
        .then(function(data){
          //console.log("DATA", data);
          data.forEach(function(d){
            vm.dangerZones.push(d.data);
          });
          vm.addDangerZones();
          trackingFactory.getAllUsers(vm.center.lat, vm.center.lng, 2)
            .then(function (user) {
              console.log("USERS DEVUELTOS", user);
              var users = user[0].data;
              if(users != undefined && users.length > 0) {
                _parseMarkers(users);
              }
            })
        }).catch(function (err) {
          console.log('getDangerZones ERROR(' + err.code + '): ' + err.message);
        });
      })
      .catch(function (err){
        console.log('getPosition ERROR(' + err.code + '): ' + err.message);
    });

    var m = L.featureGroup([]);

    angular.extend($scope, {
      layers: {
        baselayers: {
          googleTerrain: {
            name: 'Google Terrain',
            layerType: 'TERRAIN',
            type: 'google'
          },
          googleHybrid: {
              name: 'Google Hybrid',
              layerType: 'HYBRID',
              type: 'google'
          },
          googleRoadmap: {
            name: 'Google Streets',
            layerType: 'ROADMAP',
            type: 'google'
          }
        }
      },
      defaults: {
        scrollWheelZoom: false
      },
      controls: {
        custom: [m]
      }
    });

    //Functions
    vm.updateCenter = updateCenter;
    vm.searchCity = searchCity;
    vm.addDangerZones = addDangerZones;

    function updateCenter (lat, lng, zoom) {
      vm.center = {
        lat: lat,
        lng: lng,
        zoom: zoom
      };
    };

    function searchCity($event) {
      if($event.keyCode == 13) {
        trackingFactory.searchCity(vm.city)
          .then(function (v) {
            vm.updateCenter(v[0].data.results[0].geometry.location.lat, v[0].data.results[0].geometry.location.lng, 10);
            trackingFactory.getDangerZones(vm.center.lat, vm.center.lng)
              .then(function(data){
                //console.log("DATA", data);
                data.forEach(function(d){
                  vm.dangerZones.push(d.data);
                });
                vm.addDangerZones();
              }).catch(function (err) {
                console.log(' getDangerZones updating city ERROR(' + err.code + '): ' + err.message);
            });
          })
          .catch(function (err) {
            console.log('searchCity ERROR(' + err.code + '): ' + err.message);
        });
      }
    };

    function addDangerZones() {
      vm.dangerZones.forEach(function (d) {
        var popUpText = _makePopupText(d);
        if(d.value<=3) {
          m.addLayer(L.rectangle([[d.latitude+0.1, d.longitude-0.15],[d.latitude-0.1, d.longitude+0.15]], {
            color: 'green',
            fillColor: 'green',
            opacity: 0.2,
            fillOpacity: 0.2
          })
          .bindPopup(popUpText)
          );
        }else if(d.value <= 6) {
          m.addLayer(L.rectangle([[d.latitude+0.1, d.longitude-0.15],[d.latitude-0.1, d.longitude+0.15]], {
            color: 'yellow',
            fillColor: 'yellow',
            opacity: 0.2,
            fillOpacity: 0.2
          })
          .bindPopup(popUpText)
          );
        }else if(d.value <= 9){
          m.addLayer(L.rectangle([[d.latitude+0.1, d.longitude-0.15],[d.latitude-0.1, d.longitude+0.15]], {
            color: 'orange',
            fillColor: 'orange',
            opacity: 0.2,
            fillOpacity: 0.2
          })
          .bindPopup(popUpText)
          );
        }else{
          m.addLayer(L.rectangle([[d.latitude+0.1, d.longitude-0.15],[d.latitude-0.1, d.longitude+0.15]], {
            color: 'red',
            fillColor: 'red',
            opacity: 0.2,
            fillOpacity: 0.2
          })
          .bindPopup(popUpText)
          );
        }
      });  
    };

    function _parseMarkers(data) {
      //console.log("USERS", data[0]);
      data.forEach(function (d) {
        var popUpText = _makePopupMarkerText(d);
        vm.markers.push({
          lat: d.loc.coordinates[1],
          lng: d.loc.coordinates[0],
          message: popUpText
        });
      });
    };

    function _makePopupText (d) {
      var text = '';
      if (d.humidity != null){
        text += '<b>Humidity: </b>' + d.humidity;
      }
      if (d.no2 != null){
        text += '<br><b>NO2: </b>'  + d.no2;
      }
      if (d.so2 != null) {
        text += '<br><b>SO2: </b>' + d.so2;
      }
      if (d.o3 != null) {
        text += '<br><b>O3: </b>' + d.o3;
      }
      if (d.temp != null) {
        text += '<br><b>Temperature: </b>' + d.temp;
      }
      if (text == '') {
        text = 'No data available';
      }
      return text;
    };

    function _makePopupMarkerText (d) {
      var text = '<b>Username: </b>' + d.user + '<br><b>Itchy eyes: </b>' + d.eyes + '<br><b>Cough: </b>' + d.cough
        + '<br><b>Sneeze: </b>' + d.sneeze + '<br><b>Nasal obstruction: </b>' + d.nasal
        + '<br><b>Breathing problems<b>: </b>' + d.breath + '<br><b>Dry mouth: </b>' + d.mouth
        + '<br><b>Wheeze: </b>' + d.wheeze + '<br><b>Cough: </b>' + d.cough;
      return text;
    };

  };

})();
