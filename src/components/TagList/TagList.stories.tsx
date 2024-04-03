import { TagList } from "./TagList";

export default {
  title: "TagList",
  component: TagList,
};

export const Default = () => (
  <TagList
    tags={[
      { name: "javascript", count: 1234 },
      { name: "react", count: 5678 },
    ]}
    totalPages={1}
    page={1}
    handlePageChange={() => {}}
  />
);
