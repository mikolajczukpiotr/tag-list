import { TagControls } from "./TagControls";

export default {
  title: "TagControls",
  component: TagControls,
};

export const Default = () => (
  <TagControls
    pageSize={10}
    setPageSize={() => {}}
    sortField="name"
    setSortField={() => {}}
    sortOrder="asc"
    setSortOrder={() => {}}
  />
);
