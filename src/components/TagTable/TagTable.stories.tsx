import { TagTable } from "./TagTable";

export default {
  title: "TagTable",
  component: TagTable,
};

export const Default = () => (
  <TagTable
    tags={[
      { name: "javascript", count: 1234 },
      { name: "react", count: 5678 },
    ]}
  />
);
