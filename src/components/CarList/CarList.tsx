import * as React from "react";

import { CarTable } from "./components/CarTable";

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

const CarList = () => {
  const [cars, setCars] = React.useState<Car[]>([]);

  React.useEffect(() => {
    fetch("https://nckbku0m91.execute-api.eu-central-1.amazonaws.com/cars")
      .then((result) => result.json())
      .then((cars) => {
        setCars(cars);
      });
  }, []);

  return (
    <div>
      <CarTable cars={cars} />
    </div>
  );
};

export default CarList;
