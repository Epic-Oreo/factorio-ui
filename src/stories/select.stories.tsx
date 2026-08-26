import { Select } from "@/components";
import { Option } from "@/components/Select/select";
// import "@/global.css";
import "./story.css";

export const select = () => (
  <div>
    <Select style={{
      "width": "20rem"
    }}>
      <Option>Relevance</Option>
      <Option>Downloads</Option>
      <Option>Recently Updated</Option>
      <Option>Trending</Option>
    </Select>
  </div>
)