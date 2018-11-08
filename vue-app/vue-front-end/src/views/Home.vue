<template>
    <div class="container" style="padding: 40px; padding-left: 10px; ">
      <div class="columns">
        <div class="column">
          <div class="message" v-for="status in statuses" v-bind:key="status.title">
            <div class="message-header">
              <p>
                 {{status.title}} 
              </p>
              <p>
                {{postedOn(status)}}
              </p>
            </div>
            <div class="message-body" v-text="status.content">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
import { error } from "util";
import { Tweet } from "../Tweet";
export default {
  name: "statuses",
  data() {
    return {
      statuses: [],
      tweet: {
        title: "front end test",
        content: "front end test content"
      }
    };
  },
  created() {
    // this.postTweet();
    this.getTweets();
  },
  methods: {
    postedOn(status) {
      return moment(status.created_at).fromNow();
    },
    postTweet() {
      const params = new URLSearchParams();
      params.append("title", this.tweet.title);
      params.append("content", this.tweet.content);
      axios({
        method: "post",
        url: "http://localhost:3000/posts",
        data: params
      })
        .then(response => {
          console.log(response.data);
          return;
        })
        .catch(error => {
          console.log("Error" + JSON.stringify(error.response));
        });
    },

    getTweets() {
      axios.get("http://localhost:3000/posts").then(response => {
        console.log(response.data);
        this.statuses = response.data;
      });
    }
  }
};
</script>