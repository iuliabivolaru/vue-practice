<template>
    <div class="container" style="padding: 40px; padding-left: 10px;">
      <div class="columns">
        <div class="column is-full">
          <form @submit="checkForm" action="http://localhost:3000/posts" method="postTweet">
              <div>
                <input class="input is-rounded" type="text" placeholder="What's your story?" v-model="tweet.title">
              </div>
              <p class="help is-danger margin" v-if="error.titleError">{{error.titleError}}</p>
              <div>
                <textarea class="textarea is-rounded" style="margin-top:1%" type="text" placeholder="Write some thoughts here..." v-model="tweet.content"></textarea>
              </div>
              <p class="help is-danger margin" v-if="error.contentError">{{error.contentError}}</p>
                <input class="button is-normal is-pulled-right" type="submit" value="Post" style="margin-top:1%;margin-right:1.9%">
          </form>
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
          </div>
    </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
import { error } from "util";
import { Tweet } from "../Tweet";
export default {
  name: "tweets",
  data() {
    return {
      tweets: [],
      tweet: { title: "", content: "" },
      error: { titleError: "", contentError: "" }
    };
  },
  mounted() {
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
          return response.data;
        })
        .catch(error => {
          return error;
        });
      this.clearForm();
    },
    checkForm(e) {
      if (!this.tweet.title) {
        this.error.titleError = "Please choose a title for your story";
      }
      if (!this.tweet.content) {
        this.error.contentError = "Please write a few ideas from your story";
      }
      if (this.tweet.title && this.tweet.content) {
        this.postTweet();
      }
      e.preventDefault();
    },
    getTweets() {
      axios.get("http://localhost:3000/posts").then(response => {
        this.tweets = response.data;
        return;
      });
    },
    clearForm() {
      this.tweet = { title: "", content: "" };
      this.error = { titleError: "", contentError: "" };
    }
  }
};
</script>