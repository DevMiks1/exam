/** @format */

import { Puff } from "react-loader-spinner";

const LoadingScreen = () => {
  const loading = () => (
    <Puff
      visible={true}
      height={140}
      width={140}
      color="#4fa94d"
      ariaLabel="puff-loading"
      wrapperStyle={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      wrapperClass=""
    />
  );

  return (
    <div
      className="fixed inset-0 font-montserrat z-50 h-[100vh] w-full flex flex-col justify-center items-center bg-darkBlue"
     
    >
    <h2 className="pb-10 text-[50px] text-green font-bold text-center">Welcome to Amaia</h2>
      {loading()}
    </div>
  );
};

export default LoadingScreen;
