    module.exports = (options) => {
      const m = new Map([
        ['left', 'marginLeft'],
        ['right', 'marginRight'],
        ['up', 'marginTop'],
        ['down', 'marginBottom']
      ]);
      let defOpt = {
        slideBody: '#slide-body',
        interval: 5000,
        slides: 3,
        imgSize: {
          w: 965,
          h: 450
        },
        direction: 'left'
      };

      defOpt = Object.assign(defOpt, options || {});
      const {
        slideBody,
        interval,
        slides,
        imgSize,
        direction
      } = defOpt;

      const {
        w,
        h
      } = imgSize;


      const sb = document.querySelector(slideBody);
      const slideUint = /[t]$/.test(direction) ? w : h;
      let curPic = 0;

      setInterval(() => {
        curPic = curPic === slides ? 0 : curPic + 1;
        sb.style[m.get(direction)] = `${-slideUint * curPic}px`;

        if (curPic === slides) {
          setTimeout(() => {
            sb.style.disaplay = 'none';
            sb.style[m.get(direction)] = 0;
          }, 2000);
          setTimeout(() => {
            sb.style.display = 'block';
            sb.style[m.get(direction)] = 0;
          }, 3000);
        }
      }, interval);
    };