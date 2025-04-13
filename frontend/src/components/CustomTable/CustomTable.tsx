import { MaterialReactTable, type MRT_ColumnDef, type MRT_Row } from "material-react-table";
// import { FC } from "react";

interface CustomTableProps<T extends Record<string, any>> {
  columns: MRT_ColumnDef<T>[];
  data: T[];
  onRowClick?: (row: MRT_Row<T>) => void;
  isLoading?: boolean;
  // pageSize?: number;
  rowCount?: number;
  filter?: boolean;
  enablePagination?: boolean;
  enableEditing?: boolean;
  // editingMode?: "modal" | "row" | "table";
  enableColumnResizing?: boolean;
  enableColumnActions?: boolean;
  enableColumnFilters?: boolean;
  enableSorting?: boolean;
  enableRowActions?: boolean;
  enableRowNumbers?: boolean;
  enableBottomToolbar?: boolean;
  enableTopToolbar?: boolean;
  enableDensityToggle?: boolean;
  enableHiding?: boolean;
  enableFullScreenToggle?: boolean;
  enableGlobalFilter?: boolean;
  density?: string
  // showColumnFilters?: boolean;
}

const CustomTable = <T extends Record<string, any>>({
  columns,
  data,
  onRowClick,
  isLoading,
  // pageSize = 10,
  rowCount,
  filter = false,
  enablePagination = false,
  enableEditing = false,
  // editingMode,
  enableColumnResizing = true,
  enableColumnActions,
  enableColumnFilters,
  enableSorting,
  enableRowActions = false,
  enableRowNumbers = false,
  enableBottomToolbar,
  enableTopToolbar,
  enableDensityToggle,
  enableHiding,
  enableFullScreenToggle,
  enableGlobalFilter,
}: CustomTableProps<T>) => {
  const handleRowClick = (row: MRT_Row<T>) => {
    onRowClick?.(row);
  };

  return (
    <div className="custom_table">
      <MaterialReactTable
        columns={columns.map((col) => ({
          ...col,
          size: col.size || 170,
        }))}
        data={data || []}
        enableRowNumbers={enableRowNumbers}
        enableRowVirtualization
        enableStickyHeader
        enablePagination={enablePagination}
        // paginationPageSize={pageSize}
        enableEditing={enableEditing}
        // editingMode={editingMode}
        rowCount={rowCount}
        state={{
          isLoading,
        }}
        initialState={{
          density: "compact",
          showColumnFilters: filter,
          columnPinning: {
            right: ["mrt-row-actions"],
          },
        }}
        enableColumnResizing={enableColumnResizing}
        enableColumnActions={enableColumnActions}
        enableColumnFilters={enableColumnFilters}
        enableSorting={enableSorting}
        enableRowActions={enableRowActions}
        // showColumnFilters={showColumnFilters}
        enableBottomToolbar={enableBottomToolbar}
        enableTopToolbar={enableTopToolbar}
        enableDensityToggle={enableDensityToggle}
        enableHiding={enableHiding}
        enableFullScreenToggle={enableFullScreenToggle}
        enableGlobalFilter={enableGlobalFilter}
        // density={density}
        renderRowActions={() => <></>}
        muiTableHeadRowProps={{
          sx: {
            backgroundColor: "#8E51FF",
            height: filter ? "70px" : "40px",
          },
        }}
        muiTableBodyRowProps={({ row }) => ({
          onClick: () => handleRowClick(row),
          sx: {
            cursor: "pointer",
            backgroundColor: "#ffff",
          },
        })}
        muiTableHeadCellProps={{
          sx: {
            color: "black",
          },
        }}
      />
    </div>
  );
};

export default CustomTable;
