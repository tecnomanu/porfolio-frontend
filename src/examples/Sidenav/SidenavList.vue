<template>
  <div>
    <div
      class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
      id="sidenav-collapse-main"
    >
      <ul class="navbar-nav">
        <li class="mt-3 nav-item">
          <h6
            class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
            :class="this.$store.state.isRTL ? 'me-4' : 'ms-2'"
          >
            PAGES
          </h6>
        </li>
        <li class="nav-item">
          <sidenav-collapse navText="Profile" :to="{ name: 'Profile' }">
            <template #icon>
              <customer-support />
            </template>
          </sidenav-collapse>
        </li>
      </ul>
    </div>
    <div class="pt-3 mx-3 mt-3 sidenav-footer">
      <sidenav-card
        :class="cardBg"
        textPrimary="Do you want to talk?"
        textSecondary="Send me a message here"
        route="https://www.creative-tim.com/learning-lab/vue/overview/soft-ui-dashboard/"
        label="Whatsapp me"
        icon="fab fa-whatsapp"
      />
    </div>
  </div>
</template>
<script>
import SidenavCollapse from "./SidenavCollapse.vue";
import SidenavCard from "./SidenavCard.vue";
import CustomerSupport from "../../components/Icon/CustomerSupport.vue";

export default {
  name: "SidenavList",
  props: {
    cardBg: String,
  },
  data() {
    return {
      title: "Soft UI Dashboard PRO",
      controls: "dashboardsExamples",
      isActive: "active",
    };
  },
  components: {
    SidenavCollapse,
    SidenavCard,
    CustomerSupport,
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
  },
};
</script>
