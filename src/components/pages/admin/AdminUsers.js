import React, { useState } from "react";
import UsersTable from "./UsersTable";
import Wrapper from "../../shared/Misc/Wrapper";
import Pagination from "../../shared/Misc/Pagination/Pagination";
import TableOptions from "../../shared/Misc/TableOptions/TableOptions";
import { connect } from "react-redux";
import { confirmPassword } from "../../../state/actions/authActions";
import { updateUserRole, getUsers } from "../../../state/actions/userActions";
import { paginate, sort } from "../../../helpers/utils";
import { USER_ROLES } from "../../../constants/appConstants";

const AdminUsers = (props) => {
  const {
    users,
    error,
    confirmPassword,
    updateUserRole,
    getUsers,
    user,
  } = props;

  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRoleFilter, setSelectedRoleFilter] = useState("");
  const [sortColumn, setSortColumn] = useState({ path: "name", order: "asc" });
  const [searchQuery, setSearchQuery] = useState("");

  const doGetUsers = () => {
    getUsers({ sortBy: "name" });
  };

  const doUpdateUserRole = (password, role, selectedUserId, callbackFunc) => {
    const callback = () => {
      if (callbackFunc) callbackFunc();
      updateUserRole(role, selectedUserId, doGetUsers);
    };
    confirmPassword(password, callback);
  };

  // Pagination
  const handlePageChange = (page) => setCurrentPage(page);

  // Limiting
  const handlePageSizeChange = ({ target: size }) => {
    setPageSize(size.value);
    setCurrentPage(1); // reset pagination
  };

  // Filtering
  const handleFilterChange = (item) => {
    setSelectedRoleFilter(item);
    setCurrentPage(1); // reset pagination
  };

  // Sorting
  const handleSort = (sortCol) => setSortColumn({ ...sortCol });

  // Searching
  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
    setSelectedRoleFilter("");
  };

  const getDataToDisplay = () => {
    if (!users.data) return [];

    const userData = [...users.data];

    let filtered = userData;

    if (searchQuery)
      filtered = userData.filter((u) =>
        u.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedRoleFilter)
      filtered = userData.filter((u) => u.role === selectedRoleFilter);

    const sorted = sort(filtered, sortColumn.path, sortColumn.order);

    const paginated = paginate(sorted, currentPage, pageSize);

    return { data: paginated, totalCount: filtered.length };
  };

  return (
    <Wrapper>
      <TableOptions
        currentPageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
        filterOptions={[{ id: 4, label: "All", value: "" }, ...USER_ROLES]}
        onFilterSelect={handleFilterChange}
        currentFilter={selectedRoleFilter}
        searchQuery={searchQuery}
        onSearch={handleSearch}
      />
      <UsersTable
        users={getDataToDisplay().data}
        currentUser={user}
        error={error}
        doUpdateUserRole={doUpdateUserRole}
        onSort={handleSort}
        sortColumn={sortColumn}
      />
      <Pagination
        itemsCount={getDataToDisplay().totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        isFiltering={selectedRoleFilter}
        isSearching={searchQuery}
      />
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    user: state.auth.user,
    users: state.user.users,
  };
};

const mapDispatchToProps = {
  confirmPassword,
  updateUserRole,
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers);
