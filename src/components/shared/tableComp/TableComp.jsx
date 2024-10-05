// ReusableTable.js
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NoData from "../noData/NoData";

const TableComp = ({ columns, data, actions, onActionClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRowId, setSelectedRowId] = useState(null);

  const handleMenuOpen = (event, rowId) => {
    setAnchorEl(event.currentTarget);
    setSelectedRowId(rowId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedRowId(null);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="reusable table" sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id} align={column.align || "left"}>
                {column.label}
              </TableCell>
            ))}
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length + 1} align="center">
                <NoData text="لا يوجد دورات لعرضها في الجّدول" />
              </TableCell>
            </TableRow>
          ) : (
            data.map((row) => (
              <TableRow key={row.id}>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align || "left"}>
                    {row[column.id]}
                  </TableCell>
                ))}
                <TableCell align="center">
                  <IconButton
                    aria-label="more"
                    onClick={(event) => handleMenuOpen(event, row.id)}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl) && selectedRowId === row.id}
                    onClose={handleMenuClose}
                  >
                    {actions.map((action) => (
                      <MenuItem
                        key={action.label}
                        onClick={() => {
                          onActionClick(action.value, row);
                          handleMenuClose();
                        }}
                      >
                        {React.cloneElement(action.icon, {
                          sx: { marginRight: "5px" },
                        })}
                        {action.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComp;
