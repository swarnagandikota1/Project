// ItemList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from './Store.js/action';

const ItemList = () => {
  const dispatch = useDispatch();
  const { loading, items, error } = useSelector((state) => state);

  useEffect(() => {
    // Dispatch the fetchItems action when the component mounts
    dispatch(fetchItems());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
