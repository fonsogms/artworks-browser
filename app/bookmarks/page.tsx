"use client";
import React from "react";
import Header from "../components/header/Header";
import ArtWorkGrid from "../components/artworkgrid/ArtWorkGrid";
import { useBookMarks } from "./useBookMarks";
import { URLS } from "@/app/constants/URLS";

const ArtWorksScreen = () => {
  const {
    artWorks,
    isOnView,
    isPublicDomain,
    search,
    setIsOnView,
    setIsPublicDomain,
    setSearch,
  } = useBookMarks();

  return (
    <div>
      <Header
        goToPageHref={URLS.SCREENS.ARTWORKS}
        goToPageTitle="Go to Artworks"
        search={search}
        setSearch={setSearch}
        setIsOnView={setIsOnView}
        setIsPublicDomain={setIsPublicDomain}
        isOnView={isOnView}
        isPublicDomain={isPublicDomain}
      />

      <ArtWorkGrid artworks={artWorks || []} />
    </div>
  );
};

export default ArtWorksScreen;
