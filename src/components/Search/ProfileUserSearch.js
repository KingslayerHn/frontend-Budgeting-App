import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NotFoundPage from '../../containers/Error404';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { getUserReferenceById } from '../../redux/actions/references.action';

const ProfileUserSearch = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    const { q } = queryString.parse(location.search);
    dispatch(getUserReferenceById(q));
  }, [location.search, dispatch]);

  const { userRef } = useSelector((state) => state.references);

  if (!userRef) {
    return <NotFoundPage />;
  }
  return <div>user Selected</div>;
};

export default ProfileUserSearch;
