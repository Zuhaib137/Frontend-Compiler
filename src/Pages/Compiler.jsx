import { useState } from "react";

import CompilerDropdown from "../../src/Components/CompilerDropdown";

import ReactCompiler from "../../src/Components/Compilers/ReactCompiler";

import WebCompiler from "../../src/Components/Compilers/WebCompiler";

const Compiler = () => {

    // DEFAULT REACT
    const [compilerType, setCompilerType] =
        useState("react");

    return (
        <div className="
    min-h-screen
    bg-[#0D0D0F]
    text-white
    p-4
    ">

            {/* TOPBAR */}

            <div className="mb-4">

                <CompilerDropdown
                    compilerType={compilerType}
                    setCompilerType={setCompilerType}
                />

            </div>

            {/* COMPILERS */}

            {
                compilerType === "react" ? (

                    <ReactCompiler />

                ) : (

                    <WebCompiler
                        compilerType={compilerType}
                    />

                )
            }

        </div>
    );
}

export default Compiler;