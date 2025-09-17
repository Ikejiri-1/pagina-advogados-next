"use client";

import { useState, useRef } from "react";

interface AccordionItem {
  id: number;
  title: string;
  text: string;
}

interface AccordionProps {
  AccordionItems: AccordionItem[];
}

export function Accordion({ AccordionItems }: AccordionProps) {
  const [openItemId, setOpenItemId] = useState<number | null>(null);
  const contentRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  const toggleItem = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {AccordionItems.map((item) => {
        const isOpen = item.id === openItemId;

        return (
          <div key={item.id} className="border-b border-gray-300 w-full">
            <button
              onClick={() => toggleItem(item.id)}
              className={`w-full flex items-center py-3 font-medium text-gray-800 focus:outline-none ${
                isOpen ? "bg-gray-100" : "bg-transparent"
              }`}
            >
              <span className="text-xl pl-4">{isOpen ? "-" : "+"}</span>
              <span className="pl-2">{item.title}</span>
            </button>

            {/* Conteúdo com transição */}
            <div
              ref={(el) => {
                if (el) contentRefs.current.set(item.id, el);
              }}
              style={{
                maxHeight: isOpen
                  ? `${contentRefs.current.get(item.id)?.scrollHeight}px`
                  : "0px",
              }}
              className="overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div className="p-4 text-gray-600 text-sm">{item.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
