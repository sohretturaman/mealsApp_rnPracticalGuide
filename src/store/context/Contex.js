import {createContext, useState} from 'react';

export const Context = createContext({
  ids: [],
  AddFavMeal: id => {},
  DelFalMeal: id => {},
});

const FavMealContextProvider = ({children}) => {
  const [favMealIds, setFavMealIds] = useState([]);

  const AddFavMeal = id => {
    let newArray = [id, ...favMealIds];
    setFavMealIds(newArray);
    //setFavMealIds(currentIds => [id, ...currentIds]); it is a good way to update state
  };

  const DelFalMeal = id => {
    let newList = favMealIds.filter(mealId => mealId !== id);
    setFavMealIds(newList);
  };

  const myValue = {
    ids: favMealIds,
    AddFavMeal: AddFavMeal,
    DelFalMeal: DelFalMeal,
  };

  return <Context.Provider value={myValue}>{children}</Context.Provider>;
};

export default FavMealContextProvider;
