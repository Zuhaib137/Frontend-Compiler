export default function CompilerDropdown({
    compilerType,
    setCompilerType,
}) {

    return (

        <select

            value={compilerType}

            onChange={(e) =>
                setCompilerType(e.target.value)
            }

            className="
      bg-[#1A1A1D]
      border
      border-gray-700
      text-white
      px-4
      py-3
      rounded-xl
      outline-none
      cursor-pointer
      "
        >

            <option value="react">
                React
            </option>

            <option value="html">
                HTML
            </option>

            <option value="css">
                CSS
            </option>

            <option value="javascript">
                JavaScript
            </option>

            <option value="tailwind">
                TailwindCSS
            </option>

        </select>
    );
}