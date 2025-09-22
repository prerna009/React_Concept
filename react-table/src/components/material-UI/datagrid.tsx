// Using material UI data grid examples

import { DataGrid } from "@mui/x-data-grid";

const columns = [
    {
        field: "id",
        headerName: "ID",
        width: 430
    },
    {
        field: "name",
        headerName: "Name",
        width: 430
    },
    {
        field: "email",
        headerName: "Email",
        width: 250
    },
];

const rows = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Sam Wilson", email: "sam@example.com" },
    { id: 4, name: "Alice Brown", email: "alice@example.com" },
    { id: 5, name: "Bob Green", email: "bob@example.com" },
    { id: 6, name: "Charlie Black", email: "charlie@example.com" },
];

export default function DataGridExample() {
    return (
        <div className="container-fluid mt-3">
            <h2 className="mb-2">Bootstrap-styled MUI DataGrid</h2>
            <div className="bg-white shadow-sm rounded">
                <DataGrid
                    rows={rows}
                    columns={columns}
                    checkboxSelection
                    initialState={{
                        pagination: { paginationModel: { pageSize: 5, page: 0 } },
                    }}
                    pageSizeOptions={[5, 10, 20]}
                    sx={{
                        border: "none",
                    }}
                />
            </div>
        </div>
    );
}