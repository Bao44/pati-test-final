"use client";

import { X } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

type ScienceItem = {
  id: number;
  name: string;
  title: string;
  image: string;
  description?: string;
};

interface ScienceModalProps {
  item: ScienceItem;
  onClose: () => void;
}

export default function ScienceModal({ item, onClose }: ScienceModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Lớp nền mờ trắng đục */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-white/60 backdrop-blur-md"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-105 bg-white rounded-2xl shadow-2xl overflow-hidden z-10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-1 right-1 z-20 p-2 text-[#50000b] hover:bg-black/5 rounded-full transition-colors cursor-pointer"
        >
          <X size={40} strokeWidth={1.5} />
        </button>

        <div className="relative h-48 flex items-end justify-center mt-10">
          <div className="w-full h-full p-6 flex items-end justify-center">
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-40 object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Body Content */}
        <div className="px-8 pt-2 pb-10">
          <div className="flex gap-4">
            {/* Nội dung text */}
            <div className="space-y-4">
              <div>
                <p className="text-3xl font-semibold text-[#50000b] leading-tight">
                  {item.name}
                </p>
                <p className="text-[#50000b] text-xs font-bold uppercase tracking-wider mt-1 leading-snug">
                  {item.title}
                </p>
              </div>

              <p className="text-sm text-[#50000b] leading-relaxed">
                {item.description ||
                  `Prof. ${item.name} is a leading expert in microbiome research and its impact on human health, with over 15 years of experience in the field.`}
              </p>
              <p className="text-sm text-[#50000b] leading-relaxed">
                She is an Associate Professor at Cedars-Sinai Medical Center and
                the Director of the Microbiome Research Institute.
              </p>
            </div>
            {/* Thanh gạch đỏ bên trái */}
            <div className="w-1 shrink-0 bg-[#a40011] rounded-full mb-2" />
          </div>

          {/* Action Button */}
          <button
            onClick={() =>
              toast.success("Handle successfully", { autoClose: 1000 })
            }
            className="w-full mt-8 bg-[#a40011] text-white font-bold py-3.5 rounded-full uppercase tracking-widest text-sm hover:bg-[#8a000e] transition-colors shadow-md"
          >
            Learn More
          </button>
        </div>
      </motion.div>
    </div>
  );
}
