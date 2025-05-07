import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, ThumbsUp, Award, Map } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  delay: number;
}

function StatItem({ icon, value, label, delay }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const interval = duration / value;
      let timer: number;
      let step = 0;
      
      const updateCount = () => {
        step += 1;
        setCount(Math.min(step, value));
        
        if (step < value) {
          timer = window.setTimeout(updateCount, interval);
        }
      };
      
      const startTimer = window.setTimeout(() => {
        updateCount();
      }, delay);
      
      return () => {
        window.clearTimeout(timer);
        window.clearTimeout(startTimer);
      };
    }
  }, [isInView, value, delay]);
  
  return (
    <motion.div
      ref={ref}
      className="text-center p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-primary-color/10 rounded-full text-primary-color">
          {icon}
        </div>
      </div>
      <h3 className="text-4xl font-bold mb-2 text-primary-color">{count}+</h3>
      <p className="text-[#666666] font-medium">{label}</p>
    </motion.div>
  );
}

export default function AnimatedStats() {
  const stats = [
    { icon: <Users size={24} />, value: 500, label: "Happy Tourists", delay: 0 },
    { icon: <ThumbsUp size={24} />, value: 100, label: "5-Star Reviews", delay: 200 },
    { icon: <Award size={24} />, value: 5, label: "Years of Excellence", delay: 400 },
    { icon: <Map size={24} />, value: 20, label: "Tour Destinations", delay: 600 }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatItem
          key={index}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
          delay={stat.delay}
        />
      ))}
    </div>
  );
}