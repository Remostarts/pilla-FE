import CompanyDetails from '@/components/view/root/contact-us/CompanyDetails';
import ContactForm from '@/components/view/root/contact-us/ContactForm';

export const metadata = {
  title: 'Contact',
};

export default function Page() {
  return (
    <section className="mx-auto max-w-8xl px-6 md:px-10 lg:px-12">
      <div className="mt-4 sm:mt-10">
        {/* Heading */}
        <h1 className="mb-1 font-spaceGrotesk text-4xl font-bold lg:text-5xl">Contact us</h1>
        <p className="mb-8 font-inter text-lg sm:mb-12">Let&apos;s stay connected</p>

        <div className="flex flex-col-reverse justify-between gap-8 md:flex-row">
          {/* Company Details */}
          <CompanyDetails />

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
