var stockholm = new google.maps.LatLng(59.32522, 18.07002);
    var parliament = new google.maps.LatLng(59.327383, 18.06747);
    var marker;
    var map;

    function initialize() {
      var mapOptions = {
        zoom: 13,
        center: stockholm
      };

      map = new google.maps.Map(document.getElementById('map-canvas'),
              mapOptions);

      marker = new google.maps.Marker({
        map:map,
        draggable:true,
        animation: google.maps.Animation.DROP,
        position: parliament
      });
      google.maps.event.addListener(marker, 'click', toggleBounce);
      
      google.maps.event.addListener(map, 'click', function( event ){
        marker = new google.maps.Marker({
        map:map,
        draggable:true,
        animation: google.maps.Animation.DROP,
        position: event.latLng
      });
        // create a new marker and attach it to a map here
        // alert( "Latitude: "+event.latLng.lat()+" "+", longitude: "+event.latLng.lng() ); 
    });
    }

    function toggleBounce() {

      if (marker.getAnimation() != null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }

    google.maps.event.addDomListener(window, 'load', initialize);