import { FC, ReactNode } from "react";
import { RxCross2 } from "react-icons/rx";

const Modal: FC<{ children: ReactNode; onClose: () => void }> = ({
  children,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 z-10 flex justify-center items-center ">
      <div className="bg-white p-4 rounded shadow-lg flex flex-col relative w-full md:max-w-[30rem] sm:max-w-[25rem] max-w-[21rem]">
        {children}
        <button
          className="absolute top-1.5 right-1.5 text-gray-500 cursor-pointer hover:textgray-700 text-xl"
          onClick={onClose}
        >
          <RxCross2 />
        </button>
      </div>
    </div>
  );
};

export default Modal;
