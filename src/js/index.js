// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
	// Optional parameters
	slidesPerView: 2,
	spaceBetween:16,
	loop: true,


	breakpoints:{
		740:{
			slidesPerView: 3,
			spaceBetween:24,
		}
	},
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},

});







// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();
