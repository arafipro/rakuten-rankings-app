type Genre = {
  genreId: number;
  genreLevel: number;
  genreName: string;
};

type Item = {
  itemName: string;
  itemCode: number | string;
  itemPrice: number;
	affiliateUrl: string;
	mediumImageUrls: string[]
  rank: number;
};
