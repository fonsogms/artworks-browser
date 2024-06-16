"use client";
import { IArtWorkDetails } from "../services/api/chicago/getArtworkDetails";

export type IBookMark = IArtWorkDetails;

export const getBookMarksList = (): IBookMark[] => {
  const bookmarks = localStorage.getItem("bookmarks");
  if (bookmarks) {
    return JSON.parse(bookmarks);
  } else {
    localStorage.setItem("bookmarks", JSON.stringify([]));
    return [];
  }
};

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

export const getIsBookMarked = (id: string) => {
  const bookmarks = getBookMarksList();
  return !!bookmarks.find((bookmark) => bookmark.id.toString() === id);
};
