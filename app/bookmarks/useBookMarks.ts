"use client";
import { IBookMark, getBookMarksList } from "@/app/utils/bookmarkUtil";
import { useEffect, useState } from "react";

export const useBookMarks = () => {
  const [artWorks, setArtWorks] = useState<IBookMark[]>([]);

  const [search, setSearch] = useState("");
  const [isOnView, setIsOnView] = useState(false);
  const [isPublicDomain, setIsPublicDomain] = useState(false);

  useEffect(() => {
    let filteredArtWorks = getBookMarksList();

    if (search) {
      filteredArtWorks = filteredArtWorks.filter(
        (artWork) =>
          artWork.title.toLowerCase().includes(search.toLowerCase()) ||
          artWork.artist_title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (isOnView) {
      filteredArtWorks = filteredArtWorks.filter(
        (artWork) => artWork.is_on_view
      );
    }

    if (isPublicDomain) {
      filteredArtWorks = filteredArtWorks.filter(
        (artWork) => artWork.is_public_domain
      );
    }

    setArtWorks(filteredArtWorks);
  }, [search, isOnView, isPublicDomain]);

  return {
    artWorks,
    setArtWorks,
    search,
    setSearch,
    isOnView,
    setIsOnView,
    isPublicDomain,
    setIsPublicDomain,
  };
};
