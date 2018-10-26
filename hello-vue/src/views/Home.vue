<template>
    <div class="container" style="padding: 40px; padding-left: 10px; ">
      <div class="columns">
        <div class="column">
          <div class="message" v-for="status in statuses">
            <div class="message-header">
              <p>
                {{status.user.name}} said...
              </p>
              <p>
                {{postedOn(status)}}
              </p>
            </div>

            <div class="message-body" v-text="status.body"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import moment from "moment";
export default {
  name: "statuses",
  data() {
    return {
      statuses: [
        {
          user: {
            name: "John"
          },
          body: "Story of my life",
          created_at: "2018-10-26"
        },
        {
          user: {
            name: "Janine Doe"
          },
          body: "Second story of my life",
          created_at: "2018-10-25"
        }
      ]
    };
  },
  methods: {
    postedOn(status) {
      return moment(status.created_at).fromNow();
    }
  }
};
</script>