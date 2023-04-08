//?-----------------------------------
//*_____0______--HEADER--______0______
//?-----------------------------------

//!--profile-icon--
let header = document.querySelector('.header');
header.querySelectorAll('.header__profile-btn').forEach((item) => {
  item.addEventListener('click', (event) => {

    const profileBtnClose = document.querySelectorAll('.header__profile-btn>use');
    const profileMenu = document.querySelectorAll('.profile-bar');

    if (!event.target.classList.contains('active')) {
      event.target.classList.add('active');
      Array.from(profileMenu).forEach(item => {
        item.classList.add('open');
      });
      Array.from(profileBtnClose).forEach((item) => {
        item.setAttribute('xlink:href','img/i/sprite.svg#b0-03-close-menu');
      });
    }

    else {
      event.target.classList.remove('active');
      Array.from(profileMenu).forEach((item) => {
        item.classList.remove('open');
      });
      Array.from(profileBtnClose).forEach((item) => {
        item.setAttribute('xlink:href','img/i/sprite.svg#b0-01-profile-menu');
      });
    }
  })
});

//!--smart-header--
function smartHeader (){
  let lastScroll = 0;
  const defaultOffset = 0;
  const header = document.querySelector('.header');

  const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
  const containHide = () => header.classList.contains('hide');

  window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
      //scroll down
      header.classList.add('hide');
    }
    else if(scrollPosition() < lastScroll && containHide()){
      //scroll up
      header.classList.remove('hide');
    }

    lastScroll = scrollPosition();
  });
}
smartHeader ();

//!--кроссбраузерность-focus--
document.addEventListener('click', function (event) {
  if (event.target.matches('button')) {
    event.target.focus()
  }
})

//?---------------------------------
//*_____1______--HERO--______1______
//?---------------------------------

//!------accordion------
let heroAccord = document.querySelector('.hero__accordion');
if (heroAccord) {
  heroAccord.addEventListener('click', (event) => {

  if (event.target.classList.contains('accordion__trigger')) {

    if (!event.target.classList.contains('accordion__trigger_active')) {

      if (document.querySelector('.accordion__trigger_active')) {
        document.querySelectorAll('.accordion__trigger_active').forEach((item) => {
          item.innerText = 'изменить';
          item.classList.remove('accordion__trigger_active');
          item.parentElement.querySelector('.show').classList.remove('show')
        })
      }
      //клик по триггеру, активирует его
      event.target.classList.add('accordion__trigger_active')
      //пусть родительский элемент цели -- событие
      let parentWrap = event.target.parentElement;

      parentWrap.querySelector('.accordion__content').classList.add('show');
      event.target.innerText = 'свернуть';
    }
    else if (event.target.classList.contains('accordion__trigger_active')){
      event.target.parentElement.querySelector('.accordion__content').classList.remove('show');
      event.target.parentElement.querySelector('.accordion__trigger').classList.remove('accordion__trigger_active');
      console.log('asdf')
      event.target.innerText = 'изменить';
    }
  }
  })
}

//!--eye--
let eyeWrap = document.querySelectorAll('.form-spoiler__inp-item');
if (eyeWrap) {
  eyeWrap.forEach((wrap) => {
    wrap.addEventListener('click', (event) => {

      if (event.target.classList.contains('control__eye')){
        let parentWrap = event.target.parentElement;
        if (!event.target.classList.contains('active')) {
          event.target.classList.add('active');
          parentWrap.querySelector('.control__input').setAttribute('type','text');
        }
        else if (event.target.classList.contains('active')) {
          event.target.classList.remove('active');
          parentWrap.querySelector('.control__input').setAttribute('type','password');
        }
      }
    })
  })
}

//!--media--
let media = document.querySelector('.bridge');
if(media) {
media.querySelectorAll('.bridge__media-link').forEach((item) => {
  item.addEventListener('click', (event) => {
    if (event.target.classList.contains('butn_theme_empty')) {
      event.target.classList.add('butn_theme_active');
      event.target.textContent = 'привязано'
      event.target.classList.remove('butn_theme_empty');
    } else {
      event.target.classList.remove('butn_theme_active');
      event.target.textContent = 'привязать'
      event.target.classList.add('butn_theme_empty');
    }
  })
})}

//!--response--
let responseWrap = document.querySelectorAll('.response-card');

if(responseWrap) {
  responseWrap.forEach((wrap) => {
    wrap.addEventListener('click', (e) => {
      //статус про
      const statusPRO = document.querySelector('.response-card__privilege-status_pro');
      const activator = document.querySelector('.response-activator');
      const deactivator = document.querySelector('.response-activator');

      if(e.target === activator) {
        activator.classList.add('response-activator_active');
        document.querySelectorAll('.card-button').forEach((item) => {

            item.children[1].classList.add('card-button_static');
            item.children[4].classList.add('card-button_static');
            item.children[0].classList.remove('card-button_active');

        })
      }
    })
  })
}
/*
//!--modal--
const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalButtonsClose = document.querySelectorAll('[data-modal-close]');
const modalAll = document.querySelectorAll('[data-modal]')
//Открытие окон
modalButtons.forEach(function(item) {
  item.addEventListener('click', function (){
    const modalId = this.dataset.modalButton
    const modal = document.querySelector('#' + modalId)
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  })
});

//Закрытие окон по кнопке
modalButtonsClose.forEach(function(item) {
  item.addEventListener('click', function(){
   const modal = this.closest('[data-modal]')
   modal.classList.add('hidden')
   document.body.style.overflow = 'visible';
  })
});

//Закрытие окон по фейду
modalAll.forEach(function(item) {
  item.addEventListener('click', function(event){
    if (event.target === this) {
      this.classList.add('hidden')
      document.body.style.overflow = 'visible';
    }
  })
});*/
//!------support-accordion------
document.querySelectorAll('.spoiler__trigger').forEach((item) => {
  item.addEventListener('click', function(e){
    const parent = item.parentNode;

    parent.classList.toggle('active')
  })
})


