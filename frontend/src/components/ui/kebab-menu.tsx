"use client";
import { useEffect, useRef, useState } from "react";
import { FiMoreVertical, FiEdit, FiTrash2, FiEdit2 } from "react-icons/fi";
import { BrandKitTypes } from "../BrandKit/ViewBrandKits";

interface KebabMenuProps {
  brandKit: BrandKitTypes;
  onEdit: (brandKit: BrandKitTypes) => void;
  onRename: (brandKit: BrandKitTypes) => void;
  onDelete: (brandKit: BrandKitTypes) => void;
}

const KebabMenu = ({
  brandKit,
  onEdit,
  onRename,
  onDelete,
}: KebabMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState<"bottom" | "top">("bottom");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  useEffect(() => {
    if (isOpen && menuButtonRef.current && menuRef.current) {
      const buttonRect = menuButtonRef.current.getBoundingClientRect();
      const menuHeight = menuRef.current.offsetHeight;
      const spaceBelow = window.innerHeight - buttonRect.bottom;
      const spaceAbove = buttonRect.top;

      // Position menu above the button if there's not enough space below
      if (spaceBelow < menuHeight && spaceAbove >= menuHeight) {
        setMenuPosition("top");
      } else {
        setMenuPosition("bottom");
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <button
        ref={menuButtonRef}
        onClick={toggleMenu}
        className="p-1 rounded-full hover:bg-gray-100  transition-colors"
        aria-label="Brand kit options"
        aria-expanded={isOpen}
      >
        <FiMoreVertical className="text-pri w-6 h-6" />
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          className={`absolute right-0 z-20 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200 ${menuPosition === "top" ? "bottom-full mb-2" : "mt-2"
            }`}
        >
          <button
            onClick={() => {
              onEdit(brandKit);
              setIsOpen(false);
            }}
            className="flex items-center px-4 py-2 text-sm text-pri hover:bg-gray-100 w-full text-left"
          >
            Edit
          </button>
          <button
            onClick={() => {
              onRename(brandKit);
              setIsOpen(false);
            }}
            className="flex items-center px-4 py-2 text-sm text-pri hover:bg-gray-100 w-full text-left"
          >
            Rename
          </button>
          <button
            onClick={() => {
              onDelete(brandKit);
              setIsOpen(false);
            }}
            className="flex items-center px-4 py-2 text-sm text-pri hover:bg-gray-100 w-full text-left"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export { KebabMenu };
