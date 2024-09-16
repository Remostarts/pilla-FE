'use client';

import React, { useState } from 'react';
import { Upload, Plus, X } from 'lucide-react';

import { Sidebar } from '../../../shared/SideBar';
import UploadDocument from '../UploadDocument';

import AddDirector from './AddDirector';

import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import ReInput from '@/components/re-ui/re-input/ReInput';

interface Director {
  fullName: string;
  position: string;
  bvn: string;
  document: string | null;
}

export default function BusinessInformationForm() {
  const [currentDocument, setCurrentDocument] = useState<string>('');
  const [uploadedDocuments, setUploadedDocuments] = useState<Record<string, string>>({});
  const [directors, setDirectors] = useState<Director[]>([]);

  const documents: string[] = [
    'Certificate of Incorporation',
    'Memorandum And Articles Of Association Form C07',
    "Builder's Professional License",
    'Board Resolution',
  ];

  const handleFileUpload = (docName: string, fileName: string) => {
    setUploadedDocuments((prev) => ({ ...prev, [docName]: fileName }));
  };

  const handleAddDirector = (director: Director) => {
    setDirectors((prev) => [...prev, director]);
  };

  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      {/* Tax Identification Number */}
      <div>
        <ReInput
          name="tin"
          label="Tax Identification Number (TIN) *"
          placeholder="Enter TIN number"
          className="bg-[#F7F7F7]"
        />
      </div>

      {/* Estimated Annual Revenue */}
      <div>
        <ReInput
          name="revenue"
          label="Estimated Annual Revenue *"
          placeholder="₦"
          className="bg-[#F7F7F7]"
        />
      </div>

      {/* Details Of Completed Past Projects */}
      <div>
        <Label htmlFor="projects" className="mb-3 block text-sm font-medium text-gray-700">
          Details Of Completed Past Projects *
        </Label>
        <Textarea id="projects" placeholder="Enter details" className="resize-none" />
      </div>

      {/* Upload Documents */}
      <div>
        <Label className="mb-3 block text-sm font-medium text-gray-700">Upload Documents *</Label>
        <div className="space-y-2">
          {documents.map((doc, index) => (
            <Sidebar.Open opens="upload-document" key={index}>
              <button
                className="flex w-full items-center justify-between rounded border bg-[#F7F7F7] p-4"
                onClick={() => {
                  setCurrentDocument(doc);
                }}
              >
                <span className="text-sm text-gray-600">
                  {uploadedDocuments[doc] ? `Uploaded: ${uploadedDocuments[doc]}` : doc}
                </span>
                <Upload className="size-6 cursor-pointer text-[#1A1A1A]" />
              </button>
            </Sidebar.Open>
          ))}
        </div>
      </div>

      {/* Account Signatories */}
      <div>
        <Label className="mb-3 block text-sm font-medium text-gray-700">
          Account Signatories *
        </Label>
        <Sidebar.Open opens="add-director">
          <button className="flex w-full cursor-pointer items-center justify-between rounded border bg-[#F7F7F7] p-4">
            <span className="text-sm">Click to add director</span>
            <Plus className="size-6 text-[#1A1A1A]" />
          </button>
        </Sidebar.Open>
        {directors.map((director, index) => (
          <div
            key={index}
            className="mt-2 flex items-center justify-between rounded-lg bg-gray-100 p-4"
          >
            <div>
              <h3 className="font-semibold">{director.fullName}</h3>
              <p className="text-sm text-gray-600">{director.position}</p>
              <p className="text-xs text-gray-500">BVN: {director.bvn}</p>
              {director.document && (
                <p className="text-xs text-blue-500">Document: {director.document}</p>
              )}
            </div>
            <X
              className="cursor-pointer text-gray-400 hover:text-red-500"
              onClick={() => setDirectors((prev) => prev.filter((_, i) => i !== index))}
            />
          </div>
        ))}
      </div>

      <Sidebar.Window name="upload-document">
        <UploadDocument onUpload={handleFileUpload} documentName={currentDocument} />
      </Sidebar.Window>

      <Sidebar.Window name="add-director">
        <AddDirector onAddDirector={handleAddDirector} />
      </Sidebar.Window>
    </form>
  );
}
