const bodys = new WeakSet();
const m = new Map([
  ['left', 'marginLeft'],
  ['right', 'marginRight'],
  ['up', 'marginTop'],
  ['down', 'marginBottom']
]);

let defOpt = {
  bodySelector: '#slide-body',
  slides: 3,
  imgSize: {
    w: 965,
    h: 450
  },
  dir: 'left'
};

module.exports = (options) => {
  let w;
  let h;
  let slides;
  let dir;
  let slideBody;
  let slideUnit;
  let curIndex = 0;

  const Slide = class {
    construct(opt) {
      defOpt = Object.assign(defOpt, opt || {});
      slideBody = document.querySelector(defOpt.bodySelector);

      if (bodys.has(slideBody)) {
        return {};
      }

      bodys.add(slideBody);

      dir = defOpt.dir;
      slides = defOpt.slides;
      w = defOpt.imgSize.w;
      h = defOpt.imgSize.h;
      slideUnit = /[t]$/.test(dir) ? w : h;

      return this;
    }

    get curIndex() {
      return curIndex;
    }

    next() {
      curIndex++;
      if (curIndex <= slides) {
        slideBody.style[m.get(dir)] = `${-slideUnit * curIndex}px`;
      }

      return this;
    }

    prev() {
      curIndex--;
      if (curIndex >= 0) {
        slideBody.style[m.get(dir)] = `${-slideUnit * curIndex}px`;
      }

      return this;
    }

    slideTo(index) {

    }

    hide() {
      slideBody.style.cssText = 'display:none';

      return this;
    }

    show() {
      slideBody.style.cssText = 'display:block';

      return this;
    }
  };


  return new Slide(options);
};