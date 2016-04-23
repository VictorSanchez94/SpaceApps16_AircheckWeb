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

  TrackingCtrl.$inject = ['$scope', '$element', 'leafletData', 'trackingFactory', 'markers'];
  function TrackingCtrl($scope, $element, leafletData, trackingFactory, markers) {

    var vm = this;

    vm.markers = markers;

    vm.pagOptions = {
      isFullscreen: false,
      selected: markers[0]
    };

    vm.center = {};     //Actual center of the map

    vm.city = {};

    //trackingFactory.test();

    /*var MyControl = new L.control();
    MyControl.setPosition('bottomleft');
    MyControl.onAdd = function () {
      var className = 'leaflet-custom-control';
      var div = L.DomUtil.create('div', className + ' leaflet-bar leaflet-control-layers');
      var lu = L.DomUtil.create('lu', className + ' lu', div);
      var i = 0;
      var lis = [];
      vm.nocks.forEach( function (watch){
        lis[i] = L.DomUtil.create('li', className + ' li w-60 h-60 bg-info lter align-center inline-block', lu);
        lis[i].title = watch.name;
        lis[i].innerHTML = "<img id='img" + watch.id + "' class='wh50' src='images/nockSenior.png' ng-click='trackingVM.getNocks(" + watch.id + ")' /><span>" + watch.name + "</span>";
        L.DomEvent.addListener(lis[i], 'click', function() {
          vm.getNocks(watch.id);
        });
        i++;
      });

      return div;
    };*/

    //var clouds = L.OWM.clouds({showLegend: false, opacity: 0.5});

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
      }/*,
      controls: {
        custom: [MyControl]
      }*/
    });

    //Functions
    vm.getNocks = getNocks;
    vm.updateCenter = updateCenter;
    vm.searchCity = searchCity;

    function getNocks(id) {
      console.log("GETNOCKS", id);
      vm.markers = trackingFactory.findById(id);
      vm.pagOptions.selected = id;
      console.log("CLICK EN RELOJ", id);
      vm.updateCenter(id);
    };

    function updateCenter (id) {
      if (id == null) {
        vm.center = {
          lat: 40.0331375,
          lng: -4.8063773,
          zoom: 7
        };
      }
      else{
        if(vm.markers.length > 0 && vm.markers[0].id == id){
          vm.center = {
            lat: vm.markers[0].lat,
            lng: vm.markers[0].lng,
            zoom: 15
          };
        }
        else {
          console.log("Error al actualizar center");
        }
      }
    };

    vm.updateCenter(vm.pagOptions.selected);

    function searchCity($event) {
      if($event.keyCode == 13) {
        console.log("IEEEEE", vm.city.name);
      }
    };

  };

})();
