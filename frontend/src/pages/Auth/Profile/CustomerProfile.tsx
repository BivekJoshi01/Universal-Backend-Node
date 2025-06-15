import React, { useRef, useState } from "react";
import {
    FiCamera,
    FiEdit2,
    FiKey,
    FiMail,
    FiPhone,
    FiMapPin,
    FiUser,
    FiBriefcase,
    FiCalendar,
} from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const CustomerProfile = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [profilePic, setProfilePic] = useState<string | null>(null);

    const loggedUsersData = useSelector((state: RootState) => state.auth.user);
    console.log("🚀 ~ Profile ~ loggedUsersData:", loggedUsersData)

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>

            <div className="max-w-5xl mx-auto px-4 py-10">
                <div className=" p-8 md:flex gap-10">
                    {/* Profile Image Section */}
                    <div className="relative w-36 h-36 mx-auto md:mx-0 group">
                        {/* Profile Image with hover zoom */}
                        <img
                            src={
                                profilePic || "https://via.placeholder.com/150?text=Profile+Photo"
                            }
                            alt="Profile"
                            className="w-36 h-36 object-cover rounded-full border-[3px] border-gray-300 shadow-lg transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Overlay on hover */}
                        <div className="absolute inset-0 rounded-full bg-black bg-opacity-10 group-hover:bg-opacity-30 transition duration-300 pointer-events-none" />

                        {/* Camera Icon Button */}
                        <button
                            onClick={() => fileInputRef.current?.click()}
                            className="absolute -bottom-1 -right-1 p-2 bg-white border border-gray-300 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 animate-bounce-slow"
                            title="Change Photo"
                        >
                            <FiCamera className="text-blue-600" size={20} />
                        </button>

                        {/* Hidden File Input */}
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                        />
                    </div>

                    {/* Profile Info Section */}
                    <div className="flex-1 mt-6 md:mt-0 space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <ProfileItem
                                icon={<FiUser />}
                                label="Full Name"
                                value={loggedUsersData?.name}
                            />
                            <ProfileItem
                                icon={<FiMail />}
                                label="Email"
                                value={loggedUsersData?.email}
                            />
                            <ProfileItem
                                icon={<FiPhone />}
                                label="Phone"
                                value="+1 (555) 123-4567"
                            />
                            <ProfileItem
                                icon={<FiMapPin />}
                                label="Address"
                                value="123 Main St, Cityville, USA"
                            />
                            <ProfileItem
                                icon={<FiBriefcase />}
                                label="Department"
                                value="IT & Infrastructure"
                            />
                            <ProfileItem
                                icon={<FiCalendar />}
                                label="Joining Date"
                                value={loggedUsersData?.createdAt}
                            />
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                                <FiEdit2 />
                                Edit Profile
                            </button>
                            <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 transition">
                                <FiKey />
                                Change Password
                            </button>
                                  <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 transition">
                                <FiKey />
                                Become a supplier
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Reusable profile item component
const ProfileItem = ({
    icon,
    label,
    value,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
}) => (
    <div>
        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2 mb-1">
            {icon} {label}
        </div>
        <div className="text-base font-medium text-gray-800 dark:text-white">
            {value}
        </div>
    </div>
);

export default CustomerProfile;
