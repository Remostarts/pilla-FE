import { MailIcon, PhoneIncoming, User2Icon } from 'lucide-react';

import ReInput from '@/components/re-ui/re-input/ReInput';

const inputFields = [
  {
    name: 'firstName',
    type: 'text',
    description: 'This is an input description',
    label: 'First Name',
    prefix: <User2Icon size={16} />,
  },
  {
    name: 'lastName',
    type: 'text',
    description: 'This is an input description',
    label: 'Last Name',
    prefix: <User2Icon size={16} />,
  },
  {
    name: 'email',
    type: 'email',
    description: 'This is an input description',
    label: 'Email',
    prefix: <MailIcon size={16} />,
  },
  {
    name: 'phoneNumber',
    type: 'text',
    description: 'This is an input description',
    label: 'Phone Number',
    prefix: <PhoneIncoming size={16} />,
  },
];

const UserInfoStep = () => {
  return (
    <div>
      {inputFields.map((field, index) => (
        <ReInput
          key={index}
          name={field.name}
          type={field.type}
          description={field.description}
          label={field.label}
          prefix={field.prefix}
        />
      ))}
    </div>
  );
};

export default UserInfoStep;
