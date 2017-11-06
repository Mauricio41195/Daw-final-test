var arrayInfo = {};
$.getJSON("info/departamentos.json",function(dato){
	arrayInfo = dato;
	$(window).on("load", function(){
		$("#depcards").hide();
		$("#depinfo").hide();



		function info_dep(e){
			$("#info-mapa").hide("slow");
	    	for(var j = 0; j<14; j++){
	    		if (e.target.text == arrayInfo[j].nombre) {

	    			$("#depcards").show();
	    			$("depinfo").show();

	    			//slider
	    			$("#slider1").attr("src", arrayInfo[j].imagenes[0])
	    			$("#slider2").attr("src", arrayInfo[j].imagenes[1])
	    			$("#slider3").attr("src", arrayInfo[j].imagenes[2])
	    			//texto de slider
	    			$("#slidertext1").html(arrayInfo[j].txtslider[0])
	    			$("#slidertext2").html(arrayInfo[j].txtslider[1])
	    			$("#slidertext3").html(arrayInfo[j].txtslider[3])


	    			//infornacion
	    			$("#informacion").html(arrayInfo[j].informacion);
	    			$("#datoshistoricos").html(arrayInfo[j].datos);
	    			$("#municipios").html(arrayInfo[j].municipios);

	    			//personajes hstoricos
	    			//imagenes
	    			$("#celebre1img").attr("src", arrayInfo[j].personajes[0].imgp)
	    			$("#celebre2img").attr("src", arrayInfo[j].personajes[1].imgp)
	    			$("#celebre3img").attr("src", arrayInfo[j].personajes[2].imgp)
	    			//nombres
	    			$("#celebre1nombre").html(arrayInfo[j].personajes[0].nombre)
	    			$("#celebre2nombre").html(arrayInfo[j].personajes[1].nombre)
	    			$("#celebre3nombre").html(arrayInfo[j].personajes[2].nombre)
	    			//bio
	    			$("#celebre1bio").html(arrayInfo[j].personajes[0].bio)
	    			$("#celebre2bio").html(arrayInfo[j].personajes[1].bio)
	    			$("#celebre3bio").html(arrayInfo[j].personajes[2].bio)




	    		}
	    	}

		}


		for(var i = 0; i<14; i++){
			$(".dropdown-item")[i].onclick = function(e){info_dep(e)}
		}
		$("#index").click(function(){location.reload()})

	})

});
