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
        name="cil-envelope-open"
      />
      <CBadge
        color="info"
        class="mfs-auto"
      >
        1
      </CBadge>
    </template>
    <CDropdownHeader
      tag="div"
      class="text-center"
      color="light"
    >
      <strong>Messages</strong>
      <!-- <strong>You have 5 new notifications</strong> -->
    </CDropdownHeader>
    <CDropdownItem>
      <div class="message">
        <div class="py-3 mfe-3 float-left">
          <div class="c-avatar">
            <img
              class="c-avatar-img"
              src="../assets/img/avatars/7.jpg"
              alt="user@email.com"
            >
            <span class="c-avatar-status bg-success" />
          </div>
        </div>
        <div>
          <small class="text-muted">John Doe</small>
          <small class="text-muted float-right mt-1">Just now</small>
        </div>
        <div class="text-truncate font-weight-bold">
          <span class="text-danger">!</span>
          Important message
        </div>
        <div class="small text-muted text-truncate">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
          do eiusmod tempor incididunt...
        </div>
      </div>
    </CDropdownItem>
    <CDropdownItem>
      <strong>View all messages</strong>
    </CDropdownItem>
  </CDropdown>
</template>

<script>
export default {
  name: 'EmailDropdown',
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
