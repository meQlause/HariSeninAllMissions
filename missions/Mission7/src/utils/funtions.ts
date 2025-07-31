export const mousePointerTracking = <T extends HTMLElement>(e: MouseEvent, target: T ) => {
  let isDown = true;
  let startX = e.pageX - target.offsetLeft;
  let scrollLeft = target.scrollLeft;
  const onMouseMove = (ev: MouseEvent) => {
    if (!isDown) return;
    ev.preventDefault();
    const x = ev.pageX - target.offsetLeft;
    const walk = (x - startX) * 1.5; 
    target.scrollLeft = scrollLeft - walk;
  };
  const onMouseUp = () => {
    isDown = false;
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  };
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mouseup", onMouseUp);
};

export const touchTracking = <T extends HTMLElement>(e: TouchEvent, target: T ) => {
  let startX = e.touches[0].pageX;
  let scrollLeft = target.scrollLeft;
  const onTouchMove = (ev: TouchEvent) => {
    const x = ev.touches[0].pageX;
    const walk = (x - startX) * 1.5;
    target.scrollLeft = scrollLeft - walk;
  };
  const onTouchEnd = () => {
    window.removeEventListener("touchmove", onTouchMove);
    window.removeEventListener("touchend", onTouchEnd);
  };
  window.addEventListener("touchmove", onTouchMove);
  window.addEventListener("touchend", onTouchEnd);
};
