import "./burger.js";
import { Slider } from "./slider.js";

const slider = new Slider();
slider.init();

const message = (
  `
Реализация burger menu на обеих страницах: +26
Реализация слайдера-карусели на странице Main: +36
Реализация пагинации на странице Pets: +36
Реализация попап на обеих страницах: +12
Итог: +110
  `
);



if(!localStorage.getItem('visited')) {
  alert('Информация для критериев, касающихся генератора карточек и слайдов, видна в консоли.');
}
localStorage.setItem('visited', true);


//force github pages update
// console.log(message);