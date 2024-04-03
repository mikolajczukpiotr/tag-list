import Pagination from "@mui/material/Pagination";
import { TagTable } from "../TagTable";
import { Tag } from "../../types";

type TagListProps = {
  tags: Tag[];
  totalPages: number;
  page: number;
  handlePageChange: (
    _: React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<unknown>,
    value: number
  ) => void;
};

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
