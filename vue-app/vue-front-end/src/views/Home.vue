<template>
    <div class="container" style="padding: 40px; padding-left: 10px; ">
      <div class="columns">
        <div class="column">
          <div class="message">
            <div class="message-header" v-for="status in statuses" v-bind:key="status">
              <p>
                 {{status.content}} said...
              </p>
              <p>
                <!-- {{postedOn(status)}} -->
              </p>
            </div>

            <div class="message-body" ></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
export default {
  name: "statuses",
  data() {
    return {
      statuses: []
    };
  },
  created() {
    axios.get("http://localhost:3000/posts").then(response => {
      console.log(response.data);
      this.statuses = response.data;
    });
  },
  methods: {
    postedOn(status) {
      return moment(status.created_at).fromNow();
    }
  }
};
</script>