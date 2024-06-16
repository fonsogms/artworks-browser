"use client";
import { IArtWorkDetails } from "../services/api/chicago/getArtworkDetails";

export type IBookMark = IArtWorkDetails;

/**
 * Retrieves the list of bookmarked artworks from localStorage.
 * @returns An array of IBookMark representing the bookmarks.
 */
export const getBookMarksList = (): IBookMark[] => {
  const bookmarks = localStorage.getItem("bookmarks");
  if (bookmarks) {
    return JSON.parse(bookmarks);
  } else {
    localStorage.setItem("bookmarks", JSON.stringify([]));
    return [];
  }
};

/**
 * Toggles the bookmark status of a given artwork.
 * @param artWork - The artwork details to toggle as a bookmark.
 */
export const toggleBookMark = (artWork: IBookMark) => {
  const bookmarks = getBookMarksList();
  const isBookmarked = bookmarks.find((bookmark) => bookmark.id === artWork.id);

  if (isBookmarked) {
    localStorage.setItem(
      "bookmarks",
      JSON.stringify(
        bookmarks.filter((bookmark) => {
          return bookmark.id !== artWork.id;
        })
      )
    );
  } else {
    bookmarks.push(artWork);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
};

/**
 * Checks if an artwork with a given ID is bookmarked.
 * @param id - The ID of the artwork to check.
 * @returns A boolean indicating whether the artwork is bookmarked.
 */
export const getIsBookMarked = (id: string) => {
  const bookmarks = getBookMarksList();
  return !!bookmarks.find((bookmark) => bookmark.id.toString() === id);
};
