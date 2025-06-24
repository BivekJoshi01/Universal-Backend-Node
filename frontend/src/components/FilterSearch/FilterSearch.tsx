import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdFilterList, MdFilterListOff } from "react-icons/md";
import RenderInput from "../RenderInput/RenderInput";

const FilterSearch: React.FC<any> = ({
  inputFields,
  register,
  errors,
  onSubmit,
  control
}) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className="bg-primary-10 mb-4 p-2.5">
      <div className="flex justify-between">
        <div className="font-semibold">Filter</div>
        <div
          onClick={() => setCollapse((prev) => !prev)}
          className="cursor-pointer"
        >
          {collapse ? <MdFilterListOff /> : <MdFilterList />}
        </div>
      </div>

      {collapse && (
        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-2 mt-2">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <RenderInput
                inputFields={inputFields}
                register={register}
                errors={errors}
                control={control}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="flex text-sm items-center gap-2 bg-violet-500 text-white transition-colors hover:bg-violet-600 px-3 py-1.5 rounded"
              >
                <FiSearch /> <span>Search</span>
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default FilterSearch;
