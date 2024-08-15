'use client';

import Image from 'next/image';
import { useState } from 'react';

import SubHeading from '../../../shared/SubHeading';
import { Heading } from '../../../shared/Heading';
import SuccessMessage from '../../../shared/SuccessMessage';

import BvnVerification from './BvnVerification';
import IdentityVerification from './IdentityVerification';
import ProofOfAddress from './ProofOfAddress';
import NextOfKin from './NextOfKin';

const verificationBtnData = [
  {
    id: 1,
    heading: 'BVN Verification',
    subHeading: 'Enter BVN to complete BVN verification',
    img: '/assets/personal-dashboard/home/bvn-verification-icon.svg',
    action: 'bvn-verification',
    status: 'complete',
  },
  {
    id: 2,
    heading: 'Identity Verification',
    subHeading: 'Upload ID to complete identity verification',
    img: '/assets/personal-dashboard/home/identity-verification-icon.svg',
    action: 'identity-verification',
    status: 'pending',
  },
  {
    id: 3,
    heading: 'Proof of Address',
    subHeading: 'Upload an utility bill',
    img: '/assets/personal-dashboard/home/proof-of-address-icon.svg',
    action: 'proof-of-address',
    status: 'pending',
  },
  {
    id: 4,
    heading: 'Next of Kin',
    subHeading: 'Add next of kin details',
    img: '/assets/personal-dashboard/home/next-of-kin-icon.svg',
    action: 'next-of-kin',
    status: 'pending',
  },
];

export default function VerificationHome() {
  const [currStep, setCurrStep] = useState<string>('verification-home');
  const [isDone, setIsDone] = useState<boolean>(false);

  return (
    <div className="p-4">
      {currStep === 'verification-home' && (
        <>
          <Heading heading="Get started with Pilla" size="2xl" />
          <SubHeading subHeading="It's simple, just upload the required documents, to verify your account." />

          <div className="mt-10 space-y-6">
            {verificationBtnData.map((data) => (
              <button
                key={data.id}
                className="flex w-full items-center justify-between rounded-lg bg-gray-100 p-5"
                onClick={() => setCurrStep(data.action)}
              >
                <div className="flex items-center space-x-3 xl:space-x-6">
                  <div className="relative">
                    <Image src={data.img} alt={data.action} width={40} height={40} />
                  </div>
                  <div className="flex flex-col items-start">
                    <Heading heading={data.heading} size="lg" />
                    <SubHeading subHeading={data.subHeading} className=" text-sm" />
                  </div>
                </div>

                <Image
                  src="/assets/personal-dashboard/home/caution-triangle-icon.svg"
                  alt="caution-triangle-icon"
                  width={25}
                  height={25}
                />
              </button>
            ))}
          </div>
        </>
      )}

      {currStep === 'bvn-verification' && !isDone && <BvnVerification setIsDone={setIsDone} />}
      {currStep === 'identity-verification' && !isDone && (
        <IdentityVerification setIsDone={setIsDone} />
      )}
      {currStep === 'proof-of-address' && !isDone && <ProofOfAddress setIsDone={setIsDone} />}
      {currStep === 'next-of-kin' && !isDone && <NextOfKin setIsDone={setIsDone} />}

      {/* Success Message */}
      {(currStep === 'bvn-verification' ||
        currStep === 'identity-verification' ||
        currStep === 'proof-of-address') &&
        isDone && (
          <SuccessMessage
            heading="Submitted"
            subHeading="Verification takes 1-3 days"
            btnOnClick={() => {
              setIsDone(false);
              setCurrStep('verification-home');
            }}
            btnName="Done"
          />
        )}

      {currStep === 'next-of-kin' && isDone && (
        <SuccessMessage
          heading="Submitted"
          subHeading="Next of Kin details has been added to your profile"
          btnOnClick={() => {
            setIsDone(false);
            setCurrStep('verification-home');
          }}
          btnName="Done"
        />
      )}
    </div>
  );
}
