<template>
  <div>
    <div class="container-fluid">
      <div
        class="mt-4 page-header min-height-300 border-radius-xl"
        :style="{
          backgroundImage:
            'url(' + require('@/assets/img/curved-images/curved8.jpg') + ')',
          backgroundPositionY: '50%',
        }"
      >
        <span class="mask2 bg-gradient-info opacity-6"></span>
      </div>
      <div class="mx-4 overflow-hidden card card-body blur shadow-blur mt-n6">
        <div class="row gx-4">
          <div class="col-auto">
            <div class="avatar avatar-xl position-relative">
              <img
                src="@/assets/img/manu-profile.jpg"
                alt="profile_image"
                class="shadow-sm w-100 border-radius-lg"
              />
            </div>
          </div>
          <div class="col-auto my-auto">
            <div class="h-100">
              <h5 class="mb-1">Manuel Dario Bruña</h5>
              <p class="mb-0 text-sm font-weight-bold">
                Software Developer, Self-taught, Optimistic & Deeply
                Curious
              </p>
            </div>
          </div>
          <div class="mx-auto mt-3 col-lg-4 col-md-3 my-sm-auto ms-sm-auto me-sm-0 text-right">
            <a href="#" class="btn bg-gradient-info btn-icon w-100">
              <span class="btn-inner--icon yr-2" style="vertical-align: middle; font-size: 1rem; margin-right: 5px"><i class="ni ni-cloud-download-95"></i></span>
              <span class="btn-inner--text">Download my CV</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="py-4 container-fluid">
      <div class="mt-3 row">
        <div class="col-12mt-md-0">
          <div class="card h-100">
            <div class="p-3 card-body">
              <h4>Hi and welcome to my Profile Webpage.</h4>
              <p class="text-sm">
                I'm FullStack Developer with 8+ years of experience in campus,
                8+ years with Laravel (PHP), 6+ years with Angular (Typescript y
                Javascript) and +2 years en NodeJs y React. I love developing
                solutions for companies, working with frontend frameworks such
                as Angular, React or VueJs, and Laravel or NodeJs for the
                backend, from my beloved city San Carlos de Bariloche.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3 row">
        <div class="mt-4 col-12 col-md-6 col-xl-6 mt-xl-0">
          <div class="row">
            <div>
              <profile-info-card
                title="Profile Information"
                description="Contact me direct"
                :info="{
                  fullName: 'Manuel Dario Bruña',
                  mobile: '(+54) 294 4636430',
                  email: 'manu@incubit.com.ar',
                  location: 'Argentina',
                }"
                :social="this.$store.state.socials"
                :action="{
                  route: 'javascript:;',
                  tooltip: 'Edit Profile',
                }"
              />
            </div>
            <div class="mt-4">
              <profile-action-contact
                title="Contact me direct"
                description="You can contact me with WhatsApp or Telegram direct."
              ></profile-action-contact>
            </div>
          </div>
        </div>
        <div class="mt-4 col-12 col-md-6 col-xl-6 mt-xl-0">
          <skills-table></skills-table>
          <!-- <div class="card h-100">
            <div class="p-3 pb-0 card-header">
              <h6 class="mb-0">Conversations</h6>
            </div>
            <div class="p-3 card-body">
              <ul class="list-group">
                <li
                  class="px-0 mb-2 border-0 list-group-item d-flex align-items-center"
                >
                  <soft-avatar
                    class="me-3"
                    :img="sophie"
                    alt="kal"
                    border-radius="lg"
                    shadow="regular"
                  />
                  <div
                    class="d-flex align-items-start flex-column justify-content-center"
                  >
                    <h6 class="mb-0 text-sm">Sophie B.</h6>
                    <p class="mb-0 text-xs">Hi! I need more information..</p>
                  </div>
                  <a
                    class="mb-0 btn btn-link pe-3 ps-0 ms-auto"
                    href="javascript:;"
                    >Reply</a
                  >
                </li>
                <li
                  class="px-0 mb-2 border-0 list-group-item d-flex align-items-center"
                >
                  <soft-avatar
                    class="me-3"
                    :img="marie"
                    alt="kal"
                    border-radius="lg"
                    shadow="regular"
                  />
                  <div
                    class="d-flex align-items-start flex-column justify-content-center"
                  >
                    <h6 class="mb-0 text-sm">Anne Marie</h6>
                    <p class="mb-0 text-xs">Awesome work, can you..</p>
                  </div>
                  <a
                    class="mb-0 btn btn-link pe-3 ps-0 ms-auto"
                    href="javascript:;"
                    >Reply</a
                  >
                </li>
                <li
                  class="px-0 mb-2 border-0 list-group-item d-flex align-items-center"
                >
                  <soft-avatar
                    class="me-3"
                    :img="ivana"
                    alt="kal"
                    border-radius="lg"
                    shadow="regular"
                  />
                  <div
                    class="d-flex align-items-start flex-column justify-content-center"
                  >
                    <h6 class="mb-0 text-sm">Ivanna</h6>
                    <p class="mb-0 text-xs">About files I can..</p>
                  </div>
                  <a
                    class="mb-0 btn btn-link pe-3 ps-0 ms-auto"
                    href="javascript:;"
                    >Reply</a
                  >
                </li>
                <li
                  class="px-0 mb-2 border-0 list-group-item d-flex align-items-center"
                >
                  <soft-avatar
                    class="me-3"
                    :img="peterson"
                    alt="kal"
                    border-radius="lg"
                    shadow="regular"
                  />
                  <div
                    class="d-flex align-items-start flex-column justify-content-center"
                  >
                    <h6 class="mb-0 text-sm">Peterson</h6>
                    <p class="mb-0 text-xs">Have a great afternoon..</p>
                  </div>
                  <a
                    class="mb-0 btn btn-link pe-3 ps-0 ms-auto"
                    href="javascript:;"
                    >Reply</a
                  >
                </li>
                <li
                  class="px-0 border-0 list-group-item d-flex align-items-center"
                >
                  <soft-avatar
                    class="me-3"
                    :img="nick"
                    alt="kal"
                    border-radius="lg"
                    shadow="regular"
                  />
                  <div
                    class="d-flex align-items-start flex-column justify-content-center"
                  >
                    <h6 class="mb-0 text-sm">Nick Daniel</h6>
                    <p class="mb-0 text-xs">Hi! I need more information..</p>
                  </div>
                  <a
                    class="mb-0 btn btn-link pe-3 ps-0 ms-auto"
                    href="javascript:;"
                    >Reply</a
                  >
                </li>
              </ul>
            </div>
          </div> -->
        </div>
      </div>
      <div class="mt-4 row">
        <div class="col-12">
          <div class="mb-4 card">
            <div class="p-3 pb-0 card-header">
              <h6 class="mb-1">Projects</h6>
              <p class="text-sm">These are my latest projects, you can see them all in the <router-link to="/portfolio">Portfolio</router-link> section.</p>
            </div>
            <div class="p-3 card-body">
              <div class="row">
                <default-project-card
                  v-for="project of this.$store.state.portfolios"
                  v-bind:key="project._id"
                  :title="project.title"
                  :image="this.$store.state.apiBase + project.thumbnail.data.attributes.url"
                  :label="project.label"
                  :description="project.brief"
                  :frameworks="project.frameworks.data.map((f) =>{
                    return f.attributes
                  })"
                  :action="{
                    color: 'success',
                    label: 'View Project',
                    route: project.slug
                  }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileInfoCard from "./components/ProfileInfoCard.vue";
import ProfileActionContact from "./components/ProfileActionContact.vue";
import DefaultProjectCard from "./components/DefaultProjectCard.vue";
import SkillsTable from "./components/SkillsTable.vue";
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";

export default {
  name: "ProfileOverview",
  components: {
    ProfileInfoCard,
    ProfileActionContact,
    SkillsTable,
    DefaultProjectCard,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  mounted() {
    this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip(this.$store.state.bootstrap);
  },
  beforeUnmount() {
    this.$store.state.isAbsolute = false;
  },
};
</script>
