
import React, { useState } from 'react';
import { Upload, X, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

interface ImageUploadProps {
  onImageSelect: (file: File | null) => void;
  selectedImage: File | null;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelect, selectedImage }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageSelect(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const removeImage = () => {
    onImageSelect(null);
    setPreviewUrl(null);
  };

  return (
    <div className="space-y-4">
      {!selectedImage ? (
        <div className="border-2 border-dashed border-white/30 rounded-lg p-8 text-center">
          <Upload className="w-12 h-12 text-white/60 mx-auto mb-4" />
          <p className="text-white/80 mb-4">Drag and drop your image here, or click to browse</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-colors"
          >
            Choose File
          </label>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-blue-400" />
                <h4 className="text-white font-semibold">Image Preview</h4>
              </div>
              <button
                onClick={removeImage}
                className="p-2 rounded-full bg-red-500/20 hover:bg-red-500/30 transition-colors"
              >
                <X className="w-4 h-4 text-red-400" />
              </button>
            </div>
            
            {previewUrl && (
              <div className="rounded-lg overflow-hidden">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-full h-48 object-cover"
                />
              </div>
            )}
            
            <div className="mt-3 text-sm text-white/70">
              <p><strong>Name:</strong> {selectedImage.name}</p>
              <p><strong>Size:</strong> {(selectedImage.size / 1024 / 1024).toFixed(2)} MB</p>
              <p><strong>Type:</strong> {selectedImage.type}</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ImageUpload;
