<template>
  <footer class="py-3 footer">
    <div class="container-fluid">
      <div class="row align-items-center justify-content-lg-between">
        <div class="mb-4 col-lg-6 mb-lg-0">
          <div
            class="text-sm text-center copyright text-muted"
            :class="this.$store.state.isRTL ? 'text-lg-end' : 'text-lg-start'"
          >
            ©
            {{ new Date().getFullYear() }}, made by me
            <i class="fa fa-heart"></i> - Theme by 
            <a
              href="https://www.creative-tim.com"
              class="font-weight-bold"
              target="_blank"
              >Creative Tim</a
            >
          </div>
        </div>
        <div class="col-lg-6">
          <ul
            class="nav nav-footer justify-content-center justify-content-lg-end"
          >
            <li class="nav-item">
              <a
                :href="$store.state.socials.linkedIn"
                class="nav-link text-muted"
                target="_blank"
                ><i class="fab fa-linkedin"></i></a
              >
            </li>
            <li class="nav-item">
              <a
                :href="$store.state.socials.mastodon"
                rel="me"
                class="nav-link text-muted"
                target="_blank"
                ><i class="fab fa-mastodon"></i></a
              >
            </li>
            <li class="nav-item">
              <a
                :href="$store.state.socials.github"
                rel="me"
                class="nav-link text-muted"
                target="_blank"
                ><i class="fab fa-github"></i></a
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/profile"
                class="nav-link text-muted"
                target="_blank"
                >Profile</router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/blog"
                class="nav-link text-muted"
                target="_blank"
                >Blog</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
};
</script>
