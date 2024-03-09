// TODO: Clean up this file later when backend is set up.
export const getInventory = (): Product[] => {
  return [
    {
      id: 1,
      name: "6-os csavar",
      supplierName: "ACME Corp.",
      price: 150,
      unit: "darab",
      photo: "sample_image.jpg",
      onStock: 1000,
    },
    {
      id: 2,
      name: "6-os csavar alátét (sima)",
      supplierName: "ACME Corp.",
      price: 20,
      unit: "darab",
      photo: null,
      onStock: 1000,
    },
    {
      id: 3,
      name: "6-os csavar alátét (rugós)",
      supplierName: "ACME Corp.",
      price: 25,
      unit: "darab",
      photo: null,
      onStock: 1000,
    },
  ];
};
