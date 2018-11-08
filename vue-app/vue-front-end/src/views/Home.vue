<template>
    <div class="container" style="padding: 40px; padding-left: 10px; ">
      <div class="columns">
        <div class="column is-full" style="background-color:white">
          <div class="message">
            <div class="message-header" style="background-color:white">
              <input class="input is-rounded" type="text" placeholder="What's your story?" v-model="tweet.title">
              {{tweet.title}}
            </div>
            <div class="message-body" style="background-color:white;padding:0.1em 1.0em;">
              <textarea class="textarea is-rounded" type="text" placeholder="Write some thoughts here..." v-model="tweet.content"></textarea>
            </div>
              <a class="button is-normal is-pulled-right" style="margin-top:1%;padding:0.5em 1.0em;margin-right:1.9%" v-on:click="postTweet()">Post</a>
          </div>
        </div>
      </div>
          <div class="message" v-for="(t, index) in tweets" v-bind:key="index">
            <div class="message-header">
              <p>
                 {{t.title}} 
              </p>
              <p>
                {{postedOn(t)}}
              </p>
            </div>
            <div class="message-body" v-text="t.content">
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
      tweets: [],
      tweet: {}
    };
  },
  created() {
    //this.postTweet();
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
          return response.data;
        })
        .catch(error => {
          console.log("Error" + JSON.stringify(error.response));
          return error;
        });
    },

    getTweets() {
      axios.get("http://localhost:3000/posts").then(response => {
        console.log(response.data);
        this.tweets = response.data;
        return;
      });
    }
  }
};
</script>