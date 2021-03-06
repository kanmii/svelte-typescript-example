import App from "./components/App/App.svelte";
import "./styles/global.scss";

const app = new App({
  target: document.getElementById("root") as HTMLElement,
  props: {
    name: "world",
  },
});

export default app;
