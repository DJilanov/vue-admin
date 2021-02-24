<template>
  <CDropdown
    in-nav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CIcon
        class="white"
        name="cil-bell"
      />
    </template>
    <CDropdownHeader
      tag="div"
      class="text-center"
      color="light"
    >
      <strong>Notifications</strong>
      <!-- <strong>You have 5 new notifications</strong> -->
    </CDropdownHeader>
    <CDropdownItem>
      <CIcon name="cil-user-follow" /> New user registered
      <CBadge
        color="info"
        class="mfs-auto"
      >
        {{ itemsCount }}
      </CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-user-unfollow" /> User deleted
      <CBadge
        color="success"
        class="mfs-auto"
      >
        {{ itemsCount }}
      </CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-chart" /> Sales report is ready
      <CBadge
        color="danger"
        class="mfs-auto"
      >
        {{ itemsCount }}
      </CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-basket" /> New client
      <CBadge
        color="warning"
        class="mfs-auto"
      >
        {{ itemsCount }}
      </CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-speedometer" /> Server overloaded
      <CBadge
        color="warning"
        class="mfs-auto"
      >
        {{ itemsCount }}
      </CBadge>
    </CDropdownItem>
  </CDropdown>
</template>

<script>
export default {
  name: 'TheHeaderDropdownAccnt',
  data() {
    return {
      itemsCount: 42,
    };
  },
};
</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>
