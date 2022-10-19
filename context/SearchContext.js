import { createContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
	const [searchResults, setSearchResults] = useState(1);

	return (
		<SearchContext.Provider
			value={{
                searchResults,
                setSearchResults
			}}>
			{children}
		</SearchContext.Provider>
	);
};

export default SearchContext;
