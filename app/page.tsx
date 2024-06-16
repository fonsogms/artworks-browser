"use client";
import React, { Suspense } from "react";
import { useArtworks } from "./useArtworks";
import Pagination from "./components/pagination/pagination";
import Header from "./components/header/Header";
import Loading from "./components/Loading/Loading";
import { URLS } from "./constants/URLS";
import ArtWorkGrid from "./components/artworkgrid/ArtWorkGrid";

const ArtworksComponent = () => {
  const {
    data,
    error,
    pagination,
    isError,
    search,
    isLoading,
    isPublicDomain,
    page,
    setSearch,
    setPage,
    setIsPublicDomain,
    setIsOnView,
    isOnView,
  } = useArtworks();

  if (isError) {
    return <span data-testid="error-api">{error}</span>;
  }

  return (
    <div>
      <Header
        goToPageHref={URLS.SCREENS.BOOKMARKS}
        goToPageTitle="Go to Bookmarks"
        search={search}
        setSearch={setSearch}
        setIsOnView={setIsOnView}
        setIsPublicDomain={setIsPublicDomain}
        isOnView={isOnView}
        isPublicDomain={isPublicDomain}
      />

      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <ArtWorkGrid artworks={data || []} />
            <Pagination
              currentPage={page}
              totalPages={pagination?.total_pages}
              setCurrentPage={setPage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const ArtWorksScreen = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ArtworksComponent />
    </Suspense>
  );
};

export default ArtWorksScreen;
