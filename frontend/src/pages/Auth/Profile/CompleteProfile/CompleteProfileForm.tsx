import React, { useEffect } from "react";
import RenderInput, {
  InputField,
} from "../../../../components/RenderInput/RenderInput";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { useAddCustomerHook } from "../../../../api/customerSupplier/customer/customer-hook";
import { useGetLoggedUserData } from "../../../../api/auth/auth-hook";

const validationSchema = yup.object().shape({
  // Add validation if needed
});

const CompleteProfileForm: React.FC<any> = ({ loggedUserData }) => {

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(validationSchema),
  });



  useEffect(() => {
    if (loggedUserData) {
      reset({
        // customerDetail: loggedUsersData?.name || "",
        // email: loggedUsersData?.email || "",
        userId: loggedUserData?.user?._id,
        isRetailer: false,
        isActive: false,
        // creditLimit: 0,
      });
    }
  }, [loggedUserData, reset]);

  const isRetailer = useWatch({ control, name: "isRetailer" });

  const baseFields: InputField[] = [
    {
      name: "phoneNumber",
      type: "text",
      placeholder: "Enter phone number",
      label: "Phone Number",
      required: true,
      gridClass: "col-span-4",
    },
    {
      name: "country",
      type: "autoCompleteSelectField",
      placeholder: "Enter country",
      label: "Country",
      required: true,
      options: [{ label: "Nepal", value: "NEPAL" }],
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
      name: "street",
      type: "text",
      placeholder: "Enter street",
      label: "Street",
      required: true,
      gridClass: "col-span-4",
    },
    {
      name: "isRetailer",
      type: "checkbox",
      label: "",
      extraLabel: "Are u a retail seller? ",
      required: false,
      gridClass: "col-span-12",
    },
  ];

  const retailerOnlyFields: InputField[] = [
    {
      name: "contactPerson",
      type: "text",
      placeholder: "Enter organaization name",
      label: "Organaization Name",
      required: true,
      gridClass: "col-span-4",
    },
    {
      name: "landlineNo",
      type: "text",
      placeholder: "Enter landline no",
      label: "Landline Number",
      required: true,
      gridClass: "col-span-4",
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
      placeholder: "Select agent",
      label: "Agent",
      required: true,
      gridClass: "col-span-4",
    },
    // {
    //   name: "creditLimit",
    //   type: "number",
    //   placeholder: "Enter credit limit",
    //   label: "Credit Limit",
    //   required: true,
    //   gridClass: "col-span-4",
    // },
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
      gridClass: "col-span-12",
    },
    // {
    //   name: "isActive",
    //   type: "checkbox",
    //   label: "Is Active?",
    //   required: false,
    //   gridClass: "col-span-4",
    // },
  ];

  const inputFields = isRetailer
    ? [...baseFields, ...retailerOnlyFields]
    : baseFields;

  const { mutate } = useAddCustomerHook();

  const onSubmit = (data: object) => {
    mutate({ formData: data });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
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
  );
};

export default CompleteProfileForm;
