// TODO: Clean up this file later.
export const getInventory = (): Inventory[] => {
  return [
    {
      product: {
        name: "6-os csavar",
        price: 150,
        description: "Lorem ipsum dolor sit amet..",
        photo: "sample_image.jpg",
      },
      pieces: 1000,
      unit: "darab",
    },
    {
      product: {
        name: "6-os csavar alátét (sima)",
        price: 20,
        description: "Lorem ipsum dolor sit amet..",
        photo: null,
      },
      pieces: 1000,
      unit: "darab",
    },
    {
      product: {
        name: "6-os csavar alátét (rugós)",
        price: 25,
        description: "Lorem ipsum dolor sit amet..",
        photo: null,
      },
      pieces: 1000,
      unit: "darab",
    },
  ];
};
