"use strict"; // Инициализаци

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

$(document).ready(function () {
  // Инициализация библиотеки для плавной анимации элементов при появлении
  new WOW().init(); // Анимация облака при загрузке

  setTimeout(function () {
    $('body').removeClass('loading');
    $('.intro__transition-layer').addClass('visible opening');
    setTimeout(function () {
      $('.intro__transition-layer').removeClass('opening visible');
      $('.intro__transition-layer').off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
    }, 1300);
  }, 2000); // Дополнительный класс для корневого элемента, если браузер - IE или Edge

  if (/MSIE 9/i.test(navigator.userAgent) || /MSIE 10/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) {
    document.documentElement.className += ' old-browser';
    $('.intro__anim-svg path, .wedding__date-day path, .wedding__date-year path').css({
      strokeDasharray: "0"
    });
  } else if (/Edge\/\d./i.test(navigator.userAgent)) {
    document.documentElement.className += ' edge-browser';
  } // Маска для инпутов телефона (js_phone-input)


  $('input[type="tel"]').mask('+7 000 000-00-00'); // Стилизация select

  $('.form select').niceSelect(); // Инициализация lazy load для изображений

  $('.lazy').lazy({
    effect: "fadeIn",
    effectTime: 500,
    threshold: 700
  }); // Иницализация Fancybox без дополнительных кнопок

  $('[data-fancybox]').fancybox({
    buttons: ["close"],
    loop: true,
    helpers: {
      overlay: {
        locked: false
      }
    }
  }); // Получение фото из Instagram по хэштегу

  if ($('.instagram').length !== 0) {
    $(document).on('scroll', scrollInstagramHandle);
  }
}); // Анимация интро-блока при загрузке

$(document).ready(function () {
  if ($('.page--index').length !== 0) {
    var introTitle, introSlogan; // Wrap every letter in a span

    introTitle = document.querySelector('.intro__title');
    introSlogan = document.querySelector('.intro__slogan');
    introTitle.innerHTML = introTitle.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    introSlogan.innerHTML = introSlogan.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    if ($('html').scrollTop() <= 100) {
      anime.timeline({
        loop: false
      }).add({
        targets: '.intro__bg',
        scale: [0.9, 1],
        easing: "easeOutQuart",
        duration: 1700,
        delay: 2100
      }).add({
        targets: '.intro__logo .logo__grad-icon',
        opacity: [0, 1],
        translateY: [25, 0],
        translateX: [-10, 0],
        rotate: [15, 0],
        easing: "easeOutQuart",
        duration: 1350
      }, '-=700').add({
        targets: '.intro__logo .logo__caption-agency',
        opacity: [0, 1],
        translateY: [25, 0],
        easing: "easeOutQuart",
        duration: 1350
      }, '-=1000').add({
        targets: '.intro__logo .logo__caption-name',
        opacity: [0, 1],
        translateY: [25, 0],
        easing: "easeOutQuart",
        duration: 1350
      }, '-=1000').add({
        targets: '.intro__logo-bg',
        opacity: [0, 1],
        translateX: [60, 0],
        translateY: [-140, 0],
        rotate: [-15, 0],
        easing: "easeOutQuart",
        duration: 2250
      }, '-=2000').add({
        targets: '.intro__menu-trigger',
        opacity: [0, 1],
        translateY: [-5, 5, 0],
        easing: "easeInOutQuad",
        duration: 3050
      }, '-=2500').add({
        targets: '.page--index .header',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 1250
      }).add({
        targets: '.intro__title .letter',
        opacity: [0, 1],
        rotate: [10, 0],
        translateY: [15, 0],
        easing: "easeInOutQuad",
        duration: 800,
        delay: anime.stagger(30)
      }, '-=5000').add({
        targets: '.intro__slogan .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: anime.stagger(50)
      }, '-=5700').add({
        targets: '.intro__video',
        translateY: [40, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200
      }, '-=4000');
    }
  }

  if ($('.page--inner').length !== 0) {
    anime.timeline({
      loop: false
    }).add({
      targets: '.header__logo-bg',
      translateY: [-100, 0],
      opacity: [0, 1],
      easing: "easeOutQuart",
      duration: 1700,
      delay: 2100
    }).add({
      targets: '.logo--mini',
      opacity: [0, 1],
      translateY: [-25, 0],
      easing: "easeOutQuart",
      duration: 750
    }, '-=700').add({
      targets: '.header__call-me',
      opacity: [0, 1],
      translateY: [-25, 0],
      easing: "easeOutQuart",
      duration: 550
    }, '-=900').add({
      targets: '.header__menu-trigger',
      opacity: [0, 1],
      translateY: [-25, 0],
      easing: "easeOutQuart",
      duration: 550
    }, '-=400');
  }
}); // Главное меню в модальном окне

$(document).ready(function ($) {
  //cache some jQuery objects
  var modalTrigger = $('.js_menu-trigger'),
      transitionLayer = $('.menu-modal__transition-layer'),
      transitionBackground = transitionLayer.children(),
      modalWindow = $('.menu-modal__popup');
  var frameProportion = 1.78,
      //png frame aspect ratio
  frames = 25,
      //number of png frames
  resize = false; //set transitionBackground dimentions

  setLayerDimensions();
  $(window).on('resize', function () {
    if (!resize) {
      resize = true;
      !window.requestAnimationFrame ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
    }
  }); //open modal window

  modalTrigger.on('click', function (event) {
    event.preventDefault();
    transitionLayer.addClass('visible opening');
    var delay = $('.no-cssanimations').length > 0 ? 0 : 600;
    setTimeout(function () {
      modalWindow.addClass('visible');
    }, delay);
  });
  $('.intro__video').on('click', function (event) {
    transitionLayer.addClass('visible opening');
    setTimeout(function () {
      transitionLayer.addClass('closing');
      transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
        transitionLayer.removeClass('closing opening visible');
        transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
      });
    }, 1600);
  }); //close modal window

  modalWindow.on('click', '.menu-modal__close', function (event) {
    event.preventDefault();
    transitionLayer.addClass('closing');
    modalWindow.removeClass('visible');
    transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
      transitionLayer.removeClass('closing opening visible');
      transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
    });
  });

  function setLayerDimensions() {
    var windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        layerHeight,
        layerWidth;

    if (windowWidth / windowHeight > frameProportion) {
      layerWidth = windowWidth;
      layerHeight = layerWidth / frameProportion;
    } else {
      layerHeight = windowHeight * 1.2;
      layerWidth = layerHeight * frameProportion;
    }

    transitionBackground.css({
      'width': layerWidth * frames + 'px',
      'height': layerHeight + 'px'
    });
    resize = false;
  }
}); //Анимирование блоков при скролле

$(document).ready(function () {
  $("[data-parallax]").each(function () {
    var $this = $(this);
    var animetl = anime.timeline({
      autoplay: false
    });
    var properties = {
      targets: $this[0],
      easing: "linear"
    }; // Parse properties from attribute and add them to properties object

    $.each($this.attr("data-parallax").split(/[,\s]+(?={)/), function (i, value) {
      //console.log(value);
      $.extend(properties, eval("(" + value + ")")); //console.log(properties);
    });
    animetl.add(properties); // add options object to timeline

    var parallaxSetup = function parallaxSetup() {
      var bound = $this[0].getBoundingClientRect();
      var wHeight = $(window).height();

      if (bound.top < wHeight && bound.bottom > 0) {
        animetl.seek(animetl.duration * ((wHeight - bound.top) / (wHeight + bound.height)).toFixed(3));
      } else {
        if (bound.top >= wHeight) {
          animetl.seek(0);
        } else if (bound.bottom <= 0) {
          animetl.seek(animetl.duration);
        }
      }
    };

    $($this.attr("parallax-scroll") || window).on("resize scroll", parallaxSetup);
    setTimeout(parallaxSetup, 50);
  });
}); // Слайдер отзывов с плавной анимацей

$(document).ready(function () {
  $('.reviews__slider').on('init', function (e, slick) {
    var $firstAnimatingElements = $('div.reviews__slide:first-child').find('[data-animation]');
    doAnimations($firstAnimatingElements);
  });
  $('.reviews__slider').on('beforeChange', function (e, slick, currentSlide, nextSlide) {
    var $animatingElements = $('div.reviews__slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
    doAnimations($animatingElements);
  });
  $('.reviews__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    draggable: true,
    dots: false,
    adaptiveHeight: true
  });
}); // Скрипт получения фото из Instagram по хэштегу

function getInstThumbsByTag(tag, elemsCount, elemToPaste) {
  // Получаем JSON с информацией по хэштегу
  var imagesJSON = "https://www.instagram.com/explore/tags/".concat(tag, "/?__a=1");
  $.getJSON(imagesJSON, {
    format: "json"
  }).done(function (data) {
    // Получаем детальный массив с фотографиями, обрезаем на нужное кол-во элементов
    var hashtagItems = data.graphql.hashtag.edge_hashtag_to_media.edges.slice(0, elemsCount); // Формируем шаблон для вставки. Ниже используется шорткод в качестве ссылки на пост, в качестве картинки - превью размером 640х640, подпись поста и количество лайков

    $.each(hashtagItems, function (i, item) {
      var imageTemplate = "<a class=\"instagram__item-link wow fadeIn\" data-wow-delay=\"0.".concat(i + 1, "s\" data-wow-offset=\"50\" href=\"https://www.instagram.com/p/").concat(item.node.shortcode, "/\" target=\"_blank\">\n\t\t\t\t\t\t<img class=\"instagram__image\" src=\"").concat(item.node.thumbnail_resources[4].src, "\" alt=\"").concat(item.node.edge_media_to_caption.edges[0] ? item.node.edge_media_to_caption.edges[0].node.text.slice(0, 70) : '', "...\" title=\"").concat(item.node.edge_media_to_caption.edges[0] ? item.node.edge_media_to_caption.edges[0].node.text.slice(0, 70) : '', "...\">\n\t\t\t\t </a>");
      elemToPaste.append(imageTemplate);
    });
  });
} // Функция последовательной анимации элементов в slick


function doAnimations(elements) {
  var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  elements.each(function () {
    var $this = $(this);
    var $animationDelay = $this.data('delay');
    var $animationType = 'animated ' + $this.data('animation');
    $this.css({
      'animation-delay': $animationDelay,
      '-webkit-animation-delay': $animationDelay
    });
    $this.addClass($animationType).one(animationEndEvents, function () {
      $this.removeClass($animationType);
    });
  });
} // Функция загрузки фото Instagram при скролле


function scrollInstagramHandle() {
  var instTop = $('.instagram').offset().top;
  var instBottom = $('.instagram').offset().top + $('.instagram').outerHeight();
  var screenBottom = $(window).scrollTop() + $(window).innerHeight();
  var screenTop = $(window).scrollTop();

  if (instBottom > instTop && screenTop < screenBottom) {
    getInstThumbsByTag('агентствокарамянц', 4, $('.instagram__stage'));
    $(document).off('scroll', scrollInstagramHandle);
  }
}
/**
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2019, Codrops
 * http://www.codrops.com
 */


{
  // helper functions
  var MathUtils = {
    // map number x from range [a, b] to [c, d]
    map: function map(x, a, b, c, d) {
      return (x - a) * (d - c) / (b - a) + c;
    },
    // linear interpolation
    lerp: function lerp(a, b, n) {
      return (1 - n) * a + n * b;
    },
    // Random float
    getRandomFloat: function getRandomFloat(min, max) {
      return (Math.random() * (max - min) + min).toFixed(2);
    }
  }; // body element

  var body = document.body; // calculate the viewport size

  var winsize;

  var calcWinsize = function calcWinsize() {
    return winsize = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  };

  calcWinsize(); // and recalculate on resize

  window.addEventListener('resize', calcWinsize); // scroll position

  var docScroll; // for scroll speed calculation

  var lastScroll;
  var scrollingSpeed = 0; // scroll position update function

  var getPageYScroll = function getPageYScroll() {
    return docScroll = window.pageYOffset || document.documentElement.scrollTop;
  };

  window.addEventListener('scroll', getPageYScroll); // Item

  var Item =
  /*#__PURE__*/
  function () {
    function Item(el) {
      var _this = this;

      _classCallCheck(this, Item);

      // the .item element
      this.DOM = {
        el: el
      };
      this.DOM.image = this.DOM.el.querySelector('.portfolio-content__item-img');
      this.DOM.imageWrapper = this.DOM.image.parentNode; // 3d stuff

      this.DOM.el.style.perspective = '1000px';
      this.DOM.imageWrapper.style.transformOrigin = '50% 100%';
      this.ry = MathUtils.getRandomFloat(-0.5, 0.5);
      this.rz = MathUtils.getRandomFloat(-0.5, 0.5);
      this.DOM.title = this.DOM.el.querySelector('.portfolio-content__item-title');
      this.DOM.title.style.transform = 'translate3d(0,0,200px)';
      this.renderedStyles = {
        // here we define which property will change as we scroll the page and the item is inside the viewport
        // in this case we will be:
        // - translating the inner image
        // - rotating the item
        // we interpolate between the previous and current value to achieve a smooth effect
        innerTranslationY: {
          // interpolated value
          previous: 0,
          // current value
          current: 0,
          // amount to interpolate
          ease: 0.1,
          // current value setter
          setValue: function setValue() {
            // the maximum value to translate the image is set in a CSS variable (--overflow)
            var toValue = parseInt(getComputedStyle(_this.DOM.image).getPropertyValue('--overflow'), 10);
            var fromValue = -1 * toValue;
            return Math.max(Math.min(MathUtils.map(_this.props.top - docScroll, winsize.height, -1 * _this.props.height, fromValue, toValue), toValue), fromValue);
          }
        },
        itemRotation: {
          // interpolated value
          previous: 0,
          // current value
          current: 0,
          // amount to interpolate
          ease: 0.1,
          toValue: Number(MathUtils.getRandomFloat(-70, -50)),
          // current value setter
          setValue: function setValue() {
            var toValue = _this.renderedStyles.itemRotation.toValue;
            var fromValue = toValue * -1;
            var val = MathUtils.map(_this.props.top - docScroll, winsize.height * 1.5, -1 * _this.props.height, fromValue, toValue);
            return Math.min(Math.max(val, toValue), fromValue);
          }
        }
      }; // gets the item's height and top (relative to the document)

      this.getSize(); // set the initial values

      this.update(); // use the IntersectionObserver API to check when the element is inside the viewport
      // only then the element styles will be updated

      this.observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          return _this.isVisible = entry.intersectionRatio > 0;
        });
      });
      this.observer.observe(this.DOM.el); // init/bind events

      this.initEvents();
    }

    _createClass(Item, [{
      key: "update",
      value: function update() {
        // sets the initial value (no interpolation)
        for (var key in this.renderedStyles) {
          this.renderedStyles[key].current = this.renderedStyles[key].previous = this.renderedStyles[key].setValue();
        } // apply changes/styles


        this.layout();
      }
    }, {
      key: "getSize",
      value: function getSize() {
        var rect = this.DOM.el.getBoundingClientRect();
        this.props = {
          // item's height
          height: rect.height,
          // offset top relative to the document
          top: docScroll + rect.top
        };
      }
    }, {
      key: "initEvents",
      value: function initEvents() {
        var _this2 = this;

        window.addEventListener('resize', function () {
          return _this2.resize();
        });
      }
    }, {
      key: "resize",
      value: function resize() {
        // gets the item's height and top (relative to the document)
        this.getSize(); // on resize reset sizes and update styles

        this.update();
      }
    }, {
      key: "render",
      value: function render() {
        // update the current and interpolated values
        for (var key in this.renderedStyles) {
          this.renderedStyles[key].current = this.renderedStyles[key].setValue();
          this.renderedStyles[key].previous = MathUtils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].ease);
        } // and apply changes


        this.layout();
      }
    }, {
      key: "layout",
      value: function layout() {
        // translates the image
        this.DOM.image.style.transform = "translate3d(0,".concat(this.renderedStyles.innerTranslationY.previous, "px,0)"); // rotate the image wrapper

        this.DOM.imageWrapper.style.transform = "rotate3d(1,".concat(this.ry, ",").concat(this.rz, ",").concat(this.renderedStyles.itemRotation.previous, "deg)");
      }
    }]);

    return Item;
  }(); // SmoothScroll


  var SmoothScroll =
  /*#__PURE__*/
  function () {
    function SmoothScroll() {
      var _this3 = this;

      _classCallCheck(this, SmoothScroll);

      // the <main> element
      this.DOM = {
        main: document.querySelector('main')
      }; // the scrollable element
      // we translate this element when scrolling (y-axis)

      this.DOM.scrollable = this.DOM.main.querySelector('div[data-scroll]'); // the items on the page

      this.items = [];
      this.DOM.content = this.DOM.main.querySelector('.portfolio-content');

      _toConsumableArray(this.DOM.content.querySelectorAll('.portfolio-content__item')).forEach(function (item) {
        return _this3.items.push(new Item(item));
      }); // here we define which property will change as we scroll the page
      // in this case we will be translating on the y-axis
      // we interpolate between the previous and current value to achieve the smooth scrolling effect


      this.renderedStyles = {
        translationY: {
          // interpolated value
          previous: 0,
          // current value
          current: 0,
          // amount to interpolate
          ease: 0.1,
          // current value setter
          // in this case the value of the translation will be the same like the document scroll
          setValue: function setValue() {
            return docScroll;
          }
        }
      }; // set the body's height

      this.setSize(); // set the initial values

      this.update(); // the <main> element's style needs to be modified

      this.style(); // init/bind events

      this.initEvents(); // start the render loop

      requestAnimationFrame(function () {
        return _this3.render();
      });
    }

    _createClass(SmoothScroll, [{
      key: "update",
      value: function update() {
        // sets the initial value (no interpolation) - translate the scroll value
        for (var key in this.renderedStyles) {
          this.renderedStyles[key].current = this.renderedStyles[key].previous = this.renderedStyles[key].setValue();
        } // translate the scrollable element


        this.layout();
      }
    }, {
      key: "layout",
      value: function layout() {
        this.DOM.scrollable.style.transform = "translate3d(0,".concat(-1 * this.renderedStyles.translationY.previous, "px,0)");
      }
    }, {
      key: "setSize",
      value: function setSize() {
        // set the heigh of the body in order to keep the scrollbar on the page
        body.style.height = "".concat(this.DOM.scrollable.scrollHeight, "px");
      }
    }, {
      key: "style",
      value: function style() {
        // the <main> needs to "stick" to the screen and not scroll
        // for that we set it to position fixed and overflow hidden
        this.DOM.main.style.position = 'fixed';
        this.DOM.main.style.width = this.DOM.main.style.height = '100%';
        this.DOM.main.style.top = this.DOM.main.style.left = 0;
        this.DOM.main.style.overflow = 'hidden';
      }
    }, {
      key: "initEvents",
      value: function initEvents() {
        var _this4 = this;

        // on resize reset the body's height
        window.addEventListener('resize', function () {
          return _this4.setSize();
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this5 = this;

        // Get scrolling speed
        // Update lastScroll
        scrollingSpeed = Math.abs(docScroll - lastScroll);
        lastScroll = docScroll; // update the current and interpolated values

        for (var key in this.renderedStyles) {
          this.renderedStyles[key].current = this.renderedStyles[key].setValue();
          this.renderedStyles[key].previous = MathUtils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].ease);
        } // and translate the scrollable element


        this.layout(); // for every item

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            // if the item is inside the viewport call it's render function
            // this will update item's styles, based on the document scroll value and the item's position on the viewport
            if (item.isVisible) {
              if (item.insideViewport) {
                item.render();
              } else {
                item.insideViewport = true;
                item.update();
              }
            } else {
              item.insideViewport = false;
            }
          } // loop..

        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        requestAnimationFrame(function () {
          return _this5.render();
        });
      }
    }]);

    return SmoothScroll;
  }();
  /***********************************/

  /********** Preload stuff **********/
  // Preload images


  var preloadImages = function preloadImages() {
    return new Promise(function (resolve, reject) {
      imagesLoaded(document.querySelectorAll('.portfolio-content__item-img'), {
        background: true
      }, resolve);
    });
  }; // And then..


  preloadImages().then(function () {
    // Remove the loader
    document.body.classList.remove('loading'); // Get the scroll position and update the lastScroll variable

    getPageYScroll();
    lastScroll = docScroll; // Initialize the Smooth Scrolling

    new SmoothScroll();
  });
} // Скрытие хэдера при отрицательном скроле вверх (iOS)

if ($('.page--index')) {
  $(document).on('scroll', function () {
    if ($(document).scrollTop() <= 0) {
      $('.header').css('opacity', 0);
    } else {
      $('.header').css('opacity', 1);
    }
  });
} // Кнопка Наверх


$(document).on('scroll', function () {
  if ($(document).scrollTop() > 200) {
    $('.to-top').addClass('to-top--active');
  } else {
    $('.to-top').removeClass('to-top--active');
  }
});
$('.to-top').on('click', function () {
  $("html, body").animate({
    scrollTop: 0
  });
});