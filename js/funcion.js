/*
let posicion = 0;
window.onload=galeriaCarlos(0);

*/



    /*-----------CODIGO CARLOS-------
    $(".modal_galeria_metro").css('display', 'block'),
    galeriaCarlos( numeroScroll - 1 ),
      $(".pantalla_bloqueo").css('display', 'block')
     -----------CODIGO CARLOS----------*/




/* guia
    let patio_taller  = 0;
    let estacion1     = 1;
    let estacion7     = 2;
    let estacion13    = 3; /*----no hay datos todavia---
    let estacion16    = 4;
    let colaManiobras = 5;

    */

    function galeriaCarlos( posicion ){
      $(".modal_galeria_metro").css('display', 'block')

      /*---------------llamar JSON-------------*/
      var UrlData = "https://www.eltiempo.com/infografias/2023/11/metro/data/data.json?90009"
      
      let contenedor = $(".contenedor_infinito");

      let num = 0;
      
      $.getJSON( UrlData, function(datos){

        console.log(datos[posicion].video3D)
        /*----------video 3D------*/
        let link = datos[posicion].video3D
        $(".video3D").attr('src', `${ link }`);



          console.log(datos)
          //console.log(estacion1.fotos.foto[0])

            for( let i=0;  i < datos[posicion].fotos.length; i++ ){
              
              let slider = `<div class="base_slider">
                      <img src="${ datos[posicion].fotos[i].foto }" class="imagen_slider">
                    </div>`

                 
              contenedor.append( slider );
            }

           

      
            /*--------slider------*/
            let anchoBaseSlider = 1000;

            let anchoInfinito = datos[posicion].fotos.length * anchoBaseSlider
            let anchoBase     = anchoInfinito / datos[posicion].fotos.length

            contenedor.css('width', `${ anchoInfinito }`);
            $(".base_slider").css('width', `${ anchoBase }`);


            
            $(".Fizquierda").click(function(event) {
              
              console.log(datos[posicion].fotos.length)

              if( (num >= 0) && (num < datos[posicion].fotos.length) ){

                num += 1;
                console.log(num)
                $(".Fderecha").css('display', 'block');

                contenedor.css('transform', `translate3d( -${ anchoBaseSlider * num }px, 0px, 0px)`);
              }


            
              if(num === datos[posicion].fotos.length ){

                $(".Fizquierda").css('display', 'none');
                
                setTimeout(function(){
                
                  $(".contenedor_iframe").css('z-index', '2');
                }, 1500)



                $(".logo_360").css('display', 'block');
                $(".contenedor_slider").css('z-index', '2');
              }
          
            });


        
            $(".Fderecha").click(function(event) {
              
              
              if( (num >= 1) && (num <= datos[posicion].fotos.length) )  {

                num -= 1;
                console.log(num)
                $(".Fizquierda").css('display', 'block');
                $(".contenedor_slider").css('z-index', '2');
                $(".contenedor_iframe").css('z-index', '1');

                $(".logo_360").css('display', 'none');

                contenedor.css('transform', `translate3d( -${ anchoBaseSlider * num }px, 0px, 0px)`);

              }

              if(num === 0){

                $(".Fderecha").css('display', 'none');
                
              }
              

            });




            /*-----video normal------*/
            let video = datos[posicion].video;
            



            /*-----Eventos botones-----*/
            $(".icono_foto").click(function(event) {

              $(".icono_foto").attr('src', 'https://www.eltiempo.com/infografias/2023/11/metro/img/FOTO-NARANJA.svg');
              $(".icono_foto").css('transform', 'scale(0.9)');
              
              $(".icono_video").attr('src', 'https://www.eltiempo.com/infografias/2023/11/metro/img/VIDEO-GRIS-01.svg');
              $(".icono_video").css('transform', 'scale(1.0)');

              $("#contenedor_video1").css('display', 'none');
              $(".contenedor_slider").css('display', 'block');
              $("#video_normal").css('display', 'none');

              /*---quitar VIDEO--*/
              $("#video_metro_normal").attr('src', "" );    
            });



            $(".icono_video").click(function(event) {

              /*---poner VIDEO normal--*/
              $("#video_metro_normal").attr('src', `${ video }` );


              $(".icono_video").attr('src', 'https://www.eltiempo.com/infografias/2023/11/metro/img/VIDEO-NARANJA.svg');
              $(".icono_video").css('transform', 'scale(0.9)');

              $(".icono_foto").attr('src', 'https://www.eltiempo.com/infografias/2023/11/metro/img/FOTO-GRIS.svg');
              $(".icono_foto").css('transform', 'scale(1.0)');

              $("#contenedor_video1").css('display', 'none');
              $(".contenedor_slider").css('display', 'none');
              $("#video_normal").css('display', 'block');

              $(".logo_360").css('display', 'none');
            });


            let imagen360 =  datos[posicion].foto360 
            // 360 viewer
            setTimeout(function(){

              var PSV = new PhotoSphereViewer({
                  panorama:  `${ imagen360 }`,
                  container: 'photosphere',
                  loading_img: 'Aquí va la URL del icono',
                  navbar: 'autorotate zoom download fullscreen',
                  caption: 'EL TIEMPO Casa Editorial 2023 - Maquetación Carlos Bustos',
                  default_fov: 100,
                  mousewheel: true,
                  size: {
                    height: 562
                  }
                });

            }, 500)
            

        })

      
        /*----hover iconos flechas-----*/
        $(".Fizquierda").hover(function() {
          $(this).attr('src', 'https://www.eltiempo.com/infografias/2023/11/metro/slider/flecha_next_hover.svg');
        }, function() {
          $(this).attr('src', 'https://www.eltiempo.com/infografias/2023/11/metro/slider/flecha_next.svg');
        });


        $(".Fderecha").hover(function() {
          $(this).attr('src', 'https://www.eltiempo.com/infografias/2023/11/metro/slider/fecha_back_hover.svg');
        }, function() {
          $(this).attr('src', 'https://www.eltiempo.com/infografias/2023/11/metro/slider/flecha_back.svg');
        });




        /*---cerrar modal---*/
        $(".cerrar_imagenes").click(function(event) {
          $(".modal_galeria_metro").css('display', 'none');

         
          $( ".base_slider").remove();
          contenedor.css('transform', `translate3d( -0px, 0px, 0px)`);
          num = 0;
          $(".contenedor_iframe").css('z-index', '1');
          $(".Fizquierda").css('display','block');
          $('.Fderecha, .logo_360').css('display', 'none');

          console.log(num)

           /*------reiniciar contenedor----*/
           $("div#contenedor_video1").css('display', 'block'),
           $(".contenedor_slider, #video_normal").css('display', 'none');
           $(".icono_video, .icono_foto").css('transform','scale(1)');
           $(".icono_video, .icono_foto").css('transform','scale(1)');
           $(".icono_video").attr('src', 'https://www.eltiempo.com/infografias/2023/11/metro/img/VIDEO-GRIS-01.svg');
           $(".icono_foto").attr('src', 'https://www.eltiempo.com/infografias/2023/11/metro/img/FOTO-GRIS.svg');
           /*------reiniciar contenedor----*/

            $(".pantalla_bloqueo").css('display', 'none');
        
        
        });
      }



      /*------------------------------------------------FIN CODIGO CARLOS--------GALERIA--------------------------------------------*/






      /*--------------------------------------------NOTAS INTERNAS NOV 23----------------------------------------*/



      /*-----cerrar intre e inicio dle tren-----*/
      $(".titulo_metro_bogota").click(function(event) {
        
        $(".contenedor_puertas_abiertas").css('display', 'none');

      });




      $(".texto_seccion_nota").hover(function() {
          
          let id = $(this).attr('id');
          console.log( id );

          
          
          $(".circulo_infor_seleccion").removeClass('prender_boton');
          $(`#boton${id}`).addClass('prender_boton');


          
          $(`#boton${id}`).css('transform', 'scale(1.2)');

      }, function() {
        
         let id = $(this).attr('id');
        $(`#boton${id}`).css('transform', 'scale(1.0)');

      });


     $(".boton_cerrar_nota").click(function(event) {
       
        $("#base_notas").css('display', 'block');
        $(".contenedor_nota_metro").css('display', 'none');

     });



     $("#regresar_nota_principal").click(function(event) {
       
        $("#base_notas").css('display', 'none');
        $(".contenedor_nota_metro").css('display', 'block');

     });



     $(".icono_terminar_recorrido").click(function(event) {
       
        $(".alinear_izquierda").animate({ 'left' : '0'}, 400);
        $(".alinear_derecha").animate({ 'left' : '0'}, 400);

        $(".contenedor_nota_metro").css('z-index', '0');
        num = 1;

     });





     /*--------------------------ANIMACION PUERTA--------------------------*/
     let num = 1;
    $(".alinear_izquierda, .alinear_derecha").click(function(event) {
      
      if(num == 0){

        $(".alinear_izquierda").animate({ 'left' : '0'}, 400);
        $(".alinear_derecha").animate({ 'left' : '0'}, 400);

        setTimeout(function(){
          $(".contenedor_nota_metro").css('z-index', '0');

          $(".contenedor_titulo_metro").css('z-index', '0');


          
        }, 0400)
        

        num = 1;
          
        
      }else{


        if( $(window).width() > 1600 )  {

          $(".alinear_izquierda").animate({ 'left' : '-31%'}, 400);
          $(".alinear_derecha").animate({ 'left' : '31%'}, 400);

        }


        if( ( $(window).width() < 1600 ) && ( $(window).width() > 1460 ) ){

          $(".alinear_izquierda").animate({ 'left' : '-35%'}, 400);
          $(".alinear_derecha").animate({ 'left' : '35%'}, 400);

        }

        if( $(window).width() < 1450 ){

          $(".alinear_izquierda").animate({ 'left' : '-38%'}, 400);
          $(".alinear_derecha").animate({ 'left' : '38%'}, 400);
          
        }

        setTimeout(function(){
          $(".contenedor_nota_metro").css('z-index', '3');

          $(".contenedor_titulo_metro").css('z-index', '3');
        }, 1000)
        

        num = 0;
      }
      

    });




    $(".boton_regresar_creditos").hover(function() {
        
        $(this).attr('src', './img/regresar_hover.svg');
        $(this).css('transform', 'scale(1.2)');

    }, function() {
      
        $(this).attr('src', './img/btn-regresar.svg');
        $(this).css('transform', 'scale(1.0)');

    });



     $(".icono_terminar_recorrido").hover(function() {
        
        $(this).attr('src', './img/terminar_recorrido_hover.svg');
        $(this).css('transform', 'scale(1.2)');

    }, function() {
      
        $(this).attr('src', './img/terminar_recorrido.svg');
        $(this).css('transform', 'scale(1.0)');

    });



     /*------------------------ANIMACION PRIMERA PANTALLA--------------------*/
     $(".imagen_de_inicio_especial").click(function(event) {
       
       $(".imagen_de_inicio_especial").addClass('animacion_portada')


       setTimeout(function(){
        
          $(".contenedor_entrada_especial").css('display', 'none');
          $(".contenedor_puertas_abiertas").css('display', 'block');

       }, 1200)

     });



     /*-----------ocultar secciones-----------*/
     $(".contenedorVistaMapa, .base_mapa_ruta, .estaciones_metro, .modal_galeria_metro").css('display', 'none');





    /*---------------------------------FUNCIONES AUDIOS------------------------------------*/
    $(".base_hover_audio").hover(function() {
        
        let idAudio = $(this).attr('id');
        console.log(idAudio);

        $(`.audio${ idAudio }`).attr('src', './img/audio_hover.svg');


    }, function() {

        let idAudio = $(this).attr('id');
        $(`.audio${ idAudio }`).attr('src', './img/audio_ciudadano.svg');

    });
 
   




    /*----reproducir cancion----*/
    $(".base_hover_audio").click(function(event) {
          
         let idA = $(this).attr('id');
         console.log(idA)

         $(`.play${ idA }`).css('display', 'none');
         $(`.pause${ idA }`).css('display', 'block');




         /*------llenar barra de tiempo------*/
         let audio = document.querySelector(`.reportaje${ idA }`)
         audio.play()


         let duracion = Math.floor(audio.duration)

         let tiempo = duracion * 1000
         console.log ( tiempo )


         let barraDeLlenado = $(`.llenado${ idA }`);

         barraDeLlenado.animate({width: "100%"}, tiempo );
    });




    /*------------pausar cancion------------*/
    $(".base_hover_audio2").click(function(event) {
      
      let idA2 = $(this).attr('id'); 
      console.log(idA2)

      $(`.play${ idA2 }`).css('display', 'block');
      $(`.pause${ idA2 }`).css('display', 'none');

      let audio = document.querySelector(`.reportaje${ idA2 }`)
      audio.pause();


      let barraDeLlenado = $(`.llenado${ idA2 }`);
      barraDeLlenado.stop();

    });







/*---------------------VER CREDITOS---------------------*/
$(".texto_creditos_metro").click(function(event) {

    $("#base_notas").css('display', 'none');
    $("#base_creditos").css('display', 'block');
});


$("#regresar_a_otras_notas").click(function(event) {

    $("#base_notas").css('display', 'block');
    $("#base_creditos").css('display', 'none');

});


