import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Heading } from '../../dashboard/shared/Heading';

import ReFileUploadField from '@/components/re-ui/ReFileUploadField';
import ReSelect from '@/components/re-ui/ReSelect';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReTextarea } from '@/components/re-ui/ReTextarea';
import { ReButton } from '@/components/re-ui/ReButton';
import { Form } from '@/components/ui/form';
import { careerPostSchema, TCareerPost } from '@/lib/validations/admin/website.validation';

const defaultValues = {
  tag: '',
  title: '',
  content: '',
  image: '',
  remote: '',
  employmentType: '',
};

export default function AddCareerPost() {
  const form = useForm<TCareerPost>({
    resolver: zodResolver(careerPostSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { handleSubmit } = form;

  const onSubmit = (data: TCareerPost) => {
    console.log('form data:', data);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" w-full ">
          <Heading heading="Add Career Post" className="mb-6 text-2xl font-bold" />
          <div>
            <div className="space-y-4">
              <div className="space-y-2">
                <ReSelect
                  name="tag"
                  label="Tag *"
                  placeholder="Select"
                  options={[
                    { value: 'tech', label: 'Tech' },
                    { value: 'finance', label: 'Finance' },
                    { value: 'marketing', label: 'Marketing' },
                  ]}
                />
              </div>
              <div className="space-y-2">
                <ReInput name="title" label="Title *" placeholder="Enter Title" type="text" />
              </div>
              <div className="space-y-2">
                <ReTextarea name="content" label="Content *" placeholder="Enter content" />
              </div>
              <div className="space-y-2">
                <ReFileUploadField name="image" placeholder="Upload image" label="Upload *" />
              </div>
              <div className="space-y-2">
                <ReSelect
                  name="remote"
                  label="Remote *"
                  placeholder="Select"
                  options={[
                    { value: 'yes', label: 'Yes' },
                    { value: 'no', label: 'No' },
                    { value: 'hybrid', label: 'Hybrid' },
                  ]}
                />
              </div>
              <div className="space-y-2">
                <ReSelect
                  name="employmentType"
                  label="Employment type *"
                  placeholder="Select"
                  options={[
                    { value: 'full-time', label: 'Full-time' },
                    { value: 'part-time', label: 'Part-time' },
                    { value: 'contract', label: 'Contract' },
                  ]}
                />
              </div>
              <ReButton type="submit" className="w-full text-lg text-white">
                Submit
              </ReButton>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
