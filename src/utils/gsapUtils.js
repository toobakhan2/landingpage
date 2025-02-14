import gsap from "gsap";

export function horizontalLoop(items, config = {}) {
  items = gsap.utils.toArray(items);
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    }),
    widths = items.map((item) => parseFloat(gsap.getProperty(item, "width", "px"))),
    xPercents = items.map((item, i) =>
      gsap.utils.snap(parseFloat(gsap.getProperty(item, "x", "px")) / widths[i] * 100 +
        gsap.getProperty(item, "xPercent"))
    ),
    pixelsPerSecond = (config.speed || 1) * 100,
    totalWidth = items.reduce((sum, item, i) => sum + widths[i], 0);

  gsap.set(items, { xPercent: (i) => xPercents[i] });
  
  items.forEach((item, i) => {
    let curX = xPercents[i] / 100 * widths[i],
      distanceToLoop = curX + widths[i];

    tl.to(item, { xPercent: (curX - distanceToLoop) / widths[i] * 100, duration: distanceToLoop / pixelsPerSecond }, 0)
      .fromTo(item, { xPercent: (curX - distanceToLoop + totalWidth) / widths[i] * 100 }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond);
  });

  tl.progress(1, true).progress(0, true);
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  
  return tl;
}
