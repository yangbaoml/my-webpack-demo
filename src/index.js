// import Print from './print';

async function getComponent() {
  const element = document.createElement("div");
  const { default: _ } = await import("lodash");
  const btn = document.createElement("button");
  btn.innerHTML = "Click me and check the console!";
  // element.onclick = Print.bind(null, 'Hello webpack!');
  element.appendChild(btn);
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  return element;;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
