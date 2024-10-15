import Image from 'next/image';

import SubHeading from '../../../shared/SubHeading';
import { Heading } from '../../../shared/Heading';
import { SuccessMessage } from '../../../shared/SuccessMessage';
import { Sidebar } from '../../../shared/SideBar';

import BvnVerification from './BvnVerification';
import IdentityVerification from './IdentityVerification';
import ProofOfAddress from './ProofOfAddress';
import NextOfKin from './NextOfKin';

import {
  BVN_VERIFICATION_WINDOW,
  IDENTITY_VERIFICATION_WINDOW,
  NEXT_OF_KIN_SUCCESS_WINDOW,
  NEXT_OF_KIN_WINDOW,
  PROOF_OF_ADDRESS_WINDOW,
  VERIFICATION_SUCCESS_WINDOW,
} from '@/constants/homeData';
import { DashboardResponseType } from '@/types/personalDashBHome.type';

interface VerificationHomeProps {
  personalData: DashboardResponseType;
}

export default function VerificationHome({ personalData }: VerificationHomeProps) {
  const { bankVerification, identityVerification, proofOfAddress, nextOfKin } = personalData.data;

  const verificationBtnData = [
    {
      id: 1,
      heading: 'BVN Verification',
      subHeading: 'Enter BVN to complete BVN verification',
      img: '/assets/personal-dashboard/home/bvn-verification-icon.svg',
      window: 'bvn-verification-window',
      status: 'complete',
      isVerified: bankVerification,
    },
    {
      id: 2,
      heading: 'Identity Verification',
      subHeading: 'Upload ID to complete identity verification',
      img: '/assets/personal-dashboard/home/identity-verification-icon.svg',
      window: 'identity-verification-window',
      status: 'pending',
      isVerified: identityVerification,
    },
    {
      id: 3,
      heading: 'Proof of Address',
      subHeading: 'Upload an utility bill',
      img: '/assets/personal-dashboard/home/proof-of-address-icon.svg',
      window: 'proof-of-address-window',
      status: 'pending',
      isVerified: proofOfAddress,
    },
    {
      id: 4,
      heading: 'Next of Kin',
      subHeading: 'Add next of kin details',
      img: '/assets/personal-dashboard/home/next-of-kin-icon.svg',
      window: 'next-of-kin-window',
      status: 'pending',
      isVerified: nextOfKin,
    },
  ];

  return (
    <div className="p-4">
      <Heading heading="Get started with Pilla" size="2xl" />
      <SubHeading subHeading="It's simple, just upload the required documents, to verify your account." />

      <div className="mt-10 space-y-6">
        {verificationBtnData.map((data) => (
          <Sidebar.Open key={data.id} opens={data.isVerified ? '' : data.window}>
            <button className="flex w-full items-center justify-between rounded-lg bg-gray-100 p-5">
              <div className="flex items-center space-x-3 xl:space-x-6">
                <div className="relative">
                  <Image src={data.img} alt={data.window} width={40} height={40} />
                </div>
                <div className="flex flex-col items-start">
                  <Heading heading={data.heading} size="lg" />
                  <SubHeading subHeading={data.subHeading} className=" text-sm" />
                </div>
              </div>

              {!data.isVerified ? (
                <Image
                  src="/assets/personal-dashboard/home/caution-triangle-icon.svg"
                  alt="caution-triangle-icon"
                  width={25}
                  height={25}
                />
              ) : (
                <Image
                  src="/assets/personal-dashboard/home/correct-triangle-icon.svg"
                  alt="caution-triangle-icon"
                  width={25}
                  height={25}
                />
              )}
            </button>
          </Sidebar.Open>
        ))}
      </div>

      {/* Sidebar Windows */}

      {/* BVN Verification Window */}
      <Sidebar.Window name={BVN_VERIFICATION_WINDOW}>
        <BvnVerification />
      </Sidebar.Window>

      {/* Identity Verification Window */}
      <Sidebar.Window name={IDENTITY_VERIFICATION_WINDOW}>
        <IdentityVerification />
      </Sidebar.Window>

      {/* Proof of Address  Window */}
      <Sidebar.Window name={PROOF_OF_ADDRESS_WINDOW}>
        <ProofOfAddress />
      </Sidebar.Window>

      {/* Next of Kin Window */}
      <Sidebar.Window name={NEXT_OF_KIN_WINDOW}>
        <NextOfKin />
      </Sidebar.Window>

      {/* Success Message for Next of Kin Window */}
      <Sidebar.Window name={NEXT_OF_KIN_SUCCESS_WINDOW}>
        <SuccessMessage>
          <SuccessMessage.Title>Submitted</SuccessMessage.Title>
          <SuccessMessage.Content>
            <SuccessMessage.Description>
              Next of Kin details has been added to your profile
            </SuccessMessage.Description>
          </SuccessMessage.Content>
          <SuccessMessage.Button closes={NEXT_OF_KIN_SUCCESS_WINDOW}>Done</SuccessMessage.Button>
        </SuccessMessage>
      </Sidebar.Window>

      {/* Success Message Window */}
      <Sidebar.Window name={VERIFICATION_SUCCESS_WINDOW}>
        <SuccessMessage>
          <SuccessMessage.Title>Submitted</SuccessMessage.Title>
          <SuccessMessage.Content>
            <SuccessMessage.Description>Verification takes 1-3 days</SuccessMessage.Description>
          </SuccessMessage.Content>
          <SuccessMessage.Button closes={VERIFICATION_SUCCESS_WINDOW}>Done</SuccessMessage.Button>
        </SuccessMessage>
      </Sidebar.Window>
    </div>
  );
}
