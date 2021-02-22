<template>
  <div>
    <h3>Main App</h3>
    <Content />
    <Button />
  </div>
</template>

<script>
import Content from "./components/Content";
import Button from "./components/Button";
export default {
  components: {
    Content,
    Button,
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    inc () {
      this.count++
    }
  },
  components: {
    Content,
    Button,
  }
};
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
