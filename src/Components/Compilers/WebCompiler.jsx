import { useState } from "react";

import Editor from "@monaco-editor/react";

export default function WebCompiler({
    compilerType,
}) {

    // SEPARATE STATES

    const [htmlCode, setHtmlCode] =
        useState(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Frontend Editor</title>
</head>
<body>
  <h1>This is the best frontend editor & compiler</h1>
</body>
</html>
`);

    const [cssCode, setCssCode] =
        useState(`
body{
  background:black;
  color:white;
}
`);

    const [jsCode, setJsCode] =
        useState(`
const fruits = ["Apple", "Banana", "Orange"];

fruits.forEach((fruit) => {
  console.log(fruit);
});
`);

    const [tailwindCode, setTailwindCode] =
        useState(`

<div class="min-h-screen flex items-center justify-center bg-gray-900 text-white">
  <div class="text-center">
    <h1 class="text-4xl font-bold mb-2 hover:underline cursor-pointer">
      Hello Tailwind
    </h1>
    <p class="text-gray-400 animate-pulse">
      Build modern UI faster.
    </p>
  </div>
</div>

`);

    // CURRENT CODE

    const currentCode =
        compilerType === "html"
            ? htmlCode
            : compilerType === "css"
                ? cssCode
                : compilerType === "javascript"
                    ? jsCode
                    : tailwindCode;

    // SET CURRENT CODE

    const handleChange = (value) => {

        if (compilerType === "html") {
            setHtmlCode(value || "");
        }

        if (compilerType === "css") {
            setCssCode(value || "");
        }

        if (compilerType === "javascript") {
            setJsCode(value || "");
        }

        if (compilerType === "tailwind") {
            setTailwindCode(value || "");
        }
    };

    // NORMAL PREVIEW

    const normalPreview = `
  <!DOCTYPE html>

  <html>

  <head>

  <style>
  ${cssCode}
  </style>

  </head>

  <body>

  ${htmlCode}

  <script>
  ${jsCode}
  </script>

  </body>

  </html>
  `;

    // TAILWIND PREVIEW

    const tailwindPreview = `
  <!DOCTYPE html>

  <html>

  <head>

  <script src="https://cdn.tailwindcss.com"></script>

  </head>

  <body>

  ${tailwindCode}

  </body>

  </html>
  `;

    return (

        <div className="
    grid
    grid-cols-1
    lg:grid-cols-2
    gap-4
    ">

            {/* EDITOR */}

            <div className="
      rounded-2xl
      overflow-hidden
      border
      border-gray-800
      ">

                <Editor

                    key={compilerType}

                    height="70vh"

                    theme="vs-dark"

                    language={
                        compilerType === "tailwind"
                            ? "html"
                            : compilerType
                    }

                    value={currentCode}

                    onChange={handleChange}

                    options={{
                        minimap: {
                            enabled: false,
                        },

                        fontSize: 15,
                    }}

                />

            </div>

            {/* PREVIEW */}

            <iframe

                srcDoc={
                    compilerType === "tailwind"
                        ? tailwindPreview
                        : normalPreview
                }

                title="preview"

                sandbox="allow-scripts"

                className="
        w-full
        h-[70vh]
        rounded-2xl
        border
        border-gray-800
        bg-white
        "

            />

        </div>
    );
}