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

export const toggleLeftSidebarDesktop = ({ commit }) => {
  commit(types.toggleLeftSidebarDesktop);
};

export const toggleLeftSidebarMobile = ({ commit }) => {
  commit(types.toggleLeftSidebarMobile);
};

export const toggleRightSidebarDesktop = ({ commit }) => {
  commit(types.toggleRightSidebarDesktop);
};

export const toggleRightSidebarMobile = ({ commit }) => {
  commit(types.toggleRightSidebarMobile);
};

export default {
  set,
  toggleLeftSidebarDesktop,
  toggleLeftSidebarMobile,
};
