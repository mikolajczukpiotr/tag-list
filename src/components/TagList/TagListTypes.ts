import { Tag } from "../../types";

export type TagListProps = {
  tags: Tag[];
  totalPages: number;
  page: number;
  handlePageChange: (
    _: React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<unknown>,
    value: number
  ) => void;
};
