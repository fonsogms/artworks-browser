type IGetImageUrl = {
  id: string;
  width?: number;
  height?: number;
};

export const getImageUrl = ({
  id,
  width = 800,
  height = 800,
}: IGetImageUrl) => {
  return `https://www.artic.edu/iiif/2/${id}/full/${width},${height}/0/default.jpg`;
};
