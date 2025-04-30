import { motion, AnimatePresence } from "motion/react";
import { KeyboardEvent, useEffect } from "react";
import { ProductTypes } from "./Grid";
import { optimizeCloudinaryUrl } from "@/lib/image-utils";

interface ProductModalProps {
  product: ProductTypes | null;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: {
    y: 50,
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    scale: 0.95,
    transition: {
      ease: "easeIn",
      duration: 0.15,
    },
  },
};

export default function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-[-1rem] inset-0 z-50 flex items-center justify-center md:justify-end p-4 bg-black h-[105%] bg-opacity-75"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={backdropVariants}
      >
        <div
          className="absolute inset-0"
          onClick={onClose}
          aria-label="Close modal"
        />

        <motion.div
          className="relative w-full md:w-[50%] max-w-4xl bg-white md:float-right  p-2 rounded-lg shadow-xl overflow-hidden max-h-[90vh] flex flex-col justify-center items-center"
          variants={modalVariants}
        >
          {/* Close button */}
          <motion.button
            onClick={onClose}
            className="absolute top-2 right-2 z-10 p-2 text-gray-500 hover:text-gray-700"
            aria-label="Close modal"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>

          {/* Image section */}
          <motion.div
            className="w-full md:w-1/2 h-64 md:h-auto bg-gray-200 rounded-lg float-right flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src={optimizeCloudinaryUrl(product.baseImageUrl, 50)}
              alt={product.name}
              className="object-contain w-full h-full max-h-[50vh] md:max-h-none"
            />
          </motion.div>

          {/* Content section */}
          <motion.div
            className="w-full  p-6 overflow-y-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            {/* <p className="text-gray-600 mb-4">{product.category}</p> */}

            <p className="text-gray-800 mb-4">{product.description}</p>

            <div className="mb-4">
              <span className="text-xl font-semibold">${product.price}</span>
              {product.price && (
                <span className="ml-2 text-gray-500 line-through">
                  ${product.price}
                </span>
              )}
            </div>

            <button className="w-full py-2 px-4 bg-acc text-white rounded hover:bg-blue-700 transition">
              Start designing.
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
