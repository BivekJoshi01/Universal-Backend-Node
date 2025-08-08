import React, { useEffect, useMemo, useState } from "react";
import Header from "../../../../components/Header/Header";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSearchProductManagementsHook } from "../../../../api/product/productManagement/productManagement-hook";
import PurchaseProcess from "./PurchaseProcess/PurchaseProcess";
import { CustomPaginationSearchTable } from "../../../../components/CustomPagination/CustomPaginationSearchTable";
import CustomTable from "../../../../components/CustomTable/CustomTable";
import { nanoid } from "@reduxjs/toolkit";
import { MRT_ColumnDef } from "material-react-table";
import FilterSearch from "../../../../components/FilterSearch/FilterSearch";

const PurchaseInvoice: React.FC = () => {
  const [selectedProductGroupId, setSelectedProductGroupId] = useState(null);
  const [pagination, setPagination] = useState<any>({
    pageSize: 10,
    pageNumber: 1,
  });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const {
    mutate,
    data: productManagementData,
    isPending,
  } = useSearchProductManagementsHook();

  useEffect(() => {
    mutate({
      formData: {
        ...pagination,
        productGroup: selectedProductGroupId,
      },
    });
  }, [mutate, pagination, selectedProductGroupId]);
  
  const onSubmit: SubmitHandler<any> = (formData) => {
    mutate({ formData });
  };

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        id: nanoid(),
        header: "Product",
        Cell: ({ row }) => {
          const { productName, description } = row.original;
          return (
            <div>
              <b>{productName}</b>
              <div className="text-stone-400">{description}</div>
            </div>
          );
        },
      },
      {
        id: nanoid(),
        accessorKey: "unitOfMeasurement.baseUnit",
        header: "Base Unit",
      },
      {
        id: nanoid(),
        accessorKey: "purchasePrice",
        header: "Purchase Price",
      },
      {
        id:nanoid(),
        accessorKey:"",
        header:"Hehhe",
        Cell:()=>{
          return(
            <>
            </>
          )
        }
      }
    ],
    []
  );
  const onSearch = (formData: any) => {
    mutate({ formData: { ...formData, ...pagination } });
  };

  return (
    <>
      <div>
        <Header>
          <></>
        </Header>
      </div>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-7 bg-background">
          <PurchaseProcess />
        </div>
        <div className="col-span-5 bg-background">
          <FilterSearch
            inputFields={[]}
            register={register}
            errors={errors}
            onSubmit={handleSubmit(onSearch)}
          />
          <CustomTable
            columns={columns}
            data={productManagementData?.productManagements || []}
            // enableRowNumbers
            isLoading={isPending}
            enableExpand={true}
            renderRowSubComponent={(row: any) => (
              <div>
                <strong>Extra Info:</strong> {row.extraInfo}
              </div>
            )}
          />
          <CustomPaginationSearchTable
            totalPages={productManagementData?.pages}
            currentPage={pagination.pageNumber}
            totalElements={productManagementData?.totalElements}
            pageSize={pagination.pageSize}
            onPaginationChange={(updatedPagination) =>
              setPagination(updatedPagination)
            }
          />
        </div>
      </div>
    </>
  );
};

export default PurchaseInvoice;
