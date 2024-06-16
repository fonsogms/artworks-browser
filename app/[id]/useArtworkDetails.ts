import { getIsBookMarked, toggleBookMark } from "@/app/utils/bookmarkUtil";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import sanitizeHtml from "sanitize-html";
import { getArtworkDetails } from "@/app/services/api/chicago/getArtworkDetails";
import { isAxiosError } from "axios";

export const useArtworkDetails = () => {
  const { id } = useParams();

  const [isBookMarked, setIsBookMarked] = useState(false);

  useEffect(() => {
    setIsBookMarked(getIsBookMarked(id as string));
  }, [id]);
  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ["artworkDetails", id],
    queryFn: () => getArtworkDetails(id as string),
  });

  const actualErrorMessage = useMemo(() => {
    if (!error) {
      return error;
    }

    if (isAxiosError(error)) {
      if (error.response?.data?.message) {
        return error.response?.data?.message as string;
      }
    }

    return "Unknown error. Pleas try again later";
  }, [error]);
  const toggleCurrentBookMark = () => {
    if (!data) return;

    setIsBookMarked(!isBookMarked);

    toggleBookMark({
      id: data.id,
      title: data.title,
      description: data.description,
      short_description: data.short_description,
      image_id: data.image_id,
      artist_title: data.artist_title,
      is_on_view: data.is_on_view,
      is_public_domain: data.is_public_domain,
    });
  };

  return {
    data,
    isLoading,
    isFetching,
    isError,
    error: actualErrorMessage,
    isBookMarked,
    toggleBookMark: toggleCurrentBookMark,
    description: sanitizeHtml(
      data?.description ||
        data?.short_description ||
        "Description not available"
    ),
  };
};
