import React, { useMemo, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { nanoid } from "@reduxjs/toolkit";
import { MRT_ColumnDef } from "material-react-table";
import AreaForm from "./AreaFrom";
import CustomTable from "../../../../components/CustomTable/CustomTable";
import Header from "../../../../components/Header/Header";
import { CustomPaginationGetTable } from "../../../../components/CustomPagination/CustomPaginationGetTable";
import FilterSearch from "../../../../components/FilterSearch/FilterSearch";

type Person = {
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
};

const Area: React.FC = () => {
  const [openModel, setOpenModel] = useState(false);

  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        id:nanoid(),
        accessorKey: 'name.firstName', //access nested data with dot notation
        header: 'First Name',
      },
      {
        id:nanoid(),
        accessorKey: 'name.lastName',
        header: 'Last Name',
      },
      {
        id:nanoid(),
        accessorKey: 'address', //normal accessorKey
        header: 'Address',
      },
    ],
    [],
  );

  const data: Person[] = [
    {
      name: {
        firstName: 'John',
        lastName: 'Doe',
      },
      address: '261 Erdman Ford',
    },
    {
      name: {
        firstName: 'Jane',
        lastName: 'Doe',
      },
      address: '769 Dominic Grove',
    },
    {
      name: {
        firstName: 'Joe',
        lastName: 'Doe',
      },
      address: '566 Brakus Inlet',
    },
    {
      name: {
        firstName: 'Kevin',
        lastName: 'Vandy',
      },
      address: '722 Emie Stream',
    },
    {
      name: {
        firstName: 'Joshua',
        lastName: 'Rolluffs',
      },
      address: '32188 Larkin Turnpike',
    },
  ];


  return (
    <>
      <div>
        <Header
          modelWidth="40%"
          modelTitle="Area"
          buttonTitle="Add Area"
          buttonIcon={<FiPlus />}
          openModel={openModel}
          setOpenModel={setOpenModel}
        >
          <AreaForm onClose={() => setOpenModel(false)} />
        </Header>
      </div>
      <FilterSearch/>
      <CustomTable
        columns={columns}
        data={data}
        isLoading={false}
        enableRowNumbers
      />
      <CustomPaginationGetTable/>
    </>
  );
};

export default Area;
