import { TextField, Select, MenuItem, Stack } from "@mui/material";
import { TagControlsProps } from "./TagControlsTypes";

export const TagControls = ({
  pageSize,
  setPageSize,
  sortField,
  setSortField,
  sortOrder,
  setSortOrder,
}: TagControlsProps) => {
  return (
    <Stack direction="row" spacing={4}>
      <TextField
        type="number"
        value={pageSize}
        onChange={(e) => setPageSize(Number(e.target.value))}
      />
      <Select value={sortField} onChange={(e) => setSortField(e.target.value)}>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="activity">Activity</MenuItem>
        <MenuItem value="popular">Popular</MenuItem>
      </Select>
      <Select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <MenuItem value="asc">Ascending</MenuItem>
        <MenuItem value="desc">Descending</MenuItem>
      </Select>
    </Stack>
  );
};
