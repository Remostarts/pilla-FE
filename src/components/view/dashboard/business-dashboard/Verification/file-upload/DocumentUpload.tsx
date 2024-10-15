import React, { useState, useRef, ChangeEvent } from 'react';
import { Upload, X } from 'lucide-react';
import { useController, Control } from 'react-hook-form';
import Image from 'next/image';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface FileUploadComponentProps {
  name: string;
  control: Control;
  maxSize?: number;
  allowedTypes?: string[];
  placeholder?: string;
  label?: string;
  className?: string;
  options: { value: string; label: string }[];
}

interface UploadData {
  file: File | null;
  type: string;
}

const FileUploadField: React.FC<FileUploadComponentProps> = ({
  name,
  control,
  maxSize = 5 * 1024 * 1024, // 5MB default
  allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'],
  label = 'Upload File',
  className = '',
  placeholder = 'No file selected',
  options,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { field } = useController<{ [key: string]: UploadData }>({
    name,
    control,
    defaultValue: { file: null, type: '' },
  });

  // function to handle drag events
  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // function to handle drop events
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  // function to handle file change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  // function to handle file upload
  const handleFile = (file: File) => {
    setError('');
    if (file.size > maxSize) {
      setError(`File size should not exceed ${maxSize / (1024 * 1024)}MB`);
      return;
    }

    if (!allowedTypes.includes(file.type)) {
      setError(`Only ${allowedTypes.join(', ')} files are allowed`);
      return;
    }

    field.onChange({ ...field.value, file });
    console.log('File uploaded:', {
      name: file.name,
      lastModified: file.lastModified,
      size: file.size,
      type: field.value.type,
    });
  };

  // function the handle click event of the file input
  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  // function to remove file
  const removeFile = () => {
    field.onChange({ ...field.value, file: null });
    setError('');
  };

  // function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setError('');
  };

  // function to confirm file selection
  const confirmSelection = () => {
    if (field.value.file && !error) {
      closeModal();
    }
  };

  // function to handle type change
  const handleTypeChange = (value: string) => {
    field.onChange({ ...field.value, type: value });
  };

  return (
    <div className={`w-full ${className}`}>
      {/* input field where file name will be displayed after uploading the file */}
      <div className="relative mb-2">
        <div className="relative">
          <Input
            type="text"
            placeholder={placeholder}
            value={field.value.file ? field.value.file.name : ''}
            readOnly
            className="cursor-pointer bg-[#F7F7F7] py-6"
            onClick={() => setIsModalOpen(true)}
          />

          {field.value.file ? (
            <button
              type="button"
              onClick={removeFile}
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              <X className="size-6 text-gray-500" />
            </button>
          ) : (
            <Upload className="absolute right-3 top-1/2 size-5 -translate-y-1/2 text-black" />
          )}
        </div>
      </div>

      {/* modal to select file  */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>{label}</DialogTitle>
          </DialogHeader>

          {/* select file type */}
          <Select onValueChange={handleTypeChange} value={field.value.type}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select file type" />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* drag and drop area */}
          <div
            className={`rounded-lg border-2 border-dashed border-primary-500 bg-[#F7F7F7] p-16 text-center ${
              dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Image
              src={'/assets/business-dashboard/upload-icon.svg'}
              alt="upload"
              width={32}
              height={32}
              className="mx-auto size-12"
            />
            <p className="text-md mt-2 font-semibold text-black">
              Drag and drop your file here, or{' '}
              <Button variant="link" onClick={onButtonClick} className="mt-2 p-0 text-primary-500">
                Browse Files
              </Button>
            </p>
            <span className="text-sm font-normal text-gray-400">
              Supported formats: (.jpg, .pdf, .png) must not exceed 5MB
            </span>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={handleChange}
              accept={allowedTypes.join(',')}
            />
          </div>

          {/* // error message for validation */}
          {error && (
            <Alert variant="destructive" className="mt-2">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* // confirm and cancel button for modal */}
          <DialogFooter>
            <Button type="button" onClick={closeModal} variant="outline">
              Cancel
            </Button>
            <Button
              type="button"
              onClick={confirmSelection}
              disabled={!field.value.file || !field.value.type || !!error}
              className="text-white"
            >
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FileUploadField;
