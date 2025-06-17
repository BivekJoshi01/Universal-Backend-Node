import React from "react";
import { FiCamera } from "react-icons/fi";
import CompleteProfileForm from "./CompleteProfileForm";
import DropZoneCustom from "../../../../components/DropZone-Camera/DropZoneCustom";
import ClickImageCamera from "../../../../components/DropZone-Camera/ClickImageCamera";


const CompleteProfileLayout: React.FC = () => {
    return (
        <div className="container mx-auto py-6 px-4 w-full bg-white mt-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-8 p-4">
                    <div>Complete your profile</div>
                    <CompleteProfileForm />
                </div>
                <div className="md:col-span-4  p-4 flex flex-col items-center">
                    <h2 className="text-lg font-medium text-gray-700 mb-4">
                        Upload or Capture Your Photo
                    </h2>
                    <DropZoneCustom />
                    <div className="my-4 text-gray-500 font-medium">OR</div>

                    <ClickImageCamera />
                </div>
            </div>
        </div>
    );
};

export default CompleteProfileLayout;
