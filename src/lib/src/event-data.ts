export const eventPathLoadScroll = [
  '$event.target.defaultView.innerHeight', '$event.target.defaultView.innerWidth',
  '$event.target.defaultView.scrollY',
  '$event.target.defaultView.scrollX'
];
export const eventPathResize = [
  '$event.target.innerHeight',
  '$event.target.innerWidth',
  '$event.target.scrollY',
  '$event.target.scrollX'
];
export const eventLoad = 'window:load';
export const eventResize = 'window:resize';
export const eventScroll = 'window:scroll';
