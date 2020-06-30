const harm = document.querySelector('.menualt');
const side = document.querySelector('.sidemenu');
const times = document.querySelector('.times');
const menus = document.querySelectorAll('.secmenu');
const mainMenus = document.querySelectorAll('.menu ul li');

const home = document.querySelector('.navbody');
const about = document.querySelector('.about');
const service = document.querySelector('.service');
const pricing = document.querySelector('.pricing');
const contact = document.querySelector('.contact');

const remove = () => {
  side.style.left = '100vw';
};

menus.forEach((el) =>
  el.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'Home':
        remove();
        home.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'About':
        remove();
        about.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Services':
        remove();
        service.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Price':
        remove();
        pricing.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Contact':
        remove();
        contact.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  })
);

mainMenus.forEach((el) =>
  el.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'HOME':
        remove();
        home.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'ABOUT':
        remove();
        about.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'SERVICES':
        remove();
        service.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'PRICE':
        remove();
        pricing.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'CONTACT':
        remove();
        contact.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  })
);

harm.addEventListener('click', () => {
  side.style.left = '15%';
});

times.addEventListener('click', () => {
  remove();
});

document.addEventListener('click', ({ target }) => {
  if (!target.closest('.sidemenu,.menualt')) {
    remove();
  }
});
