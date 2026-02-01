"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  MessageCircleMore,
  X,
  ChevronRight,
  Package,
  Send,
} from "lucide-react";

const HELP_TOPICS = [
  "Why IM8?",
  "30-Day Satisfaction Guarantee",
  "Manage my subscription",
  "Tracking not updating",
  "Billing help: what to expect",
];

function ChatBot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatIconRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  useEffect(() => {
    if (isChatOpen && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isChatOpen]);

  return (
    <div>
      {/* BUTTON TRIGGER */}
      <div className="fixed bottom-18 right-6 z-50 sm:bottom-10 sm:right-10">
        <button
          ref={chatIconRef}
          onClick={toggleChat}
          className={`
            flex items-center justify-center 
            rounded-full shadow-2xl cursor-pointer transition-all duration-300
            ${isChatOpen ? "size-15 bg-[#a40011]" : "size-15 bg-[#a40011]"}
          `}
        >
          {!isChatOpen ? (
            <MessageCircleMore
              className="size-7 sm:size-9 text-white"
              strokeWidth={1.5}
            />
          ) : (
            <ChevronDown
              className="size-7 sm:size-9 text-white"
              strokeWidth={1.5}
            />
          )}
        </button>
      </div>

      {/* CHAT MODAL */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="
              fixed z-49
              bottom-28 right-6 w-95
              max-sm:top-0 max-sm:right-0 max-sm:w-full max-sm:h-[84vh]
            "
          >
            <div
              className="
              relative flex flex-col h-full w-full overflow-hidden 
              bg-[#a40011] shadow-2xl
              rounded-3xl max-sm:rounded-b-none max-sm:rounded-t-3xl
              border border-[#a40011]
            "
            >
              {/* HEADER */}
              <div className="pt-8 px-6 pb-4 shrink-0">
                <button
                  onClick={toggleChat}
                  className="absolute top-4 right-4 text-white/80 hover:text-white sm:hidden"
                >
                  <X size={24} />
                </button>

                {/* Logo Text */}
                <div className="text-white text-3xl font-serif tracking-wide mb-2">
                  I·M·8<span className="text-[10px] align-top ml-0.5">TM</span>
                </div>

                {/* Greeting */}
                <h2 className="text-white text-[22px] font-bold leading-tight">
                  How can we help you today?
                </h2>
              </div>

              {/* SCROLLABLE CONTENT */}
              <div className="flex-1 overflow-y-auto px-4 pb-6 custom-scrollbar space-y-3">
                {/* 1. MENU CARD */}
                <div className="bg-white rounded-2xl overflow-hidden py-2">
                  {HELP_TOPICS.map((topic, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-gray-50 transition-colors group text-left"
                    >
                      <span className="text-[#333] text-[15px] font-normal leading-tight">
                        {topic}
                      </span>
                      <ChevronRight
                        size={18}
                        className="text-[#a40011] group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  ))}
                </div>

                {/* TRACK ORDER CARD */}
                <div className="bg-[#ffeef0] rounded-2xl p-1">
                  <button className="w-full bg-white rounded-xl flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#a40011]/10 p-2 rounded-lg text-[#a40011]">
                        <Package size={20} />
                      </div>
                      <span className="text-[#333] text-[15px] font-bold">
                        Track and manage my orders
                      </span>
                    </div>
                    <ChevronRight
                      size={18}
                      className="text-[#a40011] group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>

                {/* SEND MESSAGE CARD */}
                <button className="w-full bg-white rounded-2xl p-4 flex items-center justify-between hover:bg-gray-50 transition-colors group">
                  <div className="flex items-center gap-3">
                    {/* Avatar Circle */}
                    <div className="relative">
                      <div className="size-10 rounded-full bg-[#a40011] flex items-center justify-center text-white text-[10px] font-serif border-2 border-white shadow-sm">
                        I·M·8
                      </div>
                      <div className="absolute bottom-0 right-0 size-3 bg-[#10b981] border-2 border-white rounded-full"></div>
                    </div>

                    <div className="text-left">
                      <p className="text-[#333] text-[15px] font-bold">
                        Welcome to IM8
                      </p>
                      <p className="text-gray-500 text-xs">Send us a message</p>
                    </div>
                  </div>

                  <Send
                    size={20}
                    className="text-[#a40011] -rotate-45 mr-1 group-hover:scale-110 transition-transform"
                    fill="#a40011"
                  />
                </button>

                <div ref={scrollRef}></div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-6 bg-linear-to-t from-[#a40011] to-transparent pointer-events-none sm:hidden" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ChatBot;
