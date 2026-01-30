"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircleMore, Send, X } from "lucide-react";

function ChatBot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatIconRef = useRef<HTMLButtonElement>(null);

  const scrollRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div>
      {/* Location button */}
      <div className="fixed bottom-10 right-10 z-50">
        <button
          ref={chatIconRef}
          onClick={toggleChat}
          className="rounded-full size-15 p-2 shadow-lg bg-[#a40011] text-black cursor-pointer"
        >
          {!isChatOpen ? (
            <MessageCircleMore className="size-8 m-auto" color="white" />
          ) : (
            <ChevronDown className="size-8 m-auto" color="white" />
          )}
        </button>
      </div>

      {/* Animate Modal*/}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-27 right-12 z-50 w-[95%] md:w-125"
          >
            <div className="rounded-xl bg-white shadow-xl">
              {/* Content */}
              <div className="p-4 max-h-75">
                <div className="overflow-y-auto h-75 pr-2">
                  <div ref={scrollRef}></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ChatBot;
