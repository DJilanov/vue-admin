/* ============
 * Actions for the navigation module
 * ============
 *
 * The actions that are available on the
 * navigation module.
 */

import * as types from './mutation-types';

export const set = ({ commit }) => {
  commit(types.set);
};

export const toggleSidebarDesktop = ({ commit }) => {
  commit(types.toggleSidebarDesktop);
};

export const toggleSidebarMobile = ({ commit }) => {
  commit(types.toggleSidebarMobile);
};

export default {
  set,
  toggleSidebarDesktop,
  toggleSidebarMobile,
};
