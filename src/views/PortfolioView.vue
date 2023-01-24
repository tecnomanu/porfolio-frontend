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
          <div class="col-auto my-auto">
            <div class="h-100">
              <h5 class="mb-1">{{ this.$route.params.slug }}</h5>
              <p class="mb-0 text-sm font-weight-bold">
                Software Developer, Self-taught, Optimistic & Deeply
                Curious
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "PortfolioView",
  components: {
  },
  data() { return{
    porfolio: {}
  }
  },
};
</script>
