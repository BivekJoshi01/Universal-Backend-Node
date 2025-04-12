import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar/Sidebar";
import Plan from "../components/Sidebar/SideContent/Plan";

const AdminPageLayout: React.FC = () => {
    return (
        <main className="text-stone-950 bg-stone-100 min-h-screen ">
            <main className="grid gap-4 p-4 grid-cols-[280px_1fr]">
                <div>
                    <div className="overflow-y-scroll scrollbar-hide sticky top-4 h-[calc(100vh-32px-48px)]">
                        <Sidebar />
                    </div>
                    <Plan />
                </div>
                <div className="bg-white rounded-lg shadow h-full overflow-y-auto relative">
                    <div className="h-[calc(100vh-32px)] overflow-y-auto">
                        <Outlet />
                        <div className="absolute bottom-0 right-1 text-sm text-stone-400">
                            Powered By: Bivek Prasad Joshi
                        </div>
                    </div>
                </div>

            </main>
        </main>
    );
};

export default AdminPageLayout;
