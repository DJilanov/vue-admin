<template>
  <CHeader
    fixed
    with-subheader
    class="c-header-dark"
  >
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('navigation/toggleLeftSidebarMobile')"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('navigation/toggleLeftSidebarDesktop')"
    />
    <CHeaderBrand
      class="mx-auto d-lg-none"
      to="/"
    />
    <CHeaderNav class="d-md-down-none mr-auto">
      <!-- <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/dashboard">
          Dashboard
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink
          to="/users"
          exact
        >
          Users
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink>
          Settings
        </CHeaderNavLink>
      </CHeaderNavItem> -->
    </CHeaderNav>
    <CHeaderNav class="mr-4">
      <CHeaderNavItem class="d-md-down-none mx-2">
        <NotificationsDropdown />
      </CHeaderNavItem>
      <CHeaderNavItem class="d-md-down-none mx-2">
        <EmailDropdown />
      </CHeaderNavItem>
      <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <a
            class="btn btn-block btn-info active c-header-nav-link"
            href="#"
          >
            Subscribe
          </a>
        </CHeaderNavLink>
      </CHeaderNavItem>
      <ProfileDropdown />
    </CHeaderNav>
    <CSubheader class="px-3">
      <CBreadcrumbRouter class="border-0 mb-0" />
    </CSubheader>
  </CHeader>
</template>

<script>
import ProfileDropdown from '../components/ProfileDropdown.vue';
import EmailDropdown from '../components/EmailDropdown.vue';
import NotificationsDropdown from '../components/NotificationsDropdown.vue';

export default {
  name: 'TheHeader',
  components: {
    ProfileDropdown,
    EmailDropdown,
    NotificationsDropdown,
  },
};
</script>
