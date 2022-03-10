import printMe from "./print.js";

async function getComponent() {
  const element = document.createElement("div");
  const { default: _ } = await import("lodash");
  const btn = document.createElement("button");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;
  element.appendChild(btn);
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  return element;;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
