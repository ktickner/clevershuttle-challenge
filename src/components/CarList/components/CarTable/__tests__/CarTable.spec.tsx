import { render, screen, within } from "@testing-library/react";

import type { Car } from "../CarTable.types";

import CarTable from "../CarTable";

const mockCars: Car[] = [
  {
    id: 1,
    brand: "brand",
    licensePlate: "123",
    manufacturer: "manufacturer",
    operationCity: "city",
    status: "available",
    createdAt: "123",
    lastUpdatedAt: "123",
  },
  {
    id: 2,
    brand: "brand",
    licensePlate: "123",
    manufacturer: "manufacturer",
    operationCity: "city",
    status: "available",
    createdAt: "123",
    lastUpdatedAt: "123",
  },
  {
    id: 3,
    brand: "brand",
    licensePlate: "123",
    manufacturer: "manufacturer",
    operationCity: "city",
    status: "available",
    createdAt: "123",
    lastUpdatedAt: "123",
  },
];

const setup = () => {
  return render(<CarTable cars={mockCars} />);
};

describe("The CarTable component", () => {
  it("should render the correct heading items", () => {
    setup();

    expect(screen.getByText("Brand")).toBeVisible();
    expect(screen.getByText("Manufacturer")).toBeVisible();
    expect(screen.getByText("City")).toBeVisible();
    expect(screen.getByText("Status")).toBeVisible();
  });

  it("should render the correct number of data rows", () => {
    setup();

    const rows = screen.getAllByTestId("cartable-row");
    expect(rows.length).toEqual(mockCars.length);
  });

  it("should render the correct data for each column", () => {
    setup();

    const firstMock = mockCars[0];
    const firstRow = screen.getAllByTestId("cartable-row")[0];
    within(firstRow).getByText(firstMock.brand);
    within(firstRow).getByText(firstMock.manufacturer);
    within(firstRow).getByText(firstMock.operationCity);
    within(firstRow).getByText(firstMock.status);
  });
});
