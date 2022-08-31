import React from "react";
import "./App.css";
import { fetchSearchResults } from "./utils";
import ListItem from "./components/ListItem";
import SearchInput from "./components/SearchInput";
import _ from "lodash";
import Pagination from "@material-ui/lab/Pagination";

const fetchData = async (query,page, cb) => {
  console.warn("fetching " + query);
  const res = await fetchSearchResults(query, page);
  console.log("resp", res);
  cb(res);
};

const debouncedFetchData = _.debounce((query,page, cb) => {
  fetchData(query,page, cb);
}, 500);

export default function App() {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [count, setCount] =React.useState(10)
  

  React.useEffect(() => {
    debouncedFetchData(query, page, (res) => {
      setResults(res);
    });
  }, [query, page]);

  console.log("results", results);
  const getPage=(event, value)=>{
    setPage(value)
  }
  return (
    <div>
      <SearchInput
        value={query}
        onChangeText={(e) => {
          setQuery(e.target.value);
        }}
      />
      {!_.isEmpty(results) ?
        results.map((result, index) => (
          <div key={index}>
            <ListItem
              title={result.name}
              imageUrl={result.image_url}
              caption={result.tagline}
              webUrl={result.webUrl}
              sectionName={result.sectionName}
              webTitle={result.webTitle}
              type={result.type}
              webPublicationDate={result.webPublicationDate}
              
            />
          </div>
        )):(
          <h1 style={{textAlign:'center'}}>No Data is there type something else</h1>
        )}
      {!_.isEmpty(query)&& (
        <Pagination count={count} showFirstButton showLastButton onChange={getPage} page={page}/>
        
      )}
    </div>
  );
}
