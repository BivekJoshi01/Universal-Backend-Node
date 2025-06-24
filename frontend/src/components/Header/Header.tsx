import React, { useState, useEffect, ReactNode } from "react";
import FormModel from "../Model/FormModel";
import Breadcrumb from "./BreadCrump/BreadCrump";
import GlobeImage from "../../assets/Office/GlobeImage.svg";
import SubHead from "./SubHead";
import { Button } from "../Button/button";
interface HeaderProps {
  children: ReactNode;
  modelTitle?: string;
  buttonTitle?: string;
  buttonIcon?: ReactNode;
  openModel?: boolean;
  setOpenModel?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({
  children,
  modelTitle,
  buttonTitle,
  buttonIcon,
  openModel,
  setOpenModel,
}) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="border-b px-4 mb-0 mt-2 pb-4 border-stone-200">
        <div className="flex items-center justify-between p-0.5">
          <div className="flex gap-2">
            <div className="w-8">
              <img src={GlobeImage} className="w-full h-full" />
            </div>
            <div>
              <span className="text-sm font-bold block">
                Universal Stationery Suppliers
              </span>
              <span className="text-xs block text-stone-500">
                <Breadcrumb />
              </span>
            </div>
          </div>

          <div className="text-sm  text-green-500">
            {time.toLocaleTimeString()}
          </div>
          {buttonTitle && setOpenModel ? (
            <Button onClick={() => setOpenModel(true)}>
              {buttonIcon} <span>{buttonTitle}</span>
            </Button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <SubHead />
      {openModel && setOpenModel && (
        <FormModel open={openModel} modelTitle={modelTitle}>
          {children}
        </FormModel>
      )}
    </>
  );
};

export default Header;
