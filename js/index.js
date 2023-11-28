// cerrar_imagenes -> CLose Modal
let valor = false;
let numeroScroll = 1;
// const MenuUbicaciones = document.getElementById('MenuUbicaciones');
const metroIcono = document.querySelector('.metroIcono');
const tamanoMapaTotal = document.getElementById('tamanoMapaTotal');

/*===============================================
//* Carlos
================================================*/

/*-----carlos---*/
let posicion = 0;
/*-----carlos---*/
window.onload = galeriaCarlos(0);

const estaciones = {
  estacion1: 'patio',
  estacion2: 'estacion1',
  estacion3: 'estacion7',
  estacion4: 'estacion13',
  estacion5: 'estacion16',
  estacion6: 'colaManiobras',
};

let puntosMetros = document.querySelectorAll('.puntos_reset');

function cambiarColorParadas(params) {
  puntosMetros.forEach((e) => e.classList.remove('st5'));
  document
    .getElementById(estaciones[`estacion${numeroScroll}`])
    .classList.add('st5');
}

/*===============================================
SVG AnimationMotion
================================================*/
const svgPrueba = document.getElementById('svgPrueba');
function pauseAnimationsSVG() {
  svgPrueba.pauseAnimations();
}

function unpauseAnimationsSVG() {
  svgPrueba.unpauseAnimations();
}

const animateMotionHTML = document.getElementById('animateMotionHTML');
const IconoMetros = document.getElementById('IconoMetros');
const contenedorSvgMetro = document.getElementById('contenedorSvgMetro');
/*======================Final SVG AnimationMotion========================*/

async function IrAbajo() {
  numeroScroll == 8 ? (numeroScroll = 8) : numeroScroll++;
  // numeroScroll == 8 && MenuUbicaciones.classList.add('show');
  tamanoMapaTotal.classList.remove(`ubicacion${numeroScroll}`);
  tamanoMapaTotal.classList.remove('reverseAnimation');
  tamanoMapaTotal.classList.add(`ubicacion${numeroScroll + 1}`);
  tamanoMapaTotal.style.animationName = `ubicacionMapa${numeroScroll}`;

  document.documentElement.style.setProperty(
    '--duracionAnimacion',
    `${pathDuration[`path${numeroScroll + 1}`]}s`
  );

  // Renderizado de Rutas -> Animación entre ruta y ruta
  templateSVGRutas();

  console.log(numeroScroll, ' Dentro de IrAbajo Despues');
}
function templateSVGRutas(reversa, funcionClick = false, eventClick) {
  document.documentElement.style.setProperty(
    '--duracionAnimacion',
    `${pathDuration[`path${numeroScroll - 1}`]}s`
  );
  // Renderizar todo el svg para que cargue el camino y se vea una animación.
  contenedorSvgMetro.innerHTML = `<svg viewBox="0 0 1961.9 686.9" style="enable-background:new 0 0 1961.9 686.9;" xmlns="http://www.w3.org/2000/svg" id="svgPrueba" ><image href="./pngAnimation/trazo-${
    numeroScroll - 1
  }.png"
  x="-12"
  y="-8"
  id="IconoMetros"
  class="metroIcono">
   <animateMotion
     dur='${pathDuration[`path${numeroScroll - 1}`]}s'
     id="animateMotionHTML"
     repeatCount="1"
     fill="freeze"
     ${
       funcionClick == 'true'
         ? `path=${
             pathMetro[
               `path${parseInt(eventClick.target.innerHTML.slice(-1) - 1)}`
             ]
           }/>`
         : `path=${pathMetro[`path${numeroScroll - 1}`]}/>`
     }
     
 </image>
 </svg>`;

  function setHref(params) {
    document
      .querySelector('#contenedorSvgMetro')
      .querySelector('image')
      .setAttribute('href', `./pngAnimation/fin-trazo-${numeroScroll - 1}.png`);
  }

  let tiempoDuracion = `${pathDuration[`path${numeroScroll - 1}`]}000`;

  if (numeroScroll <= 6) {
    setTimeout(() => {
      // console.log(document.querySelector('[data-icono="icono"]'));
      setHref();
      // console.log(`SetTimeout Terminado ${tiempoDuracion}`);
      // console.log(
      //   /*----------------------------------------CODIGO CARLOS-----------------------------------*/
      //   $('.modal_galeria_metro').css('display', 'block'),
      //   galeriaCarlos(numeroScroll - 1),
      //   $('.pantalla_bloqueo').css('display', 'block')

      //   /*---document.querySelectorAll('.modalCarlos')[numeroScroll - 2].style.display = 'flex'---*/
      //   );
      $('.modal_galeria_metro').css('display', 'block'),
      
        galeriaCarlos(numeroScroll - 1),
        $('.pantalla_bloqueo').css('display', 'block');

      //document.querySelector('[data-icono="icono"]').setAttribute('href', './pngAnimation/fin-trazo-1.png')
      cambiarColorParadas();
    }, tiempoDuracion);
  }



  console.log(numeroScroll)
  //* -> Para una parada anterior
  if (numeroScroll == 6) {
    //* -> Para una parada Despues
    // if (numeroScroll == 7) {
    $('.cerrar_imagenes').attr('id', '7');
  }

  /*----------------------------------------FIN CODIGO CARLOS-----------------------------------*/
}

let currentY;
let lastY;
let toggleTrue = false;

pauseAnimationsSVG();

let posicionClick = null;
document.addEventListener('click', (e) => {
  if (e.target.matches('.cerrar_imagenes')) {
    unpauseAnimationsSVG();
    IrAbajo();
  }
});

const pathMetro = {
  path1:
    'M111.1,197.1l20.6-7.9l0.7-0.3c12.6-5.3,27-2.8,37.1,6.5c0.5,0.4,0.9,0.8,1.3,1.2c3.8,3.7,7.1,6.2,9.6,7.4c0.3,0.2,0.5,0.3,0.8,0.4c5,2.2,12.8,3.3,24.4,4.9c10.4,1.4,23.3,3.3,40.4,6.6c5.2,1.1,11.3,1,17.1,0.9c1.5,0,3,0,4.5,0c0.1,0,0.2,0,0.3,0c10.5,0.1,17.9-2.3,25.7-4.8c1.6-0.5,3.1-1,4.7-1.5c18.1-5.4,38.5-1.3,50.7,10.6c0.3,0.3,2.3,2.8,6.4,7.7c5.4,6.5,13.7,16.5,23.1,27.7',
  path2:
    'M378.5,256.5c5.3,6.3,11,13,16.7,19.7c21.2,24.7,43,48.7,44.4,50.3l0.1,0.1l0.1,0.1c0.7,0.5,11.1,6.4,15.8,11.2c1.9,2,3.8,4.4,5.6,6.8c2.9,3.7,5.5,7.2,8.3,8.8c4.3,2.4,13,7.3,13.9,7.8l0.2,0.1l49.8,50.3c5.3,5.5,16.6,8.2,28.7,6.7l149.6-17.2c17.5-2.8,62-9.7,64.3-9.7l0,0l41.4,3.5c3.4,0.3,6.5,1.3,8.8,2.8l61.5,42.3l57.6,20h0.1l3.2,1.5',
  path3:
    'M948.6,461.6l50.5,30.4l6.5,3.1l41.3,15l9.9,3.6l18.4,6.9c0.6,0.3,2.9,1.1,3.4,1.4l7.9,3.5c0.6,0.2,2.8,1.3,3.3,1.5l32.7,16.8c2.1,1.4,8.1,4.7,17.9,5.7c6.6,0.9,17-2.9,19.8-3.5l19-5.5c3.3-0.8,13.3-4.4,23.3-3.7s18.7,5.6,20.8,6.4c1.5,0.5,5.6,2.3,5.7,2.3l16,7c3.9,2.3,16.3,7.2,19.5,7.1c0,0,13.5,0.1,15.9,0.1h9.5c0.9,0,4.6,0,5.5,0.2l9.9-0.1l10.5,1.9c0.9,0,4.6,0.6,5.5,0.7l58.1,9.4c1.4,0.2,16.7,2.5,16.7,2.5c0.9,0.4,3.3,1.6,5.6,2.3c3,0.5,6.4,0.7,7.7,0.7c1.5,0.1,5.5,1.4,10.3,1.9c3.5,0.3,8.1-0.6,11.3-1.1c4.7-0.8,10.7-4.7,15.4-8',
  path4:
    'M1446.4,570.1c2.8-1.9,5.1-3.7,6.5-4.4c0.7-0.5,8.3-5.8,12-8.5c10.6-7.7,24.1-18.5,38.8-30.1c24.2-19,47.5-37.3,58.8-47.1c5.7-5.1,13.1-10.3,19-16c12.1-11.6,21.7-23,22.9-24.8c3.1-3.2,10.1-11,16.6-18.3',
  path5:
    'M1621,420.9c7.1-8.1,13.6-15.5,13.6-15.6l16.6-18.7c0.8-0.9,5.8-6.6,6.3-7.5c2.4-3,4.1-6.1,5.1-9.4c0.5-1.7,52.4-171.4,57.9-188.4',
  path6:
    'M1720.5,181.3c3.4-10.5,8.7-24.3,8.8-24.4c0.5-1.2,2.2-3.4,3.1-4.5l12.7-13c1.7-1.8,3.7-4.7,4.2-6.6l3.8-14.8',
  path7: 'M1753.1,118l6.5-25.4',
};

const pathDuration = {
  path1: '6',
  path2: '15',
  path3: '9',
  path4: '7',
  path5: '7',
  path6: '5',
  path7: '5',
};

/*------------------------------------------------CODIGO CARLOS--------GALERIA--------------------------------------------*/
/* guia
		let patio_taller  = 0;
		let estacion1     = 1;
		let estacion7     = 2;
		let estacion13    = 3; /*----no hay datos todavia---
		let estacion16    = 4;
		let colaManiobras = 5;

		*/

function galeriaCarlos(posicion) {
  $('.modal_galeria_metro').css('display', 'block');
  

  /*---------------llamar JSON-------------*/
  var UrlData =
    'https://www.eltiempo.com/infografias/2023/11/metro/data/data.json?90009';

  let contenedor = $('.contenedor_infinito');

  let num = 0;

  $.getJSON(UrlData, function (datos) {
    // console.log(datos[posicion].video3D);
    /*----------video 3D------*/
    let link = datos[posicion].video3D;
    $('.video3D').attr('src', `${link}`);

    // console.log(datos);
    //console.log(estacion1.fotos.foto[0])

    for (let i = 0; i < datos[posicion].fotos.length; i++) {
      let slider = `<div class="base_slider">
                      <img src="${datos[posicion].fotos[i].foto}" class="imagen_slider">
                    </div>`;

      contenedor.append(slider);
    }

    /*--------slider------*/
    let anchoBaseSlider = 1000;

    let anchoInfinito = datos[posicion].fotos.length * anchoBaseSlider;
    let anchoBase = anchoInfinito / datos[posicion].fotos.length;

    contenedor.css('width', `${anchoInfinito}`);
    $('.base_slider').css('width', `${anchoBase}`);

    $('.Fizquierda').click(function (event) {
      console.log(datos[posicion].fotos.length);

      if (num >= 0 && num < datos[posicion].fotos.length) {
        num += 1;
        console.log(num);
        $('.Fderecha').css('display', 'block');

        contenedor.css(
          'transform',
          `translate3d( -${anchoBaseSlider * num}px, 0px, 0px)`
        );
      }

      if (num === datos[posicion].fotos.length) {
        $('.Fizquierda').css('display', 'none');

        setTimeout(function () {
          $('.contenedor_iframe').css('z-index', '2');
          $("#imagen_iframe_1").css('display', 'block')
        }, 1500);

        $('.logo_360').css('display', 'block');
        $('.contenedor_slider').css('z-index', '2');
      }
    });

    $('.Fderecha').click(function (event) {
      if (num >= 1 && num <= datos[posicion].fotos.length) {
        num -= 1;
        console.log(num);
        $('.Fizquierda').css('display', 'block');
        $('.contenedor_slider').css('z-index', '2');
        $('.contenedor_iframe').css('z-index', '1');

        $('.logo_360').css('display', 'none');

        contenedor.css(
          'transform',
          `translate3d( -${anchoBaseSlider * num}px, 0px, 0px)`
        );
      }

      if (num === 0) {
        $('.Fderecha').css('display', 'none');
      }
    });

    /*-----video normal------*/
    let video = datos[posicion].video;

    /*-----Eventos botones-----*/
    $('.icono_foto').click(function (event) {
      $('.icono_foto').attr(
        'src',
        'https://www.eltiempo.com/infografias/2023/11/metro/img/FOTO-NARANJA.svg'
      );
      $('.icono_foto').css('transform', 'scale(0.9)');

      $('.icono_video').attr(
        'src',
        'https://www.eltiempo.com/infografias/2023/11/metro/img/VIDEO-GRIS-01.svg'
      );
      $('.icono_video').css('transform', 'scale(1.0)');

      $('#contenedor_video1').css('display', 'none');
      $('.contenedor_slider').css('display', 'block');
      $('#video_normal').css('display', 'none');

      /*---quitar VIDEO--*/
      $('#video_metro_normal').attr('src', '');
    });

    $('.icono_video').click(function (event) {
      /*---poner VIDEO normal--*/
      $('#video_metro_normal').attr('src', `${video}`);

      $('.icono_video').attr(
        'src',
        'https://www.eltiempo.com/infografias/2023/11/metro/img/VIDEO-NARANJA.svg'
      );
      $('.icono_video').css('transform', 'scale(0.9)');

      $('.icono_foto').attr(
        'src',
        'https://www.eltiempo.com/infografias/2023/11/metro/img/FOTO-GRIS.svg'
      );
      $('.icono_foto').css('transform', 'scale(1.0)');

      $('#contenedor_video1').css('display', 'none');
      $('.contenedor_slider').css('display', 'none');
      $('#video_normal').css('display', 'block');

      $('.logo_360').css('display', 'none');
    });

    let imagen360 = datos[posicion].foto360;
    // 360 viewer
    setTimeout(function () {
      var PSV = new PhotoSphereViewer({
        panorama: `${imagen360}`,
        container: 'photosphere',
        loading_img: 'Aquí va la URL del icono',
        navbar: 'autorotate zoom download fullscreen',
        caption: 'EL TIEMPO Casa Editorial 2023 - Maquetación Carlos Bustos',
        default_fov: 100,
        mousewheel: true,
        size: {
          height: 562,
        },
      });
    }, 500);
  });

  /*----hover iconos flechas-----*/
  $('.Fizquierda').hover(
    function () {
      $(this).attr(
        'src',
        'https://www.eltiempo.com/infografias/2023/11/metro/slider/flecha_next_hover.svg'
      );
    },
    function () {
      $(this).attr(
        'src',
        'https://www.eltiempo.com/infografias/2023/11/metro/slider/flecha_next.svg'
      );
    }
  );

  $('.Fderecha').hover(
    function () {
      $(this).attr(
        'src',
        'https://www.eltiempo.com/infografias/2023/11/metro/slider/fecha_back_hover.svg'
      );
    },
    function () {
      $(this).attr(
        'src',
        'https://www.eltiempo.com/infografias/2023/11/metro/slider/flecha_back.svg'
      );
    }
  );

  /*---cerrar modal---*/
  $('.cerrar_imagenes').click(function (event) {
    let id = $(this).attr('id');
    if (id === '7') {
      $(
        '.contenedorVistaMapa, .base_mapa_ruta, .estaciones_metro, .modal_galeria_metro, .pantalla_bloqueo'
      ).css('display', 'none');

      /*---conetenedor puertas----*/
      $('.contenedor_titulo_metro').css('display', 'none');
      $('.contenedor_puertas_abiertas, .contenedor_nota_metro').css(
        'display',
        'block'
      );
    } else {
      $('.modal_galeria_metro').css('display', 'none');

      $('.base_slider').remove();
      contenedor.css('transform', `translate3d( -0px, 0px, 0px)`);
      num = 0;
      $('.contenedor_iframe').css('z-index', '1');
      $('.Fizquierda').css('display', 'block');
      $('.Fderecha, .logo_360').css('display', 'none');

      console.log(num);

      /*------reiniciar contenedor----*/
      $('div#contenedor_video1').css('display', 'block'),
        $('.contenedor_slider, #video_normal').css('display', 'none');
      $('.icono_video, .icono_foto').css('transform', 'scale(1)');
      $('.icono_video, .icono_foto').css('transform', 'scale(1)');
      $('.icono_video').attr(
        'src',
        'https://www.eltiempo.com/infografias/2023/11/metro/img/VIDEO-GRIS-01.svg'
      );
      $('.icono_foto').attr(
        'src',
        'https://www.eltiempo.com/infografias/2023/11/metro/img/FOTO-GRIS.svg'
      );
      /*------reiniciar contenedor----*/

      $('.pantalla_bloqueo').css('display', 'none');
    }
  });
}

/*------------------------------------------------FIN CODIGO CARLOS--------GALERIA--------------------------------------------*/

/*--------------------------------------------NOTAS INTERNAS NOV 23----------------------------------------*/

/*-----------ocultar secciones-----------*/
$(
  '.contenedorVistaMapa, .base_mapa_ruta, .estaciones_metro, .modal_galeria_metro'
).css('display', 'none');

/*-----cerrar intre e inicio dle tren-----*/
$('.titulo_metro_bogota').click(function (event) {
  $('.contenedor_puertas_abiertas').css('display', 'none');
  $(
    '.contenedorVistaMapa, .base_mapa_ruta, .estaciones_metro, .modal_galeria_metro'
  ).css('display', 'block');
});

$('.texto_seccion_nota').hover(
  function () {
    let id = $(this).attr('id');
    console.log(id);

    $('.circulo_infor_seleccion').removeClass('prender_boton');
    $(`#boton${id}`).addClass('prender_boton');

    $(`#boton${id}`).css('transform', 'scale(1.2)');
  },
  function () {
    let id = $(this).attr('id');
    $(`#boton${id}`).css('transform', 'scale(1.0)');
  }
);

$('.boton_cerrar_nota').click(function (event) {
  $('.base_notas').css('display', 'block');
  $('.contenedor_nota_metro').css('display', 'none');
});

$('#regresar_nota_principal').click(function (event) {
  $('.base_notas').css('display', 'none');
  $('.contenedor_nota_metro').css('display', 'block');
});

$('.icono_terminar_recorrido').click(function (event) {
  $('.alinear_izquierda').animate({ left: '0' }, 400);
  $('.alinear_derecha').animate({ left: '0' }, 400);

  $('.contenedor_nota_metro').css('z-index', '0');
  num = 1;
});

/*--------------------------ANIMACION PUERTA--------------------------*/
let num = 1;
$('.alinear_izquierda, .alinear_derecha').click(function (event) {
  if (num == 0) {
    $('.alinear_izquierda').animate({ left: '0' }, 400);
    $('.alinear_derecha').animate({ left: '0' }, 400);

    setTimeout(function () {
      $('.contenedor_nota_metro').css('z-index', '0');

      $('.contenedor_titulo_metro').css('z-index', '0');
    }, 400);

    num = 1;
  } else {
    if ($(window).width() > 1600) {
      $('.alinear_izquierda').animate({ left: '-31%' }, 400);
      $('.alinear_derecha').animate({ left: '31%' }, 400);
    }

    if ($(window).width() < 1600 && $(window).width() > 1460) {
      $('.alinear_izquierda').animate({ left: '-35%' }, 400);
      $('.alinear_derecha').animate({ left: '35%' }, 400);
    }

    if ($(window).width() < 1450) {
      $('.alinear_izquierda').animate({ left: '-38%' }, 400);
      $('.alinear_derecha').animate({ left: '38%' }, 400);
    }

    setTimeout(function () {
      $('.contenedor_nota_metro').css('z-index', '3');

      $('.contenedor_titulo_metro').css('z-index', '3');
    }, 1000);

    num = 0;
  }
});

$('.boton_regresar_creditos').hover(
  function () {
    $(this).attr(
      'src',
      'https://www.eltiempo.com/infografias/2023/11/metro/img/regresar_hover.svg'
    );
    $(this).css('transform', 'scale(1.2)');
  },
  function () {
    $(this).attr(
      'src',
      'https://www.eltiempo.com/infografias/2023/11/metro/img/btn-regresar.svg'
    );
    $(this).css('transform', 'scale(1.0)');
  }
);

$('.icono_terminar_recorrido').hover(
  function () {
    $(this).attr(
      'src',
      'https://www.eltiempo.com/infografias/2023/11/metro/img/terminar_recorrido_hover.svg'
    );
    $(this).css('transform', 'scale(1.2)');
  },
  function () {
    $(this).attr(
      'src',
      'https://www.eltiempo.com/infografias/2023/11/metro/img/terminar_recorrido.svg'
    );
    $(this).css('transform', 'scale(1.0)');
  }
);

/*------------------------ANIMACION PRIMERA PANTALLA--------------------*/
$('.imagen_de_inicio_especial').click(function (event) {
  $('.imagen_de_inicio_especial').addClass('animacion_portada');

  setTimeout(function () {
    $('.contenedor_entrada_especial').css('display', 'none');
    $('.contenedor_puertas_abiertas').css('display', 'block');
  }, 1200);
});

/*-----------------abrir nota principal------------------*/











/*----------------------VER CREDITOS---------------------*/
$(".texto_creditos_metro").click(function(event) {

  $("#base_notas").css('display', 'none');
  $("#base_creditos").css('display', 'block');
});


$("#regresar_a_otras_notas").click(function(event) {

  $("#base_notas").css('display', 'block');
  $("#base_creditos").css('display', 'none');

});
