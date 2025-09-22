import { useEffect, useState } from "react";
import type { User } from "../models/User";
import { getUsers } from "../services/userService";
import DataTable from "react-data-table-component";

const columns = [
  { name: "ID", selector: (row: User) => row.id, sortable: true },
  { name: "Name", selector: (row: User) => row.name, sortable: true },
  { name: "Email", selector: (row: User) => row.email },
  { name: "City", selector: (row: User) => row.address.city },
];

export default function UserList() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [totalRecords, setTotalRecords] = useState(0);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    setLoading(true);
    const res = await getUsers(page, perPage, searchText);
    setData(res.data);
    setTotalRecords(res.total);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page, perPage, searchText]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>User List</h2>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            setPage(1);
          }}
        />
      </div>

      <DataTable
        columns={columns}
        data={data}
        progressPending={loading}
        pagination
        paginationServer
        paginationPerPage={perPage}
        paginationTotalRows={totalRecords}
        onChangePage={setPage}
        onChangeRowsPerPage={(newPerPage, newPage) => {
          setPerPage(newPerPage);
          setPage(newPage);
        }}
        paginationRowsPerPageOptions={[5, 10, 20]}
      />
    </div>
  );
}