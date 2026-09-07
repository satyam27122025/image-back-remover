import React from 'react';
import { Download, RefreshCw, X, AlertTriangle } from 'lucide-react';

export type ProcessingStatus = 'Waiting' | 'Uploading' | 'Processing' | 'Completed' | 'Failed';

export interface ImageItem {
  id: string;
  file: File;
  originalUrl: string;
  processedUrl?: string;
  status: ProcessingStatus;
  error?: string;
}

interface ImageCardProps {
  item: ImageItem;
  onRemove: (id: string) => void;
  onRetry: (id: string) => void;
  onDownload: (url: string, filename: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ item, onRemove, onRetry, onDownload }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col sm:flex-row mb-4">
      {/* Preview Area */}
      <div className="w-full sm:w-48 h-48 sm:h-auto bg-gray-50 border-r border-gray-100 relative overflow-hidden flex-shrink-0">
        {item.status === 'Completed' && item.processedUrl ? (
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iI2ZmZiIgLz4KPHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZWVlIiAvPgo8cmVjdCB4PSIxMCIgeT0iMTAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0iI2VlZSIgLz4KPC9zdmc+')]">
            <img src={item.processedUrl} alt="Processed" className="w-full h-full object-contain" />
          </div>
        ) : (
          <img src={item.originalUrl} alt="Original" className="w-full h-full object-cover opacity-60" />
        )}
      </div>

      {/* Details & Actions */}
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4 className="font-semibold text-brand-dark truncate max-w-[200px]" title={item.file.name}>
              {item.file.name}
            </h4>
            <p className="text-xs text-gray-500">{(item.file.size / 1024 / 1024).toFixed(2)} MB</p>
          </div>
          <button 
            onClick={() => onRemove(item.id)}
            className="text-gray-400 hover:text-red-500 transition-colors p-1"
            title="Remove"
          >
            <X size={18} />
          </button>
        </div>

        {/* Status indicator */}
        <div className="flex-grow flex items-center">
          {item.status === 'Waiting' && <span className="text-gray-500 text-sm">Waiting to start...</span>}
          {item.status === 'Uploading' && <span className="text-blue-500 text-sm flex items-center"><RefreshCw size={14} className="animate-spin mr-2" /> Uploading...</span>}
          {item.status === 'Processing' && <span className="text-brand-magenta text-sm flex items-center"><RefreshCw size={14} className="animate-spin mr-2" /> Removing background...</span>}
          {item.status === 'Completed' && <span className="text-green-500 text-sm font-medium">Background removed successfully</span>}
          {item.status === 'Failed' && (
            <div className="text-red-500 text-sm flex flex-col">
              <span className="flex items-center"><AlertTriangle size={14} className="mr-1" /> Processing failed</span>
              <span className="text-xs mt-1 text-red-400">{item.error || 'An unknown error occurred'}</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex justify-end space-x-2">
          {item.status === 'Failed' && (
            <button 
              onClick={() => onRetry(item.id)}
              className="px-3 py-1.5 text-sm font-medium text-brand-purple border border-brand-purple rounded hover:bg-brand-purple/5 transition-colors flex items-center"
            >
              <RefreshCw size={14} className="mr-1" /> Retry
            </button>
          )}
          {item.status === 'Completed' && item.processedUrl && (
            <button 
              onClick={() => onDownload(item.processedUrl!, `nobg-${item.file.name}`)}
              className="px-3 py-1.5 text-sm font-medium text-white bg-brand-purple rounded hover:bg-brand-purple/90 transition-colors flex items-center"
            >
              <Download size={14} className="mr-1" /> Download PNG
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
