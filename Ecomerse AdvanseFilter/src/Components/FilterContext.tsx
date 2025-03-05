import { createContext, FC, ReactNode, useContext, useState } from "react";
interface FifilterContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  minPrice: number | undefined;
  setMinPrice: (min: number|undefined) => void;
  maxPrice: number | undefined;
  setMaxPrice: (max: number|undefined) => void;
  selectedCategory: string;
  setSelectedCategory: (selectedCategory: string) => void;
  keywords: string;
  setKeywords: (keyword: string) => void;
}

const filterContexts = createContext<FifilterContextType | undefined>(undefined);

const FilterContext: FC<{ children: ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [keywords, setKeywords] = useState<string>("");

  return (
    <filterContexts.Provider
      value={{
        searchQuery,
        setSearchQuery,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        selectedCategory,
        setSelectedCategory,
        keywords,
        setKeywords,
      }}
    >
      {children}
    </filterContexts.Provider>
  );
};
export default FilterContext;

export const useFilterContext = () => {
    const context = useContext(filterContexts);
    if(context === undefined){
        throw new Error('useFilter must be used within a FilterProvider');    
    }
    return context;
    
};
