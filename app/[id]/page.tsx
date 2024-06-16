"use client";
import React from "react";
import { useArtworkDetails } from "./useArtworkDetails";
import { getImageUrl } from "../getImageUrl";
import LoadingImage from "../components/custom-image/custom-image";
import Loading from "../components/Loading/Loading";
import "./artwork.details.css";

const ArtworkDetailsScreen = () => {
  const { data, isError, isLoading, error, toggleBookMark, isBookMarked } =
    useArtworkDetails();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <span data-testid="error-api">{error}</span>;
  }

  if (data) {
    return (
      <div className="artwork-details-container">
        <h1 className="artwork-details-title">{data.title}</h1>
        <LoadingImage
          alt={data.title}
          src={getImageUrl({ id: data.image_id, width: 800 })}
          width={500}
          height={500}
        />
        <div className="artwork-details-image-container">
          <h4 className="artwork-details-author">
            Author: {data.artist_title}
          </h4>
          <button
            data-testid="bookmark-button"
            onClick={toggleBookMark}
            className={`artwork-details-button ${
              isBookMarked ? "bookmarked" : ""
            }`}
          >
            <svg
              className="artwork-details-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M6 22.85L12 18.5l6 4.35V3.1c0-1.16-.94-2.1-2.1-2.1H8.1C6.94 1 6 1.94 6 3.1v19.75zM12 16.6l-4.5 3.15V3.1c0-.33.27-.6.6-.6h7.8c.33 0 .6.27.6.6v16.65L12 16.6z" />
            </svg>
            {isBookMarked ? "Bookmarked" : "Bookmark"}
          </button>
        </div>

        <p
          className="artwork-details-description"
          dangerouslySetInnerHTML={{
            __html: data.description || "No description available",
          }}
        ></p>
      </div>
    );
  }
};

export default ArtworkDetailsScreen;
