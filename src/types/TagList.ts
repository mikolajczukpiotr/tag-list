import { Tag } from ".";

export type TagListProps = {
  tags: Tag[];
  totalPages: number;
  page: number;
  handlePageChange: (_: any, value: number) => void;
};
