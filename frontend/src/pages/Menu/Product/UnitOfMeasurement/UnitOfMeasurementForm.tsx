import { yupResolver } from "@hookform/resolvers/yup";
import React, { useCallback, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import RenderInput, {
  InputField,
} from "../../../../components/RenderInput/RenderInput";
import * as yup from "yup";
import { useAddUnitOfMeasurementHook, useGetUnitOfMeasurementByIdHook, useUpdateUnitOfMeasurementHook } from "../../../../api/product/unitOfMeasurement/unitOfMeasurement-hook";
import { IoClose } from "react-icons/io5";
import { FiCamera } from "react-icons/fi";
import { Button } from "../../../../components/Button/button";

const validationSchema = yup.object().shape({
  unitCategory: yup.string().required("Unit Category is required"),
  baseUnit: yup.string().required("Base Unit is required"),
  contain: yup.string().required("Contain is required"),
});

const inputFields: InputField[] = [
  {
    name: "unitCategory",
    type: "text",
    placeholder: "Enter customer name",
    label: "Unit Category Text",
    required: true,
    gridClass: "col-span-4",
  },
  {
    name: "baseUnit",
    type: "text",
    placeholder: "Enter street",
    label: "Base Unit",
    required: true,
    gridClass: "col-span-4",
  },
  {
    name: "contain",
    type: "text",
    placeholder: "Enter street",
    label: "Contain",
    required: true,
    gridClass: "col-span-4",
  },
];

interface UnitOfMeasurementFormProps {
  selectedRowId?: string;
  onClose: () => void;
}

const UnitOfMeasurementForm: React.FC<UnitOfMeasurementFormProps> = ({
  selectedRowId,
  onClose,
}) => {
  const id = selectedRowId ?? "";
  const { data, isLoading: isFetching } = useGetUnitOfMeasurementByIdHook(id);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { mutate: addMutate, isPending: isAdding } = useAddUnitOfMeasurementHook();
  const { mutate: updateMutate, isPending: isUpdating } = useUpdateUnitOfMeasurementHook();

  useEffect(() => {
    if (data) {
      reset({
        unitCategory: data.unitCategory ?? "",
        baseUnit: data.baseUnit ?? "",
        contain: data.contain ?? ""
      });
    } else {
      reset({
        unitCategory: "",
        baseUnit: "",
        contain: ""
      });
    }
  }, [data, reset]);

  const handleClose = useCallback(() => {
    reset();
    onClose();
  }, [reset, onClose]);

  const onSubmit: SubmitHandler<any> = (formData) => {
    if (id) {
      updateMutate(
        { id, formData },
        {
          onSuccess: handleClose,
        }
      );
    } else {
      addMutate(
        { formData },
        {
          onSuccess: handleClose,
        }
      );
    }
  };
  const isSubmitting = isAdding || isUpdating;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RenderInput
        inputFields={inputFields}
        register={register}
        errors={errors}
        control={control}
      />

      <div className="col-span-2 md:col-span-4 flex justify-between items-center border-t pt-2 border-stone-300">
        <button
          type="button"
          className="flex text-sm items-center gap-2 bg-red-300 transition-colors hover:bg-red-400 px-3 py-1.5 rounded"
          onClick={onClose}
        >
          <IoClose /> <span>Close</span>
        </button>
        <Button
          type="submit"
          disabled={isSubmitting || isFetching}
        >
          <FiCamera /> <span>{id ? "Update" : "Submit"}</span>
        </Button>
      </div>
    </form>
  );
};

export default UnitOfMeasurementForm;
