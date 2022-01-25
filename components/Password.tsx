import useToggle from "../components/hooks/useToggle";

function Password({ event, placeholder, id, getValue }: any) {
  const [inputType, setInputType] = useToggle(false);
  const onChange = (e: any) => {
    getValue ? getValue(e.target.value) : null;
    event(e);
  };
  return (
    <>
      <input
        className="border-2 border-black-400 p-3 m-4 sm:text-2xl  text-sm w-full"
        onChange={onChange}
        id={id ? id : "password"}
        type={inputType ? "text" : "password"}
        placeholder={placeholder ? placeholder : "password"}
      />
      <button
        type="button"
        onClick={() => setInputType()}
        className="absolute top-6 right-6 bg-white sm:text-2xl  text-sm pl-2 pr-2 text-sky-600">
        {inputType ? "hide" : "show"}
      </button>
    </>
  );
}
export default Password;
