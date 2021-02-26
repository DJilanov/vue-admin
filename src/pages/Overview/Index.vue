<template>
  <main>
    <CContainer>
      <CRow>
        <CCol lg="4">
          <CDropdown
            color="light"
            toggler-text="All maps"
            class="m-2"
          >
            <CDropdownItem>de_cache</CDropdownItem>
            <CDropdownItem>de_dust2</CDropdownItem>
            <CDropdownItem>de_inferno</CDropdownItem>
            <CDropdownItem>de_mirage</CDropdownItem>
            <CDropdownItem>de_nuke</CDropdownItem>
            <CDropdownItem>de_overpass</CDropdownItem>
            <CDropdownItem>de_train</CDropdownItem>
            <CDropdownItem>de_vertigo</CDropdownItem>
          </CDropdown>
        </CCol>
        <CCol lg="4">
          <CDropdown
            color="light"
            toggler-text="Anyone"
            class="m-2"
          >
            <CDropdownItem>Astralis</CDropdownItem>
            <CDropdownItem>Team Liquid</CDropdownItem>
          </CDropdown>
        </CCol>
        <CCol lg="4">
          <CDropdown
            color="light"
            toggler-text="Anyone"
            class="m-2"
          >
            <CDropdownItem>Astralis</CDropdownItem>
          </CDropdown>
        </CCol>
      </CRow>
    </CContainer>
    <v-card contextual-style="dark">
      <div slot="body">
        <p>
          <a
            class="btn btn-outline-primary"
            href="http://gitter.im/petervmeijgaard"
            target="_blank"
          >
            <i
              class="fa fa-github fa-fw"
              aria-hidden="true"
            />
            <span class="pl-2">
              Gitter
            </span>
          </a>
          <a
            class="btn btn-outline-primary"
            href="http://github.com/petervmeijgaard"
            target="_blank"
          >
            <i
              class="fa fa-github fa-fw"
              aria-hidden="true"
            />
            <span class="pl-2">
              GitHub
            </span>
          </a>
          <a
            class="btn btn-outline-primary"
            href="http://twitter.com/petervmeijgaard"
            target="_blank"
          >
            <i
              class="fa fa-twitter fa-fw"
              aria-hidden="true"
            />
            <span class="pl-2">
              Twitter
            </span>
          </a>
        </p>
        <p>
          For bugs, see:
        </p>
        <a
          class="btn btn-outline-primary"
          href="https://github.com/petervmeijgaard/vue-2.0-boilerplate/issues"
          target="_blank"
        >
          <i
            class="fa fa-github fa-fw"
            aria-hidden="true"
          />
          <span class="pl-2">
            GitHub
          </span>
        </a>
      </div>
    </v-card>
  </main>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */

import VCard from '@/components/Card.vue';

export default {
  /**
   * The name of the page.
   */
  name: 'HomeIndex',

  /**
   * The components that the page can use.
   */
  components: {
    VCard,
  },
};
</script>
