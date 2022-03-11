(self["webpackChunkmy_webpack_demo"] = self["webpackChunkmy_webpack_demo"] || []).push([["index"],{

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// import Print from './print';

async function getComponent() {
  const element = document.createElement("div");
  const { default: _ } = await __webpack_require__.e(/*! import() */ "vendors").then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ 486, 23));
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(138));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNzE1ZTU0MjM0MDg3YjA0ODAwMWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxhQUFhLFFBQVEsNkhBQWdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBQcmludCBmcm9tICcuL3ByaW50JztcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29tcG9uZW50KCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgeyBkZWZhdWx0OiBfIH0gPSBhd2FpdCBpbXBvcnQoXCJsb2Rhc2hcIik7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi5pbm5lckhUTUwgPSBcIkNsaWNrIG1lIGFuZCBjaGVjayB0aGUgY29uc29sZSFcIjtcbiAgLy8gZWxlbWVudC5vbmNsaWNrID0gUHJpbnQuYmluZChudWxsLCAnSGVsbG8gd2VicGFjayEnKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChidG4pO1xuICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbXCJIZWxsb1wiLCBcIndlYnBhY2tcIl0sIFwiIFwiKTtcbiAgcmV0dXJuIGVsZW1lbnQ7O1xufVxuXG5nZXRDb21wb25lbnQoKS50aGVuKChjb21wb25lbnQpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=