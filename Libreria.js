
/*--------------------------------Animacion nav---------------------------------*/
window.onscroll = function(){
    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if (scroll > 20){
        header.classList.add('nav_mod');
    }else if(scroll < 20){
        header.classList.remove('nav_mod');
    }
}

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

menu = document.getElementById("header");
nav = document.getElementById("nav");

function mostrar_menu(){
    menu.classList.toggle('move_content');
    nav.classList.toggle('move_nav');
}

window.addEventListener("resize", function(){
    if(window.innerWidth > 760){
        menu.classList.remove('move_content');
        nav.classList.remove('move_nav');
    }
})

/*----------------------------Visor de imagenes------------------------------*/

document.addEventListener('DOMContentLoaded', function () {
    let imagenes = [
      { img: 'Imagenes/libreria1.jpg' },
      { img: 'Imagenes/libreria2.jpg' },
      { img: 'Imagenes/libreria3.jpg' },
      { img: 'Imagenes/libreria4.png' },
      { img: 'Imagenes/libreria5.png' },
      { img: 'Imagenes/libreria6.png' },
      { img: 'Imagenes/libreria7.jpg' },
      { img: 'Imagenes/libreria8.png' },
      { img: 'Imagenes/libreria17.jpg' },
      { img: 'Imagenes/libreria9.jpg' },
      { img: 'Imagenes/libreria10.jpg' },
      { img: 'Imagenes/libreria11.png' },
      { img: 'Imagenes/libreria12.jpg' },
      { img: 'Imagenes/libreria13.jpg' },
      { img: 'Imagenes/libreria14.jpg' },
      { img: 'Imagenes/libreria15.jpg' },
      { img: 'Imagenes/libreria16.jpg' },
      { img: 'Imagenes/libreria18.jpg' },
    ];
    
    let contador = 0;
    const contenedor = document.querySelector('.slideshow');
    const overlay = document.querySelector('.overlay');
    const galeria_imagenes = document.querySelectorAll('.columna img');
    const img_slideshow = contenedor.querySelector('img');
  
    galeria_imagenes.forEach((img) => {
      img.addEventListener('click', (event) => {
        const imagen_seleccionada = +event.target.dataset.imgMostrar;
        img_slideshow.src = imagenes[imagen_seleccionada].img;
        contador = imagen_seleccionada;
        overlay.style.opacity = 1;
        overlay.style.visibility = 'visible';
      });
    });
  
    contenedor.addEventListener('click', function (event) {
      let tgt = event.target;
      if (tgt.classList.contains('atras')) {
        if (contador > 0) {
          img_slideshow.src = imagenes[contador - 1].img;
          contador--;
        } else {
          img_slideshow.src = imagenes[imagenes.length - 1].img;
          contador = imagenes.length - 1;
        }
      } else if (tgt.classList.contains('adelante')) {
        if (contador < imagenes.length - 1) {
          img_slideshow.src = imagenes[contador + 1].img;
          contador++;
        } else {
          img_slideshow.src = imagenes[0].img;
          contador = 0;
        }
      } else if (tgt.classList.contains('btn_cerrar')) {
        overlay.style.opacity = 0;
        overlay.style.visibility = 'hidden';
      }
    });
});
  
  

/*----------------------------Preguntas frecuentes----------------------------*/
const preguntas = document.querySelectorAll(".pregunta_encabezado");

preguntas.forEach((pregunta) => {
  pregunta.addEventListener("click", () => {
    toggleRespuesta(pregunta);
  });
});

function toggleRespuesta(pregunta) {
  const respuesta = pregunta.parentElement.querySelector(".respuesta");
  const isActive = respuesta.classList.contains("activo");

  if (isActive) {
    respuesta.classList.remove("activo");
  } else {
    removerClaseActivo();
    respuesta.classList.add("activo");
  }
}

function removerClaseActivo() {
  const respuestas = document.querySelectorAll(".respuesta.activo");
  respuestas.forEach((respuesta) => {
    respuesta.classList.remove("activo");
  });
}

/*---------------------------Contador de productos------------------------------*/
const decrementBtn = document.querySelector('.decrement-btn');
const incrementBtn = document.querySelector('.increment-btn');
const counterValue = document.querySelector('.counter-value');


decrementBtn.addEventListener('click', () => {
  let currentValue = parseInt(counterValue.textContent);
  if (currentValue > 1) {
    currentValue--;
    counterValue.textContent = currentValue;
  }
});


incrementBtn.addEventListener('click', () => {
  let currentValue = parseInt(counterValue.textContent);
  currentValue++;
  counterValue.textContent = currentValue;
});