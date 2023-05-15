/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/styles/global-styles.scss":
/*!**********************************************!*\
  !*** ./src/assets/styles/global-styles.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/button/button-expandable.component.scss":
/*!****************************************************************!*\
  !*** ./src/components/button/button-expandable.component.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/button/button.component.scss":
/*!*****************************************************!*\
  !*** ./src/components/button/button.component.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/control-panel/control-panel.component.scss":
/*!*******************************************************************!*\
  !*** ./src/components/control-panel/control-panel.component.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/info-field/info-field.component.scss":
/*!*************************************************************!*\
  !*** ./src/components/info-field/info-field.component.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/input/range-input.component.scss":
/*!*********************************************************!*\
  !*** ./src/components/input/range-input.component.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/minesweeper/minesweeper.component.scss":
/*!***************************************************************!*\
  !*** ./src/components/minesweeper/minesweeper.component.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/playground/playground.component.scss":
/*!*************************************************************!*\
  !*** ./src/components/playground/playground.component.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/tile/tile.component.scss":
/*!*************************************************!*\
  !*** ./src/components/tile/tile.component.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/timer/timer.component.scss":
/*!***************************************************!*\
  !*** ./src/components/timer/timer.component.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/base.component.js":
/*!******************************************!*\
  !*** ./src/components/base.component.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent)
/* harmony export */ });
class BaseComponent {
  node;
  constructor({
    tagName = 'div',
    className = [],
    textContent = '',
    parentNode,
  }) {
    this.node = document.createElement(tagName);
    this.node.textContent = textContent;
    this.addClass(className);
    if (parentNode) {
      parentNode.append(this.node);
    }
  }

  append(...components) {
    for (let component of components) {
      this.node.append(component.getElement());
    }
  }

  getElement() {
    return this.node;
  }

  addClass(className) {
    add.call(this, className);

    function add(name) {
      if (Array.isArray(name)) {
        for (let item of name) {
          add.call(this, item);
        }
      } else {
        if (name === '') {
          return;
        }
        this.node.classList.add(name);
      }
    }
  }

  destroy() {
    this.node.remove();
  }
}


/***/ }),

/***/ "./src/components/button/button-expandable.component.js":
/*!**************************************************************!*\
  !*** ./src/components/button/button-expandable.component.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonExpandableComponent": () => (/* binding */ ButtonExpandableComponent)
/* harmony export */ });
/* harmony import */ var _button_expandable_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-expandable.component.scss */ "./src/components/button/button-expandable.component.scss");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base.component */ "./src/components/base.component.js");
/* harmony import */ var _input_range_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input/range-input.component */ "./src/components/input/range-input.component.js");
/* harmony import */ var _svg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg.component */ "./src/components/svg.component.js");





class ButtonExpandableComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
  constructor({ icon, className = [], min, max, value }) {
    super({ className: [className, 'button-expandable', 'button'] });

    if (icon) {
      this.append(new _svg_component__WEBPACK_IMPORTED_MODULE_3__.SVGComponent(icon));
    }

    this.append(
      new _input_range_input_component__WEBPACK_IMPORTED_MODULE_2__.RangeInputComponent({
        min: min,
        max: max,
        value: value,
      })
    );
  }
}


/***/ }),

/***/ "./src/components/button/button.component.js":
/*!***************************************************!*\
  !*** ./src/components/button/button.component.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonComponent": () => (/* binding */ ButtonComponent)
/* harmony export */ });
/* harmony import */ var _button_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.component.scss */ "./src/components/button/button.component.scss");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base.component */ "./src/components/base.component.js");



class ButtonComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
  constructor({ textContent, a11yLabel, svg, className = [] }) {
    super({ tagName: 'button', className: [className, 'button'], textContent });

    if (svg) {
      if (Array.isArray(svg)) {
        svg.forEach((item) => {
          this.append(item);
        });
      } else {
        this.append(svg);
      }
    }

    if (a11yLabel) {
      const label = new _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({
        tagName: 'span',
        className: 'visually-hidden',
        textContent: a11yLabel,
      });
      this.append(label);
    }
  }
}


/***/ }),

/***/ "./src/components/control-panel/control-panel.component.js":
/*!*****************************************************************!*\
  !*** ./src/components/control-panel/control-panel.component.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlPanelComponent": () => (/* binding */ ControlPanelComponent)
/* harmony export */ });
/* harmony import */ var _control_panel_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control-panel.component.scss */ "./src/components/control-panel/control-panel.component.scss");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base.component */ "./src/components/base.component.js");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/button.component */ "./src/components/button/button.component.js");
/* harmony import */ var _button_button_expandable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/button-expandable.component */ "./src/components/button/button-expandable.component.js");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../list.component */ "./src/components/list.component.js");
/* harmony import */ var _svg_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../svg.component */ "./src/components/svg.component.js");
/* harmony import */ var _enums_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../enums/svg-icons */ "./src/enums/svg-icons.js");









const RANGE_MIN_VALUE = 1;
const RANGE_MAX_VALUE = 3;
const RANGE_INIT_VALUE = 1;

class ControlPanelComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
  constructor({ className }) {
    super({ className: [className, 'control-panel'] });

    this.newGameButton = new _button_button_component__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent({
      className: 'minesweeper__new-game-button',
      textContent: 'new game',
    });

    this.scoreButton = new _button_button_component__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent({
      className: 'button--icon',
      a11yLabel: 'score',
    });
    this.scoreButton.append(new _svg_component__WEBPACK_IMPORTED_MODULE_5__.SVGComponent({ template: _enums_svg_icons__WEBPACK_IMPORTED_MODULE_6__.SvgIcons.LIST }));

    this.themeButton = new _button_button_component__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent({
      className: 'button--icon',
      a11yLabel: 'theme',
    });
    this.themeButton.append(
      new _svg_component__WEBPACK_IMPORTED_MODULE_5__.SVGComponent({ className: 'day', template: _enums_svg_icons__WEBPACK_IMPORTED_MODULE_6__.SvgIcons.DAY }),
      new _svg_component__WEBPACK_IMPORTED_MODULE_5__.SVGComponent({ className: 'night', template: _enums_svg_icons__WEBPACK_IMPORTED_MODULE_6__.SvgIcons.NIGHT })
    );

    this.soundButton = new _button_button_component__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent({
      className: 'button--icon',
      a11yLabel: 'sound',
    });
    this.soundButton.append(
      new _svg_component__WEBPACK_IMPORTED_MODULE_5__.SVGComponent({ className: 'unmute', template: _enums_svg_icons__WEBPACK_IMPORTED_MODULE_6__.SvgIcons.UNMUTE }),
      new _svg_component__WEBPACK_IMPORTED_MODULE_5__.SVGComponent({ className: 'mute', template: _enums_svg_icons__WEBPACK_IMPORTED_MODULE_6__.SvgIcons.MUTE })
    );

    this.expSettingButton = new _button_button_expandable_component__WEBPACK_IMPORTED_MODULE_3__.ButtonExpandableComponent({
      icon: { template: _enums_svg_icons__WEBPACK_IMPORTED_MODULE_6__.SvgIcons.SETTINGS },
      min: RANGE_MIN_VALUE,
      max: RANGE_MAX_VALUE,
      value: RANGE_INIT_VALUE,
    });

    const buttonGroup = new _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({
      className: 'minesweeper__button-group',
    });
    buttonGroup.append(this.newGameButton, this.expSettingButton);
    const buttonList = new _list_component__WEBPACK_IMPORTED_MODULE_4__.ListComponent({
      tagName: 'ul',
      className: 'minesweeper__button-list',
      items: [this.scoreButton, this.themeButton, this.soundButton],
    });

    this.append(buttonGroup, buttonList);
  }
}


/***/ }),

/***/ "./src/components/info-field/info-field.component.js":
/*!***********************************************************!*\
  !*** ./src/components/info-field/info-field.component.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoFieldComponent": () => (/* binding */ InfoFieldComponent)
/* harmony export */ });
/* harmony import */ var _info_field_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info-field.component.scss */ "./src/components/info-field/info-field.component.scss");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base.component */ "./src/components/base.component.js");



class InfoFieldComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
  constructor({ labelText, className = [] }) {
    super({ tagName: 'p', className: [className, 'info-field'] });
    const labelComponent = new _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({
      tagName: 'span',
      textContent: labelText,
      className: 'info-field__label',
    });
    this.valueComponent = new _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({
      tagName: 'output',
      textContent: '00',
      className: 'info-field__value',
    });
    this.append(labelComponent, this.valueComponent);
  }

  setValue(value) {
    this.valueElement = value;
  }
}


/***/ }),

/***/ "./src/components/input/range-input.component.js":
/*!*******************************************************!*\
  !*** ./src/components/input/range-input.component.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RangeInputComponent": () => (/* binding */ RangeInputComponent)
/* harmony export */ });
/* harmony import */ var _range_input_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./range-input.component.scss */ "./src/components/input/range-input.component.scss");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base.component */ "./src/components/base.component.js");



class RangeInputComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
  constructor({
    className = [],
    min = '0',
    max = '10',
    value = '0',
    step = '1',
  }) {
    super({ tagName: 'input', className: [className, 'range-slider'] });
    this.node.setAttribute('type', 'range');
    this.node.setAttribute('min', min.toString());
    this.node.setAttribute('max', max.toString());
    this.node.setAttribute('value', value.toString());
    this.node.setAttribute('step', step.toString());
  }
}


/***/ }),

/***/ "./src/components/list.component.js":
/*!******************************************!*\
  !*** ./src/components/list.component.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.component */ "./src/components/base.component.js");


class ListComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor({ tagName, className, items }) {
    super({ tagName, className });

    if (!items) {
      throw new Error('items have not been added');
    } else {
      for (let item of items) {
        if (item instanceof _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent) {
          const listItemComponent = new _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent({ tagName: 'li' });
          listItemComponent.append(item);
          this.append(listItemComponent);
        } else {
          throw new Error('item is not a component');
        }
      }
    }
  }
}


/***/ }),

/***/ "./src/components/minesweeper/minesweeper.component.js":
/*!*************************************************************!*\
  !*** ./src/components/minesweeper/minesweeper.component.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MinesweeperComponent": () => (/* binding */ MinesweeperComponent)
/* harmony export */ });
/* harmony import */ var _minesweeper_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./minesweeper.component.scss */ "./src/components/minesweeper/minesweeper.component.scss");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base.component */ "./src/components/base.component.js");
/* harmony import */ var _control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../control-panel/control-panel.component */ "./src/components/control-panel/control-panel.component.js");
/* harmony import */ var _controllers_playground_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../controllers/playground.controller */ "./src/controllers/playground.controller.js");





class MinesweeperComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
  playgroundController = null;

  constructor() {
    super({ className: ['minesweeper'] });
    const controlPanel = new _control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_2__.ControlPanelComponent({
      className: 'minesweeper__control-panel',
    });

    this.append(controlPanel);

    this.playgroundController = new _controllers_playground_controller__WEBPACK_IMPORTED_MODULE_3__.PlaygroundController(this);
    this.playgroundController.render();
  }
}


/***/ }),

/***/ "./src/components/playground/playground.component.js":
/*!***********************************************************!*\
  !*** ./src/components/playground/playground.component.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaygroundComponent": () => (/* binding */ PlaygroundComponent)
/* harmony export */ });
/* harmony import */ var _playground_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playground.component.scss */ "./src/components/playground/playground.component.scss");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base.component */ "./src/components/base.component.js");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../timer/timer.component */ "./src/components/timer/timer.component.js");
/* harmony import */ var _info_field_info_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../info-field/info-field.component */ "./src/components/info-field/info-field.component.js");





class PlaygroundComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
  infoBar = null;
  board = null;
  constructor({ className }) {
    super({ className: [className, 'playground'] });

    const steps = new _info_field_info_field_component__WEBPACK_IMPORTED_MODULE_3__.InfoFieldComponent({ labelText: 'steps' });
    const timer = new _timer_timer_component__WEBPACK_IMPORTED_MODULE_2__.TimerComponent({ className: 'minesweeper__timer' });
    this.infoBar = new _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({ className: 'minesweeper__info-bar' });
    this.infoBar.append(timer, steps);

    this.board = new _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({
      className: ['minesweeper__board', 'board'],
    });

    this.append(this.infoBar, this.board);
  }
}


/***/ }),

/***/ "./src/components/svg.component.js":
/*!*****************************************!*\
  !*** ./src/components/svg.component.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVGComponent": () => (/* binding */ SVGComponent)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.component */ "./src/components/base.component.js");
/* harmony import */ var _utils_create_element_from_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/create-element-from-template */ "./src/utils/create-element-from-template.js");



class SVGComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor({ className = 'svg-icon', template }) {
    super({});
    this.node = (0,_utils_create_element_from_template__WEBPACK_IMPORTED_MODULE_1__.createElementFromTemplate)(template);
    this.node.classList.add(className);
  }
}


/***/ }),

/***/ "./src/components/tile/tile.component.js":
/*!***********************************************!*\
  !*** ./src/components/tile/tile.component.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TileComponent": () => (/* binding */ TileComponent)
/* harmony export */ });
/* harmony import */ var _tile_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile.component.scss */ "./src/components/tile/tile.component.scss");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base.component */ "./src/components/base.component.js");
/* harmony import */ var _svg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg.component */ "./src/components/svg.component.js");
/* harmony import */ var _enums_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums/svg-icons */ "./src/enums/svg-icons.js");





const MINE_CHAR = '*';
const COLOR_VARIANT_CLASSES = [
  '',
  'tile__content--color-variant-1st',
  'tile__content--color-variant-2nd',
  'tile__content--color-variant-3rd',
];

class TileComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
  constructor({ cellData, className = [] }) {
    super({ className: [className, 'tile'] });

    const { id, isMarked, isCovered, value } = cellData;
    this.isMarked = isMarked;
    this.isCovered = isCovered;
    this.value = value;
    this.id = id;

    if (this.value === MINE_CHAR) {
      this.content = new _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({
        tagName: 'span',
        className: 'tile__content',
      });
      this.content.append(new _svg_component__WEBPACK_IMPORTED_MODULE_2__.SVGComponent({ template: _enums_svg_icons__WEBPACK_IMPORTED_MODULE_3__.SvgIcons.MINE }));
    } else {
      let colorVariantClass;
      if (this.value === MINE_CHAR) {
        colorVariantClass = '';
      } else {
        const cycle = COLOR_VARIANT_CLASSES.length;
        const index = this.value % cycle;
        colorVariantClass = COLOR_VARIANT_CLASSES[index];
      }
      this.content = new _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({
        tagName: 'span',
        className: [colorVariantClass, 'tile__content'],
        textContent: this.value === 0 ? '' : this.value,
      });
    }
    this.append(this.content);
    if (isCovered) {
      this.cover = new _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({ className: 'tile__cover' });
      this.append(this.cover);
    }
  }

  setLeftClickHandler(handler) {
    this.node.addEventListener('click', handler);
  }
}


/***/ }),

/***/ "./src/components/timer/timer.component.js":
/*!*************************************************!*\
  !*** ./src/components/timer/timer.component.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerComponent": () => (/* binding */ TimerComponent)
/* harmony export */ });
/* harmony import */ var _timer_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.component.scss */ "./src/components/timer/timer.component.scss");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base.component */ "./src/components/base.component.js");
/* harmony import */ var _info_field_info_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../info-field/info-field.component */ "./src/components/info-field/info-field.component.js");




class TimerComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
  constructor({ className }) {
    super({ className: [className, 'timer'] });
    this.minutesComponent = new _info_field_info_field_component__WEBPACK_IMPORTED_MODULE_2__.InfoFieldComponent({
      labelText: 'minutes',
      className: 'timer__minutes',
    });
    this.secondsComponent = new _info_field_info_field_component__WEBPACK_IMPORTED_MODULE_2__.InfoFieldComponent({
      labelText: 'seconds',
      className: 'timer__seconds',
    });
    this.append(this.minutesComponent, this.secondsComponent);
    this.append(
      new _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent({
        tagName: 'p',
        className: 'timer__divider',
        textContent: ':',
      })
    );
  }

  setTime({ minutes, seconds }) {
    this.minutesComponent.setValue(minutes);
    this.secondsComponent.setValue(seconds);
  }
}


/***/ }),

/***/ "./src/controllers/playground.controller.js":
/*!**************************************************!*\
  !*** ./src/controllers/playground.controller.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaygroundController": () => (/* binding */ PlaygroundController)
/* harmony export */ });
/* harmony import */ var _components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/base.component */ "./src/components/base.component.js");
/* harmony import */ var _components_playground_playground_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/playground/playground.component */ "./src/components/playground/playground.component.js");
/* harmony import */ var _components_tile_tile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/tile/tile.component */ "./src/components/tile/tile.component.js");
/* harmony import */ var _models_minesweeper_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/minesweeper.model */ "./src/models/minesweeper.model.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");
/* harmony import */ var _utils_get_matrix_position__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/get-matrix-position */ "./src/utils/get-matrix-position.js");







class PlaygroundController {
  playground = new _components_playground_playground_component__WEBPACK_IMPORTED_MODULE_1__.PlaygroundComponent({ className: 'minesweeper__playground' });
  tileComponents = [];

  constructor(container) {
    this.container = container;
    this.dataChangeHandler = this.dataChangeHandler.bind(this);
    this.model = new _models_minesweeper_model__WEBPACK_IMPORTED_MODULE_3__.MinesweeperModel();
    this.model.setModel();
    this.model.setOnDataChangeHandler(this.dataChangeHandler);
  }

  render() {
    const data = this.model.getData();
    this.tileComponents = data.map((dataRow) => {
      return dataRow.map((cellData) => this.createTileComponent(cellData));
    });

    this.tileComponents.forEach((dataRow) => {
      const line = new _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent({ className: 'minesweeper__tile-row' });
      for (let tileComponent of dataRow) {
        line.append(tileComponent);
      }
      this.playground.board.append(line);
    });

    this.container.append(this.playground);

    window.addEventListener('beforeunload', () => this.model.saveModel());
  }

  dataChangeHandler(newData) {
    this.rerenderTile(newData);
  }

  createTileComponent(cellData) {
    const tileComponent = new _components_tile_tile_component__WEBPACK_IMPORTED_MODULE_2__.TileComponent({ cellData });
    tileComponent.setLeftClickHandler(() => {
      this.uncoverTile(tileComponent);
    });
    return tileComponent;
  }

  rerenderTile(newData) {
    let targetComponent;
    for (let line of this.tileComponents) {
      targetComponent = line.find((component) => component.id === newData.id);
      if (targetComponent) {
        break;
      }
    }

    const { lineIndex, cellIndex } = (0,_utils_get_matrix_position__WEBPACK_IMPORTED_MODULE_5__.getMatrixComponentPosiiton)(this.tileComponents, targetComponent);
    const newTileComponent = this.createTileComponent(newData);
    targetComponent.node.replaceWith(newTileComponent.node);
    targetComponent.destroy();
    targetComponent = null;
    this.tileComponents[lineIndex][cellIndex] = newTileComponent;
  }

  uncoverTile(tileComponent) {
    if (tileComponent.value === 0 && tileComponent.isCovered) {
      const componentPosition = (0,_utils_get_matrix_position__WEBPACK_IMPORTED_MODULE_5__.getMatrixComponentPosiiton)(this.tileComponents, tileComponent);
      const { cellIndex, lineIndex } = componentPosition;
      this.model.updateData({ id: tileComponent.id, isCovered: false });
      const size = this.tileComponents.length;
      _utils_constants__WEBPACK_IMPORTED_MODULE_4__.neighbourLocationMap.forEach((location) => {
        if (
          lineIndex + location[0] >= 0 &&
          lineIndex + location[0] < size &&
          cellIndex + location[1] >= 0 &&
          cellIndex + location[1] < size
        ) {
          const neighbour = this.tileComponents[lineIndex + location[0]][cellIndex + location[1]];
          this.uncoverTile(neighbour);
        }
      });
    } else {
      this.model.updateData({ id: tileComponent.id, isCovered: false });
    }
  }
}


/***/ }),

/***/ "./src/enums/svg-icons.js":
/*!********************************!*\
  !*** ./src/enums/svg-icons.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgIcons": () => (/* binding */ SvgIcons)
/* harmony export */ });
const SvgIcons = {
  DAY: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <g fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd">
    <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 4a6 6 0 1 1 12 0 6 6 0 0 1-12 0ZM12 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1ZM12 20a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1ZM3.513 3.513a1 1 0 0 1 1.414 0l1.42 1.42a1 1 0 0 1-1.414 1.414l-1.42-1.42a1 1 0 0 1 0-1.414ZM17.653 17.653a1 1 0 0 1 1.414 0l1.42 1.42a1 1 0 0 1-1.414 1.414l-1.42-1.42a1 1 0 0 1 0-1.414ZM0 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM20 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM6.347 17.653a1 1 0 0 1 0 1.414l-1.42 1.42a1 1 0 0 1-1.414-1.414l1.42-1.42a1 1 0 0 1 1.414 0ZM20.487 3.513a1 1 0 0 1 0 1.414l-1.42 1.42a1 1 0 1 1-1.414-1.414l1.42-1.42a1 1 0 0 1 1.414 0Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
  </defs>
</svg>
`,
  LIST: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.87868 1.87868C4.44129 1.31607 5.20435 1 6 1H14C14.2652 1 14.5196 1.10536 14.7071 1.29289L20.7071 7.29289C20.8946 7.48043 21 7.73478 21 8V20C21 20.7957 20.6839 21.5587 20.1213 22.1213C19.5587 22.6839 18.7957 23 18 23H6C5.20435 23 4.44129 22.6839 3.87868 22.1213C3.31607 21.5587 3 20.7957 3 20V4C3 3.20435 3.31607 2.44129 3.87868 1.87868ZM6 3C5.73478 3 5.48043 3.10536 5.29289 3.29289C5.10536 3.48043 5 3.73478 5 4V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H18C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20V9H14C13.4477 9 13 8.55228 13 8V3H6ZM15 4.41421L17.5858 7H15V4.41421ZM7 9C7 8.44772 7.44772 8 8 8H10C10.5523 8 11 8.44772 11 9C11 9.55228 10.5523 10 10 10H8C7.44772 10 7 9.55228 7 9ZM7 13C7 12.4477 7.44772 12 8 12H16C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H8C7.44772 14 7 13.5523 7 13ZM7 17C7 16.4477 7.44772 16 8 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H8C7.44772 18 7 17.5523 7 17Z"/>
  </svg>
  `,
  MARK: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M20.707 5.293a1 1 0 0 1 0 1.414l-11 11a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L9 15.586 19.293 5.293a1 1 0 0 1 1.414 0Z" clip-rule="evenodd"/>
</svg>
`,
  MINE: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12 1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1ZM12 17a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1ZM4.223 4.223a1 1 0 0 1 1.414 0l2.83 2.83a1 1 0 0 1-1.414 1.414l-2.83-2.83a1 1 0 0 1 0-1.414ZM15.533 15.533a1 1 0 0 1 1.414 0l2.83 2.83a1 1 0 0 1-1.414 1.414l-2.83-2.83a1 1 0 0 1 0-1.414ZM1 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM17 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM8.467 15.533a1 1 0 0 1 0 1.414l-2.83 2.83a1 1 0 0 1-1.414-1.414l2.83-2.83a1 1 0 0 1 1.414 0ZM19.777 4.223a1 1 0 0 1 0 1.414l-2.83 2.83a1 1 0 1 1-1.414-1.414l2.83-2.83a1 1 0 0 1 1.414 0Z" clip-rule="evenodd"/>
  <path d="M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"/>
  <path fill-rule="evenodd" d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" clip-rule="evenodd"/>
</svg>
`,
  NIGHT: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12.081 2.509a1 1 0 0 1-.067 1.085 6 6 0 0 0 8.392 8.392 1 1 0 0 1 1.59.896A10 10 0 1 1 11.118 2.004a1 1 0 0 1 .963.505Zm-2.765 1.93a8 8 0 1 0 10.245 10.245A7.999 7.999 0 0 1 9.316 4.439Z" clip-rule="evenodd"/>
</svg>
`,
  SETTINGS: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <g fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd">
    <path d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"/>
    <path d="M12 2a1 1 0 0 0-1 1v.174a2.65 2.65 0 0 1-1.606 2.425 1 1 0 0 1-.264.073 2.65 2.65 0 0 1-2.73-.607l-.007-.008-.06-.06a1.003 1.003 0 0 0-1.415 0h-.001a1 1 0 0 0 0 1.415l.068.069a2.65 2.65 0 0 1 .542 2.894 2.65 2.65 0 0 1-2.414 1.705H3a1 1 0 0 0 0 2h.174a2.65 2.65 0 0 1 2.423 1.601 2.65 2.65 0 0 1-.532 2.918l-.008.008-.06.06a1.003 1.003 0 0 0-.217 1.09 1 1 0 0 0 .217.325v.001a.999.999 0 0 0 1.415 0l.069-.068a2.65 2.65 0 0 1 2.894-.543 2.65 2.65 0 0 1 1.705 2.415V21a1 1 0 0 0 2 0V20.826a2.65 2.65 0 0 1 1.601-2.423 2.65 2.65 0 0 1 2.918.532l.008.008.06.06a1.002 1.002 0 0 0 1.415 0h.001a1 1 0 0 0 0-1.416l-.068-.068a2.65 2.65 0 0 1-.532-2.918A2.65 2.65 0 0 1 20.906 13H21a1 1 0 0 0 0-2H20.826a2.65 2.65 0 0 1-2.425-1.606.999.999 0 0 1-.073-.264 2.65 2.65 0 0 1 .607-2.73l.008-.007.06-.06a1.002 1.002 0 0 0 0-1.415v-.001a1 1 0 0 0-1.416 0l-.068.068a2.65 2.65 0 0 1-2.918.532A2.65 2.65 0 0 1 13 3.094V3a1 1 0 0 0-1-1ZM9.879.879A3 3 0 0 1 15 3v.087a.65.65 0 0 0 .394.594l.01.004a.65.65 0 0 0 .714-.127l.055-.055a3 3 0 0 1 4.895 3.27c-.151.365-.372.696-.65.974l-.056.055a.65.65 0 0 0-.127.714c.028.064.05.13.064.2a.65.65 0 0 0 .534.284H21a3 3 0 1 1 0 6h-.087a.65.65 0 0 0-.594.394l-.004.01a.65.65 0 0 0 .127.714l.055.055a3.002 3.002 0 0 1 0 4.245l-.707-.708.707.707a3 3 0 0 1-4.244 0l-.055-.055a.65.65 0 0 0-.714-.127l-.01.004a.649.649 0 0 0-.394.593V21a3 3 0 0 1-6 0v-.076a.65.65 0 0 0-.425-.585.955.955 0 0 1-.059-.024.65.65 0 0 0-.714.127l-.054.055a3.002 3.002 0 1 1-4.245-4.244l.055-.055a.65.65 0 0 0 .127-.714l-.004-.01a.649.649 0 0 0-.594-.394H3a3 3 0 0 1 0-6h.076a.65.65 0 0 0 .585-.425l.024-.059a.65.65 0 0 0-.127-.714l-.055-.054a3 3 0 1 1 4.244-4.245l.055.055a.65.65 0 0 0 .714.127 1 1 0 0 1 .2-.064A.65.65 0 0 0 9 3.167V3A3 3 0 0 1 9.879.879Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
  </defs>
</svg>
`,
  MUTE: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11.433 4.099A1 1 0 0 1 12 5v14a1 1 0 0 1-1.625.78L5.65 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.65l4.725-3.78a1 1 0 0 1 1.058-.121ZM10 7.08l-3.375 2.7A1 1 0 0 1 6 10H3v4h3a1 1 0 0 1 .625.22L10 16.92V7.08ZM23.707 8.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0Z" clip-rule="evenodd"/>
  <path fill-rule="evenodd" d="M16.293 8.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414Z" clip-rule="evenodd"/>
</svg>
`,
  UNMUTE: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11.433 4.099a1 1 0 0 1 .567.9v14a1 1 0 0 1-1.625.782L5.65 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.65l4.725-3.78a1 1 0 0 1 1.058-.121ZM10 7.08l-3.375 2.7A1 1 0 0 1 6 10H3v4h3a1 1 0 0 1 .625.22L10 16.92V7.08ZM18.363 4.223a1 1 0 0 1 1.414 0 11 11 0 0 1 0 15.554 1 1 0 1 1-1.414-1.414 9 9 0 0 0 0-12.726 1 1 0 0 1 0-1.414Zm-3.53 3.53a1 1 0 0 1 1.414 0 6 6 0 0 1 0 8.484 1 1 0 1 1-1.414-1.414 4 4 0 0 0 0-5.656 1 1 0 0 1 0-1.414Z" clip-rule="evenodd"/>
</svg>
`,
};


/***/ }),

/***/ "./src/models/minesweeper.model.js":
/*!*****************************************!*\
  !*** ./src/models/minesweeper.model.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MinesweeperModel": () => (/* binding */ MinesweeperModel)
/* harmony export */ });
/* harmony import */ var _utils_get_random_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/get-random-int */ "./src/utils/get-random-int.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");



const DEFAULT_SIZE = 10;
const MINE_DENSITY_PERCENTAGE = 10;
const MODEL_STORAGE_KEY = 'minesweeperModel';
const MINE_CHAR = '*';

const isLoadSave = false;

class MinesweeperModel {
  cells = [];
  onDataChangeHandler = null;

  setModel() {
    const isHasSave = !!localStorage.getItem(MODEL_STORAGE_KEY);
    if (isHasSave && isLoadSave) {
      this.cells = JSON.parse(localStorage.getItem(MODEL_STORAGE_KEY));
    } else {
      this.cells = this.generateCellData();
    }
  }

  saveModel() {
    localStorage.setItem(MODEL_STORAGE_KEY, JSON.stringify(this.cells));
  }

  getData() {
    return this.cells;
  }

  generateCellData(size = DEFAULT_SIZE) {
    const mineToInsertCount = Math.floor(Math.pow(size, 2) * (MINE_DENSITY_PERCENTAGE / 100));
    const mineMatrix = new Array(size).fill(0).map(() => new Array(size).fill(0));
    let mineCount = 0;
    while (mineCount < mineToInsertCount) {
      const lineIndex = (0,_utils_get_random_int__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(0, size - 1);
      const cellIndex = (0,_utils_get_random_int__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(0, size - 1);
      if (mineMatrix[lineIndex][cellIndex] !== MINE_CHAR) {
        mineMatrix[lineIndex][cellIndex] = MINE_CHAR;
        mineCount += 1;
      }
    }

    let cellCounter = 0;
    const dataMatrix = mineMatrix.map((line, lineIndex) => {
      return line.map((cell, cellIndex) => {
        if (cell === MINE_CHAR) {
          const cellData = { id: cellCounter, isMarked: false, isCovered: true, value: cell };
          cellCounter += 1;
          return cellData;
        }

        let neighboursCount = 0;
        _utils_constants__WEBPACK_IMPORTED_MODULE_1__.neighbourLocationMap.forEach((location) => {
          let neighbour;
          if (
            lineIndex + location[0] >= 0 &&
            lineIndex + location[0] < size &&
            cellIndex + location[1] >= 0 &&
            cellIndex + location[1] < size
          ) {
            neighbour = mineMatrix[lineIndex + location[0]][cellIndex + location[1]];
          }
          neighboursCount += neighbour === MINE_CHAR ? 1 : 0;
        });
        const cellData = { id: cellCounter, isMarked: false, isCovered: true, value: neighboursCount };
        cellCounter += 1;
        return cellData;
      });
    });

    return dataMatrix;
  }

  updateData(data) {
    let targetCell;
    for (let line of this.cells) {
      targetCell = line.find((cell) => cell.id === data.id);
      if (targetCell) {
        break;
      }
    }
    for (let prop in data) {
      targetCell[prop] = data[prop] !== undefined ? data[prop] : targetCell[prop];
    }
    this.onDataChangeHandler(targetCell);
  }

  setOnDataChangeHandler(handler) {
    this.onDataChangeHandler = handler;
  }
}


/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/base.component */ "./src/components/base.component.js");
/* harmony import */ var _components_minesweeper_minesweeper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/minesweeper/minesweeper.component */ "./src/components/minesweeper/minesweeper.component.js");



class HomePage extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super({});
    const pageWrapper = new _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent({ className: 'page-wrapper' });
    const minesweeper = new _components_minesweeper_minesweeper_component__WEBPACK_IMPORTED_MODULE_1__.MinesweeperComponent();
    pageWrapper.append(minesweeper);
    this.append(pageWrapper);
  }
}


/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neighbourLocationMap": () => (/* binding */ neighbourLocationMap)
/* harmony export */ });
/* eslint-disable prettier/prettier */
const neighbourLocationMap = [
  [-1, -1], [-1, +0], [-1, +1],
  [+0, -1], /*    */  [+0, +1],
  [+1, -1], [+1, +0], [+1, +1],
];
/* eslint-enable prettier/prettier */


/***/ }),

/***/ "./src/utils/create-element-from-template.js":
/*!***************************************************!*\
  !*** ./src/utils/create-element-from-template.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElementFromTemplate": () => (/* binding */ createElementFromTemplate)
/* harmony export */ });
function createElementFromTemplate(template) {
  const container = document.createElement('div');
  container.innerHTML = template;
  return container.firstElementChild;
}


/***/ }),

/***/ "./src/utils/get-matrix-position.js":
/*!******************************************!*\
  !*** ./src/utils/get-matrix-position.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMatrixComponentPosiiton": () => (/* binding */ getMatrixComponentPosiiton)
/* harmony export */ });
function getMatrixComponentPosiiton(matrix, component) {
  let lineIndex;
  let cellIndex;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === component) {
        lineIndex = i;
        cellIndex = j;
        break;
      }
    }
  }
  return { lineIndex, cellIndex };
}


/***/ }),

/***/ "./src/utils/get-random-int.js":
/*!*************************************!*\
  !*** ./src/utils/get-random-int.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomInt": () => (/* binding */ getRandomInt)
/* harmony export */ });
function getRandomInt(min, max) {
  return Math.round(min + Math.random() * (max - min));
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_global_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/global-styles.scss */ "./src/assets/styles/global-styles.scss");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");



const home = new _pages_home__WEBPACK_IMPORTED_MODULE_1__.HomePage();
document.body.append(home.getElement());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUNONEM7QUFDSjs7QUFFeEMsaUJBQWlCLGlEQUFRO0FBQ3pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvYXNzZXRzL3N0eWxlcy9nbG9iYWwtc3R5bGVzLnNjc3M/MDg1NCIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24tZXhwYW5kYWJsZS5jb21wb25lbnQuc2Nzcz8xODlkIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2Nzcz8yYzQ0Iiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbC1wYW5lbC9jb250cm9sLXBhbmVsLmNvbXBvbmVudC5zY3NzPzQ5MGQiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvY29tcG9uZW50cy9pbmZvLWZpZWxkL2luZm8tZmllbGQuY29tcG9uZW50LnNjc3M/YTBiNyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9jb21wb25lbnRzL2lucHV0L3JhbmdlLWlucHV0LmNvbXBvbmVudC5zY3NzPzU3M2QiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvY29tcG9uZW50cy9taW5lc3dlZXBlci9taW5lc3dlZXBlci5jb21wb25lbnQuc2Nzcz85ZjFmIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vc3JjL2NvbXBvbmVudHMvcGxheWdyb3VuZC9wbGF5Z3JvdW5kLmNvbXBvbmVudC5zY3NzPzI0ODIiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvY29tcG9uZW50cy90aWxlL3RpbGUuY29tcG9uZW50LnNjc3M/NGNiOCIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9jb21wb25lbnRzL3RpbWVyL3RpbWVyLmNvbXBvbmVudC5zY3NzPzAyZWEiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvY29tcG9uZW50cy9iYXNlLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24tZXhwYW5kYWJsZS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2wtcGFuZWwvY29udHJvbC1wYW5lbC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvY29tcG9uZW50cy9pbmZvLWZpZWxkL2luZm8tZmllbGQuY29tcG9uZW50LmpzIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvcmFuZ2UtaW5wdXQuY29tcG9uZW50LmpzIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vc3JjL2NvbXBvbmVudHMvbGlzdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvY29tcG9uZW50cy9taW5lc3dlZXBlci9taW5lc3dlZXBlci5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvY29tcG9uZW50cy9wbGF5Z3JvdW5kL3BsYXlncm91bmQuY29tcG9uZW50LmpzIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vc3JjL2NvbXBvbmVudHMvc3ZnLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9jb21wb25lbnRzL3RpbGUvdGlsZS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvY29tcG9uZW50cy90aW1lci90aW1lci5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvY29udHJvbGxlcnMvcGxheWdyb3VuZC5jb250cm9sbGVyLmpzIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vc3JjL2VudW1zL3N2Zy1pY29ucy5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9tb2RlbHMvbWluZXN3ZWVwZXIubW9kZWwuanMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvdXRpbHMvY3JlYXRlLWVsZW1lbnQtZnJvbS10ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy91dGlscy9nZXQtbWF0cml4LXBvc2l0aW9uLmpzIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vc3JjL3V0aWxzL2dldC1yYW5kb20taW50LmpzIiwid2VicGFjazovL21pbmVzd2VlcGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21pbmVzd2VlcGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21pbmVzd2VlcGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBjbGFzcyBCYXNlQ29tcG9uZW50IHtcbiAgbm9kZTtcbiAgY29uc3RydWN0b3Ioe1xuICAgIHRhZ05hbWUgPSAnZGl2JyxcbiAgICBjbGFzc05hbWUgPSBbXSxcbiAgICB0ZXh0Q29udGVudCA9ICcnLFxuICAgIHBhcmVudE5vZGUsXG4gIH0pIHtcbiAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgIHRoaXMubm9kZS50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgIHRoaXMuYWRkQ2xhc3MoY2xhc3NOYW1lKTtcbiAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgcGFyZW50Tm9kZS5hcHBlbmQodGhpcy5ub2RlKTtcbiAgICB9XG4gIH1cblxuICBhcHBlbmQoLi4uY29tcG9uZW50cykge1xuICAgIGZvciAobGV0IGNvbXBvbmVudCBvZiBjb21wb25lbnRzKSB7XG4gICAgICB0aGlzLm5vZGUuYXBwZW5kKGNvbXBvbmVudC5nZXRFbGVtZW50KCkpO1xuICAgIH1cbiAgfVxuXG4gIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgIGFkZC5jYWxsKHRoaXMsIGNsYXNzTmFtZSk7XG5cbiAgICBmdW5jdGlvbiBhZGQobmFtZSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkobmFtZSkpIHtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBuYW1lKSB7XG4gICAgICAgICAgYWRkLmNhbGwodGhpcywgaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuYW1lID09PSAnJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChuYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMubm9kZS5yZW1vdmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0ICcuL2J1dHRvbi1leHBhbmRhYmxlLmNvbXBvbmVudC5zY3NzJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSYW5nZUlucHV0Q29tcG9uZW50IH0gZnJvbSAnLi4vaW5wdXQvcmFuZ2UtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFNWR0NvbXBvbmVudCB9IGZyb20gJy4uL3N2Zy5jb21wb25lbnQnO1xuXG5leHBvcnQgY2xhc3MgQnV0dG9uRXhwYW5kYWJsZUNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih7IGljb24sIGNsYXNzTmFtZSA9IFtdLCBtaW4sIG1heCwgdmFsdWUgfSkge1xuICAgIHN1cGVyKHsgY2xhc3NOYW1lOiBbY2xhc3NOYW1lLCAnYnV0dG9uLWV4cGFuZGFibGUnLCAnYnV0dG9uJ10gfSk7XG5cbiAgICBpZiAoaWNvbikge1xuICAgICAgdGhpcy5hcHBlbmQobmV3IFNWR0NvbXBvbmVudChpY29uKSk7XG4gICAgfVxuXG4gICAgdGhpcy5hcHBlbmQoXG4gICAgICBuZXcgUmFuZ2VJbnB1dENvbXBvbmVudCh7XG4gICAgICAgIG1pbjogbWluLFxuICAgICAgICBtYXg6IG1heCxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgJy4vYnV0dG9uLmNvbXBvbmVudC5zY3NzJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoeyB0ZXh0Q29udGVudCwgYTExeUxhYmVsLCBzdmcsIGNsYXNzTmFtZSA9IFtdIH0pIHtcbiAgICBzdXBlcih7IHRhZ05hbWU6ICdidXR0b24nLCBjbGFzc05hbWU6IFtjbGFzc05hbWUsICdidXR0b24nXSwgdGV4dENvbnRlbnQgfSk7XG5cbiAgICBpZiAoc3ZnKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzdmcpKSB7XG4gICAgICAgIHN2Zy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgdGhpcy5hcHBlbmQoaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hcHBlbmQoc3ZnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYTExeUxhYmVsKSB7XG4gICAgICBjb25zdCBsYWJlbCA9IG5ldyBCYXNlQ29tcG9uZW50KHtcbiAgICAgICAgdGFnTmFtZTogJ3NwYW4nLFxuICAgICAgICBjbGFzc05hbWU6ICd2aXN1YWxseS1oaWRkZW4nLFxuICAgICAgICB0ZXh0Q29udGVudDogYTExeUxhYmVsLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmFwcGVuZChsYWJlbCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgJy4vY29udHJvbC1wYW5lbC5jb21wb25lbnQuc2Nzcyc7XG5cbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdXR0b25FeHBhbmRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbi1leHBhbmRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi4vbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU1ZHQ29tcG9uZW50IH0gZnJvbSAnLi4vc3ZnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdmdJY29ucyB9IGZyb20gJy4uLy4uL2VudW1zL3N2Zy1pY29ucyc7XG5cbmNvbnN0IFJBTkdFX01JTl9WQUxVRSA9IDE7XG5jb25zdCBSQU5HRV9NQVhfVkFMVUUgPSAzO1xuY29uc3QgUkFOR0VfSU5JVF9WQUxVRSA9IDE7XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoeyBjbGFzc05hbWUgfSkge1xuICAgIHN1cGVyKHsgY2xhc3NOYW1lOiBbY2xhc3NOYW1lLCAnY29udHJvbC1wYW5lbCddIH0pO1xuXG4gICAgdGhpcy5uZXdHYW1lQnV0dG9uID0gbmV3IEJ1dHRvbkNvbXBvbmVudCh7XG4gICAgICBjbGFzc05hbWU6ICdtaW5lc3dlZXBlcl9fbmV3LWdhbWUtYnV0dG9uJyxcbiAgICAgIHRleHRDb250ZW50OiAnbmV3IGdhbWUnLFxuICAgIH0pO1xuXG4gICAgdGhpcy5zY29yZUJ1dHRvbiA9IG5ldyBCdXR0b25Db21wb25lbnQoe1xuICAgICAgY2xhc3NOYW1lOiAnYnV0dG9uLS1pY29uJyxcbiAgICAgIGExMXlMYWJlbDogJ3Njb3JlJyxcbiAgICB9KTtcbiAgICB0aGlzLnNjb3JlQnV0dG9uLmFwcGVuZChuZXcgU1ZHQ29tcG9uZW50KHsgdGVtcGxhdGU6IFN2Z0ljb25zLkxJU1QgfSkpO1xuXG4gICAgdGhpcy50aGVtZUJ1dHRvbiA9IG5ldyBCdXR0b25Db21wb25lbnQoe1xuICAgICAgY2xhc3NOYW1lOiAnYnV0dG9uLS1pY29uJyxcbiAgICAgIGExMXlMYWJlbDogJ3RoZW1lJyxcbiAgICB9KTtcbiAgICB0aGlzLnRoZW1lQnV0dG9uLmFwcGVuZChcbiAgICAgIG5ldyBTVkdDb21wb25lbnQoeyBjbGFzc05hbWU6ICdkYXknLCB0ZW1wbGF0ZTogU3ZnSWNvbnMuREFZIH0pLFxuICAgICAgbmV3IFNWR0NvbXBvbmVudCh7IGNsYXNzTmFtZTogJ25pZ2h0JywgdGVtcGxhdGU6IFN2Z0ljb25zLk5JR0hUIH0pXG4gICAgKTtcblxuICAgIHRoaXMuc291bmRCdXR0b24gPSBuZXcgQnV0dG9uQ29tcG9uZW50KHtcbiAgICAgIGNsYXNzTmFtZTogJ2J1dHRvbi0taWNvbicsXG4gICAgICBhMTF5TGFiZWw6ICdzb3VuZCcsXG4gICAgfSk7XG4gICAgdGhpcy5zb3VuZEJ1dHRvbi5hcHBlbmQoXG4gICAgICBuZXcgU1ZHQ29tcG9uZW50KHsgY2xhc3NOYW1lOiAndW5tdXRlJywgdGVtcGxhdGU6IFN2Z0ljb25zLlVOTVVURSB9KSxcbiAgICAgIG5ldyBTVkdDb21wb25lbnQoeyBjbGFzc05hbWU6ICdtdXRlJywgdGVtcGxhdGU6IFN2Z0ljb25zLk1VVEUgfSlcbiAgICApO1xuXG4gICAgdGhpcy5leHBTZXR0aW5nQnV0dG9uID0gbmV3IEJ1dHRvbkV4cGFuZGFibGVDb21wb25lbnQoe1xuICAgICAgaWNvbjogeyB0ZW1wbGF0ZTogU3ZnSWNvbnMuU0VUVElOR1MgfSxcbiAgICAgIG1pbjogUkFOR0VfTUlOX1ZBTFVFLFxuICAgICAgbWF4OiBSQU5HRV9NQVhfVkFMVUUsXG4gICAgICB2YWx1ZTogUkFOR0VfSU5JVF9WQUxVRSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGJ1dHRvbkdyb3VwID0gbmV3IEJhc2VDb21wb25lbnQoe1xuICAgICAgY2xhc3NOYW1lOiAnbWluZXN3ZWVwZXJfX2J1dHRvbi1ncm91cCcsXG4gICAgfSk7XG4gICAgYnV0dG9uR3JvdXAuYXBwZW5kKHRoaXMubmV3R2FtZUJ1dHRvbiwgdGhpcy5leHBTZXR0aW5nQnV0dG9uKTtcbiAgICBjb25zdCBidXR0b25MaXN0ID0gbmV3IExpc3RDb21wb25lbnQoe1xuICAgICAgdGFnTmFtZTogJ3VsJyxcbiAgICAgIGNsYXNzTmFtZTogJ21pbmVzd2VlcGVyX19idXR0b24tbGlzdCcsXG4gICAgICBpdGVtczogW3RoaXMuc2NvcmVCdXR0b24sIHRoaXMudGhlbWVCdXR0b24sIHRoaXMuc291bmRCdXR0b25dLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hcHBlbmQoYnV0dG9uR3JvdXAsIGJ1dHRvbkxpc3QpO1xuICB9XG59XG4iLCJpbXBvcnQgJy4vaW5mby1maWVsZC5jb21wb25lbnQuc2Nzcyc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS5jb21wb25lbnQnO1xuXG5leHBvcnQgY2xhc3MgSW5mb0ZpZWxkQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHsgbGFiZWxUZXh0LCBjbGFzc05hbWUgPSBbXSB9KSB7XG4gICAgc3VwZXIoeyB0YWdOYW1lOiAncCcsIGNsYXNzTmFtZTogW2NsYXNzTmFtZSwgJ2luZm8tZmllbGQnXSB9KTtcbiAgICBjb25zdCBsYWJlbENvbXBvbmVudCA9IG5ldyBCYXNlQ29tcG9uZW50KHtcbiAgICAgIHRhZ05hbWU6ICdzcGFuJyxcbiAgICAgIHRleHRDb250ZW50OiBsYWJlbFRleHQsXG4gICAgICBjbGFzc05hbWU6ICdpbmZvLWZpZWxkX19sYWJlbCcsXG4gICAgfSk7XG4gICAgdGhpcy52YWx1ZUNvbXBvbmVudCA9IG5ldyBCYXNlQ29tcG9uZW50KHtcbiAgICAgIHRhZ05hbWU6ICdvdXRwdXQnLFxuICAgICAgdGV4dENvbnRlbnQ6ICcwMCcsXG4gICAgICBjbGFzc05hbWU6ICdpbmZvLWZpZWxkX192YWx1ZScsXG4gICAgfSk7XG4gICAgdGhpcy5hcHBlbmQobGFiZWxDb21wb25lbnQsIHRoaXMudmFsdWVDb21wb25lbnQpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlRWxlbWVudCA9IHZhbHVlO1xuICB9XG59XG4iLCJpbXBvcnQgJy4vcmFuZ2UtaW5wdXQuY29tcG9uZW50LnNjc3MnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UuY29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIFJhbmdlSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIGNsYXNzTmFtZSA9IFtdLFxuICAgIG1pbiA9ICcwJyxcbiAgICBtYXggPSAnMTAnLFxuICAgIHZhbHVlID0gJzAnLFxuICAgIHN0ZXAgPSAnMScsXG4gIH0pIHtcbiAgICBzdXBlcih7IHRhZ05hbWU6ICdpbnB1dCcsIGNsYXNzTmFtZTogW2NsYXNzTmFtZSwgJ3JhbmdlLXNsaWRlciddIH0pO1xuICAgIHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFuZ2UnKTtcbiAgICB0aGlzLm5vZGUuc2V0QXR0cmlidXRlKCdtaW4nLCBtaW4udG9TdHJpbmcoKSk7XG4gICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgnbWF4JywgbWF4LnRvU3RyaW5nKCkpO1xuICAgIHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUudG9TdHJpbmcoKSk7XG4gICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgnc3RlcCcsIHN0ZXAudG9TdHJpbmcoKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UuY29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoeyB0YWdOYW1lLCBjbGFzc05hbWUsIGl0ZW1zIH0pIHtcbiAgICBzdXBlcih7IHRhZ05hbWUsIGNsYXNzTmFtZSB9KTtcblxuICAgIGlmICghaXRlbXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaXRlbXMgaGF2ZSBub3QgYmVlbiBhZGRlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgQmFzZUNvbXBvbmVudCkge1xuICAgICAgICAgIGNvbnN0IGxpc3RJdGVtQ29tcG9uZW50ID0gbmV3IEJhc2VDb21wb25lbnQoeyB0YWdOYW1lOiAnbGknIH0pO1xuICAgICAgICAgIGxpc3RJdGVtQ29tcG9uZW50LmFwcGVuZChpdGVtKTtcbiAgICAgICAgICB0aGlzLmFwcGVuZChsaXN0SXRlbUNvbXBvbmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpdGVtIGlzIG5vdCBhIGNvbXBvbmVudCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgJy4vbWluZXN3ZWVwZXIuY29tcG9uZW50LnNjc3MnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xQYW5lbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wtcGFuZWwvY29udHJvbC1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGxheWdyb3VuZENvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9jb250cm9sbGVycy9wbGF5Z3JvdW5kLmNvbnRyb2xsZXInO1xuXG5leHBvcnQgY2xhc3MgTWluZXN3ZWVwZXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgcGxheWdyb3VuZENvbnRyb2xsZXIgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHsgY2xhc3NOYW1lOiBbJ21pbmVzd2VlcGVyJ10gfSk7XG4gICAgY29uc3QgY29udHJvbFBhbmVsID0gbmV3IENvbnRyb2xQYW5lbENvbXBvbmVudCh7XG4gICAgICBjbGFzc05hbWU6ICdtaW5lc3dlZXBlcl9fY29udHJvbC1wYW5lbCcsXG4gICAgfSk7XG5cbiAgICB0aGlzLmFwcGVuZChjb250cm9sUGFuZWwpO1xuXG4gICAgdGhpcy5wbGF5Z3JvdW5kQ29udHJvbGxlciA9IG5ldyBQbGF5Z3JvdW5kQ29udHJvbGxlcih0aGlzKTtcbiAgICB0aGlzLnBsYXlncm91bmRDb250cm9sbGVyLnJlbmRlcigpO1xuICB9XG59XG4iLCJpbXBvcnQgJy4vcGxheWdyb3VuZC5jb21wb25lbnQuc2Nzcyc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGltZXJDb21wb25lbnQgfSBmcm9tICcuLi90aW1lci90aW1lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5mb0ZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vaW5mby1maWVsZC9pbmZvLWZpZWxkLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjbGFzcyBQbGF5Z3JvdW5kQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGluZm9CYXIgPSBudWxsO1xuICBib2FyZCA9IG51bGw7XG4gIGNvbnN0cnVjdG9yKHsgY2xhc3NOYW1lIH0pIHtcbiAgICBzdXBlcih7IGNsYXNzTmFtZTogW2NsYXNzTmFtZSwgJ3BsYXlncm91bmQnXSB9KTtcblxuICAgIGNvbnN0IHN0ZXBzID0gbmV3IEluZm9GaWVsZENvbXBvbmVudCh7IGxhYmVsVGV4dDogJ3N0ZXBzJyB9KTtcbiAgICBjb25zdCB0aW1lciA9IG5ldyBUaW1lckNvbXBvbmVudCh7IGNsYXNzTmFtZTogJ21pbmVzd2VlcGVyX190aW1lcicgfSk7XG4gICAgdGhpcy5pbmZvQmFyID0gbmV3IEJhc2VDb21wb25lbnQoeyBjbGFzc05hbWU6ICdtaW5lc3dlZXBlcl9faW5mby1iYXInIH0pO1xuICAgIHRoaXMuaW5mb0Jhci5hcHBlbmQodGltZXIsIHN0ZXBzKTtcblxuICAgIHRoaXMuYm9hcmQgPSBuZXcgQmFzZUNvbXBvbmVudCh7XG4gICAgICBjbGFzc05hbWU6IFsnbWluZXN3ZWVwZXJfX2JvYXJkJywgJ2JvYXJkJ10sXG4gICAgfSk7XG5cbiAgICB0aGlzLmFwcGVuZCh0aGlzLmluZm9CYXIsIHRoaXMuYm9hcmQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50RnJvbVRlbXBsYXRlIH0gZnJvbSAnLi4vdXRpbHMvY3JlYXRlLWVsZW1lbnQtZnJvbS10ZW1wbGF0ZSc7XG5cbmV4cG9ydCBjbGFzcyBTVkdDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoeyBjbGFzc05hbWUgPSAnc3ZnLWljb24nLCB0ZW1wbGF0ZSB9KSB7XG4gICAgc3VwZXIoe30pO1xuICAgIHRoaXMubm9kZSA9IGNyZWF0ZUVsZW1lbnRGcm9tVGVtcGxhdGUodGVtcGxhdGUpO1xuICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH1cbn1cbiIsImltcG9ydCAnLi90aWxlLmNvbXBvbmVudC5zY3NzJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTVkdDb21wb25lbnQgfSBmcm9tICcuLi9zdmcuY29tcG9uZW50JztcbmltcG9ydCB7IFN2Z0ljb25zIH0gZnJvbSAnLi4vLi4vZW51bXMvc3ZnLWljb25zJztcblxuY29uc3QgTUlORV9DSEFSID0gJyonO1xuY29uc3QgQ09MT1JfVkFSSUFOVF9DTEFTU0VTID0gW1xuICAnJyxcbiAgJ3RpbGVfX2NvbnRlbnQtLWNvbG9yLXZhcmlhbnQtMXN0JyxcbiAgJ3RpbGVfX2NvbnRlbnQtLWNvbG9yLXZhcmlhbnQtMm5kJyxcbiAgJ3RpbGVfX2NvbnRlbnQtLWNvbG9yLXZhcmlhbnQtM3JkJyxcbl07XG5cbmV4cG9ydCBjbGFzcyBUaWxlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHsgY2VsbERhdGEsIGNsYXNzTmFtZSA9IFtdIH0pIHtcbiAgICBzdXBlcih7IGNsYXNzTmFtZTogW2NsYXNzTmFtZSwgJ3RpbGUnXSB9KTtcblxuICAgIGNvbnN0IHsgaWQsIGlzTWFya2VkLCBpc0NvdmVyZWQsIHZhbHVlIH0gPSBjZWxsRGF0YTtcbiAgICB0aGlzLmlzTWFya2VkID0gaXNNYXJrZWQ7XG4gICAgdGhpcy5pc0NvdmVyZWQgPSBpc0NvdmVyZWQ7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuaWQgPSBpZDtcblxuICAgIGlmICh0aGlzLnZhbHVlID09PSBNSU5FX0NIQVIpIHtcbiAgICAgIHRoaXMuY29udGVudCA9IG5ldyBCYXNlQ29tcG9uZW50KHtcbiAgICAgICAgdGFnTmFtZTogJ3NwYW4nLFxuICAgICAgICBjbGFzc05hbWU6ICd0aWxlX19jb250ZW50JyxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jb250ZW50LmFwcGVuZChuZXcgU1ZHQ29tcG9uZW50KHsgdGVtcGxhdGU6IFN2Z0ljb25zLk1JTkUgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY29sb3JWYXJpYW50Q2xhc3M7XG4gICAgICBpZiAodGhpcy52YWx1ZSA9PT0gTUlORV9DSEFSKSB7XG4gICAgICAgIGNvbG9yVmFyaWFudENsYXNzID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjeWNsZSA9IENPTE9SX1ZBUklBTlRfQ0xBU1NFUy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy52YWx1ZSAlIGN5Y2xlO1xuICAgICAgICBjb2xvclZhcmlhbnRDbGFzcyA9IENPTE9SX1ZBUklBTlRfQ0xBU1NFU1tpbmRleF07XG4gICAgICB9XG4gICAgICB0aGlzLmNvbnRlbnQgPSBuZXcgQmFzZUNvbXBvbmVudCh7XG4gICAgICAgIHRhZ05hbWU6ICdzcGFuJyxcbiAgICAgICAgY2xhc3NOYW1lOiBbY29sb3JWYXJpYW50Q2xhc3MsICd0aWxlX19jb250ZW50J10sXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnZhbHVlID09PSAwID8gJycgOiB0aGlzLnZhbHVlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuYXBwZW5kKHRoaXMuY29udGVudCk7XG4gICAgaWYgKGlzQ292ZXJlZCkge1xuICAgICAgdGhpcy5jb3ZlciA9IG5ldyBCYXNlQ29tcG9uZW50KHsgY2xhc3NOYW1lOiAndGlsZV9fY292ZXInIH0pO1xuICAgICAgdGhpcy5hcHBlbmQodGhpcy5jb3Zlcik7XG4gICAgfVxuICB9XG5cbiAgc2V0TGVmdENsaWNrSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgdGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcik7XG4gIH1cbn1cbiIsImltcG9ydCAnLi90aW1lci5jb21wb25lbnQuc2Nzcyc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5mb0ZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vaW5mby1maWVsZC9pbmZvLWZpZWxkLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjbGFzcyBUaW1lckNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih7IGNsYXNzTmFtZSB9KSB7XG4gICAgc3VwZXIoeyBjbGFzc05hbWU6IFtjbGFzc05hbWUsICd0aW1lciddIH0pO1xuICAgIHRoaXMubWludXRlc0NvbXBvbmVudCA9IG5ldyBJbmZvRmllbGRDb21wb25lbnQoe1xuICAgICAgbGFiZWxUZXh0OiAnbWludXRlcycsXG4gICAgICBjbGFzc05hbWU6ICd0aW1lcl9fbWludXRlcycsXG4gICAgfSk7XG4gICAgdGhpcy5zZWNvbmRzQ29tcG9uZW50ID0gbmV3IEluZm9GaWVsZENvbXBvbmVudCh7XG4gICAgICBsYWJlbFRleHQ6ICdzZWNvbmRzJyxcbiAgICAgIGNsYXNzTmFtZTogJ3RpbWVyX19zZWNvbmRzJyxcbiAgICB9KTtcbiAgICB0aGlzLmFwcGVuZCh0aGlzLm1pbnV0ZXNDb21wb25lbnQsIHRoaXMuc2Vjb25kc0NvbXBvbmVudCk7XG4gICAgdGhpcy5hcHBlbmQoXG4gICAgICBuZXcgQmFzZUNvbXBvbmVudCh7XG4gICAgICAgIHRhZ05hbWU6ICdwJyxcbiAgICAgICAgY2xhc3NOYW1lOiAndGltZXJfX2RpdmlkZXInLFxuICAgICAgICB0ZXh0Q29udGVudDogJzonLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgc2V0VGltZSh7IG1pbnV0ZXMsIHNlY29uZHMgfSkge1xuICAgIHRoaXMubWludXRlc0NvbXBvbmVudC5zZXRWYWx1ZShtaW51dGVzKTtcbiAgICB0aGlzLnNlY29uZHNDb21wb25lbnQuc2V0VmFsdWUoc2Vjb25kcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2Jhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IFBsYXlncm91bmRDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3BsYXlncm91bmQvcGxheWdyb3VuZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGlsZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdGlsZS90aWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNaW5lc3dlZXBlck1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL21pbmVzd2VlcGVyLm1vZGVsJztcbmltcG9ydCB7IG5laWdoYm91ckxvY2F0aW9uTWFwIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IGdldE1hdHJpeENvbXBvbmVudFBvc2lpdG9uIH0gZnJvbSAnLi4vdXRpbHMvZ2V0LW1hdHJpeC1wb3NpdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBQbGF5Z3JvdW5kQ29udHJvbGxlciB7XG4gIHBsYXlncm91bmQgPSBuZXcgUGxheWdyb3VuZENvbXBvbmVudCh7IGNsYXNzTmFtZTogJ21pbmVzd2VlcGVyX19wbGF5Z3JvdW5kJyB9KTtcbiAgdGlsZUNvbXBvbmVudHMgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLmRhdGFDaGFuZ2VIYW5kbGVyID0gdGhpcy5kYXRhQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW9kZWwgPSBuZXcgTWluZXN3ZWVwZXJNb2RlbCgpO1xuICAgIHRoaXMubW9kZWwuc2V0TW9kZWwoKTtcbiAgICB0aGlzLm1vZGVsLnNldE9uRGF0YUNoYW5nZUhhbmRsZXIodGhpcy5kYXRhQ2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMubW9kZWwuZ2V0RGF0YSgpO1xuICAgIHRoaXMudGlsZUNvbXBvbmVudHMgPSBkYXRhLm1hcCgoZGF0YVJvdykgPT4ge1xuICAgICAgcmV0dXJuIGRhdGFSb3cubWFwKChjZWxsRGF0YSkgPT4gdGhpcy5jcmVhdGVUaWxlQ29tcG9uZW50KGNlbGxEYXRhKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnRpbGVDb21wb25lbnRzLmZvckVhY2goKGRhdGFSb3cpID0+IHtcbiAgICAgIGNvbnN0IGxpbmUgPSBuZXcgQmFzZUNvbXBvbmVudCh7IGNsYXNzTmFtZTogJ21pbmVzd2VlcGVyX190aWxlLXJvdycgfSk7XG4gICAgICBmb3IgKGxldCB0aWxlQ29tcG9uZW50IG9mIGRhdGFSb3cpIHtcbiAgICAgICAgbGluZS5hcHBlbmQodGlsZUNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLnBsYXlncm91bmQuYm9hcmQuYXBwZW5kKGxpbmUpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMucGxheWdyb3VuZCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKCkgPT4gdGhpcy5tb2RlbC5zYXZlTW9kZWwoKSk7XG4gIH1cblxuICBkYXRhQ2hhbmdlSGFuZGxlcihuZXdEYXRhKSB7XG4gICAgdGhpcy5yZXJlbmRlclRpbGUobmV3RGF0YSk7XG4gIH1cblxuICBjcmVhdGVUaWxlQ29tcG9uZW50KGNlbGxEYXRhKSB7XG4gICAgY29uc3QgdGlsZUNvbXBvbmVudCA9IG5ldyBUaWxlQ29tcG9uZW50KHsgY2VsbERhdGEgfSk7XG4gICAgdGlsZUNvbXBvbmVudC5zZXRMZWZ0Q2xpY2tIYW5kbGVyKCgpID0+IHtcbiAgICAgIHRoaXMudW5jb3ZlclRpbGUodGlsZUNvbXBvbmVudCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRpbGVDb21wb25lbnQ7XG4gIH1cblxuICByZXJlbmRlclRpbGUobmV3RGF0YSkge1xuICAgIGxldCB0YXJnZXRDb21wb25lbnQ7XG4gICAgZm9yIChsZXQgbGluZSBvZiB0aGlzLnRpbGVDb21wb25lbnRzKSB7XG4gICAgICB0YXJnZXRDb21wb25lbnQgPSBsaW5lLmZpbmQoKGNvbXBvbmVudCkgPT4gY29tcG9uZW50LmlkID09PSBuZXdEYXRhLmlkKTtcbiAgICAgIGlmICh0YXJnZXRDb21wb25lbnQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgeyBsaW5lSW5kZXgsIGNlbGxJbmRleCB9ID0gZ2V0TWF0cml4Q29tcG9uZW50UG9zaWl0b24odGhpcy50aWxlQ29tcG9uZW50cywgdGFyZ2V0Q29tcG9uZW50KTtcbiAgICBjb25zdCBuZXdUaWxlQ29tcG9uZW50ID0gdGhpcy5jcmVhdGVUaWxlQ29tcG9uZW50KG5ld0RhdGEpO1xuICAgIHRhcmdldENvbXBvbmVudC5ub2RlLnJlcGxhY2VXaXRoKG5ld1RpbGVDb21wb25lbnQubm9kZSk7XG4gICAgdGFyZ2V0Q29tcG9uZW50LmRlc3Ryb3koKTtcbiAgICB0YXJnZXRDb21wb25lbnQgPSBudWxsO1xuICAgIHRoaXMudGlsZUNvbXBvbmVudHNbbGluZUluZGV4XVtjZWxsSW5kZXhdID0gbmV3VGlsZUNvbXBvbmVudDtcbiAgfVxuXG4gIHVuY292ZXJUaWxlKHRpbGVDb21wb25lbnQpIHtcbiAgICBpZiAodGlsZUNvbXBvbmVudC52YWx1ZSA9PT0gMCAmJiB0aWxlQ29tcG9uZW50LmlzQ292ZXJlZCkge1xuICAgICAgY29uc3QgY29tcG9uZW50UG9zaXRpb24gPSBnZXRNYXRyaXhDb21wb25lbnRQb3NpaXRvbih0aGlzLnRpbGVDb21wb25lbnRzLCB0aWxlQ29tcG9uZW50KTtcbiAgICAgIGNvbnN0IHsgY2VsbEluZGV4LCBsaW5lSW5kZXggfSA9IGNvbXBvbmVudFBvc2l0aW9uO1xuICAgICAgdGhpcy5tb2RlbC51cGRhdGVEYXRhKHsgaWQ6IHRpbGVDb21wb25lbnQuaWQsIGlzQ292ZXJlZDogZmFsc2UgfSk7XG4gICAgICBjb25zdCBzaXplID0gdGhpcy50aWxlQ29tcG9uZW50cy5sZW5ndGg7XG4gICAgICBuZWlnaGJvdXJMb2NhdGlvbk1hcC5mb3JFYWNoKChsb2NhdGlvbikgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgbGluZUluZGV4ICsgbG9jYXRpb25bMF0gPj0gMCAmJlxuICAgICAgICAgIGxpbmVJbmRleCArIGxvY2F0aW9uWzBdIDwgc2l6ZSAmJlxuICAgICAgICAgIGNlbGxJbmRleCArIGxvY2F0aW9uWzFdID49IDAgJiZcbiAgICAgICAgICBjZWxsSW5kZXggKyBsb2NhdGlvblsxXSA8IHNpemVcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgbmVpZ2hib3VyID0gdGhpcy50aWxlQ29tcG9uZW50c1tsaW5lSW5kZXggKyBsb2NhdGlvblswXV1bY2VsbEluZGV4ICsgbG9jYXRpb25bMV1dO1xuICAgICAgICAgIHRoaXMudW5jb3ZlclRpbGUobmVpZ2hib3VyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW9kZWwudXBkYXRlRGF0YSh7IGlkOiB0aWxlQ29tcG9uZW50LmlkLCBpc0NvdmVyZWQ6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IFN2Z0ljb25zID0ge1xuICBEQVk6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgPGcgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcGF0aD1cInVybCgjYSlcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgPHBhdGggZD1cIk0xMiA4YTQgNCAwIDEgMCAwIDggNCA0IDAgMCAwIDAtOFptLTYgNGE2IDYgMCAxIDEgMTIgMCA2IDYgMCAwIDEtMTIgMFpNMTIgMGExIDEgMCAwIDEgMSAxdjJhMSAxIDAgMSAxLTIgMFYxYTEgMSAwIDAgMSAxLTFaTTEyIDIwYTEgMSAwIDAgMSAxIDF2MmExIDEgMCAxIDEtMiAwdi0yYTEgMSAwIDAgMSAxLTFaTTMuNTEzIDMuNTEzYTEgMSAwIDAgMSAxLjQxNCAwbDEuNDIgMS40MmExIDEgMCAwIDEtMS40MTQgMS40MTRsLTEuNDItMS40MmExIDEgMCAwIDEgMC0xLjQxNFpNMTcuNjUzIDE3LjY1M2ExIDEgMCAwIDEgMS40MTQgMGwxLjQyIDEuNDJhMSAxIDAgMCAxLTEuNDE0IDEuNDE0bC0xLjQyLTEuNDJhMSAxIDAgMCAxIDAtMS40MTRaTTAgMTJhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDEgMSAwIDJIMWExIDEgMCAwIDEtMS0xWk0yMCAxMmExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMSAxIDAgMmgtMmExIDEgMCAwIDEtMS0xWk02LjM0NyAxNy42NTNhMSAxIDAgMCAxIDAgMS40MTRsLTEuNDIgMS40MmExIDEgMCAwIDEtMS40MTQtMS40MTRsMS40Mi0xLjQyYTEgMSAwIDAgMSAxLjQxNCAwWk0yMC40ODcgMy41MTNhMSAxIDAgMCAxIDAgMS40MTRsLTEuNDIgMS40MmExIDEgMCAxIDEtMS40MTQtMS40MTRsMS40Mi0xLjQyYTEgMSAwIDAgMSAxLjQxNCAwWlwiLz5cbiAgPC9nPlxuICA8ZGVmcz5cbiAgICA8Y2xpcFBhdGggaWQ9XCJhXCI+XG4gICAgICA8cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNMCAwaDI0djI0SDB6XCIvPlxuICAgIDwvY2xpcFBhdGg+XG4gIDwvZGVmcz5cbjwvc3ZnPlxuYCxcbiAgTElTVDogYDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMy44Nzg2OCAxLjg3ODY4QzQuNDQxMjkgMS4zMTYwNyA1LjIwNDM1IDEgNiAxSDE0QzE0LjI2NTIgMSAxNC41MTk2IDEuMTA1MzYgMTQuNzA3MSAxLjI5Mjg5TDIwLjcwNzEgNy4yOTI4OUMyMC44OTQ2IDcuNDgwNDMgMjEgNy43MzQ3OCAyMSA4VjIwQzIxIDIwLjc5NTcgMjAuNjgzOSAyMS41NTg3IDIwLjEyMTMgMjIuMTIxM0MxOS41NTg3IDIyLjY4MzkgMTguNzk1NyAyMyAxOCAyM0g2QzUuMjA0MzUgMjMgNC40NDEyOSAyMi42ODM5IDMuODc4NjggMjIuMTIxM0MzLjMxNjA3IDIxLjU1ODcgMyAyMC43OTU3IDMgMjBWNEMzIDMuMjA0MzUgMy4zMTYwNyAyLjQ0MTI5IDMuODc4NjggMS44Nzg2OFpNNiAzQzUuNzM0NzggMyA1LjQ4MDQzIDMuMTA1MzYgNS4yOTI4OSAzLjI5Mjg5QzUuMTA1MzYgMy40ODA0MyA1IDMuNzM0NzggNSA0VjIwQzUgMjAuMjY1MiA1LjEwNTM2IDIwLjUxOTYgNS4yOTI4OSAyMC43MDcxQzUuNDgwNDMgMjAuODk0NiA1LjczNDc4IDIxIDYgMjFIMThDMTguMjY1MiAyMSAxOC41MTk2IDIwLjg5NDYgMTguNzA3MSAyMC43MDcxQzE4Ljg5NDYgMjAuNTE5NiAxOSAyMC4yNjUyIDE5IDIwVjlIMTRDMTMuNDQ3NyA5IDEzIDguNTUyMjggMTMgOFYzSDZaTTE1IDQuNDE0MjFMMTcuNTg1OCA3SDE1VjQuNDE0MjFaTTcgOUM3IDguNDQ3NzIgNy40NDc3MiA4IDggOEgxMEMxMC41NTIzIDggMTEgOC40NDc3MiAxMSA5QzExIDkuNTUyMjggMTAuNTUyMyAxMCAxMCAxMEg4QzcuNDQ3NzIgMTAgNyA5LjU1MjI4IDcgOVpNNyAxM0M3IDEyLjQ0NzcgNy40NDc3MiAxMiA4IDEySDE2QzE2LjU1MjMgMTIgMTcgMTIuNDQ3NyAxNyAxM0MxNyAxMy41NTIzIDE2LjU1MjMgMTQgMTYgMTRIOEM3LjQ0NzcyIDE0IDcgMTMuNTUyMyA3IDEzWk03IDE3QzcgMTYuNDQ3NyA3LjQ0NzcyIDE2IDggMTZIMTZDMTYuNTUyMyAxNiAxNyAxNi40NDc3IDE3IDE3QzE3IDE3LjU1MjMgMTYuNTUyMyAxOCAxNiAxOEg4QzcuNDQ3NzIgMTggNyAxNy41NTIzIDcgMTdaXCIvPlxuICA8L3N2Zz5cbiAgYCxcbiAgTUFSSzogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0yMC43MDcgNS4yOTNhMSAxIDAgMCAxIDAgMS40MTRsLTExIDExYTEgMSAwIDAgMS0xLjQxNCAwbC01LTVhMSAxIDAgMSAxIDEuNDE0LTEuNDE0TDkgMTUuNTg2IDE5LjI5MyA1LjI5M2ExIDEgMCAwIDEgMS40MTQgMFpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPlxuPC9zdmc+XG5gLFxuICBNSU5FOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEyIDFhMSAxIDAgMCAxIDEgMXY0YTEgMSAwIDEgMS0yIDBWMmExIDEgMCAwIDEgMS0xWk0xMiAxN2ExIDEgMCAwIDEgMSAxdjRhMSAxIDAgMSAxLTIgMHYtNGExIDEgMCAwIDEgMS0xWk00LjIyMyA0LjIyM2ExIDEgMCAwIDEgMS40MTQgMGwyLjgzIDIuODNhMSAxIDAgMCAxLTEuNDE0IDEuNDE0bC0yLjgzLTIuODNhMSAxIDAgMCAxIDAtMS40MTRaTTE1LjUzMyAxNS41MzNhMSAxIDAgMCAxIDEuNDE0IDBsMi44MyAyLjgzYTEgMSAwIDAgMS0xLjQxNCAxLjQxNGwtMi44My0yLjgzYTEgMSAwIDAgMSAwLTEuNDE0Wk0xIDEyYTEgMSAwIDAgMSAxLTFoNGExIDEgMCAxIDEgMCAySDJhMSAxIDAgMCAxLTEtMVpNMTcgMTJhMSAxIDAgMCAxIDEtMWg0YTEgMSAwIDEgMSAwIDJoLTRhMSAxIDAgMCAxLTEtMVpNOC40NjcgMTUuNTMzYTEgMSAwIDAgMSAwIDEuNDE0bC0yLjgzIDIuODNhMSAxIDAgMCAxLTEuNDE0LTEuNDE0bDIuODMtMi44M2ExIDEgMCAwIDEgMS40MTQgMFpNMTkuNzc3IDQuMjIzYTEgMSAwIDAgMSAwIDEuNDE0bC0yLjgzIDIuODNhMSAxIDAgMSAxLTEuNDE0LTEuNDE0bDIuODMtMi44M2ExIDEgMCAwIDEgMS40MTQgMFpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPlxuICA8cGF0aCBkPVwiTTE4IDEyYTYgNiAwIDEgMS0xMiAwIDYgNiAwIDAgMSAxMiAwWlwiLz5cbiAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTIgMTZhNCA0IDAgMSAwIDAtOCA0IDQgMCAwIDAgMCA4Wm0wIDJhNiA2IDAgMSAwIDAtMTIgNiA2IDAgMCAwIDAgMTJaXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz5cbjwvc3ZnPlxuYCxcbiAgTklHSFQ6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTIuMDgxIDIuNTA5YTEgMSAwIDAgMS0uMDY3IDEuMDg1IDYgNiAwIDAgMCA4LjM5MiA4LjM5MiAxIDEgMCAwIDEgMS41OS44OTZBMTAgMTAgMCAxIDEgMTEuMTE4IDIuMDA0YTEgMSAwIDAgMSAuOTYzLjUwNVptLTIuNzY1IDEuOTNhOCA4IDAgMSAwIDEwLjI0NSAxMC4yNDVBNy45OTkgNy45OTkgMCAwIDEgOS4zMTYgNC40MzlaXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz5cbjwvc3ZnPlxuYCxcbiAgU0VUVElOR1M6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgPGcgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcGF0aD1cInVybCgjYSlcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgPHBhdGggZD1cIk0xMiAxMGEyIDIgMCAxIDAgMCA0IDIgMiAwIDAgMCAwLTRabS00IDJhNCA0IDAgMSAxIDggMCA0IDQgMCAwIDEtOCAwWlwiLz5cbiAgICA8cGF0aCBkPVwiTTEyIDJhMSAxIDAgMCAwLTEgMXYuMTc0YTIuNjUgMi42NSAwIDAgMS0xLjYwNiAyLjQyNSAxIDEgMCAwIDEtLjI2NC4wNzMgMi42NSAyLjY1IDAgMCAxLTIuNzMtLjYwN2wtLjAwNy0uMDA4LS4wNi0uMDZhMS4wMDMgMS4wMDMgMCAwIDAtMS40MTUgMGgtLjAwMWExIDEgMCAwIDAgMCAxLjQxNWwuMDY4LjA2OWEyLjY1IDIuNjUgMCAwIDEgLjU0MiAyLjg5NCAyLjY1IDIuNjUgMCAwIDEtMi40MTQgMS43MDVIM2ExIDEgMCAwIDAgMCAyaC4xNzRhMi42NSAyLjY1IDAgMCAxIDIuNDIzIDEuNjAxIDIuNjUgMi42NSAwIDAgMS0uNTMyIDIuOTE4bC0uMDA4LjAwOC0uMDYuMDZhMS4wMDMgMS4wMDMgMCAwIDAtLjIxNyAxLjA5IDEgMSAwIDAgMCAuMjE3LjMyNXYuMDAxYS45OTkuOTk5IDAgMCAwIDEuNDE1IDBsLjA2OS0uMDY4YTIuNjUgMi42NSAwIDAgMSAyLjg5NC0uNTQzIDIuNjUgMi42NSAwIDAgMSAxLjcwNSAyLjQxNVYyMWExIDEgMCAwIDAgMiAwVjIwLjgyNmEyLjY1IDIuNjUgMCAwIDEgMS42MDEtMi40MjMgMi42NSAyLjY1IDAgMCAxIDIuOTE4LjUzMmwuMDA4LjAwOC4wNi4wNmExLjAwMiAxLjAwMiAwIDAgMCAxLjQxNSAwaC4wMDFhMSAxIDAgMCAwIDAtMS40MTZsLS4wNjgtLjA2OGEyLjY1IDIuNjUgMCAwIDEtLjUzMi0yLjkxOEEyLjY1IDIuNjUgMCAwIDEgMjAuOTA2IDEzSDIxYTEgMSAwIDAgMCAwLTJIMjAuODI2YTIuNjUgMi42NSAwIDAgMS0yLjQyNS0xLjYwNi45OTkuOTk5IDAgMCAxLS4wNzMtLjI2NCAyLjY1IDIuNjUgMCAwIDEgLjYwNy0yLjczbC4wMDgtLjAwNy4wNi0uMDZhMS4wMDIgMS4wMDIgMCAwIDAgMC0xLjQxNXYtLjAwMWExIDEgMCAwIDAtMS40MTYgMGwtLjA2OC4wNjhhMi42NSAyLjY1IDAgMCAxLTIuOTE4LjUzMkEyLjY1IDIuNjUgMCAwIDEgMTMgMy4wOTRWM2ExIDEgMCAwIDAtMS0xWk05Ljg3OS44NzlBMyAzIDAgMCAxIDE1IDN2LjA4N2EuNjUuNjUgMCAwIDAgLjM5NC41OTRsLjAxLjAwNGEuNjUuNjUgMCAwIDAgLjcxNC0uMTI3bC4wNTUtLjA1NWEzIDMgMCAwIDEgNC44OTUgMy4yN2MtLjE1MS4zNjUtLjM3Mi42OTYtLjY1Ljk3NGwtLjA1Ni4wNTVhLjY1LjY1IDAgMCAwLS4xMjcuNzE0Yy4wMjguMDY0LjA1LjEzLjA2NC4yYS42NS42NSAwIDAgMCAuNTM0LjI4NEgyMWEzIDMgMCAxIDEgMCA2aC0uMDg3YS42NS42NSAwIDAgMC0uNTk0LjM5NGwtLjAwNC4wMWEuNjUuNjUgMCAwIDAgLjEyNy43MTRsLjA1NS4wNTVhMy4wMDIgMy4wMDIgMCAwIDEgMCA0LjI0NWwtLjcwNy0uNzA4LjcwNy43MDdhMyAzIDAgMCAxLTQuMjQ0IDBsLS4wNTUtLjA1NWEuNjUuNjUgMCAwIDAtLjcxNC0uMTI3bC0uMDEuMDA0YS42NDkuNjQ5IDAgMCAwLS4zOTQuNTkzVjIxYTMgMyAwIDAgMS02IDB2LS4wNzZhLjY1LjY1IDAgMCAwLS40MjUtLjU4NS45NTUuOTU1IDAgMCAxLS4wNTktLjAyNC42NS42NSAwIDAgMC0uNzE0LjEyN2wtLjA1NC4wNTVhMy4wMDIgMy4wMDIgMCAxIDEtNC4yNDUtNC4yNDRsLjA1NS0uMDU1YS42NS42NSAwIDAgMCAuMTI3LS43MTRsLS4wMDQtLjAxYS42NDkuNjQ5IDAgMCAwLS41OTQtLjM5NEgzYTMgMyAwIDAgMSAwLTZoLjA3NmEuNjUuNjUgMCAwIDAgLjU4NS0uNDI1bC4wMjQtLjA1OWEuNjUuNjUgMCAwIDAtLjEyNy0uNzE0bC0uMDU1LS4wNTRhMyAzIDAgMSAxIDQuMjQ0LTQuMjQ1bC4wNTUuMDU1YS42NS42NSAwIDAgMCAuNzE0LjEyNyAxIDEgMCAwIDEgLjItLjA2NEEuNjUuNjUgMCAwIDAgOSAzLjE2N1YzQTMgMyAwIDAgMSA5Ljg3OS44NzlaXCIvPlxuICA8L2c+XG4gIDxkZWZzPlxuICAgIDxjbGlwUGF0aCBpZD1cImFcIj5cbiAgICAgIDxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk0wIDBoMjR2MjRIMHpcIi8+XG4gICAgPC9jbGlwUGF0aD5cbiAgPC9kZWZzPlxuPC9zdmc+XG5gLFxuICBNVVRFOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTExLjQzMyA0LjA5OUExIDEgMCAwIDEgMTIgNXYxNGExIDEgMCAwIDEtMS42MjUuNzhMNS42NSAxNkgyYTEgMSAwIDAgMS0xLTFWOWExIDEgMCAwIDEgMS0xaDMuNjVsNC43MjUtMy43OGExIDEgMCAwIDEgMS4wNTgtLjEyMVpNMTAgNy4wOGwtMy4zNzUgMi43QTEgMSAwIDAgMSA2IDEwSDN2NGgzYTEgMSAwIDAgMSAuNjI1LjIyTDEwIDE2LjkyVjcuMDhaTTIzLjcwNyA4LjI5M2ExIDEgMCAwIDEgMCAxLjQxNGwtNiA2YTEgMSAwIDAgMS0xLjQxNC0xLjQxNGw2LTZhMSAxIDAgMCAxIDEuNDE0IDBaXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz5cbiAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTYuMjkzIDguMjkzYTEgMSAwIDAgMSAxLjQxNCAwbDYgNmExIDEgMCAwIDEtMS40MTQgMS40MTRsLTYtNmExIDEgMCAwIDEgMC0xLjQxNFpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPlxuPC9zdmc+XG5gLFxuICBVTk1VVEU6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTEuNDMzIDQuMDk5YTEgMSAwIDAgMSAuNTY3Ljl2MTRhMSAxIDAgMCAxLTEuNjI1Ljc4Mkw1LjY1IDE2SDJhMSAxIDAgMCAxLTEtMVY5YTEgMSAwIDAgMSAxLTFoMy42NWw0LjcyNS0zLjc4YTEgMSAwIDAgMSAxLjA1OC0uMTIxWk0xMCA3LjA4bC0zLjM3NSAyLjdBMSAxIDAgMCAxIDYgMTBIM3Y0aDNhMSAxIDAgMCAxIC42MjUuMjJMMTAgMTYuOTJWNy4wOFpNMTguMzYzIDQuMjIzYTEgMSAwIDAgMSAxLjQxNCAwIDExIDExIDAgMCAxIDAgMTUuNTU0IDEgMSAwIDEgMS0xLjQxNC0xLjQxNCA5IDkgMCAwIDAgMC0xMi43MjYgMSAxIDAgMCAxIDAtMS40MTRabS0zLjUzIDMuNTNhMSAxIDAgMCAxIDEuNDE0IDAgNiA2IDAgMCAxIDAgOC40ODQgMSAxIDAgMSAxLTEuNDE0LTEuNDE0IDQgNCAwIDAgMCAwLTUuNjU2IDEgMSAwIDAgMSAwLTEuNDE0WlwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+XG48L3N2Zz5cbmAsXG59O1xuIiwiaW1wb3J0IHsgZ2V0UmFuZG9tSW50IH0gZnJvbSAnLi4vdXRpbHMvZ2V0LXJhbmRvbS1pbnQnO1xuaW1wb3J0IHsgbmVpZ2hib3VyTG9jYXRpb25NYXAgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuXG5jb25zdCBERUZBVUxUX1NJWkUgPSAxMDtcbmNvbnN0IE1JTkVfREVOU0lUWV9QRVJDRU5UQUdFID0gMTA7XG5jb25zdCBNT0RFTF9TVE9SQUdFX0tFWSA9ICdtaW5lc3dlZXBlck1vZGVsJztcbmNvbnN0IE1JTkVfQ0hBUiA9ICcqJztcblxuY29uc3QgaXNMb2FkU2F2ZSA9IGZhbHNlO1xuXG5leHBvcnQgY2xhc3MgTWluZXN3ZWVwZXJNb2RlbCB7XG4gIGNlbGxzID0gW107XG4gIG9uRGF0YUNoYW5nZUhhbmRsZXIgPSBudWxsO1xuXG4gIHNldE1vZGVsKCkge1xuICAgIGNvbnN0IGlzSGFzU2F2ZSA9ICEhbG9jYWxTdG9yYWdlLmdldEl0ZW0oTU9ERUxfU1RPUkFHRV9LRVkpO1xuICAgIGlmIChpc0hhc1NhdmUgJiYgaXNMb2FkU2F2ZSkge1xuICAgICAgdGhpcy5jZWxscyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oTU9ERUxfU1RPUkFHRV9LRVkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jZWxscyA9IHRoaXMuZ2VuZXJhdGVDZWxsRGF0YSgpO1xuICAgIH1cbiAgfVxuXG4gIHNhdmVNb2RlbCgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShNT0RFTF9TVE9SQUdFX0tFWSwgSlNPTi5zdHJpbmdpZnkodGhpcy5jZWxscykpO1xuICB9XG5cbiAgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5jZWxscztcbiAgfVxuXG4gIGdlbmVyYXRlQ2VsbERhdGEoc2l6ZSA9IERFRkFVTFRfU0laRSkge1xuICAgIGNvbnN0IG1pbmVUb0luc2VydENvdW50ID0gTWF0aC5mbG9vcihNYXRoLnBvdyhzaXplLCAyKSAqIChNSU5FX0RFTlNJVFlfUEVSQ0VOVEFHRSAvIDEwMCkpO1xuICAgIGNvbnN0IG1pbmVNYXRyaXggPSBuZXcgQXJyYXkoc2l6ZSkuZmlsbCgwKS5tYXAoKCkgPT4gbmV3IEFycmF5KHNpemUpLmZpbGwoMCkpO1xuICAgIGxldCBtaW5lQ291bnQgPSAwO1xuICAgIHdoaWxlIChtaW5lQ291bnQgPCBtaW5lVG9JbnNlcnRDb3VudCkge1xuICAgICAgY29uc3QgbGluZUluZGV4ID0gZ2V0UmFuZG9tSW50KDAsIHNpemUgLSAxKTtcbiAgICAgIGNvbnN0IGNlbGxJbmRleCA9IGdldFJhbmRvbUludCgwLCBzaXplIC0gMSk7XG4gICAgICBpZiAobWluZU1hdHJpeFtsaW5lSW5kZXhdW2NlbGxJbmRleF0gIT09IE1JTkVfQ0hBUikge1xuICAgICAgICBtaW5lTWF0cml4W2xpbmVJbmRleF1bY2VsbEluZGV4XSA9IE1JTkVfQ0hBUjtcbiAgICAgICAgbWluZUNvdW50ICs9IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGNlbGxDb3VudGVyID0gMDtcbiAgICBjb25zdCBkYXRhTWF0cml4ID0gbWluZU1hdHJpeC5tYXAoKGxpbmUsIGxpbmVJbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIGxpbmUubWFwKChjZWxsLCBjZWxsSW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGNlbGwgPT09IE1JTkVfQ0hBUikge1xuICAgICAgICAgIGNvbnN0IGNlbGxEYXRhID0geyBpZDogY2VsbENvdW50ZXIsIGlzTWFya2VkOiBmYWxzZSwgaXNDb3ZlcmVkOiB0cnVlLCB2YWx1ZTogY2VsbCB9O1xuICAgICAgICAgIGNlbGxDb3VudGVyICs9IDE7XG4gICAgICAgICAgcmV0dXJuIGNlbGxEYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5laWdoYm91cnNDb3VudCA9IDA7XG4gICAgICAgIG5laWdoYm91ckxvY2F0aW9uTWFwLmZvckVhY2goKGxvY2F0aW9uKSA9PiB7XG4gICAgICAgICAgbGV0IG5laWdoYm91cjtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBsaW5lSW5kZXggKyBsb2NhdGlvblswXSA+PSAwICYmXG4gICAgICAgICAgICBsaW5lSW5kZXggKyBsb2NhdGlvblswXSA8IHNpemUgJiZcbiAgICAgICAgICAgIGNlbGxJbmRleCArIGxvY2F0aW9uWzFdID49IDAgJiZcbiAgICAgICAgICAgIGNlbGxJbmRleCArIGxvY2F0aW9uWzFdIDwgc2l6ZVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgbmVpZ2hib3VyID0gbWluZU1hdHJpeFtsaW5lSW5kZXggKyBsb2NhdGlvblswXV1bY2VsbEluZGV4ICsgbG9jYXRpb25bMV1dO1xuICAgICAgICAgIH1cbiAgICAgICAgICBuZWlnaGJvdXJzQ291bnQgKz0gbmVpZ2hib3VyID09PSBNSU5FX0NIQVIgPyAxIDogMDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNlbGxEYXRhID0geyBpZDogY2VsbENvdW50ZXIsIGlzTWFya2VkOiBmYWxzZSwgaXNDb3ZlcmVkOiB0cnVlLCB2YWx1ZTogbmVpZ2hib3Vyc0NvdW50IH07XG4gICAgICAgIGNlbGxDb3VudGVyICs9IDE7XG4gICAgICAgIHJldHVybiBjZWxsRGF0YTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRhdGFNYXRyaXg7XG4gIH1cblxuICB1cGRhdGVEYXRhKGRhdGEpIHtcbiAgICBsZXQgdGFyZ2V0Q2VsbDtcbiAgICBmb3IgKGxldCBsaW5lIG9mIHRoaXMuY2VsbHMpIHtcbiAgICAgIHRhcmdldENlbGwgPSBsaW5lLmZpbmQoKGNlbGwpID0+IGNlbGwuaWQgPT09IGRhdGEuaWQpO1xuICAgICAgaWYgKHRhcmdldENlbGwpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IHByb3AgaW4gZGF0YSkge1xuICAgICAgdGFyZ2V0Q2VsbFtwcm9wXSA9IGRhdGFbcHJvcF0gIT09IHVuZGVmaW5lZCA/IGRhdGFbcHJvcF0gOiB0YXJnZXRDZWxsW3Byb3BdO1xuICAgIH1cbiAgICB0aGlzLm9uRGF0YUNoYW5nZUhhbmRsZXIodGFyZ2V0Q2VsbCk7XG4gIH1cblxuICBzZXRPbkRhdGFDaGFuZ2VIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICB0aGlzLm9uRGF0YUNoYW5nZUhhbmRsZXIgPSBoYW5kbGVyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNaW5lc3dlZXBlckNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWluZXN3ZWVwZXIvbWluZXN3ZWVwZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHt9KTtcbiAgICBjb25zdCBwYWdlV3JhcHBlciA9IG5ldyBCYXNlQ29tcG9uZW50KHsgY2xhc3NOYW1lOiAncGFnZS13cmFwcGVyJyB9KTtcbiAgICBjb25zdCBtaW5lc3dlZXBlciA9IG5ldyBNaW5lc3dlZXBlckNvbXBvbmVudCgpO1xuICAgIHBhZ2VXcmFwcGVyLmFwcGVuZChtaW5lc3dlZXBlcik7XG4gICAgdGhpcy5hcHBlbmQocGFnZVdyYXBwZXIpO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmV0dGllci9wcmV0dGllciAqL1xuZXhwb3J0IGNvbnN0IG5laWdoYm91ckxvY2F0aW9uTWFwID0gW1xuICBbLTEsIC0xXSwgWy0xLCArMF0sIFstMSwgKzFdLFxuICBbKzAsIC0xXSwgLyogICAgKi8gIFsrMCwgKzFdLFxuICBbKzEsIC0xXSwgWysxLCArMF0sIFsrMSwgKzFdLFxuXTtcbi8qIGVzbGludC1lbmFibGUgcHJldHRpZXIvcHJldHRpZXIgKi9cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50RnJvbVRlbXBsYXRlKHRlbXBsYXRlKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gIHJldHVybiBjb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0TWF0cml4Q29tcG9uZW50UG9zaWl0b24obWF0cml4LCBjb21wb25lbnQpIHtcbiAgbGV0IGxpbmVJbmRleDtcbiAgbGV0IGNlbGxJbmRleDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRyaXgubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hdHJpeC5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKG1hdHJpeFtpXVtqXSA9PT0gY29tcG9uZW50KSB7XG4gICAgICAgIGxpbmVJbmRleCA9IGk7XG4gICAgICAgIGNlbGxJbmRleCA9IGo7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4geyBsaW5lSW5kZXgsIGNlbGxJbmRleCB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5yb3VuZChtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy9nbG9iYWwtc3R5bGVzLnNjc3MnO1xuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tICcuL3BhZ2VzL2hvbWUnO1xuXG5jb25zdCBob21lID0gbmV3IEhvbWVQYWdlKCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZChob21lLmdldEVsZW1lbnQoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=