import React, { useState, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { Upload, X } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

type TReImageInputProps = {
  name: string;
  label?: string;
  description?: string;
  accept?: string;
  placeholder?: string;
};

const ReFileUploadField = ({
  name,
  label,
  description,
  accept = 'image/*',
  placeholder = 'Select an image...',
}: TReImageInputProps) => {
  const { control, setValue } = useFormContext();
  const [fileName, setFileName] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        setFileName(file.name);
        const reader = new FileReader();
        reader.onload = (e) => {
          const imageDataUrl = e.target?.result as string;
          setValue(name, imageDataUrl);
        };
        reader.readAsDataURL(file);
        setIsDialogOpen(false);
      }
    },
    [name, setValue]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: false,
  });

  const handleClearImage = () => {
    setFileName('');
    setValue(name, '');
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="font-spaceGrotesk">
          <FormLabel className="font-spaceGrotesk">{label}</FormLabel>
          <FormControl>
            <div className="flex items-center rounded border border-gray-300">
              <Input
                className="border-none font-spaceGrotesk"
                placeholder={placeholder}
                readOnly
                value={fileName || (field.value ? 'Image selected' : '')}
                onChange={field.onChange}
                onBlur={field.onBlur}
                name={field.name}
                ref={field.ref}
              />
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button type="button" variant="ghost" size="icon" className="m-1">
                    <Upload className="size-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-white sm:max-w-[500px] ">
                  <DialogHeader>
                    <DialogTitle>Upload Image</DialogTitle>
                  </DialogHeader>
                  <div
                    {...getRootProps()}
                    className={`rounded-lg border-2 border-dashed border-primary-500 bg-[#F7F7F7] p-16 text-center ${
                      isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                    }`}
                  >
                    <Image
                      src={'/assets/business-dashboard/upload-icon.svg'}
                      alt="upload"
                      width={32}
                      height={32}
                      className="mx-auto size-12"
                    />
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p>Drop the image here ...</p>
                    ) : (
                      <p>Drag & drop an image here, or click to select one</p>
                    )}
                    <span className="text-sm font-normal text-gray-400">
                      Supported formats: (.jpg, .pdf, .png) must not exceed 5MB
                    </span>
                  </div>
                </DialogContent>
              </Dialog>
              {fileName && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="m-1"
                  onClick={handleClearImage}
                >
                  <X className="size-4" />
                </Button>
              )}
            </div>
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage className="text-base font-normal text-primary-800" />
        </FormItem>
      )}
    />
  );
};

export default ReFileUploadField;
