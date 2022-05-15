import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Reviews",
    description: "Book Reviews",
  },
  {
    _id: uuid(),
    categoryName: "Talks",
    description: "Book Talks",
  },
  {
    _id: uuid(),
    categoryName: "Your Next Read",
    description: "Book Recommendations",
  },
];
