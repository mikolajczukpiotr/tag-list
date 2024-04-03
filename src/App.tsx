import { useState } from "react";
import { TagControls } from "./components/TagControls";
import { TagList } from "./components/TagList";
import { Alert, CircularProgress, Stack } from "@mui/material";
import useTags from "./hooks/useTags";

const App = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const { tags, isLoading, totalPages, error } = useTags(
    page,
    pageSize,
    sortField,
    sortOrder
  );

  const handlePageChange = (
    _: React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<unknown>,
    value: number
  ) => {
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
