import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios, { AxiosError } from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const SearchForm: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.get<Post[]>(
        `https://jsonplaceholder.typicode.com/posts?q=${query}`
      );
      setResults(response.data);
    } catch (error: AxiosError | any) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p>Error: {error}</p>}

      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchForm;