import DataTable from "react-data-table-component";

const columns = [
    {
        name: "ID",
        selector: (row: any) => row.id,
        sortable: true,
    },
    {
        name: "Name",
        selector: (row: any) => row.name,
        sortable: true,
    },
    {
        name: "Email",
        selector: (row: any) => row.email,
    }
];

const data = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Sam Wilson", email: "sam@example.com" },
];

function ReactDataTableComponent() {
    return (
        <div className="container-fluid mt-3">
            <h2 className="mb-2">React DataTable Example</h2>
            <DataTable columns={columns} data={data} pagination highlightOnHover />
        </div>
    );
}

export default ReactDataTableComponent;