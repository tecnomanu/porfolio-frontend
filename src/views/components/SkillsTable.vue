<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>My Skills</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center justify-content-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Skill
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2"
              >
                Knowledge
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody v-if="!skills || skills.length === 0">
            <tr><td colspan="2" class="text-center">Loading...</td></tr>
          </tbody>
          <tbody v-else>
            <tr v-for="skill in skills" v-bind:key="skill._id">
              <td>
                <div class="d-flex px-2">
                  <div style="font-size: 1.3rem; margin-right: 7px">
                    <span class="timeline-step2" :class="darkMode ? 'bg-dark' : ''">
                      <i class="devicon text-gradient" :class="`devicon-${skill.icon} text-${skill.color}`"></i>
                    </span>
                  </div>
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">{{skill.name}}</h6>
                  </div>
                </div>
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="me-2 text-xs font-weight-bold">{{skill.knowledge}}%</span>
                  <div>
                    <soft-progress
                      :color="skill.color"
                      variant="gradient"
                      :percentage="+skill.knowledge"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import SoftProgress from "@/components/SoftProgress";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faLaravel,
} from "@fortawesome/free-brands-svg-icons";

export default {
  name: "skills-table",
  components: {
    SoftProgress,
    // FontAwesomeIcon
  },
  props: {
    darkMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      faLaravel,
    };
  },
  computed: {
    skills() {
      return this.$store.state.frameworks;
    }
  }
};
</script>