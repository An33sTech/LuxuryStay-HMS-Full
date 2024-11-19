import React from "react";
import { Fragment, useState } from 'react'
import { navigation } from "../Components/Data";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/luxurylogo.png'
import LoginModal from '../Components/LoginModal';
import SignUp from '../Components/SignUp'
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // loginModal
  const [modalopen, setModalOpen] = React.useState(false);

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleOpen = () => {
    setModalOpen(true);
  };

  // signup modal

  const [signupopen, setSignupOpen] = React.useState(false);

  const handleSignupClose = () => {
    setSignupOpen(false);
  };

  const handleSignupOpen = () => {
    setSignupOpen(true);
  };
  
  return (
    <div className="bg-[#121313]">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden ">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-white bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-[#121313] pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-white"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 whitespace-nowrap px-1 py-4 text-base font-medium text-white"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                            <img alt={item.imageAlt} src={item.imageSrc} className="object-cover object-center" />
                          </div>
                          <a href={item.href} className="mt-6 block font-medium text-white">
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </a>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-white">
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a href={item.href} className="-m-2 block p-2 text-white">
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <Link
                    className="-m-2 block p-2 font-medium text-white"
                    to={page.href}
                  >
                      {page.name}
                  </Link>
                </div>
              ))}
            </div>

            <div className="space-y-8 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a href="#" onClick={handleOpen} className="group w-[50%] -m-2 flex items-center gap-2 px-2 py-1 text-sm font-bold text-white border border-gray-700 bg-transparent rounded-lg shadow-inner opacity-100 transform-none hover:bg-gray-700">
                  Sign in
                </a>
                {modalopen && ( // Conditionally render the modal
                  <LoginModal isOpen={modalopen} onClose={handleClose} />
                )}

              </div>
              <div className="flow-root">
                <a href="#" onClick={handleSignupOpen} className="btn group w-[50%] -m-2 flex items-center gap-2 px-2 py-1 text-sm font-bold text-gray-800  rounded-lg shadow-inner opacity-100 transform-none">
                  Create Account
                </a>
                {signupopen && ( // Conditionally render the modal
                    <SignUp isOpen={signupopen} onClose={handleSignupClose} />
                  )}
              </div>
            </div>

          </DialogPanel>
        </div>
      </Dialog>

{/* desktop view */}
      <header className="relative bg-[#121313]">

        <nav aria-label="Top" className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md p-2 text-white lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6 " />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt="logo"
                    src={logo}
                    className=" h-16 w-auto"
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full z-50 space-x-8">
                  {navigation.pages.map((page) => (
                    <Link
                    className="flex items-center text-sm font-medium text-white hover:text-gray-500" 
                    key={page.name}
                    to={page.href}
                    >
                      {page.name}
                    </Link>
                  ))}
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="relative z-10 -mb-px flex items-center pt-px text-sm font-medium text-white transition-colors duration-200 ease-out hover:text-gray-500 outline-none">
                          {category.name}
                        </PopoverButton>
                      </div>

                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 z-[100] top-full text-sm text-white transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in border-t border-white"
                      >
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-slate-500 shadow" />

                        <div className="relative bg-[#121313]">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-4 gap-x-8">
                                {category.featured.map((item) => (
                                  <div key={item.name} className="group relative text-base sm:text-sm">
                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg  group-hover:opacity-75">
                                      <img
                                        alt={item.imageAlt}
                                        src={item.imageSrc}
                                        className="object-cover object-center"
                                      />
                                    </div>
                                    <a href={item.href} className="mt-6 block font-medium text-white">
                                      <span aria-hidden="true" className="absolute inset-0 z-10" />
                                      {item.name}
                                    </a>
                                  </div>
                                ))}
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p id={`${section.name}-heading`} className="font-medium text-white">
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <a href={item.href} className="hover:text-white">
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}
                </div>
              </PopoverGroup>

              {/* sign in */}
              <div className="ml-auto flex items-center">

                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="#" onClick={handleOpen} className=" group -m-2 flex items-center gap-2 px-2 py-1 text-sm font-bold text-white border border-gray-700 bg-transparent rounded-lg shadow-inner opacity-100 transform-none hover:bg-gray-700">
                    Sign in
                  </a>
                  {modalopen && ( // Conditionally render the modal
                    <LoginModal isOpen={modalopen} onClose={handleClose} />
                  )}
                  <a href="#" onClick={handleSignupOpen} className="btn group -m-2 flex items-center gap-2 px-2 py-1 text-sm font-bold text-gray-800 rounded-lg shadow-inner opacity-100 transform-none">
                    Create Account
                  </a>
                  {signupopen && ( // Conditionally render the modal
                    <SignUp isOpen={signupopen} onClose={handleSignupClose} />
                  )}
                </div>

              </div>



            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

