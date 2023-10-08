import mobileNav from './modules/mobile-nav.js';
mobileNav();

// select
import select from './modules/select.js';
select();

// scrollbar
import 'simplebar';
import 'simplebar/dist/simplebar.css';
import ResizeObserver from 'resize-observer-polyfill';
window.ResizeObserver = ResizeObserver;

// range-slider
import rangeInput from './modules/range-input.js';
rangeInput();
