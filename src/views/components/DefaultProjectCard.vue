<template>
  <div class="mb-4 col-xl-4 col-md-6 mb-xl-0">
    <div class="card card-blog card-plain">
      <div class="position-relative">
        <a class="shadow-xl d-block border-radius-xl">
          <img
            :src="image"
            alt="img-blur-shadow"
            class="shadow img-fluid border-radius-xl"
          />
        </a>
      </div>
      <div class="px-1 pb-0 card-body">
        <p class="mb-2 text-sm text-gradient text-dark">{{ label }}</p>
        <a href="javascript:;">
          <h5>{{ title }}</h5>
        </a>
        <p class="mb-4 text-sm">
          {{ description }}
        </p>
        <div class="d-flex align-items-center justify-content-between">
          <a :href="`/portfolios/${action.route}`"
            type="button"
            class="mb-0 btn btn-sm"
            :class="`btn-outline-${action.color}`"
          >
            {{ action.label }}
          </a>
          <div class="mt-2 avatar-group2">
            <a
              v-for="({ image:img, name }, index) of frameworks"
              :key="index"
              href="javascript:;"
              class="avatar dev-icon with-tooltip"
              :title="name"
            >
              <img :alt="img" :src="require(`@/assets/img/small-logos/${img}`)" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultProjectCard",
  props: {
    image: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "Default Project Card",
    },
    description: {
      type: String,
      default: "",
    },
    action: {
      type: Object,
      route: String,
      color: String,
      label: String,
      default: () => {},
    },
    frameworks: {
      type: Array,
      image: String,
      name: String,
      default: () => [],
    },
  },
};
</script>


<style>
.dev-icon {
  width: 20px !important;
  height: 20px !important;
  margin: 0 3px;
}
</style>