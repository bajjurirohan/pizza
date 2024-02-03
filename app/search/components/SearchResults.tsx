// components/SearchResults.js
const SearchResults = ({ results }) => {
    return (
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    );
  };
  
  export default SearchResults;
  