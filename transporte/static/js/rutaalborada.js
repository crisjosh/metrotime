    function initialize() {
      var marcadores = [
        ['Terminal Rio Daule', -2.14009, -79.8802, src="/static/images/par.png"],
      	['Parada', -2.13955, -79.88489, src="/static/images/parada.png"],
      	['Parada', -2.14036, -79.88653, src="/static/images/parada.png"],
      	['Parada', -2.14099, -79.88785, src="/static/images/parada.png"],
      	['Parada', -2.14209, -79.89013, src="/static/images/parada.png"],
      	['Parada', -2.14317, -79.89236, src="/static/images/parada.png"],
      	['Parada', -2.14409, -79.89427, src="/static/images/parada.png"],
        ['Parada', -2.14391, -79.8954, src="/static/images/parada.png"],
        ['Parada', -2.14275, -79.8962, src="/static/images/parada.png"],
        ['Parada', -2.14163, -79.89692, src="/static/images/parada.png"],
        ['Parada', -2.14045, -79.89766, src="/static/images/parada.png"],
        ['Parada', -2.13869, -79.8989, src="/static/images/parada.png"],
        ['Parada', -2.1377, -79.89959, src="/static/images/parada.png"],
        ['Parada', -2.13669, -79.90029, src="/static/images/parada.png"],
        ['Parada', -2.13575, -79.901, src="/static/images/parada.png"],
        ['Parada', -2.13478, -79.90174, src="/static/images/parada.png"],
        ['Parada', -2.13365, -79.90313, src="/static/images/parada.png"],
        ['Parada', -2.13262, -79.90345, src="/static/images/parada.png"],
        ['Parada', -2.13149, -79.90284, src="/static/images/parada.png"],
        ['Parada', -2.13064, -79.90333, src="/static/images/parada.png"],
        ['Parada', -2.1299, -79.90458, src="/static/images/parada.png"],
        ['Parada', -2.12889, -79.90515, src="/static/images/parada.png"],
        ['Parada', -2.12746, -79.90401, src="/static/images/parada.png"],
        ['Parada', -2.12596, -79.90278, src="/static/images/parada.png"],
        ['Parada', -2.12482, -79.90135, src="/static/images/parada.png"],
        ['Parada', -2.12665, -79.90038, src="/static/images/parada.png"],
        ['Parada', -2.12759, -79.90007, src="/static/images/parada.png"],
        ['Parada', -2.13304, -79.89884, src="/static/images/parada.png"],
        ['Parada', -2.13691, -79.90039, src="/static/images/parada.png"],
        ['Parada', -2.13923, -79.89872, src="/static/images/parada.png"],
        ['Parada', -2.14181, -79.89701, src="/static/images/parada.png"],
        ['Parada', -2.14391, -79.89353, src="/static/images/parada.png"],
        ['Parada', -2.14322, -79.89204, src="/static/images/parada.png"],
        ['Parada', -2.14286, -79.88832, src="/static/images/parada.png"],
        ['Parada', -2.14507, -79.88629, src="/static/images/parada.png"],
        ['20.45', -2.14438, -79.88447, src="/static/images/iconcar.png"]
      ];
      var map = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 15,
        center: new google.maps.LatLng(-2.13657, -79.89571),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      var infowindow = new google.maps.InfoWindow();

      var l1 = new google.maps.LatLng(-2.14026, -79.8801);
      var l2 = new google.maps.LatLng(-2.14077, -79.87983);
      var l3 = new google.maps.LatLng(-2.14083, -79.87995);
      var l4 = new google.maps.LatLng(-2.14111, -79.88007);
      var l5 = new google.maps.LatLng(-2.14035, -79.88219);
      var l6 = new google.maps.LatLng(-2.13884, -79.88357);
      var l7 = new google.maps.LatLng(-2.13903, -79.88379);
      var l8 = new google.maps.LatLng(-2.14134, -79.88854);
      var l9 = new google.maps.LatLng(-2.14135, -79.88878);
      var l10 = new google.maps.LatLng(-2.14132, -79.88899);
      var l11 = new google.maps.LatLng(-2.14136, -79.88913);
      var l12 = new google.maps.LatLng(-2.14146, -79.88924);
      var l13 = new google.maps.LatLng(-2.14175, -79.88942);
      var l14 = new google.maps.LatLng(-2.14447, -79.89505);
      var l15 = new google.maps.LatLng(-2.14316, -79.89597);
      var l16 = new google.maps.LatLng(-2.14059, -79.89758);
      var l17 = new google.maps.LatLng(-2.13402, -79.90233);
      var l18 = new google.maps.LatLng(-2.13344, -79.90379);
      var l19 = new google.maps.LatLng(-2.13308, -79.90377);
      var l20 = new google.maps.LatLng(-2.13104, -79.90264);
      var l21 = new google.maps.LatLng(-2.12936, -79.90557);
      var l22 = new google.maps.LatLng(-2.12844, -79.90476);
      var l23 = new google.maps.LatLng(-2.12605, -79.90289);
      var l24 = new google.maps.LatLng(-2.12506, -79.90175);
      var l25 = new google.maps.LatLng(-2.12458, -79.90097);
      var l26 = new google.maps.LatLng(-2.12454, -79.90048);
      var l27 = new google.maps.LatLng(-2.1258, -79.90051);
      var l28 = new google.maps.LatLng(-2.12642, -79.90044);
      var l29 = new google.maps.LatLng(-2.12767, -79.90003);
      var l30 = new google.maps.LatLng(-2.12815, -79.8998);
      var l31 = new google.maps.LatLng(-2.12858, -79.89952);
      var l32 = new google.maps.LatLng(-2.13164, -79.89714);
      var l33 = new google.maps.LatLng(-2.13186, -79.89722);
      var l34 = new google.maps.LatLng(-2.13242, -79.89802);
      var l35 = new google.maps.LatLng(-2.13269, -79.89833);
      var l36 = new google.maps.LatLng(-2.13518, -79.90164);
      var l37 = new google.maps.LatLng(-2.13621, -79.90087);
      var l38 = new google.maps.LatLng(-2.13687, -79.90043);
      var l39 = new google.maps.LatLng(-2.1378, -79.89973);
      var l40 = new google.maps.LatLng(-2.14465, -79.89511);
      var l41 = new google.maps.LatLng(-2.14205, -79.88965);
      var l42 = new google.maps.LatLng(-2.14198, -79.88935);
      var l43 = new google.maps.LatLng(-2.14202, -79.88917);
      var l44 = new google.maps.LatLng(-2.14208, -79.88898);
      var l45 = new google.maps.LatLng(-2.14466, -79.88685);
      var l46 = new google.maps.LatLng(-2.14494, -79.88654);
      var l47 = new google.maps.LatLng(-2.14565, -79.88514);
      var l48 = new google.maps.LatLng(-2.14071, -79.88257);
      var l49 = new google.maps.LatLng(-2.13944, -79.88205);
      var l50 = new google.maps.LatLng(-2.13811, -79.88172);
      var l51 = new google.maps.LatLng(-2.13839, -79.88099);
      var l52 = new google.maps.LatLng(-2.13857, -79.88088);
      var l53 = new google.maps.LatLng(-2.13871, -79.88076);
      var l54 = new google.maps.LatLng(-2.13882, -79.88064);
      var l55 = new google.maps.LatLng(-2.13897, -79.88056);
      var l56 = new google.maps.LatLng(-2.13918, -79.88058);
      var l57 = new google.maps.LatLng(-2.13933, -79.8806);
      var l58 = new google.maps.LatLng(-2.13968, -79.88041);
      var miRuta = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16, l17, l18, l19, l20, l21, l22, l23, l24, l25, l26, l27, l28, l29, l30, l31, l32, l33, l34, l35, l36, l37, l38, l39, l40, l41, l42, l43, l44, l45, l46, l47, l48, l49, l50, l51, l52, l53, l54, l55, l56, l57, l58 ];
      var trazo = new google.maps.Polyline({path:miRuta,strokeColor:"#0000FF",strokeOpacity:0.8,strokeWeight:3});
      trazo.setMap(map);
      var marker, i;
      for (i = 0; i < marcadores.length; i++) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(marcadores[i][1], marcadores[i][2]),
	        icon: marcadores[i][3],
          map: map
        });
	
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(marcadores[i][0]); 
            infowindow.open(map, marker);
          }
        })(marker, i));
      }
    }
    google.maps.event.addDomListener(window, 'load', initialize);