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
          <tbody>
            <tr v-for="skill in skills" v-bind:key="skill._id">
              <td>
                <div class="d-flex px-2">
                  <div style="font-size: 1.3rem; margin-right: 7px">
                    <!-- <font-awesome-icon :icon="faLaravel" /> -->
                    <!-- <img
                      src="../../assets/img/small-logos/logo-invision.svg"
                      class="avatar avatar-sm rounded-circle me-2"
                      alt="spotify"
                    /> -->
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
                  <span class="me-2 text-xs font-weight-bold">{{skill.percent}}%</span>
                  <div>
                    <soft-progress
                      :color="skill.color"
                      variant="gradient"
                      :percentage="skill.percent"
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
      skills: [
        {name: "Laravel", color: 'danger', icon: 'laravel-plain', percent: '95'},
        {name: "Angular", color: 'danger', icon: 'angularjs-plain', percent: '95'},
        {name: "NestJs", color: 'danger', icon: 'nestjs-plain', percent: '80'},
        {name: "NodeJs", color: 'success', icon: 'nodejs-plain', percent: '80'},
        {name: "VueJs", color: 'success', icon: 'vuejs-plain', percent: '75'},
        {name: "React", color: 'info', icon: 'react-original', percent: '25'},
        {name: "SocketIO", color: 'dark', icon: 'socketio-original', percent: '65'},
        {name: "MongoDB", color: 'success', icon: 'mongodb-plain', percent: '90'},
        {name: "PostgresSQL", color: 'info', icon: 'postgresql-plain', percent: '90'},
        {name: "Docker", color: 'info', icon: 'docker-plain', percent: '90'},
      ]
    };
  },
};
</script>
