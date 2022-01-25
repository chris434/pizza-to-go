import { useState, useRef } from "react";

function AuthForm({
  properties,
  header,
  submitText,
  errors,
  submitHandler,
  bottomComponent,
}: any) {
  const [error, setError] = useState<any>(errors);
  const [inputs, setInputs] = useState<any>({});
  const ref = useRef<any>([]);

  let errorTrue = true;

  const setErrorMessage = (message: string, text: string) => {
    setError((state: any) => ({
      ...state,
      [text]: message,
    }));
  };
  const dbHandler = async () => {
    // const { errors, statues } = await submitHandler();
    // if (statues) {
    //   return;
    // }
    // errors.forEach((error: any) => {
    //   setErrorMessage(error.field, error.message);
    // });
  };
  const onSubmit = (e: any) => {
    e.preventDefault();

    let scroll = false;
    const scrollTo = (i: number) => {
      if (!scroll) {
        ref.current[i].scrollIntoView({ behavior: "smooth" });
        scroll = true;
      }
    };

    properties.map((property: any, i: number) => {
      const { text, optional } = property;

      if (property?.addOn && inputs?.[text]) {
        const message = property.addOn(inputs[text]);
        message ? scrollTo(i) : null;
        return setErrorMessage(message, text);
      }

      if (!optional && (!inputs?.[text] || !inputs[text])) {
        scrollTo(i);
        return setErrorMessage(`${text.replace(/_/g, " ")} is required`, text);
      }
      errorTrue = false;
      return setErrorMessage("", text);
    });

    if (!errorTrue) {
      dbHandler();
    }
  };
  const inputChange = (e: any) => {
    if (e?.target) {
      const value =
        e.target.type === "checkbox" && e.target?.checked
          ? true
          : e.target.type === "checkbox"
          ? false
          : e.target.value;

      setInputs({
        ...inputs,
        [e.target.id]: value,
      });
    }
  };

  return (
    <div className="flex justify-center w-full  mt-10 mb-10">
      <form
        className="flex flex-col justify-center md:w-3/4 w-screen p-2 shadow-lg shadow-gray-600/50"
        onSubmit={onSubmit}>
        <h2 className="text-center text-5xl m-3">{header}</h2>
        <hr />
        <div className="flex ml-auto mr-auto flex-col justify-end sm:w-3/4 w-full">
          {properties.map((property: any, i: number) => {
            ref.current.push();
            const {
              type,
              text,
              addOn,
              label,
              custom,
              optional,
              bottomInfo,
              placeholder,
            } = property;

            return (
              <section
                ref={(element) => (ref.current[i] = element)}
                className="flex flex-col sm:w-3/4 w-full mr-auto ml-auto">
                <div className="flex relative">
                  <label className="self-center" htmlFor={text}>
                    {label}
                  </label>
                  {!custom ? (
                    <input
                      className=" border-2 border-black-400 p-3 m-4 sm:text-2xl  text-sm w-full"
                      onChange={inputChange}
                      id={text}
                      type={type}
                      placeholder={placeholder ? placeholder : text}
                    />
                  ) : (
                    custom(
                      inputChange,
                      "border-2 border-black-400 p-3 m-4 sm:text-2xl  text-sm w-full"
                    )
                  )}
                </div>
                {!optional || addOn ? (
                  <>
                    {error[text]?.customHtml ? (
                      error[text].message
                    ) : (
                      <small className="text-center text-red-600 sm:text-lg text-sm">
                        {error[text]}
                      </small>
                    )}

                    {bottomInfo ? bottomInfo : null}
                  </>
                ) : null}
              </section>
            );
          })}
        </div>

        <input
          className="mt-5 bg-red-600 text-white sm:text-2xl text-sm p-3 sm:w-1/4 w-3/4 ml-auto mr-auto border-4 border-red-600 hover:text-red-600 hover:bg-transparent hover:cursor-pointer"
          type="submit"
          value={submitText}
        />
        {bottomComponent ? bottomComponent : null}
      </form>
    </div>
  );
}
export default AuthForm;
