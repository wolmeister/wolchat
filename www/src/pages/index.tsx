import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <main>
        {['S', 'O', 'O', 'N'].map((char, index) => (
          <motion.span
            key={String(index)}
            className="text-5xl tracking-widest"
            initial={{ opacity: 0.1 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: index / 10,
              repeat: Infinity,
              repeatType: 'reverse',
              repeatDelay: 0,
            }}
          >
            {char}
          </motion.span>
        ))}
      </main>
    </div>
  );
}
