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
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const TableComp = ({ columns, data, onActionClick }) => {
  // State to handle the menu open and close actions
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
          {data.map((row) => (
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
                  <MenuItem onClick={() => onActionClick("edit", row)}>
                    <EditIcon sx={{ marginRight: "5px" }} />
                    Edit
                  </MenuItem>
                  <MenuItem onClick={() => onActionClick("delete", row)}>
                    <DeleteIcon sx={{ marginRight: "5px" }} />
                    Delete
                  </MenuItem>
                </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComp;
