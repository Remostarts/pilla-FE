'use client';

import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Sidebar } from '../../../shared/SideBar';
import FileUploadField from '../../../shared/FileUploadField';

import AddDirector from './AddDirector';

import { Label } from '@/components/ui/label';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReTextarea } from '@/components/re-ui/ReTextarea';
import { ReButton } from '@/components/re-ui/ReButton';
import {
  constructionBusinessInformationSchema,
  TConstructionBusinessInformation,
} from '@/lib/validations/business/settings.validation';
import { Form } from '@/components/ui/form';

interface Director {
  fullName: string;
  position: string;
  bvn: string;
  document: string | null;
}

interface BusinessInformationFormProps {
  nextStep: () => void;
  dispatch: any;
  updateBusinessInformation: (data: any) => void;
}

const defaultValues = {
  tin: '',
  revenue: '',
  projects: '',
  certificateofIncorporation: null,
  memorandumAndArticlesOfAssociationFormC07: null,
  buildersProfessionalLicense: null,
  boardResolution: null,
};

export default function BusinessInformationForm({
  nextStep,
  dispatch,
  updateBusinessInformation,
}: BusinessInformationFormProps) {
  const [directors, setDirectors] = useState<Director[]>([]);

  const form = useForm<TConstructionBusinessInformation>({
    resolver: zodResolver(constructionBusinessInformationSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { handleSubmit, control } = form;

  const onSubmit = (data: TConstructionBusinessInformation) => {
    // console.log('Form submitted with data:', data);

    dispatch(updateBusinessInformation(data));
    nextStep();
  };

  const handleAddDirector = (director: Director) => {
    setDirectors((prev) => [...prev, director]);
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Tax Identification Number */}
        <ReInput
          name="tin"
          label="Tax Identification Number (TIN) *"
          placeholder="Enter TIN number"
          className="bg-[#F7F7F7]"
        />

        {/* Estimated Annual Revenue */}
        <ReInput
          name="revenue"
          label="Estimated Annual Revenue *"
          placeholder="₦"
          className="bg-[#F7F7F7]"
        />

        {/* Details Of Completed Past Projects */}
        <ReTextarea
          name="projects"
          label="Details Of Completed Past Projects *"
          placeholder="Enter details"
          className="resize-none"
        />

        {/* Upload Documents */}
        <div>
          <Label className="mb-3 block text-sm font-medium text-gray-700">Upload Documents *</Label>
          <div className="space-y-2">
            <FileUploadField
              name="certificateofIncorporation"
              label="Certificate of Incorporation"
              placeholder="Certificate of Incorporation"
              control={control}
            />
            <FileUploadField
              name="memorandumAndArticlesOfAssociationFormC07"
              label="Memorandum And Articles Of Association Form C07"
              control={control}
              placeholder="Memorandum And Articles Of Association Form C07"
            />
            <FileUploadField
              name="buildersProfessionalLicense"
              label="Builder's Professional License"
              control={control}
              placeholder="Builder's Professional License"
            />
            <FileUploadField
              name="boardResolution"
              label="Board Resolution"
              control={control}
              placeholder="Board Resolution"
            />
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

        <ReButton type="submit" className="mt-6 w-full text-lg text-white">
          Proceed
        </ReButton>

        <Sidebar.Window name="add-director">
          <AddDirector onAddDirector={handleAddDirector} />
        </Sidebar.Window>
      </form>
    </Form>
  );
}
