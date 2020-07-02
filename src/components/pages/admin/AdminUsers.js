import React, { useState } from "react";
import UsersTable from "./UsersTable";
import Wrapper from "../../shared/Misc/Wrapper";
import Pagination from "../../shared/Misc/Pagination/Pagination";
import TableOptions from "../../shared/Misc/TableOptions/TableOptions";
import { connect } from "react-redux";
import { confirmPassword } from "../../../state/actions/authActions";
import { updateUserRole, getUsers } from "../../../state/actions/userActions";
import { paginate } from "../../../helpers/utils";
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

  const [pageSize, setPageSize] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRoleFilter, setSelectedRoleFilter] = useState("");

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
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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

  const getDataToDisplay = () => {
    if (!users.data) return [];
    const userData = [...users.data];
    const filtered = selectedRoleFilter
      ? userData.filter((item) => item.role === selectedRoleFilter)
      : userData;

    const paginated = paginate(filtered, currentPage, pageSize);
    return { data: paginated, length: filtered.length };
  };

  return (
    <Wrapper>
      <TableOptions
        currentPageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
        filterOptions={[{ id: 4, label: "All", value: "" }, ...USER_ROLES]}
        onFilterSelect={handleFilterChange}
        currentFilter={selectedRoleFilter}
      />
      <UsersTable
        users={getDataToDisplay().data}
        currentUser={user}
        error={error}
        doUpdateUserRole={doUpdateUserRole}
      />
      <Pagination
        itemsCount={getDataToDisplay().length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        isFiltering={selectedRoleFilter}
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
