import router from "next/router";
import { FaArrowLeft } from "react-icons/fa";
function SubHeader({ header }: any) {
  return (
    <>
      <div className="flex sm:text-5xl text-2xl  ">
        <button onClick={() => router.back()}>
          <FaArrowLeft className="text-4xl m-5 curser-pointer" />
        </button>
        <h2 className="self-center mr-auto ml-auto ">{header}</h2>
      </div>
      <hr />
    </>
  );
}
export default SubHeader;
