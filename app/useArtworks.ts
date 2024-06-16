"use client";
import { getArtworks } from "@/app/services/api/chicago/getArtworks";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import useDebounce from "./hooks/useDebounce";
import { isAxiosError } from "axios";

export const useArtworks = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [page, setPage] = useState(() =>
    parseInt(searchParams.get("page") || "1")
  );
  const [search, setSearch] = useState(() => searchParams.get("search") || "");
  const [isOnView, setIsOnView] = useState(
    () => searchParams.get("isOnView") === "true"
  );
  const [isPublicDomain, setIsPublicDomain] = useState(
    () => searchParams.get("isPublicDomain") === "true"
  );

  const debouncedSearch = useDebounce(search, 300);

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams({
      page: newPage.toString(),
      search,
      isOnView: isOnView.toString(),
      isPublicDomain: isPublicDomain.toString(),
    });

    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    const newPage = parseInt(searchParams.get("page") || "1");
    const newSearch = searchParams.get("search") || "";
    const newIsOnView = searchParams.get("isOnView") === "true";
    const newIsPublicDomain = searchParams.get("isPublicDomain") === "true";

    setPage(newPage);
    setSearch(newSearch);
    setIsOnView(newIsOnView);
    setIsPublicDomain(newIsPublicDomain);
  }, [pathname, searchParams]);

  useEffect(() => {
    const params = new URLSearchParams({
      page: "1",
      search,
      isOnView: isOnView.toString(),
      isPublicDomain: isPublicDomain.toString(),
    });

    replace(`${pathname}?${params.toString()}`);
  }, [search, isOnView, isPublicDomain, replace, pathname]);

  const response = useQuery({
    queryKey: ["artWorks", page, debouncedSearch, isPublicDomain, isOnView],
    queryFn: () =>
      getArtworks({
        page,
        search: debouncedSearch,
        isPublicDomain,
        isOnView,
      }),
  });

  const { isLoading, data, isError, isPending, error } = response;

  const actualErrorMessage = useMemo(() => {
    if (!error) {
      return error;
    }

    if (isAxiosError(error)) {
      if (error.response?.data?.message) {
        return error.response?.data?.message as string;
      }
    }

    return "Unknown error. Please try again later";
  }, [error]);

  return {
    isLoading,
    data: data?.data,
    pagination: data?.pagination,
    error: actualErrorMessage,
    isPending,
    isError,
    page,
    search,
    isPublicDomain,
    setSearch,
    setPage: handlePageChange,
    setIsOnView,
    setIsPublicDomain,
    isOnView,
  };
};
