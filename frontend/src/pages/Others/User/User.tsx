import React, { useMemo } from 'react'
import Header from '../../../components/Header/Header'
import CustomTable from '../../../components/CustomTable/CustomTable'
import { MRT_ColumnDef } from 'material-react-table';
import { nanoid } from '@reduxjs/toolkit';
import { useGetAllUser } from '../../../api/auth/auth-hook';

type UserData = {
    name: {
        firstName: string;
        lastName: string;
    };
    address: string;
};


const User: React.FC = () => {

    const {data}=useGetAllUser();
    console.log("🚀 ~ data:", data)
    
    const columns = useMemo<MRT_ColumnDef<UserData>[]>(
        () => [
            {
                id: nanoid(),
                accessorKey: 'name.firstName', //access nested data with dot notation
                header: 'First Name',
            },
            {
                id: nanoid(),
                accessorKey: 'name.lastName',
                header: 'Last Name',
            },
            {
                id: nanoid(),
                accessorKey: 'address', //normal accessorKey
                header: 'Address',
            },
        ],
        [],
    );

    return (
        <div>
            <Header
                modelWidth="40%"
                modelTitle="Product Company"
            >
                <></>
            </Header>
            <CustomTable
                columns={columns}
                data={[]}
                isLoading={false}
                enableRowNumbers
            />
        </div>
    )
}

export default User