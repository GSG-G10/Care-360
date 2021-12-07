import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchSpecialist = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search doctors"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{ width: '70%', height: 35, borderRadius: 20, fontSize: 10 }}
      iconColor="#022752"
    />
  );
};

export default SearchSpecialist;
