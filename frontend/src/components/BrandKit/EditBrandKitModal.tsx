"use client";
import { useState, useEffect } from "react";
import { FiX, FiUpload, FiTrash2 } from "react-icons/fi";
import Image from "next/image";
import { BrandKitTypes } from "./ViewBrandKits";

interface EditBrandKitModalProps {
  isOpen: boolean;
  brandKit: BrandKitTypes;
  onClose: () => void;
  onSave: (updatedData: {
    name: string;
    logo: File | string | null;
    colors: string[];
    fonts: string[];
  }) => Promise<void>;
}

export const EditBrandKitModal = ({
  isOpen,
  brandKit,
  onClose,
  onSave,
}: EditBrandKitModalProps) => {
  const [name, setName] = useState(brandKit.name);
  const [logo, setLogo] = useState<File | string | null>(brandKit.logoUrl);
  const [colors, setColors] = useState<string[]>(brandKit.colours || []);
  const [newColor, setNewColor] = useState("");
  const [fonts, setFonts] = useState<string[]>(brandKit.fonts || []);
  const [newFont, setNewFont] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Reset form when brandKit changes
  useEffect(() => {
    if (isOpen) {
      setName(brandKit.name);
      setLogo(brandKit.logoUrl);
      setColors(brandKit.colours || []);
      setFonts(brandKit.fonts || []);
      setError("");
    }
  }, [brandKit, isOpen]);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogo(e.target.files[0]);
    }
  };

  const removeLogo = () => setLogo(null);

  const addColor = () => {
    if (newColor && !colors.includes(newColor)) {
      setColors([...colors, newColor]);
      setNewColor("");
    }
  };

  const removeColor = (colorToRemove: string) => {
    setColors(colors.filter((color) => color !== colorToRemove));
  };

  const addFont = () => {
    if (newFont && !fonts.includes(newFont)) {
      setFonts([...fonts, newFont]);
      setNewFont("");
    }
  };

  const removeFont = (fontToRemove: string) => {
    setFonts(fonts.filter((font) => font !== fontToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Name cannot be empty");
      return;
    }

    try {
      setIsSubmitting(true);
      await onSave({
        name: name.trim(),
        logo,
        colors,
        fonts,
      });
      onClose();
    } catch (err) {
      setError("Failed to save changes. Please try again.");
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
          <h3 className="text-lg font-medium">Edit Brand Kit</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            disabled={isSubmitting}
          >
            <FiX size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Brand Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              autoFocus
              disabled={isSubmitting}
            />
          </div>

          {/* Logo Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Logo
            </label>
            <div className="flex items-center gap-4">
              {logo ? (
                <div className="relative">
                  <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
                    {/* {typeof logo === "string" ? (
                      <Image
                        src={logo}
                        alt="Current logo"
                        width={96}
                        height={96}
                        className="object-contain w-full h-full"
                      />
                    ) : (
                      <img
                        src={URL.createObjectURL(logo)}
                        alt="New logo"
                        className="object-contain w-full h-full"
                      />
                    )} */}
                  </div>
                  <button
                    type="button"
                    onClick={removeLogo}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  >
                    <FiTrash2 size={14} />
                  </button>
                </div>
              ) : (
                <div className="w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
                  No logo
                </div>
              )}

              <label className="cursor-pointer">
                <div className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center gap-2">
                  <FiUpload />
                  <span>{logo ? "Change" : "Upload"} Logo</span>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoChange}
                  className="hidden"
                  disabled={isSubmitting}
                />
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Brand Colors
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {colors.map((color, index) => (
                <div key={index} className="flex items-center gap-1">
                  <div
                    className="w-8 h-8 rounded-full border border-gray-200"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                  <button
                    type="button"
                    onClick={() => removeColor(color)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <FiTrash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="color"
                value={newColor}
                onChange={(e) => setNewColor(e.target.value)}
                className="h-10 w-10 cursor-pointer"
              />
              <input
                type="text"
                value={newColor}
                onChange={(e) => setNewColor(e.target.value)}
                placeholder="#HEX or color name"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                disabled={isSubmitting}
              />
              <button
                type="button"
                onClick={addColor}
                disabled={!newColor || colors.includes(newColor)}
                className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md disabled:opacity-50"
              >
                Add
              </button>
            </div>
          </div>

          {/* Fonts Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Brand Fonts
            </label>
            <div className="space-y-2 mb-2">
              {fonts.map((font, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 p-2 rounded"
                >
                  <span style={{ fontFamily: font }}>{font}</span>
                  <button
                    type="button"
                    onClick={() => removeFont(font)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <FiTrash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newFont}
                onChange={(e) => setNewFont(e.target.value)}
                placeholder="Enter font name"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                disabled={isSubmitting}
              />
              <button
                type="button"
                onClick={addFont}
                disabled={!newFont || fonts.includes(newFont)}
                className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md disabled:opacity-50"
              >
                Add
              </button>
            </div>
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <div className="flex justify-end gap-2 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-md hover:bg-orange-700 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
