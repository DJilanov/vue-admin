/* ============
 * Mutations for the navigation module
 * ============
 *
 * The mutations that are available on the
 * navigation module.
 */

import {
  toggleLeftSidebarMobile,
  toggleLeftSidebarDesktop,
  toggleRightSidebarDesktop,
  toggleRightSidebarMobile,
  set,
} from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [set](state, [variable, value]) {
    state[variable] = value;
  },
  [toggleLeftSidebarDesktop](state) {
    const sidebarOpened = [true, 'responsive'].includes(state.leftSidebarShow);
    state.leftSidebarShow = sidebarOpened ? false : 'responsive';
  },
  [toggleLeftSidebarMobile](state) {
    const sidebarClosed = [false, 'responsive'].includes(state.leftSidebarShow);
    state.leftSidebarShow = sidebarClosed ? true : 'responsive';
  },
  [toggleRightSidebarDesktop](state) {
    const sidebarOpened = [true, 'responsive'].includes(state.rightSidebarShow);
    state.rightSidebarShow = sidebarOpened ? false : 'responsive';
  },
  [toggleRightSidebarMobile](state) {
    const sidebarClosed = [false, 'responsive'].includes(state.rightSidebarShow);
    state.rightSidebarShow = sidebarClosed ? true : 'responsive';
  },
};
