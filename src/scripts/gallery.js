const galleryList = [
  {
    city: 'Алматы',
    address: 'ТРК «Mega Center Alma-Ata» ул. Розыбакиева, 247а',
    images: [
      'https://api.technodom.kz/f3/api/v1/images/mega-1.png_b991a456298c3f04b94ab191d0f0a95a',
      'https://api.technodom.kz/f3/api/v1/images/mega-2.png_cee2863cbd1fb088a95fb83da1f38843',
      'https://api.technodom.kz/f3/api/v1/images/mega-3.png_41a0df512f2e1c56cec9c787a94277da',
      'https://api.technodom.kz/f3/api/v1/images/mega-4.png_3f95259ce1ca644d9a9db99a75c45f8c',
      'https://api.technodom.kz/f3/api/v1/images/mega-5.png_3278fe243d3b8512ff25fcd8c68dea5a',
      'https://api.technodom.kz/f3/api/v1/images/mega-6.png_21be919f37112fd34161abf7f3af9013'
    ]
  },
  {
    city: 'Алматы',
    address: 'ЖК «Дом на Абая» пр. Гагарина, 124',
    images: [
      'https://api.technodom.kz/f3/api/v1/images/gallery-1.png_3bb189ac354edc68ed3b91c7f0de2366',
      'https://api.technodom.kz/f3/api/v1/images/gallery-2.png_4f9b41cf2c68438913ec4ca1ff22c3cf',
      'https://api.technodom.kz/f3/api/v1/images/gallery-3.png_438cace2514c05159bcd023b006f6e15',
      'https://api.technodom.kz/f3/api/v1/images/gallery-4.png_294129e2a44a14c13f11835a66826807',
      'https://api.technodom.kz/f3/api/v1/images/gallery-5.png_9febda65ba49a24573cbfdbddfd1a030',
      'https://api.technodom.kz/f3/api/v1/images/gallery-6.png_cdde0307db88fd912ab025d302cf2ba3'
    ]
  },
  {
    city: 'Астана',
    address: 'ТРЦ «MEGA Silk Way» пр. Қабанбай Батыр, 62',
    images: [
      'https://api.technodom.kz/f3/api/v1/images/silkway-1.png_df6e125609489dc90e73e8cf1833026a',
      'https://api.technodom.kz/f3/api/v1/images/silkway-2.png_85d5bef2fa5d6dd5a6b5985c1266a7e9',
      'https://api.technodom.kz/f3/api/v1/images/silkway-3.png_dd06cfaa1f1d206db43aeb44bb02b49b',
      'https://api.technodom.kz/f3/api/v1/images/silkway-4.png_ad26f6a9fc8071b8a2b36fcb2f8e9bf2',
      'https://api.technodom.kz/f3/api/v1/images/silkway-5.png_45992150d37b94da7d321bbd8a028d2a',
      'https://api.technodom.kz/f3/api/v1/images/silkway-6.png_2afa7521cdc24a49d416ec9e15653d02'
    ]
  },
  {
    city: 'Астана',
    address: 'Магазин на пр. Республики, 34а',
    images: [
      'https://api.technodom.kz/f3/api/v1/images/resp-1.png_b44cb163faa1e51661794fa906242506',
      'https://api.technodom.kz/f3/api/v1/images/resp-2.png_72e446777284870017694632e355a52f',
      'https://api.technodom.kz/f3/api/v1/images/resp-3.png_46c179baef114b54924251c2c5b03b81',
      'https://api.technodom.kz/f3/api/v1/images/resp-4.png_e81d7078f0552abad8aaa76a3d19d45a',
      'https://api.technodom.kz/f3/api/v1/images/resp-5.png_e4b6fd2cd91ab67807a3d913f9a39503',
      'https://api.technodom.kz/f3/api/v1/images/resp-6.png_b1663abce144a8284ea3c6e1874aac15'
    ]
  },
  {
    city: 'Астана',
    address: 'ТРК «КЕРУЕН» ул. Достық, 9',
    images: [
      'https://api.technodom.kz/f3/api/v1/images/keruen-1.png_4ada65a0678292ee31e442ed24905e61',
      'https://api.technodom.kz/f3/api/v1/images/keruen-2.png_9c77b8efb2719bdbdcacc1fb13459c77',
      'https://api.technodom.kz/f3/api/v1/images/keruen-3.png_de70cf30a62c55f2c728149532ff0310'
    ]
  },
]

const addressElementContainer = document.querySelector('.address__list');

function btnControlHandler(e) {
  e.preventDefault();
  let content = e.currentTarget.nextElementSibling;
  let btnArrow = e.currentTarget.children[1].children[1];
  let btnText = e.currentTarget.children[1].children[0];
  if (e.target.classList.contains('address__control') ||
      e.target.classList.contains('address__control-text') ||
      e.target.classList.contains('address__control-icon')
  ) {
    console.log(btnText.textContent);
    content.classList.toggle('address__content--active');
    btnArrow.classList.toggle('address__control-icon--active');
    btnText.textContent = btnText.textContent === 'Посмотреть фотографии' ?
    btnText.textContent = 'Скрыть фотографии' :
    btnText.textContent = 'Посмотреть фотографии'
  }
}

function galleryGenerator(list, container) {
  list.forEach(item => {
    let itemElement = document.createElement('li');
    itemElement.classList.add('address__item');
    let itemElementHeader = document.createElement('div');
    itemElementHeader.classList.add('address__header');
    itemElementHeader.innerHTML = `
      <div class="address__info">
        <h3 class="address__title">
          ${item.city}
        </h3>
        <p class="address__text">
          ${item.address}
        </p>
      </div>
      <button class="address__control">
        <span class="address__control-text">Посмотреть фотографии</span>
        <svg class="address__control-icon" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9894 5.46194C15.5752 5.98263 15.5752 6.82685 14.9894 7.34755L8.98937 12.6809C8.40358 13.2016 7.45384 13.2016 6.86805 12.6809L0.868052 7.34755C0.282264 6.82685 0.282264 5.98263 0.868052 5.46194C1.45384 4.94124 2.40359 4.94124 2.98937 5.46194L7.92871 9.85246L12.8681 5.46194C13.4538 4.94124 14.4036 4.94124 14.9894 5.46194Z" fill="#FC6B3F"/>
        </svg>                  
      </button>
    `;
    itemElement.append(itemElementHeader);
    let itemContentElement = document.createElement('div');
    itemContentElement.classList.add('address__content');
    let itemGalleryElement = document.createElement('div');
    itemGalleryElement.classList.add('address__gallery');
    itemContentElement.append(itemGalleryElement);
    item.images.forEach(img => {
      let imageElement = document.createElement('img');
      imageElement.classList.add('address__gallery-image');
      imageElement.src = img;
      itemGalleryElement.append(imageElement);
    });
    itemElement.append(itemContentElement);
    container.append(itemElement);
  })
}

galleryGenerator(galleryList,addressElementContainer);
const controls = document.querySelectorAll('.address__header');
controls.forEach(btn => {
  btn.addEventListener('click', btnControlHandler)
});