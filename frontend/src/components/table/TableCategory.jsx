/** @format */

import React from "react";
import CustomButton from "../customButton/CustomButton";

const TableCategory = ({
  property,
  model,
  location,
  area,
  price,
  availability,
}) => {
  return (
    <div className="mx-auto pt-[47px] h-full lg:max-w-[1061px] lg:max-h-[205px]">
      <div className="bg-white h-full w-full rounded-tl-[27px] rounded-tr-[27px] lg:h-[146px]">
        <div className="flex  mx-auto flex-wrap px-5 lg:px-0 md:justify-evenly lg:justify-between">
          {/* PROPERTY TYPE */}
          <div className="flex flex-col items-center text-left w-[50%] sm:w-[33.3%] lg:w-[23%] lg:justify-center lg:items-start">
            <p className="text-[15.67px] font-[600] pt-[33px] pb-[43.23px] lg:pl-[87px]">
              Property Type
            </p>
            <p className="text-[14.19px] font-[400] lg:pl-[92px]">{property}</p>
          </div>

          {/* MODEL */}
          <div className="flex flex-col items-center w-[50%] sm:w-[33.3%] lg:w-[14%] lg:justify-center">
            <p className="text-[15.67px] font-[600] pt-[33px] pb-[43.23px]">
              Model
            </p>
            <p className="text-[14.19px] font-[400]">{model}</p>
          </div>

          {/* LOCATION */}
          <div className="flex flex-col items-center w-[50%] sm:w-[33.3%] lg:w-[15%] lg:justify-center">
            <p className="text-[15.67px] font-[600] pt-[33px] pb-[43.23px]">
              Location
            </p>
            <p className="text-[14.19px] font-[400]">{location}</p>
          </div>

          {/* AREA */}
          <div className="flex flex-col items-center w-[50%] sm:w-[33.3%] lg:w-[13%] pb-3 lg:pb-0 lg:justify-center">
            <p className="text-[15.67px] font-[600] pt-[33px] pb-[43.23px]">
              Area{" "}
            </p>
            <p className="text-[14.19px] font-[400]">{area} </p>
          </div>

          {/* PRICE */}
          <div className="flex flex-col items-center w-[50%] sm:w-[33.3%] lg:w-[10%] pb-3 lg:pb-0 lg:justify-center">
            <p className="text-[15.67px] font-[600] pt-[33px] pb-[43.23px]">
              Price
            </p>
            <p className="text-[14.19px] font-[400]">{price}</p>
          </div>

          {/* AVAILABILITY */}
          <div className="flex flex-col justify-center items-center w-[50%] sm:w-[33.3%] lg:w-[25%] pb-3 lg:pb-0 lg:items-end" >
            <p className="text-[15.67px] font-[600] pt-[33px] pb-[43.23px] lg:pr-[119px]">
              Availability
            </p>
            <p className="text-[14.19px] text-center font-[500] text-green lg:pr-[86px]">
              {availability}
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-green h-full rounded-bl-[27px] rounded-br-[27px] sm:h-[59px]">
        <div className="flex flex-col justify-evenly items-center h-full sm:flex-row md:justify-between">
          <div className="flex items-center py-3">

            {/* SVG LOGO */}
            <span className="md:pl-[92px]">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.2738 1.4282C21.09 2.0682 21.6525 3.10195 21.8825 4.18445C21.9103 4.19327 21.9375 4.20413 21.9637 4.21695L24.52 5.39945C24.6629 5.46506 24.784 5.57019 24.8691 5.70243C24.9541 5.83466 24.9996 5.98847 25 6.1457V21.6045C24.9991 21.7329 24.9684 21.8593 24.9104 21.9739C24.8524 22.0885 24.7687 22.1881 24.6658 22.2648C24.5628 22.3416 24.4435 22.3935 24.3171 22.4164C24.1908 22.4393 24.0608 22.4327 23.9375 22.397L16.8512 20.397L8.42625 22.7195C8.27424 22.7612 8.11357 22.7595 7.9625 22.7145L0.5925 20.5207C0.422151 20.4707 0.272487 20.367 0.165744 20.2251C0.0590012 20.0833 0.000874575 19.9107 0 19.7332L0 3.99695C0 3.44695 0.535 3.05195 1.06875 3.20695L8.19625 5.2832L11.8188 4.17445C11.8686 4.15973 11.9196 4.14928 11.9712 4.1432C12.1112 3.3232 12.5025 2.5357 13.1588 1.7682C13.9375 0.8557 15.3037 0.320701 16.635 0.256951C18.0162 0.190701 19.0713 0.485701 20.2725 1.42695L20.2738 1.4282ZM1.66625 5.1007V19.1195L7.75375 20.9307V6.87195L1.66625 5.1007ZM11.9275 5.8682L9.42 6.63445V20.7332L15.7512 18.9907V14.872C15.7512 14.417 16.125 14.0482 16.585 14.0482C17.045 14.0482 17.4175 14.417 17.4175 14.8732V18.8444L23.3337 20.5132V6.66945L21.9338 6.01945C21.91 6.15695 21.88 6.29195 21.8425 6.4232C21.5707 7.38165 21.1147 8.27794 20.5 9.06195L17.4038 12.9282C17.3222 13.0299 17.2181 13.1111 17.0997 13.1654C16.9812 13.2198 16.8518 13.2457 16.7215 13.2412C16.5913 13.2368 16.4639 13.2019 16.3495 13.1396C16.2351 13.0772 16.1368 12.989 16.0625 12.882L13.1687 8.6907C12.6912 8.0232 12.3562 7.4282 12.1675 6.8957C12.049 6.56334 11.9685 6.21865 11.9275 5.8682ZM16.715 1.90445C15.8075 1.9482 14.875 2.3132 14.4312 2.83195C13.8975 3.45695 13.635 4.04195 13.5825 4.63445C13.52 5.3482 13.5625 5.85195 13.74 6.3507C13.8712 6.71945 14.1325 7.18695 14.5362 7.7507L16.8 11.0282L19.1875 8.04695C19.6692 7.43139 20.0262 6.72786 20.2388 5.9757C20.5387 4.9257 20.0863 3.3832 19.2388 2.7207C18.37 2.03945 17.7138 1.8557 16.7162 1.90445H16.715ZM16.8875 2.7757C18.2675 2.7757 19.3875 3.88195 19.3875 5.24695C19.3857 5.57339 19.3196 5.89628 19.193 6.19717C19.0663 6.49806 18.8817 6.77104 18.6495 7.00054C18.4173 7.23003 18.1422 7.41153 17.8399 7.53467C17.5376 7.65781 17.2139 7.72018 16.8875 7.7182C15.5075 7.7182 14.3875 6.61195 14.3875 5.24695C14.3875 3.88195 15.5075 2.7757 16.8875 2.7757ZM16.8875 4.4232C16.7787 4.42254 16.6708 4.44333 16.57 4.48437C16.4692 4.52541 16.3774 4.5859 16.3 4.6624C16.2226 4.73889 16.161 4.82988 16.1187 4.93018C16.0765 5.03048 16.0544 5.13812 16.0538 5.24695C16.0538 5.70195 16.4275 6.0707 16.8875 6.0707C16.9963 6.07119 17.1042 6.05025 17.2049 6.00905C17.3057 5.96786 17.3973 5.90723 17.4746 5.83062C17.5519 5.75401 17.6134 5.66293 17.6555 5.56256C17.6976 5.4622 17.7195 5.35453 17.72 5.2457C17.7183 5.02634 17.6298 4.81658 17.4737 4.6624C17.3177 4.50822 17.1069 4.4222 16.8875 4.4232Z"
                  fill="white"
                />
              </svg>
            </span>

            <p className="text-[14.19px] font-[600] text-white pl-[15px] sm:pl-[23px]">
              View Property Map
            </p>
          </div>

          {/* OUR CUSTOM BUTTON */}
          <div className="pb-3 sm:pb-0">
            <CustomButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableCategory;
