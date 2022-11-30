import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface Car {
  id: number;
  brand: string;
  licensePlate: string;
  manufacturer: string;
  operationCity: string;
  status: "available" | "in-maintenance" | "out-of-service";
  createdAt: string;
  lastUpdatedAt: string;
}

interface CarTableProps {
  cars: Car[];
}

const CarTable: React.FC<CarTableProps> = ({ cars }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Brand</TableCell>
            <TableCell>Manufacturer</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cars.map((car) => (
            <TableRow>
              <TableCell>{car.brand}</TableCell>
              <TableCell>{car.manufacturer}</TableCell>
              <TableCell>{car.operationCity}</TableCell>
              <TableCell>{car.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CarTable;
