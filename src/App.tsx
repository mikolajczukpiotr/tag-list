import { useState, useEffect } from "react";
import { TagControls } from "./components/TagControls";

import axios from "axios";
import { TagList } from "./components/TagList";
import { Alert, CircularProgress, Stack } from "@mui/material";

const API_URL = process.env.REACT_APP_API_URL;
const SITE_NAME = process.env.REACT_APP_SITE_NAME;

const App = () => {
  const [tags, setTags] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
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

  const handlePageChange = (_: any, value: number) => {
    setPage(value);
  };

  return (
    <Stack spacing={4}>
      <TagControls
        pageSize={pageSize}
        setPageSize={setPageSize}
        sortField={sortField}
        setSortField={setSortField}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      {isLoading ? (
        <CircularProgress />
      ) : error ? (
        <Alert severity="error">Error: {error}</Alert>
      ) : (
        <TagList
          tags={tags}
          totalPages={totalPages}
          page={page}
          handlePageChange={handlePageChange}
        />
      )}
    </Stack>
  );
};

export default App;
