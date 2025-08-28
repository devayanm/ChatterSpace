import { motion } from "framer-motion";

export default function AboutPage() {
  const headingText = "ChatterSpace";

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <motion.div className="p-8 bg-gradient-to-br from-gray-800 via-purple-600 to-gray-800 min-h-screen flex flex-col items-center text-white space-y-6">
        <motion.div className="flex flex-col justify-center items-center">
          <motion.h1
            className="font-extrabold text-9xl bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-white flex"
            initial="hidden"
            animate="visible"
          >
            {headingText.split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariants}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p className="text-2xl text-center mt-8 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
          >
            A space for open communication and collaboration.
          </motion.p>
        </motion.div>
        <a href="/features">
          <button className="mt-8 px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 hover:scale-110 transition-transform">
            Explore
          </button>
        </a>
      </motion.div>
    </>
  );
}