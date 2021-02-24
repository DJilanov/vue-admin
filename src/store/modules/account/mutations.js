/* ============
 * Mutations for the account module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import { find } from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [find](state, account) {
    state.email = account.email;
    state.firstName = account.firstName;
    state.lastName = account.lastName;
  },
};
