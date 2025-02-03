import { motion } from "framer-motion";
import BottomAction from "./BottomAction";

const slideRightVariants = {
  hide: {
    opacity: 0.5,
    x: -300,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const MobileSidebar = ({ close }) => {
  return (
    <div className="z-30 fixed inset-0 bg-black bg-opacity-70 overflow-y-auto h-full w-full">
      <motion.div
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={slideRightVariants}
        className="w-full h-full"
      >
        <div className="md:hidden h-full w-full border-r pt-5 flex flex-col bg-white">
          <div className="flex items-center justify-between px-5">
            <div className="flex items-center">
              <img
                src="/assets/svg/logo.svg"
                width={0}
                height={0}
                alt="logo"
                className="w-4 h-4 md:w-7 md:h-7"
              />
              <h1 className="md:text-2xl font-bold ml-2 text-[#004146]">
                iPatient
              </h1>
            </div>

            <button onClick={close}>
              <img
                src="/assets/svg/close.svg"
                width={100}
                height={100}
                alt="close"
                className="w-5 h-5"
              />
            </button>
          </div>

          {/* <Actions /> */}

          <BottomAction />
        </div>
      </motion.div>
    </div>
  );
};

export default MobileSidebar;
