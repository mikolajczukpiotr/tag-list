import Pagination from "@mui/material/Pagination";
import { TagTable } from "../TagTable";
import { TagListProps } from "../../types/TagList";

export const TagList = ({
  tags,
  totalPages,
  page,
  handlePageChange,
}: TagListProps) => (
  <>
    <TagTable tags={tags} />
    <Pagination count={totalPages} page={page} onChange={handlePageChange} />
  </>
);
