import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, description }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.6 }}>
  <div className="card">
 
  <div className="card-content">
    <h3 className="card-title">{title}</h3>
    <p className="card-description">{description}</p>
  </div>
</div>
</motion.div>
  );
};

export default Card;