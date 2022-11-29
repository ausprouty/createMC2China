<template>
  <h2>Header</h2>
  <div v-html="this.text"></div>
  <div><button @click="revealVideo">This is a reveal video button</button></div>
  <a href=" javascript:revealVideo()">Something</a>

  <h3>Footer</h3>
</template>

<script>
export default {
  props: ["jsonPage"],
  data() {
    return {
      text: ' < div > <button @click="nextPage(2)"> GEt Page 2</button></>',
    };
  },
  methods: {
    showMessage(message) {
      alert(message);
    },
    nextPage(page_json) {
      console.log("in nextPage");
      this.$router.push({
        name: "mc2",
        params: {
          jsonPage: page_json,
        },
      });
    },
    getJsonPage() {
      console.log("in get JsonPage");
      var page_json = null;
      if (typeof this.$route.params.jsonPage !== "undefined") {
        page_json = this.$route.params.jsonPage;
      }
      if (!page_json) {
        if (localStorage("mc2PageJson")) {
          page_json = localStorage.getItem("mc2PageJson");
        }
      }
      if (!page_json) {
        page_json = 1;
      }
      localStorage.setItem("mc2PageJson", page_json);
      console.log(page_json);
      return page_json;
    },
  },
  async mounted() {
    try {
      let pageJson = this.getJsonPage();
      console.log(pageJson);
      fetch("../content/test" + pageJson + ".json")
        .then((response) => response.json())
        .then((data) => (this.text = data.text));
    } catch (error) {
      console.log("there was an error");
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
