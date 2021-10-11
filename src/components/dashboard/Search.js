import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { BsSearch } from 'react-icons/all';
import { useSelector, useDispatch } from 'react-redux';
import { handleChangeText } from '../../redux/actions/search.action';
import AvatarSearch from '../AvatarSearch';

const Search = () => {
  const dispatch = useDispatch();
  const { searchText } = useSelector((state) => state.search);
  const { searchUsersReference } = useSelector((state) => state.references);

  const handleInputChange = ({ target }) => {
    dispatch(handleChangeText(target.value));
  };

  return (
    <div
      style={{
        flex: 1,
        width: '100%',
        height: 70,
        borderRadius: 35,
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          width: '100%',
          zIndex: 1000,
          flexDirection: 'column',
          backgroundColor: '#fff',
          borderRadius: 30,
          alignItems: 'flex-start',
          boxShadow: '1px 0px 8px -1px rgba(145, 136, 142, 0.315)',
        }}
      >
        <InputGroup
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <InputGroup.Text
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              padding: 20,
              fontSize: 25,
            }}
          >
            <BsSearch color="#0d56b3" />
          </InputGroup.Text>

          <FormControl
            autoComplete="off"
            type="text"
            placeholder="search...."
            aria-label="search"
            aria-describedby="basic-addon1"
            name="search"
            value={searchText}
            onChange={handleInputChange}
            style={{
              marginRight: 30,
              display: 'flex',
              alignItems: 'center',
              border: 'none',
            }}
          />
        </InputGroup>
        {searchUsersReference.length > 0 && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto',
              width: '100%',
              paddingBottom: 30,
              borderBottomLeftRadius: 25,
              borderBottomRightRadius: 25,
            }}
          >
            {searchUsersReference.map((item) => (
              <AvatarSearch key={item._id} {...item} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
