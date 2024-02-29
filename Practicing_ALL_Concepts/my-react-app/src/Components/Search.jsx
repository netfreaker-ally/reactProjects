import { Button } from "@mui/material";

const SearchBox = () => {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="text-1xl text-gray-900 dark:text-white border-2"
      ></input>
      <Button variant="contained">Search</Button>
    </div>
  );
};

export default SearchBox;
