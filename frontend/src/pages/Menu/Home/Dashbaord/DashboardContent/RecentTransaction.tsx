import React from 'react'
import { FiArrowUpRight, FiDollarSign, FiMoreHorizontal } from 'react-icons/fi'

const RecentTransaction:React.FC = () => {
    return (
        <div className="col-span-12 p-4 rounded border border-stone-300">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="flex items-center gap-1.5 font-small">
                    <FiDollarSign /> Recent Transaction
                </h3>
                <button className='text-sm text-violet-500 hover:underline'>See all</button>
            </div>
            <table className='w-full table-auto'>
                <TableHead />
                <tbody>
                    <TableRow cusId="CUST001" sku="SKU12345" date="2025-03-15" price="$49.99" order={1} />
                    <TableRow cusId="CUST002" sku="SKU67890" date="2025-03-14" price="$29.99" order={2} />
                    <TableRow cusId="CUST003" sku="SKU54321" date="2025-03-13" price="$19.99" order={3} />
                    <TableRow cusId="CUST004" sku="SKU98765" date="2025-03-12" price="$99.99" order={4} />
                    <TableRow cusId="CUST005" sku="SKU11122" date="2025-03-11" price="$59.99" order={5} />

                </tbody>
            </table>
        </div>
    )
}

const TableHead = () => {
    return (
        <thead>
            <tr className='text-sm font-normal text-stone-500'>
                <th className='text-start p-1.5'>Customer Id</th>
                <th className='text-start p-1.5'>SKU</th>
                <th className='text-start p-1.5'>Date</th>
                <th className='text-start p-1.5'>Price</th>
                <th className='w-8'></th>
            </tr>
        </thead>
    )
}
const TableRow = ({
    cusId,
    sku,
    date,
    price,
    order,
}: {
    cusId: string;
    sku: string,
    date: string,
    price: string,
    order: number
}) => {
    return (
        <tr className={order % 2 ? "bg-background text-sm" : "text-sm"}>
            <td className='p-1.5'><a href="#" className='text-violet-600 underline flex items-center gap-1'># {cusId} <FiArrowUpRight /></a></td>
            <td className=' p-1.5'>{sku}</td>
            <td className='p-1.5'>{date}</td>
            <td className=' p-1.5'>{price}</td>
            <td className='w-8'><button className='hover:bg-stone-200 transition-colors grid place-content-center rounded text-sm size-8'><FiMoreHorizontal /></button></td>
        </tr>
    )
}
export default RecentTransaction