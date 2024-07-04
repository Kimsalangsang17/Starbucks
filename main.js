const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('DOMContentLoaded', function() {
    var cookieModal = document.getElementById('cookie-modal');
    var savePreferencesBtn = document.getElementById('save-preferences');
    var cookiePreferenceLink = document.getElementById('cookie-preference-link');
  
    // Check if user has already made cookie preferences
    var preferences = localStorage.getItem('cookiePreferences');
    if (preferences) {
      cookieModal.style.display = 'none'; // Hide the modal if preferences already saved
    }
  
    // Show modal when save preferences button is clicked
    savePreferencesBtn.addEventListener('click', function() {
      var selectedPreferences = Array.from(document.querySelectorAll('input[name="preferences"]:checked')).map(function(checkbox) {
        return checkbox.value;
      });
  
      // Save preferences to local storage
      localStorage.setItem('cookiePreferences', JSON.stringify(selectedPreferences));
  
      cookieModal.style.display = 'none'; // Hide the modal after saving preferences
    });
  
    // Show modal when cookie preference link is clicked
    cookiePreferenceLink.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default link behavior
  
      cookieModal.style.display = 'block'; // Show the modal
    });
  });
  
window.addEventListener('DOMContentLoaded', function() {
    var cookieModal = document.getElementById('cookie-modal');
    var savePreferencesBtn = document.getElementById('save-preferences');
  
    // Check if user has already made cookie preferences
    var preferences = localStorage.getItem('cookiePreferences');
    if (preferences) {
      cookieModal.style.display = 'none'; // Hide the modal if preferences already saved
    }
  
    // Show modal when save preferences button is clicked
    savePreferencesBtn.addEventListener('click', function() {
      var selectedPreferences = Array.from(document.querySelectorAll('input[name="preferences"]:checked')).map(function(checkbox) {
        return checkbox.value;
      });
  
      // Save preferences to local storage
      localStorage.setItem('cookiePreferences', JSON.stringify(selectedPreferences));
  
      cookieModal.style.display = 'none'; // Hide the modal after saving preferences
    });
  });
  

window.addEventListener('scroll', scrollActive)

function scrollHeader(){
    const nav = document.getElementById('header')

    if(this.scrollY >= 200) nav.classList.add('scrolheader'); else nav.classList.remove('scrolheader')
}
window.addEventListener('scroll', scrollHeader)

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .container, .contact__button, .footer__social,
            .footer__content`, {
    interval: 100
})

var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        speed: 500,
        },
        autoplay: {
            delay: 3000,
        },
        loop: true,
        pagination: {
        el: ".swiper-pagination",
        },
});