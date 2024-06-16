import Link from "next/link";
import React from "react";
import { getImageUrl } from "../../getImageUrl";
import "./ArtWorkGrid.css";
import { IArtWorks } from "@/app/services/api/chicago/getArtworks";
import { URLS } from "@/app/constants/URLS";
import Loading from "../Loading/Loading";
import LoadingImage from "../custom-image/custom-image";

type IArtWorkGridProps = {
  artworks: IArtWorks;
  isLoading: boolean;
};

const ArtWorkGrid: React.FC<IArtWorkGridProps> = ({ artworks, isLoading }) => {
  if (isLoading) {
    return <Loading height="50vh" />;
  }
  return (
    <div className="artwork-grid" data-testid="art-grid">
      {artworks.map((artwork) => (
        <Link
          key={artwork.id}
          className="artwork-link"
          href={URLS.SCREENS.ARTWORKS + `${artwork.id}`}
        >
          <div
            key={artwork.id}
            data-testid="artwork"
            className="artwork-item artwork-card"
          >
            <LoadingImage
              alt={artwork.title}
              src={getImageUrl({
                id: artwork.image_id,
                width: 800,
              })}
              width={200}
              height={200}
            />
            <h4>{artwork.title}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArtWorkGrid;
