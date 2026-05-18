import { Sandpack } from "@codesandbox/sandpack-react";

const ReactCompiler = () => {

  return (

    <div className="
    rounded-2xl
    overflow-hidden
    border
    border-gray-800
    ">

      <Sandpack

        template="react"

        theme="dark"

        files={{
          "/App.js": `
export default function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <p>Start building amazing apps.</p>
    </div>
  );
}
          `,
        }}

        options={{
          showNavigator: false,
          showTabs: false,
          editorHeight: "80vh",
        }}

      />

    </div>
  );
}

export default ReactCompiler;