import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react'; 

const AnimatedArrow = () => {
  return (
    <a
      href="#"
      className="bg-blue-800 hover:bg-blue-700 text-white lg:text-2xl py-2.5 px-10 rounded-md inline-flex items-center space-x-2"
    >
      <span>Get started</span>
      <motion.div
        className="w-7 h-7"
        animate={{
          x: [0, 5, 0,  0], 
        }}
        transition={{
          duration: 2,
          repeat: Infinity, 
          ease: "easeInOut", 
        }}
        whileHover={{ x: 0 }} 
      >
        <ArrowRight className="w-7 h-7" />
      </motion.div>
    </a>
  );
};

export default AnimatedArrow;
