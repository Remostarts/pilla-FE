'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import product from '../../../../../public/assets/icons/product.svg';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { SIDENAV_ITEMS } from '@/constants';

export const LeftSideRar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky top-1 h-full justify-between space-y-3 border-r bg-white pt-2 max-sm:hidden lg:w-[250px]">
      <div className="lg:flex-center hidden">
        <Image src={'/assets/images/logo-transparent.png'} width="100" height="10" alt="" />
      </div>
      <div className="mt-2 flex flex-1 flex-col gap-3 px-2 text-center">
        {/* home */}
        {SIDENAV_ITEMS.map((item, idx) => {
          return (
            <div className="w-full" key={idx}>
              {item.submenu ? (
                <>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" style={{ border: '10px gray !important' }}>
                      <AccordionTrigger
                        style={{ textDecoration: 'none', border: '0px solid' }}
                        className={
                          pathname === '/dashBoardProduct'
                            ? '!hover:no-underline flex items-center justify-center gap-x-2 rounded-lg bg-slate-50/20 p-2 text-black'
                            : '!hover:no-underline flex items-center justify-center gap-x-2 rounded-lg !border p-2'
                        }
                      >
                        <Image src={product} alt="home" width={20} height={20} />
                        <p className="hidden lg:block">{item.title}</p>
                      </AccordionTrigger>
                      {item.subMenuItems?.map((subItem, subIdx) => {
                        return (
                          <AccordionContent
                            className="mt-2 flex flex-col space-y-2 pl-6"
                            key={subIdx}
                          >
                            <Link
                              href={subItem.path as string}
                              className={` ${subItem.path === pathname ? 'primary-gradient flex items-center justify-center gap-x-2 rounded-lg bg-slate-50/20 p-2 text-black' : 'text-dark300_light900 flex items-center justify-center gap-x-2 rounded-lg border p-2'}`}
                            >
                              <Image src={subItem.icon} width={20} height={20} alt="" />
                              <p className="hidden lg:block">{subItem.title}</p>
                            </Link>
                          </AccordionContent>
                        );
                      })}
                    </AccordionItem>
                  </Accordion>
                </>
              ) : (
                <div className="w-full">
                  <Link
                    href={item.path as string}
                    className={`${item.path === pathname ? 'primary-gradient flex items-center justify-center gap-x-2 rounded-lg bg-slate-50/20 p-2 text-black' : 'text-dark300_light900 flex items-center justify-center gap-x-2 rounded-lg border p-2'}`}
                  >
                    <Image width={20} height={20} src={`${item.icon}`} alt="" />
                    <p className="hidden lg:block"> {item.title}</p>
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-3 px-4">
        <Link href="/sign-in">
          <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
            <Image
              src="/assets/icons/account.svg"
              alt="login"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
            <span className="primary-text-gradient max-lg:hidden">Log In</span>
          </Button>
        </Link>

        <Link href="/sign-up">
          <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
            <Image
              src="/assets/icons/sign-up.svg"
              alt="sign up"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
            <span className="max-lg:hidden">Sign up</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};
