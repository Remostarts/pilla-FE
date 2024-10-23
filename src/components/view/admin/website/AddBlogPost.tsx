import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Heading } from '../../dashboard/shared/Heading';

import ReFileUploadField from '@/components/re-ui/ReFileUploadField';
import ReSelect from '@/components/re-ui/ReSelect';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReTextarea } from '@/components/re-ui/ReTextarea';
import { Form } from '@/components/ui/form';
import { blogPostSchema, TBlogPost } from '@/lib/validations/admin/website.validation';
import { ReButton } from '@/components/re-ui/ReButton';

const defaultValues = {
  tag: '',
  title: '',
  description: '',
  image: '',
};

export default function AddBlogPost() {
  const form = useForm<TBlogPost>({
    resolver: zodResolver(blogPostSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { handleSubmit } = form;

  const onSubmit = (data: TBlogPost) => {
    console.log('form data:', data);
  };
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" w-full">
          <Heading heading="Add Blog Post" className="mb-6 text-2xl" />
          <div>
            <div className="space-y-4">
              <div className="space-y-2">
                <ReSelect
                  name="tag"
                  label="Tag *"
                  placeholder="Select"
                  options={[
                    { value: 'tech', label: 'Tech' },
                    { value: 'lifestyle', label: 'Lifestyle' },
                    { value: 'food', label: 'Food' },
                  ]}
                />
              </div>
              <div className="space-y-2">
                <ReInput name="title" label="Title *" placeholder="Title" type="text" />
              </div>
              <div className="space-y-2">
                <ReTextarea name="description" label="Description *" placeholder="Description" />
              </div>
              <div className="space-y-2">
                <ReFileUploadField name="image" placeholder="Image" label="Image" />
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
