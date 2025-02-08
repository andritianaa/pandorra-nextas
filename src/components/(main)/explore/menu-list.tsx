"use client"

import Link from 'next/link';

export type MenuListProps = {}

export const MenuList = (props: MenuListProps) => {
  return (
    <ul className="menu-list mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-5">
      <li id="tour2-step1">
        <Link
          className="text-f-text-secondary hover:text-f-text group relative flex h-full flex-col gap-x-1 rounded-xl bg-[linear-gradient(325deg,#F37300_0%,#F0AA00_55%,#F37300_90%)] bg-[280%_auto] p-4 text-white shadow-[0px_0px_20px_rgba(243,115,0,0.5),0px_5px_5px_-1px_rgba(240,170,0,0.25),inset_4px_4px_8px_rgba(255,200,150,0.5),inset_-4px_-4px_8px_rgba(235,130,50,0.35)] transition-all duration-700 ease-in-out hover:scale-105 hover:bg-right-top md:p-[18px]"
          href="/ai-video-generator"
          prefetch={true}
        >
          <div className="flex items-center justify-between">
            <span className="mb-3 inline-flex items-center justify-center">
              <span className="inline-flex size-9 items-center justify-center text-white">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.5 33C28.5 33.8284 27.8284 34.5 27 34.5C26.1716 34.5 25.5 33.8284 25.5 33C25.5 32.1716 26.1716 31.5 27 31.5C27.8284 31.5 28.5 32.1716 28.5 33Z"
                    fill="white"
                  />
                  <path
                    d="M34.5 27C34.5 27.8284 33.8284 28.5 33 28.5C32.1716 28.5 31.5 27.8284 31.5 27C31.5 26.1716 32.1716 25.5 33 25.5C33.8284 25.5 34.5 26.1716 34.5 27Z"
                    fill="white"
                  />
                  <path
                    d="M4.5 9C4.5 9.82843 3.82843 10.5 3 10.5C2.17157 10.5 1.5 9.82843 1.5 9C1.5 8.17157 2.17157 7.5 3 7.5C3.82843 7.5 4.5 8.17157 4.5 9Z"
                    fill="white"
                  />
                  <path
                    d="M10.5 3C10.5 3.82843 9.82843 4.5 9 4.5C8.17157 4.5 7.5 3.82843 7.5 3C7.5 2.17157 8.17157 1.5 9 1.5C9.82843 1.5 10.5 2.17157 10.5 3Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 9.72437L17.0217 13.7589C16.6307 15.3715 15.3715 16.6307 13.7589 17.0217L9.72437 18L13.7589 18.9783C15.3715 19.3694 16.6307 20.6285 17.0217 22.2411L18 26.2756L18.9783 22.2411C19.3694 20.6285 20.6285 19.3694 22.2411 18.9783L26.2756 18L22.2411 17.0217C20.6285 16.6307 19.3694 15.3715 18.9783 13.7589L18 9.72437ZM19.9579 7.53984C19.46 5.48672 16.54 5.48672 16.0421 7.53985L14.6723 13.1892C14.4945 13.9222 13.9222 14.4945 13.1892 14.6723L7.53984 16.0421C5.48672 16.54 5.48672 19.46 7.53985 19.9579L13.1892 21.3277C13.9222 21.5055 14.4945 22.0778 14.6723 22.8108L16.0421 28.4602C16.54 30.5133 19.46 30.5133 19.9579 28.4602L21.3277 22.8108C21.5055 22.0778 22.0778 21.5055 22.8108 21.3277L28.4602 19.9579C30.5133 19.46 30.5133 16.54 28.4602 16.0421L22.8108 14.6723C22.0778 14.4945 21.5055 13.9222 21.3277 13.1892L19.9579 7.53984Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5069 33.472C13.2462 34.1706 12.4686 34.5255 11.7701 34.2648C7.24545 32.576 3.61099 29.0702 1.7546 24.6343C1.46677 23.9465 1.791 23.1556 2.47879 22.8677C3.16657 22.5799 3.95747 22.9041 4.2453 23.5919C5.81431 27.3412 8.88981 30.3078 12.7142 31.7352C13.4127 31.9959 13.7676 32.7735 13.5069 33.472Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M33.473 13.5311C32.7747 13.7924 31.9968 13.4381 31.7355 12.7398C30.2969 8.89431 27.2956 5.80608 23.504 4.24876C22.8143 3.96549 22.4849 3.17676 22.7681 2.48708C23.0514 1.79741 23.8401 1.46795 24.5298 1.75122C29.014 3.593 32.5615 7.24196 34.2644 11.7937C34.5256 12.492 34.1713 13.2699 33.473 13.5311Z"
                    fill="white"
                  />
                </svg>
              </span>
            </span>
            <span className="i-com--right-arrow inline-flex size-6 items-center justify-center text-white transition-all group-hover:translate-x-1 md:block"></span>
          </div>
          <div className="whitespace-pre-wrap text-sm font-semibold text-white md:text-base">
            Chat with AI
          </div>
        </Link>
      </li>

      <li id="tour2-step2">
        <Link
          className="text-f-text-secondary hover:text-f-text group relative flex h-full flex-col gap-x-1 rounded-xl bg-[linear-gradient(325deg,#0044ff_0%,#2ccfff_55%,#0044ff_90%)] bg-[280%_auto] p-4 text-white shadow-[0px_0px_20px_rgba(71,184,255,0.5),0px_5px_5px_-1px_rgba(58,125,233,0.25),inset_4px_4px_8px_rgba(175,230,255,0.5),inset_-4px_-4px_8px_rgba(19,95,216,0.35)] transition-all duration-700 ease-in-out hover:scale-105 hover:bg-right-top md:p-[18px]"
          href="/image/generation"
          prefetch={true}
        >
          <div className="flex items-center justify-between">
            <span className="mb-3 inline-flex items-center justify-center">
              <span className="inline-flex size-9 items-center justify-center text-white">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.0106 7.20541C19.422 6.5982 16.7279 6.5982 14.1392 7.20541C10.7732 7.99499 8.14491 10.6232 7.35534 13.9893C6.74812 16.578 6.74812 19.272 7.35534 21.8607C7.47629 22.3763 7.64038 22.8746 7.84366 23.3517L9.4063 21.789C12.195 19.0003 16.7163 19.0003 19.505 21.789L20.9704 23.2544L20.996 23.2287C23.0719 21.1528 26.3181 21.033 28.531 22.7695C28.6338 22.4734 28.7219 22.1701 28.7945 21.8607C29.4017 19.272 29.4017 16.578 28.7945 13.9893C28.0049 10.6232 25.3767 7.99499 22.0106 7.20541ZM30.2222 25.564C30.758 24.6106 31.1659 23.5742 31.4232 22.4773C32.1255 19.4831 32.1255 16.3669 31.4232 13.3727C30.3994 9.0083 26.9916 5.60052 22.6272 4.57676C19.633 3.87441 16.5169 3.87441 13.5226 4.57676C9.15822 5.60052 5.75045 9.00829 4.72669 13.3727C4.02434 16.3669 4.02434 19.4831 4.72669 22.4773C5.75045 26.8417 9.15823 30.2495 13.5227 31.2732C16.5169 31.9756 19.633 31.9756 22.6272 31.2732C25.6817 30.5567 28.2677 28.6725 29.8957 26.1099C30.0507 25.9525 30.1601 25.7645 30.2222 25.564ZM27.2256 25.2291C26.0819 23.982 24.1153 23.9278 22.9052 25.1379L22.8795 25.1636L25.0358 27.3199C25.8778 26.7496 26.618 26.0423 27.2256 25.2291ZM22.4325 28.5349L17.5958 23.6982C15.8615 21.9639 13.0497 21.9639 11.3155 23.6982L9.30687 25.7068C10.5422 27.1474 12.2209 28.1946 14.1392 28.6446C16.7279 29.2518 19.422 29.2518 22.0106 28.6446C22.1526 28.6113 22.2933 28.5747 22.4325 28.5349Z"
                    fill="white"
                  />
                  <path
                    d="M21.452 11.0293C21.6231 10.3236 22.6269 10.3236 22.798 11.0293L23.2689 12.9713C23.33 13.2233 23.5267 13.42 23.7787 13.4811L25.7207 13.952C26.4264 14.1231 26.4264 15.1269 25.7207 15.298L23.7787 15.7689C23.5267 15.83 23.33 16.0267 23.2689 16.2787L22.798 18.2207C22.6269 18.9264 21.6231 18.9264 21.452 18.2207L20.9811 16.2787C20.92 16.0267 20.7233 15.83 20.4713 15.7689L18.5293 15.298C18.4852 15.2873 18.4439 15.2734 18.4053 15.2566C17.8263 15.0047 17.8677 14.1124 18.5293 13.952L20.4713 13.4811C20.7233 13.42 20.92 13.2233 20.9811 12.9713L21.452 11.0293Z"
                    fill="white"
                  />
                  <path
                    d="M33 31.5C33 32.3284 32.3284 33 31.5 33C30.6716 33 30 32.3284 30 31.5C30 30.6716 30.6716 30 31.5 30C32.3284 30 33 30.6716 33 31.5Z"
                    fill="white"
                  />
                  <path
                    d="M33 4.5C33 5.32843 32.3284 6 31.5 6C30.6716 6 30 5.32843 30 4.5C30 3.67157 30.6716 3 31.5 3C32.3284 3 33 3.67157 33 4.5Z"
                    fill="white"
                  />
                  <path
                    d="M6 31.5C6 32.3284 5.32843 33 4.5 33C3.67157 33 3 32.3284 3 31.5C3 30.6716 3.67157 30 4.5 30C5.32843 30 6 30.6716 6 31.5Z"
                    fill="white"
                  />
                  <path
                    d="M6 4.5C6 5.32843 5.32843 6 4.5 6C3.67157 6 3 5.32843 3 4.5C3 3.67157 3.67157 3 4.5 3C5.32843 3 6 3.67157 6 4.5Z"
                    fill="white"
                  />
                </svg>
              </span>
            </span>
            <span className="i-com--right-arrow inline-flex size-6 items-center justify-center text-white transition-all group-hover:translate-x-1 md:block"></span>
          </div>
          <div className="whitespace-pre-wrap text-sm font-semibold text-white md:text-base">
            Image generation
          </div>
        </Link>
      </li>
      <li id="tour2-step3">
        <Link
          className="text-f-text-secondary hover:text-f-text group relative flex h-full flex-col gap-x-1 rounded-xl bg-[linear-gradient(325deg,#D6141E_0%,#FF824C_55%,#D6141E_90%)] bg-[280%_auto] p-4 text-white shadow-[0px_0px_20px_rgba(255,50,50,0.5),0px_5px_5px_-1px_rgba(255,130,100,0.25),inset_4px_4px_8px_rgba(255,180,150,0.5),inset_-4px_-4px_8px_rgba(214,20,30,0.35)] transition-all duration-700 ease-in-out hover:scale-105 hover:bg-right-top md:p-[18px]"
          href="/video"
          prefetch={true}
        >
          <div className="flex items-center justify-between">
            <span className="mb-3 inline-flex items-center justify-center">
              <span className="inline-flex size-9 items-center justify-center text-white">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27 3C27 3.82843 26.3284 4.5 25.5 4.5C24.6716 4.5 24 3.82843 24 3C24 2.17157 24.6716 1.5 25.5 1.5C26.3284 1.5 27 2.17157 27 3Z"
                    fill="white"
                  />
                  <path
                    d="M4.63817 1.9812C4.79375 1.3396 5.70625 1.3396 5.86183 1.9812L6.28992 3.74661C6.34546 3.97568 6.52432 4.15454 6.75339 4.21008L8.5188 4.63817C9.1604 4.79375 9.1604 5.70625 8.5188 5.86183L6.75339 6.28992C6.72475 6.29686 6.69691 6.30573 6.66998 6.31638C6.48153 6.39096 6.33852 6.55295 6.28992 6.75339L5.86183 8.5188C5.85211 8.5589 5.83943 8.59649 5.82416 8.63158C5.59515 9.15789 4.78402 9.1203 4.63817 8.5188L4.21008 6.75339C4.20661 6.73907 4.20266 6.72495 4.19824 6.71104C4.13198 6.50244 3.96137 6.34199 3.74661 6.28992L1.9812 5.86183C1.9411 5.85211 1.90351 5.83943 1.86842 5.82416C1.34211 5.59515 1.3797 4.78402 1.9812 4.63817L3.74661 4.21008C3.97568 4.15454 4.15454 3.97568 4.21008 3.74661L4.63817 1.9812Z"
                    fill="white"
                  />
                  <path
                    d="M34.5 6C34.5 6.82843 33.8284 7.5 33 7.5C32.1716 7.5 31.5 6.82843 31.5 6C31.5 5.17157 32.1716 4.5 33 4.5C33.8284 4.5 34.5 5.17157 34.5 6Z"
                    fill="white"
                  />
                  <path
                    d="M9 27.75C9 28.5784 8.32843 29.25 7.5 29.25C6.67157 29.25 6 28.5784 6 27.75C6 26.9216 6.67157 26.25 7.5 26.25C8.32843 26.25 9 26.9216 9 27.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.5 21.75C25.5 25.8921 22.1421 29.25 18 29.25C13.8579 29.25 10.5 25.8921 10.5 21.75C10.5 17.6079 13.8579 14.25 18 14.25C22.1421 14.25 25.5 17.6079 25.5 21.75ZM22.95 21.75C22.95 24.4838 20.7338 26.7 18 26.7C15.2662 26.7 13.05 24.4838 13.05 21.75C13.05 19.0162 15.2662 16.8 18 16.8C20.7338 16.8 22.95 19.0162 22.95 21.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.9584 8.47308C13.693 6.95741 15.1948 6 16.8375 6H19.1625C20.8052 6 22.3069 6.95741 23.0416 8.47308L23.6418 9.71139C23.9382 10.323 24.5442 10.7093 25.2071 10.7093H29.413C31.8083 10.7093 33.75 12.7123 33.75 15.1831V28.5262C33.75 30.997 31.8083 33 29.413 33H6.58696C4.19172 33 2.25 30.997 2.25 28.5262V15.1831C2.25 12.7123 4.19172 10.7093 6.58696 10.7093H10.7929C11.4558 10.7093 12.0618 10.323 12.3582 9.71139L12.9584 8.47308ZM16.8375 8.6686C16.1746 8.6686 15.5687 9.05493 15.2722 9.66651L14.672 10.9048C13.9374 12.4205 12.4357 13.3779 10.7929 13.3779H6.58696C5.62046 13.3779 4.83696 14.1861 4.83696 15.1831V28.5262C4.83696 29.5232 5.62046 30.3314 6.58696 30.3314H29.413C30.3795 30.3314 31.163 29.5232 31.163 28.5262V15.1831C31.163 14.1861 30.3795 13.3779 29.413 13.3779H25.2071C23.5643 13.3779 22.0626 12.4205 21.328 10.9048L20.7278 9.66651C20.4313 9.05493 19.8254 8.6686 19.1625 8.6686H16.8375Z"
                    fill="white"
                  />
                </svg>
              </span>
            </span>
            <span className="i-com--right-arrow inline-flex size-6 items-center justify-center text-white transition-all group-hover:translate-x-1 md:block"></span>
          </div>
          <div className="whitespace-pre-wrap text-sm font-semibold text-white md:text-base">
            Image to Video
          </div>
        </Link>
      </li>
      <li id="tour2-step4">
        <Link
          className="text-f-text-secondary hover:text-f-text group relative flex h-full flex-col gap-x-1 rounded-xl bg-[linear-gradient(325deg,#FF0037_0%,#f73861_55%,#FF0037_90%)] bg-[280%_auto] p-4 text-white shadow-[0px_0px_20px_rgba(255,0,55,0.5),0px_5px_5px_-1px_rgba(253,28,77,0.25),inset_4px_4px_8px_rgba(255,100,130,0.5),inset_-4px_-4px_8px_rgba(255,0,55,0.35)] transition-all duration-700 ease-in-out hover:scale-105 hover:bg-right-top md:p-[18px]"
          href="/assistant"
          prefetch={true}
        >
          <div className="flex items-center justify-between">
            <span className="mb-3 inline-flex items-center justify-center">
              <span className="inline-flex size-9 items-center justify-center text-white">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27 3C27 3.82843 26.3284 4.5 25.5 4.5C24.6716 4.5 24 3.82843 24 3C24 2.17157 24.6716 1.5 25.5 1.5C26.3284 1.5 27 2.17157 27 3Z"
                    fill="white"
                  />
                  <path
                    d="M4.63817 1.9812C4.79375 1.3396 5.70625 1.3396 5.86183 1.9812L6.28992 3.74661C6.34546 3.97568 6.52432 4.15454 6.75339 4.21008L8.5188 4.63817C9.1604 4.79375 9.1604 5.70625 8.5188 5.86183L6.75339 6.28992C6.72475 6.29686 6.69691 6.30573 6.66998 6.31638C6.48153 6.39096 6.33852 6.55295 6.28992 6.75339L5.86183 8.5188C5.85211 8.5589 5.83943 8.59649 5.82416 8.63158C5.59515 9.15789 4.78402 9.1203 4.63817 8.5188L4.21008 6.75339C4.20661 6.73907 4.20266 6.72495 4.19824 6.71104C4.13198 6.50244 3.96137 6.34199 3.74661 6.28992L1.9812 5.86183C1.9411 5.85211 1.90351 5.83943 1.86842 5.82416C1.34211 5.59515 1.3797 4.78402 1.9812 4.63817L3.74661 4.21008C3.97568 4.15454 4.15454 3.97568 4.21008 3.74661L4.63817 1.9812Z"
                    fill="white"
                  />
                  <path
                    d="M34.5 6C34.5 6.82843 33.8284 7.5 33 7.5C32.1716 7.5 31.5 6.82843 31.5 6C31.5 5.17157 32.1716 4.5 33 4.5C33.8284 4.5 34.5 5.17157 34.5 6Z"
                    fill="white"
                  />
                  <path
                    d="M9 27.75C9 28.5784 8.32843 29.25 7.5 29.25C6.67157 29.25 6 28.5784 6 27.75C6 26.9216 6.67157 26.25 7.5 26.25C8.32843 26.25 9 26.9216 9 27.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.5 21.75C25.5 25.8921 22.1421 29.25 18 29.25C13.8579 29.25 10.5 25.8921 10.5 21.75C10.5 17.6079 13.8579 14.25 18 14.25C22.1421 14.25 25.5 17.6079 25.5 21.75ZM22.95 21.75C22.95 24.4838 20.7338 26.7 18 26.7C15.2662 26.7 13.05 24.4838 13.05 21.75C13.05 19.0162 15.2662 16.8 18 16.8C20.7338 16.8 22.95 19.0162 22.95 21.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.9584 8.47308C13.693 6.95741 15.1948 6 16.8375 6H19.1625C20.8052 6 22.3069 6.95741 23.0416 8.47308L23.6418 9.71139C23.9382 10.323 24.5442 10.7093 25.2071 10.7093H29.413C31.8083 10.7093 33.75 12.7123 33.75 15.1831V28.5262C33.75 30.997 31.8083 33 29.413 33H6.58696C4.19172 33 2.25 30.997 2.25 28.5262V15.1831C2.25 12.7123 4.19172 10.7093 6.58696 10.7093H10.7929C11.4558 10.7093 12.0618 10.323 12.3582 9.71139L12.9584 8.47308ZM16.8375 8.6686C16.1746 8.6686 15.5687 9.05493 15.2722 9.66651L14.672 10.9048C13.9374 12.4205 12.4357 13.3779 10.7929 13.3779H6.58696C5.62046 13.3779 4.83696 14.1861 4.83696 15.1831V28.5262C4.83696 29.5232 5.62046 30.3314 6.58696 30.3314H29.413C30.3795 30.3314 31.163 29.5232 31.163 28.5262V15.1831C31.163 14.1861 30.3795 13.3779 29.413 13.3779H25.2071C23.5643 13.3779 22.0626 12.4205 21.328 10.9048L20.7278 9.66651C20.4313 9.05493 19.8254 8.6686 19.1625 8.6686H16.8375Z"
                    fill="white"
                  />
                </svg>
              </span>
            </span>
            <span className="i-com--right-arrow inline-flex size-6 items-center justify-center text-white transition-all group-hover:translate-x-1 md:block"></span>
          </div>
          <div className="whitespace-pre-wrap text-sm font-semibold text-white md:text-base">
            AI assistant
          </div>
        </Link>
      </li>
      <li id="tour2-step5">
        <Link
          className="text-f-text-secondary hover:text-f-text group relative flex h-full flex-col gap-x-1 rounded-xl bg-[linear-gradient(325deg,#3F0098_0%,#8933FF_55%,#3F0098_90%)] bg-[280%_auto] p-4 text-white shadow-[0px_0px_20px_rgba(137,51,255,0.5),0px_5px_5px_-1px_rgba(111,33,230,0.25),inset_4px_4px_8px_rgba(170,102,255,0.5),inset_-4px_-4px_8px_rgba(63,0,152,0.35)] transition-all duration-700 ease-in-out hover:scale-105 hover:bg-right-top md:p-[18px]"
          href="/audio"
          prefetch={true}
        >
          <div className="flex items-center justify-between">
            <span className="mb-3 inline-flex items-center justify-center">
              <span className="inline-flex size-9 items-center justify-center text-white">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.2658 11.0774C26.4525 10.3075 27.5475 10.3075 27.7342 11.0774L28.2479 13.1959C28.3146 13.4708 28.5292 13.6854 28.8041 13.7521L30.9226 14.2658C31.6925 14.4525 31.6925 15.5475 30.9226 15.7342L28.8041 16.2479C28.5292 16.3146 28.3146 16.5292 28.2479 16.8041L27.7342 18.9226C27.5475 19.6925 26.4525 19.6925 26.2658 18.9226L25.7521 16.8041C25.6855 16.5292 25.4708 16.3146 25.1959 16.2479L23.0775 15.7342C23.0293 15.7225 22.9842 15.7073 22.9421 15.689C22.3105 15.4142 22.3557 14.4408 23.0775 14.2658L25.1959 13.7521C25.4708 13.6854 25.6855 13.4708 25.7521 13.1959L26.2658 11.0774Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.9247 22.5425C15.1527 22.21 13.3473 22.21 11.5753 22.5425C10.6944 22.7078 9.97961 23.6262 9.97961 24.7922V25.1919C9.97961 25.5333 10.202 25.7069 10.3656 25.7069H18.1344C18.2981 25.7069 18.5204 25.5333 18.5204 25.1919V24.7922C18.5204 23.6262 17.8056 22.7078 16.9247 22.5425ZM11.1679 19.7873C13.2096 19.4042 15.2904 19.4042 17.3322 19.7873C19.4836 20.191 21 22.3479 21 24.7922V25.1919C21 26.9619 19.7666 28.5 18.1344 28.5H10.3656C8.73346 28.5 7.50001 26.9619 7.50001 25.1919V24.7922C7.50001 22.3479 9.01646 20.191 11.1679 19.7873Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.9158 2.74449C11.0569 3.43437 10.6121 4.10802 9.92219 4.24914C8.28831 4.58334 7.04901 5.23329 6.14116 6.14114C5.2333 7.049 4.58335 8.2883 4.24915 9.92217C4.10804 10.612 3.43439 11.0569 2.74451 10.9158C2.05463 10.7747 1.60977 10.101 1.75088 9.41116C2.16668 7.37837 3.01673 5.65933 4.33804 4.33802C5.65935 3.01671 7.37838 2.16666 9.41117 1.75086C10.1011 1.60975 10.7747 2.05462 10.9158 2.74449ZM33.2448 23.4154C33.9359 23.5506 34.3865 24.2204 34.2513 24.9115C33.4511 29.0013 30.958 33.3829 25.7096 34.2576C25.015 34.3734 24.3581 33.9042 24.2424 33.2096C24.1266 32.515 24.5958 31.8581 25.2904 31.7423C29.042 31.1171 31.0489 27.9987 31.7487 24.4218C31.8839 23.7308 32.5538 23.2802 33.2448 23.4154ZM3.00001 23.3917C3.70418 23.3917 4.27501 23.9625 4.27501 24.6667C4.27501 28.5974 6.80168 31.1126 9.92218 31.7509C10.6121 31.892 11.0569 32.5656 10.9158 33.2555C10.7747 33.9454 10.1011 34.3902 9.41118 34.2491C5.19835 33.3874 1.72501 29.9026 1.72501 24.6667C1.72501 23.9625 2.29585 23.3917 3.00001 23.3917Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.25 15.3C15.6583 15.3 16.8 14.1583 16.8 12.75C16.8 11.3417 15.6583 10.2 14.25 10.2C12.8417 10.2 11.7 11.3417 11.7 12.75C11.7 14.1583 12.8417 15.3 14.25 15.3ZM14.25 18C17.1495 18 19.5 15.6495 19.5 12.75C19.5 9.8505 17.1495 7.5 14.25 7.5C11.3505 7.5 9.00001 9.8505 9.00001 12.75C9.00001 15.6495 11.3505 18 14.25 18Z"
                    fill="white"
                  />
                  <path
                    d="M25.5 3C25.5 3.82843 24.8284 4.5 24 4.5C23.1716 4.5 22.5 3.82843 22.5 3C22.5 2.17157 23.1716 1.5 24 1.5C24.8284 1.5 25.5 2.17157 25.5 3Z"
                    fill="white"
                  />
                  <path
                    d="M33 6C33 6.82843 32.3284 7.5 31.5 7.5C30.6716 7.5 30 6.82843 30 6C30 5.17157 30.6716 4.5 31.5 4.5C32.3284 4.5 33 5.17157 33 6Z"
                    fill="white"
                  />
                  <path
                    d="M28.5 24C28.5 24.8284 27.8284 25.5 27 25.5C26.1716 25.5 25.5 24.8284 25.5 24C25.5 23.1716 26.1716 22.5 27 22.5C27.8284 22.5 28.5 23.1716 28.5 24Z"
                    fill="white"
                  />
                </svg>
              </span>
            </span>
            <span className="i-com--right-arrow inline-flex size-6 items-center justify-center text-white transition-all group-hover:translate-x-1 md:block"></span>
          </div>
          <div className="whitespace-pre-wrap text-sm font-semibold text-white md:text-base">
            Audio generation
          </div>
        </Link>
      </li>
    </ul>
  )
}
