<template>
  <div class="card h-100">
    <div class="p-3 pb-0 card-header">
      <div class="row">
        <div class="col-md-12 d-flex align-items-center">
          <h6 class="mb-0">{{ title }}</h6>
        </div>
      </div>
    </div>
    <div class="p-3 card-body">
      <p class="text-sm">
        {{ description }}
      </p>
      <div class="my-4">
        <div class="form-group form-group-sm">
          <label>Let me a message</label>
          <input
            type="text"
            class="form-control"
            placeholder="Hi, I want to be in touch..."
            v-model="message"
          />
        </div>
        <div class="d-flex justify-content-center" style="gap: 5px">
          <a
            :href="`https://tecnomanu.t.me/${message}`"
            target="_blank" class="mb-0 btn btn-info btn-sm w-100 bg-gradient-info">
            <font-awesome-icon :icon="faTelegram" /> Telegram
          </a>
          <a
            :href="`https://wa.me/+542944636430?query=${message}`"
            target="_blank" class="mb-0 btn btn-success btn-sm w-100 bg-gradient-success">
            <font-awesome-icon :icon="faWhatsapp" /> WhatsApp
          </a>
        </div>
      </div>
      <!-- <ul class="list-group">
        <li class="pt-0 text-sm border-0 list-group-item ps-0">
          <strong class="text-dark">Full Name:</strong> &nbsp;
          {{ info.fullName }}
        </li>
        <li class="text-sm border-0 list-group-item ps-0">
          <strong class="text-dark">Mobile:</strong> &nbsp; {{ info.mobile }}
        </li>
        <li class="text-sm border-0 list-group-item ps-0">
          <strong class="text-dark">Email:</strong> &nbsp; {{ info.email }}
        </li>
        <li class="text-sm border-0 list-group-item ps-0">
          <strong class="text-dark">Location:</strong> &nbsp;
          {{ info.location }}
        </li>
        <li class="pb-0 border-0 list-group-item ps-0">
          <strong class="text-sm text-dark">Social:</strong> &nbsp;
          <a
            v-for="({ icon, link }, index) of social"
            :key="index"
            class="py-0 mb-0 btn-simple ps-1 pe-2"
            :href="link"
          >
            <font-awesome-icon :icon="icon" />
          </a>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons";

export default {
  name: "ProfileActionContact",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      faWhatsapp,
      faTelegram,
      message: ''
    }
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    }
  },
};
</script>
