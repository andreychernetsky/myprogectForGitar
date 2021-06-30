{
  const charac = document.querySelector('.characteristics');
  const burger = document.querySelector('.advice-btn');
  const overlay = document.querySelector('.overlay');

  burger.addEventListener('click',()=>{
    charac.classList.add('open');
    overlay.classList.add('open');
  })

  overlay.addEventListener('click',()=>{
    charac.classList.remove('open');
    overlay.classList.remove('open');
  })
  
}

// accordion
{
  const accordion = () => {
    // Блок с аккордеоном.
    const characteristicsListElem = document
      .querySelector('.characteristics__list')
    // Все элементы аккордеона.
    const characteristicsItemElems = characteristicsListElem
      .querySelectorAll('.characteristics__item')

    /*
    	Определение высоты блока с описанием части товара
    	активного элемента аккордеона.
    */
    // Пройти по всем элементам аккордеона.
    characteristicsItemElems.forEach(elem => {
      if (elem.children[1].classList.contains('active')) {
        elem.children[1].style
          .height = `${elem.children[1].scrollHeight}px`
      }
    })

    /*
    	Функция открывает пункт аккордеона. Принимает кнопку, на которую
    	нажали, и блок с характеристиками, которые нужно отобразить.
    */
    const open = (button, dropDown) => {
      // Закрыть все элементы аккордеона, кроме активного.
      closeAllDrops(button, dropDown)

      dropDown.style.height = `${dropDown.scrollHeight}px`
      button.classList.add('active')
      dropDown.classList.add('active')
    }

    /*
    	Функция закрывает пункт аккордеона. Принимает кнопку, на которую
    	нажали, и блок с характеристиками, которые нужно скрыть.
    */
    const close = (button, dropDown) => {
      button.classList.remove('active')
      dropDown.classList.remove('active')
      dropDown.style.height = '0'
    }

    // Функция закрывает все элементы аккордеона, кроме принятых.
    const closeAllDrops = (button, dropDown) => {
      // Пройти по всем элементам аккордеона.
      characteristicsItemElems.forEach(elem => {
        if (elem.children[0] !== button &&
          elem.children[1] !== dropDown) {
          close(elem.children[0], elem.children[1])
        }
      })
    }

    characteristicsListElem.addEventListener('click', event => {
      const target = event.target

      // Если кликнули по кнопке-заголовку аккордеона:
      if (target.classList.contains('characteristics__title')) {

        const parent = target.closest('.characteristics__item')
        const description = parent
          .querySelector('.characteristics__description')

        // Если элемент аккордеона развёрнут:
        if (description.classList.contains('active')) {
          // Свернуть элемент аккордеона.
          close(target, description)
        }

        // Если элемент аккордеона свёрнут:
        else {
          // Развернуть элемент аккордеона.
          open(target, description)
        }
      }
    })

    // Обработчик клика по странице вне аккордеона.
    document.body.addEventListener('click', event => {
      const target = event.target
      // Если кликнули вне аккордеона:
      if (!target.closest('.characteristics__list')) {
        // Закрыть все элементы аккордеона.
        closeAllDrops()
      }
    })

  }
  accordion();
}

//кнопка на вверх
{
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', (e) => {
      e.preventDefault()

      const blockID = anchor.getAttribute('href');

      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
}


 
  // скролл по кнопке
  {
    function trackScroll() {
      const scrolled = window.pageXOffset
      const coords = document.documentElement.clientHeight;

      if(scrolled > coords) {
        goTopBtn.classList.add('topButton__show');
      }
      if(scrolled < coords) {
        goTopBtn.classList.remove('topButton__show')
      }
    }

    function backToTop() {
      if(window.pageYOffset > 0) {
        window.scrollBy(0,-80);
        setTimeout(backToTop, 0);
      }
    }

    const goTopBtn = document.querySelector('.topButton');
    window.addEventListener('scroll',trackScroll);
    goTopBtn.addEventListener('click',backToTop);
  }

