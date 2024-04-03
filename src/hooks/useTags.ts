import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const SITE_NAME = process.env.REACT_APP_SITE_NAME;

const useTags = (
  page: number,
  pageSize: number,
  sortField: string,
  sortOrder: string
) => {
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const fetchTags = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(API_URL ?? "", {
        params: {
          page,
          pagesize: pageSize,
          order: sortOrder,
          sort: sortField,
          site: SITE_NAME,
        },
      });
      setTags(response.data.items);
      setTotalPages(response.data.has_more ? page + 1 : page);
      setError(null);
    } catch (err) {
      setError((err as Error).message || null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTags();
  }, [page, pageSize, sortField, sortOrder]);

  return { tags, isLoading, totalPages, error };
};

export default useTags;
