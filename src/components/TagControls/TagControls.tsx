import { TextField, Select, MenuItem } from "@mui/material";

type TagControlsProps = {
  pageSize: number;
  setPageSize: (value: number) => void;
  sortField: string;
  setSortField: (value: string) => void;
  sortOrder: string;
  setSortOrder: (value: string) => void;
};

export const TagControls = ({
  pageSize,
  setPageSize,
  sortField,
  setSortField,
  sortOrder,
  setSortOrder,
}: TagControlsProps) => {
  return (
    <div>
      <TextField
        type="number"
        value={pageSize}
        onChange={(e) => setPageSize(Number(e.target.value))}
      />
      <Select value={sortField} onChange={(e) => setSortField(e.target.value)}>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="count">Count</MenuItem>
      </Select>
      <Select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <MenuItem value="asc">Ascending</MenuItem>
        <MenuItem value="desc">Descending</MenuItem>
      </Select>
    </div>
  );
};
