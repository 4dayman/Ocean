"use script"
// код определяет на каком устройстве открыта страница
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/Windows/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows());
  }
};

// Бургер Меню
const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.menu_body');
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock')
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}
// Бургер Меню Убераем при нажатии вне его
$(document).mouseup(function (e) {
  var $target = $(e.target);
  if ($target.closest(".menu_body").length == 0 && $target.closest(".menu_icon").length == 0) {
    $(".menu_body").removeClass("_active");
    $(".menu_icon").removeClass("_active");
    $("body").removeClass("_lock");
  }
});

// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock')
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
};

$(function () {
  let header = $('.header');
  let hederHeight = header.height(); // вычисляем высоту шапки
  let mobileTel = $('.header__tel').first();  // сохранем в переменную первый элемент с классом header__tel

  if ($(this).scrollTop() > 500) {
    mobileTel.fadeOut();
  } else {
    mobileTel.fadeIn();
  }
  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
      header.addClass('header_fixed');
      $('body').css({
        'paddingTop': hederHeight + 'px', // делаем отступ у body, равный высоте шапки
        // 'transition': '1s'

      });
    } else {
      header.removeClass('header_fixed');
      $('body').css({
        'paddingTop': 0, // удаляю отступ у body, равный высоте шапки
        // 'transition': '1s'
      })
    }
  });

});

// swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',
  simulateTouch: true,
  centerSlides: true,
  slidesPerGroup: 1,
});

    /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("mySpan").classList.toggle("active");
  document.getElementById("myArrow").classList.toggle("active");
}

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
// if (!event.target.matches('.dropbtn')) {

//   var dropdowns = document.getElementsByClassName("dropdown_content");
//   var i;
//   for (i = 0; i < dropdowns.length; i++) {
//     var openDropdown = dropdowns[i];
//     if (openDropdown.classList.contains('show')) {
//       openDropdown.classList.remove('show');
//     }
//   }
// }
// }
function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
  document.getElementById("mySpan1").classList.toggle("active");
  document.getElementById("myArrow1").classList.toggle("active");
}
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
  document.getElementById("mySpan2").classList.toggle("active");
  document.getElementById("myArrow2").classList.toggle("active");
}
function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
  document.getElementById("mySpan3").classList.toggle("active");
  document.getElementById("myArrow3").classList.toggle("active");
}
function myFunction4() {
  document.getElementById("myDropdown4").classList.toggle("show");
  document.getElementById("mySpan4").classList.toggle("active");
  document.getElementById("myArrow4").classList.toggle("active");
}
function myFunction5() {
  document.getElementById("myDropdown5").classList.toggle("hide");
  document.getElementById("myArrow5").classList.toggle("active");
}

// Change image on click

function changeImage(fileName) {
  let img = document.querySelector('#changeimage');
  img.setAttribute("src", fileName);
}
