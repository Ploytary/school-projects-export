# План по shelter-part-2. Адаптив
---
## Рефактор
- вынести размер горизонтальных паддингов из переменной scss в кастомные переменные
- вынести размер page__wrapper в кастомную переменную. Обращаться в медиавыражениях.
## Медиавыражения для брикпоинтов
- Руководствоваться не границами брикпоинтов, а диапазонами. Описать для диапазонов scss миксины
```css
@mixin for-phone-only {
  @media (max-width: 599px) { @content; }
}
@mixin for-tablet-portrait-up {
  @media (min-width: 600px) { @content; }
}
@mixin for-tablet-landscape-up {
  @media (min-width: 900px) { @content; }
}
@mixin for-desktop-up {
  @media (min-width: 1200px) { @content; }
}
@mixin for-big-desktop-up {
  @media (min-width: 1800px) { @content; }
}

// usage
.my-box {
  padding: 10px;
  @include for-desktop-up {
    padding: 20px;
  }
}
```
- учесть, что по учебному проекту приходится отталкиваться от десктоп-фёрст

## Отзывчивые картинки
- обкатать srcset с описанием плотности плотности экрана
```html
<img src="cat-200px.jpg" alt="котик без сахара" width="200"
     srcset="cat-200px.jpg 1x, 
             cat-400px.jpg 2x, 
             cat-600px.jpg 3x,
             cat-800px.jpg 4x">
```
- обкатать srcset с описанием размера картинки + медиа выражения в sizes
```html
<img src="cat.jpg" alt="cat on a watermelon" 
     srcset="cat-200px.jpg 200w, 
             cat-400px.jpg 400w, 
             cat-600px.jpg 600w"  
     sizes="(max-width:800px) 30vw,  600px">
```
- поманипулировать наборами изображений через `<picture>` и `<source>`
```html
<picture>
  <source media=”(min-width: 1200px)” srcset=”img/logotype-desktop.svg”>
  <source media=”(min-width: 768px)” srcset=”img/logotype-tablet.svg”>
  <img src=”img/logo.png” alt=”Логотип” width=”226” height=”30”>
</picture>
```
- усложнить описаниями srcset у `source>`
```html
<picture>
  <source media=”(min-width: 1200px)” srcset=”img/logotype-desktop@1x.png x1, img/logotype-desktop@2x.png x2”>
  <source media=”(min-width: 768px)” srcset=”img/logotype-tablet@1x.png x1, img/logotype-tablet@2x.png x2”>
  <img src=”img/logo-mobie.png” srcset=”img/logo-mobie.png” alt=”Логотип”>
</picture>
```
- протестить совмесную работу атрибута `sizes` и `media` у `<source>`. Включая тест подтягивания ретина изображений и использования обоих дескрипторов x и w
```html
<picture>
  <source srcset="/img/html/vangogh-sm.jpg 120w,
                  /img/html/vangogh.jpg 193w,
                  /img/html/vangogh-lg.jpg 278w"
          sizes="(max-width: 710px) 120px,
                 (max-width: 991px) 193px,
                 278px"
          media="??"> <!-- проверить--> <!--дополнительный дескриптор x-->
  <source srcset="..." sizes="..." media="..."> <!-- проверить-->
  <img src="/img/html/vangogh-lg.jpg" alt="Vincent Van Gogh">
</picture>
```
- усложнить атрибутом типа изображения `type` у `<source>`
```html
<picture>
  <source type="image/webp" media="(min-width: 1200px)" srcset="img/photo-1-desktop.webp 1x, img/photo-1-desktop@2x.webp 2x">
  <source type="image/webp" media="(min-width: 768px)" srcset="img/photo-1-tablet.webp 1x, img/photo-1-tablet@2x.webp 2x">
  <source type="image/webp" srcset="img/photo-1-mobile.webp 1x, img/photo-1-mobile@2x.webp 2x">
  
  <source media="(min-width: 1200px)" srcset="img/photo-1-desktop.jpg 1x, img/photo-1-desktop@2x.jpg 2x">
  <source media="(min-width: 768px)" srcset="img/photo-1-tablet.jpg 1x, img/photo-1-tablet@2x.jpg 2x">
  <img class="works-item__image" src="img/photo-1-mobile.jpg" srcset="img/photo-1-mobile@2x.jpg 2x" alt="Пример нашей работы">
</picture>
```
## Отзывчивая декоративная графика в CSS
- обкатать через медиа-выражения resolution
```css
bg-single {
  width: 200px;
  background-repeat: no-repeat;
  background-image: url('bg-200px.png');
  background-size: 200px auto;
}
@media (min-resolution: 2dppx) {
  .bg-single {
  background-image: url('bg-400px.png');
}
```