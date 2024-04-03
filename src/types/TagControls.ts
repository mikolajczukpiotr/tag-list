export type TagControlsProps = {
  pageSize: number;
  setPageSize: (value: number) => void;
  sortField: string;
  setSortField: (value: string) => void;
  sortOrder: string;
  setSortOrder: (value: string) => void;
};
