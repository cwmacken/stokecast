$(function(){



jQuery(document).ready(function($) {
  		$.ajax({
  		url : "http://api.wunderground.com/api/5a639e6ef7ecb1a6/geolookup/conditions/q/CA/santa_cruz.json",
  		dataType : "jsonp",
  		success : function(response) {
  			console.log(response);
  			$('#windDir').text(response.current_observation.wind_dir);
  			$('#windSpd').text(response.current_observation.wind_gust_mph);
  			$('#windStatus').text(response.current_observation.wind_string);
 			}
  		});
	});

	jQuery(document).ready(function($) {
  		$.ajax({
  		url : "http://api.wunderground.com/api/5a639e6ef7ecb1a6/tide/q/CA/santa_cruz.json",
  		dataType : "jsonp",
  		success : function(response) {
  			console.log(response);
  			$('#d0').text(response.tide.tideSummary[0].date.pretty);
  			$('#t0').text(response.tide.tideSummary[0].data.type);
  			$('#h0').text(response.tide.tideSummary[0].data.height);
 			
 			$('#d1').text(response.tide.tideSummary[1].date.pretty);
  			$('#t1').text(response.tide.tideSummary[1].data.type);
  			$('#h1').text(response.tide.tideSummary[1].data.height);
  			
  			$('#d2').text(response.tide.tideSummary[2].date.pretty);
  			$('#t2').text(response.tide.tideSummary[2].data.type);
  			$('#h2').text(response.tide.tideSummary[2].data.height);
  			
  			$('#d3').text(response.tide.tideSummary[3].date.pretty);
  			$('#t3').text(response.tide.tideSummary[3].data.type);
  			$('#h3').text(response.tide.tideSummary[3].data.height);
  			
  			$('#d4').text(response.tide.tideSummary[4].date.pretty);
  			$('#t4').text(response.tide.tideSummary[4].data.type);
  			$('#h4').text(response.tide.tideSummary[4].data.height);
  			
  			$('#d5').text(response.tide.tideSummary[5].date.pretty);
  			$('#t5').text(response.tide.tideSummary[5].data.type);
  			$('#h5').text(response.tide.tideSummary[5].data.height);
  			
  			$('#d6').text(response.tide.tideSummary[6].date.pretty);
  			$('#t6').text(response.tide.tideSummary[6].data.type);
  			$('#h6').text(response.tide.tideSummary[6].data.height);
  			
  			$('#d7').text(response.tide.tideSummary[7].date.pretty);
  			$('#t7').text(response.tide.tideSummary[7].data.type);
  			$('#h7').text(response.tide.tideSummary[7].data.height);
  			
  			$('#d8').text(response.tide.tideSummary[8].date.pretty);
  			$('#t8').text(response.tide.tideSummary[8].data.type);
  			$('#h8').text(response.tide.tideSummary[8].data.height);
  			
  			$('#d9').text(response.tide.tideSummary[9].date.pretty);
  			$('#t9').text(response.tide.tideSummary[9].data.type);
  			$('#h9').text(response.tide.tideSummary[9].data.height);
  			
  			$('#d10').text(response.tide.tideSummary[10].date.pretty);
  			$('#t10').text(response.tide.tideSummary[10].data.type);
  			$('#h10').text(response.tide.tideSummary[10].data.height);
  			
  			$('#d11').text(response.tide.tideSummary[11].date.pretty);
  			$('#t11').text(response.tide.tideSummary[11].data.type);
  			$('#h11').text(response.tide.tideSummary[11].data.height);
  			
  			$('#d12').text(response.tide.tideSummary[12].date.pretty);
  			$('#t12').text(response.tide.tideSummary[12].data.type);
  			$('#h12').text(response.tide.tideSummary[12].data.height);
  			
  			$('#d13').text(response.tide.tideSummary[13].date.pretty);
  			$('#t13').text(response.tide.tideSummary[13].data.type);
  			$('#h13').text(response.tide.tideSummary[13].data.height);
  			
  			$('#d14').text(response.tide.tideSummary[14].date.pretty);
  			$('#t14').text(response.tide.tideSummary[14].data.type);
  			$('#h14').text(response.tide.tideSummary[14].data.height);

  			$('#d15').text(response.tide.tideSummary[15].date.pretty);
  			$('#t15').text(response.tide.tideSummary[15].data.type);
  			$('#h15').text(response.tide.tideSummary[15].data.height);

  			$('#d16').text(response.tide.tideSummary[16].date.pretty);
  			$('#t16').text(response.tide.tideSummary[16].data.type);
  			$('#h16').text(response.tide.tideSummary[16].data.height);

  			$('#d17').text(response.tide.tideSummary[17].date.pretty);
  			$('#t17').text(response.tide.tideSummary[17].data.type);
  			$('#h17').text(response.tide.tideSummary[17].data.height);

  			$('#d18').text(response.tide.tideSummary[18].date.pretty);
  			$('#t18').text(response.tide.tideSummary[18].data.type);
  			$('#h18').text(response.tide.tideSummary[18].data.height);

  			$('#d19').text(response.tide.tideSummary[19].date.pretty);
  			$('#t19').text(response.tide.tideSummary[19].data.type);
  			$('#h19').text(response.tide.tideSummary[19].data.height);

  			$('#d20').text(response.tide.tideSummary[20].date.pretty);
  			$('#t20').text(response.tide.tideSummary[20].data.type);
  			$('#h20').text(response.tide.tideSummary[20].data.height);

  			$('#d21').text(response.tide.tideSummary[21].date.pretty);
  			$('#t21').text(response.tide.tideSummary[21].data.type);
  			$('#h21').text(response.tide.tideSummary[21].data.height);

  			$('#d22').text(response.tide.tideSummary[22].date.pretty);
  			$('#t22').text(response.tide.tideSummary[22].data.type);
  			$('#h22').text(response.tide.tideSummary[22].data.height);

  			$('#d23').text(response.tide.tideSummary[23].date.pretty);
  			$('#t23').text(response.tide.tideSummary[23].data.type);
  			$('#h23').text(response.tide.tideSummary[23].data.height);

  			$('#d24').text(response.tide.tideSummary[24].date.pretty);
  			$('#t24').text(response.tide.tideSummary[24].data.type);
  			$('#h24').text(response.tide.tideSummary[24].data.height);

  			$('#d25').text(response.tide.tideSummary[25].date.pretty);
  			$('#t25').text(response.tide.tideSummary[25].data.type);
  			$('#h25').text(response.tide.tideSummary[25].data.height);

  			$('#d26').text(response.tide.tideSummary[26].date.pretty);
  			$('#t26').text(response.tide.tideSummary[26].data.type);
  			$('#h26').text(response.tide.tideSummary[26].data.height);

  			$('#d27').text(response.tide.tideSummary[27].date.pretty);
  			$('#t27').text(response.tide.tideSummary[27].data.type);
  			$('#h27').text(response.tide.tideSummary[27].data.height);

  			$('#d28').text(response.tide.tideSummary[28].date.pretty);
  			$('#t28').text(response.tide.tideSummary[28].data.type);
  			$('#h28').text(response.tide.tideSummary[28].data.height);

  			$('#d29').text(response.tide.tideSummary[29].date.pretty);
  			$('#t29').text(response.tide.tideSummary[29].data.type);
  			$('#h29').text(response.tide.tideSummary[29].data.height);

  			$('#d30').text(response.tide.tideSummary[30].date.pretty);
  			$('#t30').text(response.tide.tideSummary[30].data.type);
  			$('#h30').text(response.tide.tideSummary[30].data.height);

  			$('#d31').text(response.tide.tideSummary[31].date.pretty);
  			$('#t31').text(response.tide.tideSummary[31].data.type);
  			$('#h31').text(response.tide.tideSummary[31].data.height);

 			}
  		});
	});


});