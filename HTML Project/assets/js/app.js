const navSlider = ()=>{
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-bar');
    const navBar = document.querySelectorAll('.nav-bar li');


        menu.addEventListener('click', ()=>{
          // Toggle Nav Bar
          nav.classList.toggle('nav-active-p');

          // Animating Links
          navBar.forEach((link, index) =>{
          if (link.style.animation) {
              link.style.animation = ''
          } else {
              link.style.animation = `navBarFade 0.5s ease forwards ${index / 7 + 0.3}s`;
          }
        });
        //Menu Animation
        menu.classList.toggle('toggle');

    });

}

navSlider();