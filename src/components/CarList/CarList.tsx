import * as React from "react";

import { CarTable } from "./components/CarTable";
import { CarsLoadingState } from "./components/CarsLoadingState";

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
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsLoading(true);

    fetch("https://nckbku0m91.execute-api.eu-central-1.amazonaws.com/cars")
      .then((result) => result.json())
      .then((cars) => {
        setCars(cars);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>{isLoading ? <CarsLoadingState /> : <CarTable cars={cars} />}</div>
  );
};

export default CarList;
