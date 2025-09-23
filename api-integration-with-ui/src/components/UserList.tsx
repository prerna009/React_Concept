import { useCallback, useEffect, useState } from "react";
import type { User } from "../models/User";
import { deleteUser, getUserById, getUsers } from "../services/userService";
import DataTable from "react-data-table-component";
import UserModal from "./UserModal";
import AddUser from "./AddUser";
import { Button } from "@mui/material";
import { toast } from "react-toastify";

export default function UserList() {
  const [data, setData] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [totalRecords, setTotalRecords] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(searchText);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedType, setSelectedType] = useState<'add' | 'edit'>('add');
  const [viewOpen, setViewOpen] = useState(false);
  const [addEditOpen, setAddEditOpen] = useState(false);


  const columns = [
    {
      name: "ID",
      selector: (row: User) => row.id,
      sortable: true
    },
    {
      name: "Name",
      selector: (row: User) => row.name,
      sortable: true
    },
    {
      name: "Email",
      selector: (row: User) => row.email
    },
    {
      name: "Action",
      cell: (row: User) => (
        <div>
          <Button style={{ marginRight: '10px' }} color="info" variant="contained" onClick={() => patchUserDetails(row.id)}>View</Button>
          <Button style={{ marginRight: '10px' }} color="error" variant="contained" onClick={() => deleteUserDetail(row.id)}>Delete</Button>
          <Button style={{ marginRight: '10px' }} color="primary" variant="contained" onClick={() => addEditUser("edit", row.id)}>Edit</Button>
        </div>
      )
    }
  ];

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(searchText), 500);
    return () => clearTimeout(handler);
  }, [searchText]);

  const fetchData = useCallback(async () => {
    try {
      const res = await getUsers(page, perPage, debouncedSearch);
      setData(res.data);
      setTotalRecords(res.total);
    } catch {
      toast.error("Failed to fetch users");
    }
  }, [page, perPage, debouncedSearch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const fetchUserById = async (userId: number) => {
    try {
      return await getUserById(userId);
    } catch {
      toast.error('Error fetching user details');
      return null;
    }
  }

  const patchUserDetails = async (userId?: number) => {
    if (!userId) return;
    const user = await fetchUserById(userId);
    if (user) {
      setSelectedUser(user);
      setViewOpen(true);
    }
  }

  const addEditUser = async (type: 'add' | 'edit', userId?: number) => {
    setSelectedType(type);
    if (type === 'edit' && userId) {
      const user = await fetchUserById(userId);
      if (user) {
        setSelectedUser(user);
        setAddEditOpen(true);
      }
    } else if (type === 'add') {
      setSelectedUser(null);
      setAddEditOpen(true);
    }
  }

  const deleteUserDetail = async (userId?: number) => {
    try {
      if (userId) await deleteUser(userId);
      toast.success("Delete User Successfully");
      fetchData();
    } catch {
      toast.error("Delete User Failed");
    }
  }

  const handleAddClose = (res: any) => {
    if (res) fetchData();
    setAddEditOpen(false);
    setSelectedUser(null);
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>User List</h2>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setPage(1);
            }}
            style={{ padding: '10px', marginRight: '10px' }}
          />
          <Button color="primary" variant="contained" type="button" onClick={() => addEditUser('add')}>Add User</Button>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={data}
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

      {/* Modal only opens if selectedUser is set */}
      {
        viewOpen && selectedUser && (
          <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
        )
      }

      {
        addEditOpen && (
          <AddUser user={selectedType === 'edit' ? selectedUser : null} type={selectedType} onClose={handleAddClose} />
        )
      }
    </div>
  );
}