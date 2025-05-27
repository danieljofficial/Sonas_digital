"use client";
import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";

interface RenameModalProps {
  isOpen: boolean;
  currentName: string;
  onClose: () => void;
  onRename: (newName: string) => Promise<void>;
  isLoading?: boolean;
}

export const RenameModal = ({
  isOpen,
  currentName,
  onClose,
  onRename,
  isLoading = false,
}: RenameModalProps) => {
  const [newName, setNewName] = useState(currentName);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setNewName(currentName);
    setError("");
  }, [isOpen, currentName]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) {
      setError("Name cannot be empty");
      return;
    }
    if (newName.trim() === currentName) {
      onClose();
      return;
    }
    onRename(newName.trim());
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-medium">Rename Brand Kit</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            disabled={isLoading}
          >
            <FiX size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              New Name
            </label>
            <input
              type="text"
              id="name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              autoFocus
              disabled={isLoading}
            />
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
              disabled={
                isLoading || !newName.trim() || newName.trim() === currentName
              }
            >
              {isLoading ? "Renaming..." : "Rename"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
