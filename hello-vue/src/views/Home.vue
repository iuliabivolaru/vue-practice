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
                A moment ago...
              </p>
            </div>

            <div class="message-body" v-text="status.body"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      statuses: [
        {
          user: {
            name: "John"
          },
          body: "Story of my life"
        },
        {
          user: {
            name: "Janine Doe"
          },
          body: "Second story of my life"
        }
      ]
    };
  }
};
</script>