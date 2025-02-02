var reactElement = {
  type: "div",
  children: [
    {
      type: "a",
      props: {
        href: "https://reactjs.org/",
        target: "_blank",
        class: "anchor text-2xl text-blue-500 hover:text-black",
      },
      children: "reactjs.org",
    },
    {
      type: "p",
      children: "React",
    },
  ],
};
var app = document.getElementById("root");
function customRender(reactElement, container) {
  var _a;
  // create an element
  var el = document.createElement(reactElement.type);
  // add attributes
  if (reactElement.props) {
    for (var key in reactElement.props) {
      if (key === "children") continue;
      el.setAttribute(key, reactElement.props[key]);
    }
  }
  // add the children to the element
  if (typeof reactElement.children === "string") {
    el.appendChild(document.createTextNode(reactElement.children));
  } else {
    (_a = reactElement.children) === null || _a === void 0
      ? void 0
      : _a.forEach(function (child) {
          customRender(child, el);
        });
  }
  container === null || container === void 0
    ? void 0
    : container.appendChild(el);
}
customRender(reactElement, app);
