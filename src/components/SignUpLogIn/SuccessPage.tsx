import React, { useState } from "react";
import { CheckIcon } from "lucide-react";
import DashboardLayout from "../Dashboard-ui/dashboard-ui";
interface SuccessPageProps {
  onDashboardClick?: () => void;
}

const SuccessPage: React.FC<SuccessPageProps> = ({ onDashboardClick }) => {

  const [ShowDashboard, setShowDashboard] = useState(false);
  if (ShowDashboard) {
    return <DashboardLayout />;
  }
  return (
    <div className="min-h-screen bg-gradient-to-l from-[#D3B4D9]/60 to-[#C2BAC2]/20 bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-[572px] h-[590px] md:w-full bg-white rounded-custom20px shadow-lg p-8">
        {/* Logo */}
        <div className="flex items-center justify-center mb-[7rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="32"
            viewBox="0 0 31 32"
            fill="none"
          >
            <g clip-path="url(#clip0_3505_2336)">
              <path
                d="M29.0238 17.4288L25.2143 17.4288C24.8354 17.4288 24.472 17.2783 24.2041 17.0104C23.9362 16.7425 23.7857 16.3791 23.7857 16.0002C23.7857 15.6213 23.9362 15.258 24.2041 14.9901C24.472 14.7221 24.8354 14.5716 25.2143 14.5716L29.0238 14.5716C29.4027 14.5716 29.766 14.7221 30.034 14.9901C30.3019 15.258 30.4524 15.6213 30.4524 16.0002C30.4524 16.3791 30.3019 16.7425 30.034 17.0104C29.766 17.2783 29.4027 17.4288 29.0238 17.4288ZM24.7381 21.7145C24.7381 21.3356 24.5876 20.9723 24.3197 20.7043C24.0518 20.4364 23.6884 20.2859 23.3095 20.2859L19.5 20.2859C19.1211 20.2859 18.7578 20.4364 18.4898 20.7043C18.2219 20.9723 18.0714 21.3356 18.0714 21.7145C18.0714 22.0934 18.2219 22.4567 18.4898 22.7246C18.7578 22.9926 19.1211 23.1431 19.5 23.1431L23.3095 23.1431C23.6884 23.1431 24.0518 22.9926 24.3197 22.7246C24.5876 22.4567 24.7381 22.0934 24.7381 21.7145ZM7.59523 16.0002C7.59523 15.6213 7.44472 15.258 7.17681 14.9901C6.9089 14.7221 6.54554 14.5716 6.16666 14.5716L2.35714 14.5716C1.97826 14.5716 1.6149 14.7221 1.34699 14.9901C1.07908 15.258 0.928567 15.6213 0.928567 16.0002C0.928567 16.3791 1.07908 16.7424 1.34699 17.0104C1.6149 17.2783 1.97826 17.4288 2.35714 17.4288L6.16666 17.4288C6.54554 17.4288 6.9089 17.2783 7.17681 17.0104C7.44472 16.7424 7.59523 16.3791 7.59523 16.0002ZM21.8809 16.0002C21.8809 15.6213 21.7304 15.258 21.4625 14.9901C21.1946 14.7221 20.8313 14.5716 20.4524 14.5716L10.9286 14.5716C10.5497 14.5716 10.1863 14.7221 9.91841 14.9901C9.65051 15.258 9.5 15.6213 9.5 16.0002C9.5 16.3791 9.65051 16.7424 9.91841 17.0104C10.1863 17.2783 10.5497 17.4288 10.9286 17.4288L20.4524 17.4288C20.8313 17.4288 21.1946 17.2783 21.4625 17.0104C21.7304 16.7425 21.8809 16.3791 21.8809 16.0002ZM24.7381 10.2859C24.7381 9.90704 24.5876 9.54368 24.3197 9.27577C24.0518 9.00786 23.6884 8.85735 23.3095 8.85735L16.6429 8.85735C16.264 8.85735 15.9006 9.00786 15.6327 9.27577C15.3648 9.54368 15.2143 9.90704 15.2143 10.2859C15.2143 10.6648 15.3648 11.0282 15.6327 11.2961C15.9006 11.564 16.264 11.7145 16.6429 11.7145L23.3095 11.7145C23.6884 11.7145 24.0518 11.564 24.3197 11.2961C24.5876 11.0282 24.7381 10.6648 24.7381 10.2859ZM16.1667 21.7145C16.1667 21.3356 16.0162 20.9723 15.7482 20.7043C15.4803 20.4364 15.117 20.2859 14.7381 20.2859L8.07142 20.2859C7.69254 20.2859 7.32918 20.4364 7.06127 20.7043C6.79336 20.9723 6.64285 21.3356 6.64285 21.7145C6.64285 22.0934 6.79336 22.4567 7.06127 22.7246C7.32918 22.9926 7.69254 23.1431 8.07142 23.1431L14.7381 23.1431C15.117 23.1431 15.4803 22.9926 15.7482 22.7246C16.0162 22.4567 16.1667 22.0934 16.1667 21.7145ZM19.0238 4.57164C19.0238 4.19276 18.8733 3.82939 18.6054 3.56148C18.3375 3.29358 17.9741 3.14307 17.5952 3.14307L13.7857 3.14307C13.4068 3.14307 13.0435 3.29358 12.7756 3.56148C12.5077 3.82939 12.3571 4.19276 12.3571 4.57164C12.3571 4.95052 12.5077 5.31388 12.7756 5.58179C13.0435 5.8497 13.4068 6.00021 13.7857 6.00021L17.5952 6.00021C17.9741 6.00021 18.3375 5.8497 18.6054 5.58179C18.8733 5.31388 19.0238 4.95052 19.0238 4.57164ZM13.3095 10.2859C13.3095 9.90704 13.159 9.54368 12.8911 9.27577C12.6232 9.00786 12.2598 8.85735 11.8809 8.85735L8.07142 8.85735C7.69254 8.85735 7.32918 9.00786 7.06127 9.27577C6.79336 9.54368 6.64285 9.90704 6.64285 10.2859C6.64285 10.6648 6.79336 11.0282 7.06127 11.2961C7.32918 11.564 7.69254 11.7145 8.07142 11.7145L11.8809 11.7145C12.2598 11.7145 12.6232 11.564 12.8911 11.2961C13.159 11.0282 13.3095 10.6648 13.3095 10.2859ZM19.0238 27.4288C19.0238 27.0499 18.8733 26.6865 18.6054 26.4186C18.3375 26.1507 17.9741 26.0002 17.5952 26.0002L13.7857 26.0002C13.4068 26.0002 13.0435 26.1507 12.7756 26.4186C12.5076 26.6865 12.3571 27.0499 12.3571 27.4288C12.3571 27.8077 12.5076 28.171 12.7756 28.4389C13.0435 28.7068 13.4068 28.8574 13.7857 28.8574L17.5952 28.8574C17.9741 28.8574 18.3375 28.7068 18.6054 28.4389C18.8733 28.171 19.0238 27.8077 19.0238 27.4288Z"
                fill="url(#paint0_linear_3505_2336)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_3505_2336"
                x1="30.4524"
                y1="16.0002"
                x2="0.928567"
                y2="16.0002"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FBBC05" />
                <stop offset="0.18" stop-color="#3DF80E" />
                <stop offset="0.455" stop-color="#4A1BF3" />
                <stop offset="0.705" stop-color="#BDEF27" />
                <stop offset="1" stop-color="#EA4335" />
              </linearGradient>
              <clipPath id="clip0_3505_2336">
                <rect
                  width="30.4762"
                  height="30.4762"
                  fill="white"
                  transform="translate(0.452377 0.762207)"
                />
              </clipPath>
            </defs>
          </svg>
          <button className="text-purpleColor text-[26.667px] font-krona font-[400] leading-[40px]"> Dhaam</button>
          {/* <img
            src="/api/placeholder/120/40"
            alt="Dhaam logo"
            className="mx-auto"
          /> */}
        </div>

        {/* Success Icon */}
        <div className="flex justify-center ">
          <div className="w-100 h-20 rounded-custom20px flex items-center justify-center">
            {/* <CheckIcon className="w-10 h-10 text-green-500" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="180"
              height="180"
              viewBox="0 0 180 180"
              fill="none"
            >
              <path
                d="M80.7808 7.96925C86.075 3.39282 93.925 3.39282 99.2192 7.96925C102.975 11.2159 108.162 12.2477 112.874 10.6854C119.517 8.48338 126.769 11.4874 129.909 17.7415C132.137 22.1784 136.534 25.1165 141.486 25.4766C148.465 25.9841 154.016 31.5348 154.523 38.5144C154.884 43.466 157.822 47.8632 162.258 50.0908C168.513 53.2307 171.517 60.4831 169.315 67.1256C167.752 71.8381 168.784 77.0249 172.031 80.7808C176.607 86.075 176.607 93.925 172.031 99.2192C168.784 102.975 167.752 108.162 169.315 112.874C171.517 119.517 168.513 126.769 162.258 129.909C157.822 132.137 154.884 136.534 154.523 141.486C154.016 148.465 148.465 154.016 141.486 154.523C136.534 154.884 132.137 157.822 129.909 162.258C126.769 168.513 119.517 171.517 112.874 169.315C108.162 167.752 102.975 168.784 99.2192 172.031C93.925 176.607 86.075 176.607 80.7808 172.031C77.0249 168.784 71.8381 167.752 67.1256 169.315C60.4831 171.517 53.2307 168.513 50.0908 162.258C47.8632 157.822 43.466 154.884 38.5144 154.523C31.5348 154.016 25.9841 148.465 25.4766 141.486C25.1165 136.534 22.1784 132.137 17.7415 129.909C11.4874 126.769 8.48338 119.517 10.6854 112.874C12.2477 108.162 11.2159 102.975 7.96925 99.2192C3.39282 93.925 3.39282 86.075 7.96925 80.7808C11.2159 77.0249 12.2477 71.8381 10.6854 67.1256C8.48338 60.4831 11.4874 53.2307 17.7415 50.0908C22.1784 47.8632 25.1165 43.466 25.4766 38.5145C25.9841 31.5348 31.5348 25.9841 38.5145 25.4766C43.466 25.1165 47.8632 22.1784 50.0908 17.7415C53.2307 11.4874 60.4831 8.48338 67.1256 10.6854C71.8381 12.2477 77.0249 11.2159 80.7808 7.96925Z"
                fill="#1D962B"
              />
              <g filter="url(#filter0_d_3505_1316)">
                <circle cx="90" cy="90" r="64.6734" fill="#F1F5F9" />
              </g>
              <path
                d="M69.6482 90.4524L83.2199 104.02L110.352 76.8845"
                stroke="#177822"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <filter
                  id="filter0_d_3505_1316"
                  x="21.7085"
                  y="25.3267"
                  width="136.583"
                  height="136.583"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="3.61809" />
                  <feGaussianBlur stdDeviation="1.80905" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_3505_1316"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_3505_1316"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center space-y-8 mt-[9rem]">
          <h1 className="md:text-[32px] lg:text-[32px] xl:text-[32px] sm:text-[32px] text-[28px] font-inter font-[700] text-paragraphBlack mt-[3rem] leading-[48px]">
            Account created successfully!
          </h1>
          <p className="md:text-[25px] lg:text-[25px] xl:text-[25px] sm:text-[20px] text-[16px]  font-inter  text-paragraph mb-[4rem]">
            Welcome aboard! Start your success journey with Dhaam!
          </p>
        </div>

        {/* Dashboard Button */}
        <div className="flex items-center justify-center">
          <button
           onClick={() => setShowDashboard(true)}

            className="w-[354px] h-[40px] bg-purple-600 text-white py-3 px-4 mt-[4rem] rounded-custom8px hover:bg-purple-700 transition-colors duration-200  text-[14px] font-inter font-[600] flex items-center justify-center gap-2"
          >
            Go to Dashboard
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
