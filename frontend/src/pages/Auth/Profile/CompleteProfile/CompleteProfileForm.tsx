import React from 'react'
import RenderInput, { InputField } from '../../../../components/RenderInput/RenderInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const validationSchema = yup.object().shape({
    // areaDetail: yup.string().required("Area Detail is required"),
    // areaShortName: yup.string().required("Area Short name is required"),
});

const inputFields: InputField[] = [
    {
        name: "customerDetail",
        type: "text",
        placeholder: "Enter customer name",
        label: "Customer Name",
        required: true,
        gridClass: "col-span-4",
    },
    {
        name: "email",
        type: "email",
        placeholder: "Enter email",
        label: "Email",
        required: true,
        gridClass: "col-span-4",
    },
    {
        name: "phoneNumber",
        type: "text",
        placeholder: "Enter phone number",
        label: "Phone Number",
        required: true,
        gridClass: "col-span-4",
    },
    {
        name: "street",
        type: "text",
        placeholder: "Enter street",
        label: "Street",
        required: true,
        gridClass: "col-span-4",
    },
    {
        name: "city",
        type: "text",
        placeholder: "Enter city",
        label: "City",
        required: true,
        gridClass: "col-span-4",
    },
    {
        name: "country",
        type: "text",
        placeholder: "Enter country",
        label: "Country",
        required: true,
        gridClass: "col-span-4",
    },

    {
        name: "isRetailer",
        type: "checkbox",
        label: "Is Retailer?",
        required: false,
        gridClass: "col-span-12",
    },
    {
        name: "vatPan",
        type: "text",
        placeholder: "Enter VAT/PAN",
        label: "VAT/PAN",
        required: true,
        gridClass: "col-span-4",
    },
    {
        name: "contactPerson",
        type: "text",
        placeholder: "Enter contact person",
        label: "Contact Person",
        required: true,
        gridClass: "col-span-4",
    },

    {
        name: "areaId",
        type: "autoCompleteSelectGetRequestField",
        apiPath: "api/core/area/getAll",
        optionLabel: "areaShortName",
        optionValue: "_id",
        placeholder: "Select area",
        label: "Area",
        required: true,
        gridClass: "col-span-4",
    },
    {
        name: "agentId",
        type: "autoCompleteSelectGetRequestField",
        apiPath: "api/core/agent/getAll",
        optionLabel: "agentDetail",
        optionValue: "_id",
        placeholder: "Select area",
        label: "Agent",
        required: true,
        gridClass: "col-span-4",
    },
    {
        name: "creditLimit",
        type: "number",
        placeholder: "Enter credit limit",
        label: "Credit Limit",
        required: true,
        gridClass: "col-span-4",
    },
    {
        name: "type",
        type: "text",
        placeholder: "Enter type",
        label: "Customer Type",
        required: true,
        gridClass: "col-span-4",
    },
    {
        name: "memo",
        type: "text",
        placeholder: "Enter memo",
        label: "Memo",
        required: false,
        gridClass: "col-span-4",
    },
    {
        name: "isActive",
        type: "checkbox",
        label: "Is Active?",
        required: false,
        gridClass: "col-span-4",
    },
];

const CompleteProfileForm = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });
    const onSubmit = (data: object) => {
        console.log("csadc",data)
    };
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 ">
            <RenderInput
                inputFields={inputFields}
                register={register}
                errors={errors}
                control={control}
            />
            <div className="col-span-full flex justify-end mt-4">
                <button
                    type="button"
                    onClick={handleSubmit(onSubmit)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default CompleteProfileForm