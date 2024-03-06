/** @format */

import { useEffect, useState } from "react";
import LoadingScreen from "../components/loading-screen/LoadingScreen";
import TableContent from "../components/table/TableContent";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [])
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <section className="font-montserrat h-full bg-primary lg:h-[1670px]">
          <div className="max-w-[1100px] mx-auto px-5">
            {/* 1ST TABLE  */}
            <TableContent />

            {/* 2ND TABLE  */}
            <TableContent />

            {/* 3RD TABLE  */}
            <TableContent />

            {/* 4TH TABLE  */}
            <TableContent />

            {/* 5TH TABLE  */}
            <TableContent />

            {/* 6TH TABLE  */}
            <TableContent />
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
