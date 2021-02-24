/* ============
 * Mutations for the navigation module
 * ============
 *
 * The mutations that are available on the
 * navigation module.
 */

import { toggleSidebarMobile, toggleSidebarDesktop, set } from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [set](state, [variable, value]) {
    state[variable] = value;
  },
  [toggleSidebarDesktop](state) {
    const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow);
    state.sidebarShow = sidebarOpened ? false : 'responsive';
  },
  [toggleSidebarMobile](state) {
    const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow);
    state.sidebarShow = sidebarClosed ? true : 'responsive';
  },
};
