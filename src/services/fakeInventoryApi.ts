// TODO: Clean up this file later when backend is set up.
export const getInventory = (): Inventory[] => {
  return [
    {
      product: {
        id: 1,
        name: "6-os csavar",
        supplierName: "ACME Corp.",
        description: "Lorem ipsum dolor sit amet.",
        price: 150,
        photo: "sample_image.jpg",
      },
      pieces: 1000,
      unit: "darab",
    },
    {
      product: {
        id: 2,
        name: "6-os csavar alátét (sima)",
        supplierName: "ACME Corp.",
        description: "Lorem ipsum dolor sit amet.",
        price: 20,
        photo: null,
      },
      pieces: 1000,
      unit: "darab",
    },
    {
      product: {
        id: 3,
        name: "6-os csavar alátét (rugós)",
        supplierName: "ACME Corp.",
        description: "Lorem ipsum dolor sit amet.",
        price: 25,
        photo: null,
      },
      pieces: 1000,
      unit: "darab",
    },
  ];
};
