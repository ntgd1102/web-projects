import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getList} from '../actions';

export const MovieListContainer: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(getList());
  }, []);
  return <div>sdsdsd</div>;
};
