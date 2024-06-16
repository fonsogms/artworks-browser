import { useState } from "react";
import Image from "next/image";
import "./Image.css";

type ILoadingImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const LoadingImage: React.FC<ILoadingImageProps> = ({
  src,
  alt,
  width,
  height,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const [isError, setIsError] = useState(false);
  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div style={{ position: "relative", width, height }}>
      {isLoading && (
        <div className="loading-image-container">
          <Image
            src={"/loading.gif"}
            alt="Loading..."
            layout="fill"
            loading="lazy"
            objectFit="cover"
          />
        </div>
      )}
      <Image
        src={isError ? "/not_found_image.png" : src}
        alt={alt}
        loading="lazy"
        width={width}
        height={height}
        onLoad={handleLoad}
        onError={() => {
          setIsError(true);
          setIsLoading(false);
        }}
      />
    </div>
  );
};

export default LoadingImage;
