<template>
  <CSidebar
    fixed
    aside
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('navigation/set', ['rightSidebarShow', value])"
  >
    <CSidebarBrand
      class="d-md-down-none"
      to="/"
    >
      <h1 class="brand">
        Augment
      </h1>
    </CSidebarBrand>

    <CRenderFunction
      flat
      :content-to-render="$options.nav"
    />
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('navigation/set', ['rightSidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>
import nav from './_nav';

export default {
  name: 'TheRightSidebar',
  nav,
  computed: {
    show() {
      return this.$store.state.navigation.rightSidebarShow;
    },
    minimize() {
      return this.$store.state.navigation.rightSidebarMinimize;
    },
  },
};
</script>
