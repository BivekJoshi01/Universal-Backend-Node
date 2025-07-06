import React, { useState } from "react";
import CompleteProfileForm from "./CompleteProfileForm";
import DropZoneCustom from "../../../../components/DropZone-Camera/DropZoneCustom";
import { useGetLoggedUserData } from "../../../../api/auth/auth-hook";

const CompleteProfileLayout: React.FC = () => {
  const [profileImageFinal, setProfileImageFinal] = useState(null);
  const { data: loggedUserData } = useGetLoggedUserData();


  return (
    <div className="container mx-auto w-full bg-white/80 my-16">
      <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-2 text-yellow-200 ">
        Welcome, {loggedUserData?.user?.name}
        <br />
        To continue, we need more information about you.
      </div>
      <div className=" px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-8 p-4">
            <CompleteProfileForm loggedUserData={loggedUserData} />
          </div>
          {profileImageFinal ? (
            <div className="w-full flex items-center justify-center border-2 border-dashed border-gray-400 rounded-xl bg-white h-30 cursor-pointer">
              sdcsdc
            </div>
          ) : (
            <div className="md:col-span-4 flex flex-col items-center">
              <h2 className="text-lg font-medium text-gray-700 mb-4">
                Upload or Capture Your Photo
              </h2>
              {/* <ClickImageCamera/> */}
              <div className="my-4 text-gray-500 font-medium">OR</div>
              <DropZoneCustom />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompleteProfileLayout;
