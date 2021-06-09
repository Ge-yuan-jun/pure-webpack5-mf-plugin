// import { render, h } from "vue";
const button = {
  name: "btn-component",
  render (h) {
    return h(
      "button",
      {
        id: "btn-primary",
      },
      "Hello World"
    );
  },
};
export default button;
