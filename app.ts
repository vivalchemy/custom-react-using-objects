type ReactElement = {
  type: string;
  props?: {
    [key: string]: string;
  };
  children?: ReactElement[] | string;
}
const reactElement: ReactElement = {
  type: "div",
  children: [{
    type: "a",
    props: {
      href: "https://reactjs.org/",
      target: "_blank",
      class: "anchor text-2xl text-blue-500 hover:text-blue-700"
    },
    children: "reactjs.org"
  },
  {
    type: "p",
    children: "React",
  }]
};

const app = document.getElementById("root");

function customRender(reactElement: ReactElement, container: HTMLElement | null) {
  // create an element
  const el = document.createElement(reactElement.type);

  // add attributes
  if (reactElement.props) {
    for (const key in reactElement.props) {
      if (key === "children") continue
      el.setAttribute(key, reactElement.props[key]);
    }
  }

  // add the children to the element
  if (typeof reactElement.children === "string") {
    el.appendChild(document.createTextNode(reactElement.children));
  } else {
    reactElement.children?.forEach((child: ReactElement) => {
      customRender(child, el);
    }
    )
  }
  container?.appendChild(el);
}

customRender(reactElement, app)
