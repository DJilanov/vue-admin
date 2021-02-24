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
    </template>
    <CDropdownItem>
      <div class="c-header-nav-item dropdown d-md-down-none mx-2 ">
        <a
          class="c-header-nav-link"
          data-toggle="dropdown"
          href="#"
          role="button"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <svg class="c-icon">
            <use xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-envelope-open" />
          </svg>
          <span class="badge badge-pill badge-info">7</span></a>
        <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg pt-0 ">
          <div class="dropdown-header bg-light">
            <strong>You have 4 messages</strong>
          </div>
          <a
            class="dropdown-item"
            href="#"
          >
            <div class="message">
              <div class="py-3 mfe-3 float-left">
                <div class="c-avatar">
                  <img
                    class="c-avatar-img"
                    src="assets/img/avatars/7.jpg"
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
          </a><a
            class="dropdown-item"
            href="#"
          >
            <div class="message">
              <div class="py-3 mfe-3 float-left">
                <div class="c-avatar">
                  <img
                    class="c-avatar-img"
                    src="assets/img/avatars/6.jpg"
                    alt="user@email.com"
                  >
                  <span class="c-avatar-status bg-warning" />
                </div>
              </div>
              <div>
                <small class="text-muted">John Doe</small>
                <small class="text-muted float-right mt-1">5 minutes ago</small>
              </div>
              <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
              <div class="small text-muted text-truncate">Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor incididunt...
              </div>
            </div>
          </a><a
            class="dropdown-item"
            href="#"
          >
            <div class="message">
              <div class="py-3 mfe-3 float-left">
                <div class="c-avatar">
                  <img
                    class="c-avatar-img"
                    src="assets/img/avatars/5.jpg"
                    alt="user@email.com"
                  >
                  <span class="c-avatar-status bg-danger" /></div>
              </div>
              <div>
                <small class="text-muted">John Doe</small>
                <small class="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
              <div class="small text-muted text-truncate">Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor incididunt...
              </div>
            </div>
          </a><a
            class="dropdown-item"
            href="#"
          >
            <div class="message">
              <div class="py-3 mfe-3 float-left">
                <div class="c-avatar">
                  <img
                    class="c-avatar-img"
                    src="assets/img/avatars/4.jpg"
                    alt="user@email.com"
                  >
                  <span class="c-avatar-status bg-info" /></div>
              </div>
              <div>
                <small class="text-muted">John Doe</small>
                <small class="text-muted float-right mt-1">4:03 PM</small>
              </div>
              <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
              <div class="small text-muted text-truncate">Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor incididunt...
              </div>
            </div>
          </a>
          <a
            class="dropdown-item text-center border-top"
            href="#"
          >
            <strong>View all messages</strong>
          </a>
        </div>
      </div>
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
