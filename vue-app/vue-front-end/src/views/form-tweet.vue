 <template>   
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
</template>
<script>
import moment from "moment";
import axios from "axios";
export default {
    name: 'form-tweet',
    data() {
        return {
            tweet: { title: "", content: "", createdAt: null, likesNumber: 0 },
            error: { titleError: "", contentError: "" }
        };
    },
    methods: {
        postTweet() {
            const params = new URLSearchParams();
            params.append("title", this.tweet.title);
            params.append("content", this.tweet.content);
            params.append("createdAt", moment().toDate());
            params.append("likesNumber", this.tweet.likesNumber);
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
        clearForm() {
            this.tweet = { title: "", content: "" };
            this.error = { titleError: "", contentError: "" };
        }
    }
}
</script>