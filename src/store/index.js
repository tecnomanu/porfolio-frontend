// import { ref } from 'vue';
import { createStore } from "vuex";
import bootstrap from "bootstrap/dist/js/bootstrap.min.js";

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faMastodon,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import PortfoliosApi from '../api/resources/Portfolios.js';
import FrameworksApi from '../api/resources/Frameworks.js';
import { APISettings } from "../api/config";

export default createStore({
  data() {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedinIn,
    faMastodon,
    faGithub,
    FrameworksApi
  },
  state: {
    apiBase: APISettings.baseURL,
    hideConfigButton: false,
    isPinned: true,
    showConfig: false,
    isTransparent: "",
    isRTL: false,
    color: "danger",
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    navbarFixed:
      "position-sticky blur shadow-blur left-auto top-1 z-index-sticky px-0 mx-4",
    absolute: "position-absolute px-4 mx-0 w-100 z-index-2",
    bootstrap,
    frameworks: [],
    portfolios: [],
    socials: [
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/manuelbrunia/?locale=en_US',
        icon: faLinkedinIn,
      },
      {
        name: 'Mastodon',
        link: 'https://mstdn.social/@tecnomanu',
        icon: faMastodon,
      },
      {
        name: 'GitHub',
        link: 'https://github.com/tecnomanu',
        icon: faGithub,
      },      
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/manubrunia/',
        icon: faInstagram,
      },
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/manuelbrunia',
        icon: faFacebook,
      },
    ]
  },
  mutations: {
    toggleConfigurator(state) {
      state.showConfig = !state.showConfig;
    },
    navbarMinimize(state) {
      const sidenav_show = document.querySelector(".g-sidenav-show");
      if (sidenav_show.classList.contains("g-sidenav-hidden")) {
        sidenav_show.classList.remove("g-sidenav-hidden");
        sidenav_show.classList.add("g-sidenav-pinned");
        state.isPinned = true;
      } else {
        sidenav_show.classList.add("g-sidenav-hidden");
        sidenav_show.classList.remove("g-sidenav-pinned");
        state.isPinned = false;
      }
    },
    sidebarType(state, payload) {
      state.isTransparent = payload;
    },
    cardBackground(state, payload) {
      state.color = payload;
    },
    navbarFixed(state) {
      if (state.isNavFixed === false) {
        state.isNavFixed = true;
      } else {
        state.isNavFixed = false;
      }
    },
    toggleEveryDisplay(state) {
      state.showNavbar = !state.showNavbar;
      state.showSidenav = !state.showSidenav;
      state.showFooter = !state.showFooter;
    },
    toggleHideConfig(state) {
      state.hideConfigButton = !state.hideConfigButton;
    },
    setFrameworks(state, payload) {
      const values = { ...payload.map((value) => value.attributes)}
      state.frameworks = values;
    },
    setPortfolios(state, payload) {
      const values = { ...payload.map((value) => value.attributes)}
      state.portfolios = values;
    },
  },
  actions: {
    toggleSidebarColor({ commit }, payload) {
      commit("sidebarType", payload);
    },
    setCardBackground({ commit }, payload) {
      commit("cardBackground", payload);
    },
    async setFrameworks({ commit }) {
      const { data } = await FrameworksApi.find();
      commit("setFrameworks", data);
    },
    async setPortfolios({ commit }) {
      const { data } = await PortfoliosApi.find();
      commit("setPortfolios", data);
    },
  },
  getters: {
    getFrameworks: (state) => state.frameworks,
  },
});
