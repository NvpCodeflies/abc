import SearchIcon from '../Icons/SearchIcon';

import './searchWrapper.css';

const SearchWrapper = () => {
  return (
    <div className="search_section">
      <div className="search_wrapper">
        <h1 className="search_title">Remedy Cloud</h1>
        <p className="search_subtitle">Search for a cve below to see all the available fixes</p>

        <div className="search_bar">
          <SearchIcon />
          <input type="text" placeholder="Search for any CVE" />
          <button className="theme_btn theme_btn-primary search_btn"><SearchIcon /> Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchWrapper;
