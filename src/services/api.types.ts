type OriginalFetchSingleUserResponse = {
  name: {
    first: string;
    last: string;
  };
  location: {
    city: string;
    country: string;
  };
  dob: {
    date: string;
  };
  picture: {
    medium: string;
    thumbnail: string;
  };
  phone: string;
};

type TransformedFetchSingleUserResponse = {
  name: string;
  location: string;
  dob: string;
  picture: {
    medium: string;
    thumbnail: string;
  };
  phone: string;
};

export type OriginalFetchUsersResponse = {
  results: OriginalFetchSingleUserResponse[];
};
export type TransformedFetchUserResponse = TransformedFetchSingleUserResponse[];
