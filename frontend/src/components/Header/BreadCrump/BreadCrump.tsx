import React from "react";
import { FiHome } from "react-icons/fi";
import { Link, useLocation } from "react-router";

const Breadcrumb: React.FC = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <nav className="flex text-gray-600 text-xs" aria-label="breadcrumb">
            <ul className="flex space-x-1 items-center">
                <li>
                    <div className="text-stone-600 hover:underline">
                        <FiHome /></div>
                </li>
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;

                    return (
                        <li key={routeTo} className="flex items-center">
                            <span className="mx-1">/</span>
                            {isLast ? (
                                <span className="text-gray-500">{decodeURIComponent(name)}</span>
                            ) : (
                                <Link to={routeTo} className="text-blue-600 hover:underline">
                                    {decodeURIComponent(name)}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumb;