<template>
    <div class="container" style="padding: 40px; padding-left: 10px;">
      <div class="columns">
        <div class="column is-full">
          <form-tweet></form-tweet>
        </div>
      </div>
          <div class="message" v-for="(t, index) in tweets" v-bind:key="index">
            <div class="message-header background">
              <p>
                 {{t.title}} 
              </p>
              <p>
                {{postedOn(t)}}
              </p>
            </div>
            <div class="message-body" v-text="t.content">
            </div>
            <i class="fa fa-thumbs-up" style="margin-left:2%;margin-bottom:2%" v-on:click="like(t)">  {{t.likesNumber}} people</i>
          <div>
            <input class="input" placeholder="Write a comment...">
          </div>
      </div>
    </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
import formTweet from "./form-tweet";
import { error } from "util";
import { Tweet } from "../Tweet";
export default {
  name: "tweets",
  components: {
    formTweet
  },
  data() {
    return {
      tweets: [],
      tweet: { title: "", content: "", createdAt: null, likesNumber: 0 }
    };
  },
  mounted() {
    this.getTweets();
  },
  methods: {
    postedOn(tweet) {
      return moment(tweet.createdAt).fromNow();
    },
    like(tweet) {
      console.log("put tweet");
      const params = new URLSearchParams();
      params.append("title", tweet.title);
      params.append("content", tweet.content);
      params.append("createdAt", tweet.createdAt);
      params.append("likesNumber", ++tweet.likesNumber);
      axios
        .post("http://localhost:3000/likes", params)
        .then(response => {
          console.log("PUT response:" + JSON.stringify(response));
          return response.data;
        })
        .catch(error => {
          return error;
        });
    },
    getTweets() {
      axios.get("http://localhost:3000/posts").then(response => {
        this.tweets = response.data;
        return;
      });
    }
  }
};
</script>