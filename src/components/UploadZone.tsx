import React, { useState, useCallback } from 'react';
import { UploadCloud, Image as ImageIcon, CheckCircle, AlertCircle } from 'lucide-react';

interface UploadZoneProps {
  onFilesSelected: (files: File[]) => void;
  maxFiles?: number;
  maxSizeMB?: number;
}

const UploadZone: React.FC<UploadZoneProps> = ({ onFilesSelected, maxFiles = 5, maxSizeMB = 10 }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const processFiles = (files: File[]) => {
    setError(null);
    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    const validFiles: File[] = [];

    if (files.length > maxFiles) {
      setError(`Maximum ${maxFiles} images allowed at once.`);
      return;
    }

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!validTypes.includes(file.type)) {
        setError(`Unsupported file type: ${file.name}. Only JPG, PNG, and WEBP are supported.`);
        return;
      }
      if (file.size > maxSizeMB * 1024 * 1024) {
        setError(`File ${file.name} is too large. Maximum size is ${maxSizeMB}MB.`);
        return;
      }
      validFiles.push(file);
    }

    if (validFiles.length > 0) {
      onFilesSelected(validFiles);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(Array.from(e.target.files));
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <div
        className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
          isDragging
            ? 'border-brand-magenta bg-brand-magenta/5'
            : 'border-brand-purple/30 bg-white hover:border-brand-purple hover:bg-brand-purple/5'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          multiple
          accept="image/jpeg, image/png, image/webp"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleChange}
        />
        <div className="flex flex-col items-center pointer-events-none">
          <div className="bg-brand-light p-4 rounded-full mb-4">
            <UploadCloud size={48} className="text-brand-purple" />
          </div>
          <h3 className="text-2xl font-bold text-brand-dark mb-2">Drag & drop your images here</h3>
          <p className="text-brand-muted mb-6">OR</p>
          <button className="btn-primary pointer-events-auto">Choose Images</button>
          <p className="text-xs text-brand-muted mt-6 flex items-center">
            <ImageIcon size={14} className="mr-1" />
            JPG, PNG or WEBP • Up to {maxFiles} images • Max {maxSizeMB}MB per file
          </p>
        </div>
      </div>
      
      {error && (
        <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg flex items-center text-sm">
          <AlertCircle size={18} className="mr-2 flex-shrink-0" />
          {error}
        </div>
      )}

      <div className="text-center mt-6 text-sm text-brand-muted flex justify-center items-center">
        <CheckCircle size={16} className="text-green-500 mr-2" />
        Your images are securely processed and are not publicly shared.
      </div>
    </div>
  );
};

export default UploadZone;
