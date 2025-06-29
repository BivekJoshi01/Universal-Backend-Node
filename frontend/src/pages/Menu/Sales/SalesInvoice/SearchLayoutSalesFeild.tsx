import React from 'react'
import RenderInput from '../../../../components/RenderInput/RenderInput';
import { Button } from '../../../../components/Button/button';

const SearchLayoutSalesFeild: React.FC<any> = ({ register, errors, control }) => {

    const inputFields: any[] = [
        {
            name: "productName",
            type: "text",
            placeholder: "Search by Product Name",
            gridClass: "col-span-4 md:col-span-4",
        },
        {
            name: "productName",
            type: "text",
            placeholder: "Search by Product Name",
            gridClass: "col-span-4 md:col-span-4",
        },
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 items-center">
            <RenderInput
                inputFields={inputFields}
                register={register}
                errors={errors}
                control={control}
            />
            <Button>Search</Button>
        </div>
    )
}

export default SearchLayoutSalesFeild