export interface Car {
  id: number;
  brand: string;
  licensePlate: string;
  manufacturer: string;
  operationCity: string;
  status: "available" | "in-maintenance" | "out-of-service";
  createdAt: string;
  lastUpdatedAt: string;
}

export interface CarTableProps {
  cars: Car[];
}
