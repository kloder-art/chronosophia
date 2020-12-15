import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

const SUBJECTS = 0;

const defaults = {
  subjects: [],
};

export const FiltersContext = React.createContext(defaults);

const reducer = (state, action) => {
  switch (action.type) {
    case SUBJECTS:
      return { ...state, subjects: action.value };
    default:
      return state;
  }
};

const filterBySubjects = (items, subjects) =>
  subjects.length > 0
    ? items.filter(({ node: { childMarkdownRemark: { frontmatter: x } } }) =>
        x.subjects ? x.subjects.some((y) => subjects.includes(y)) : false
      )
    : items;

export const FiltersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaults);

  const setSubjects = (subjects) => {
    dispatch({ type: SUBJECTS, value: subjects });
  };

  const filter = (items) => {
    return filterBySubjects(items, state.subjects);
  };

  return (
    <FiltersContext.Provider value={{ ...state, setSubjects, filter }}>
      {children}
    </FiltersContext.Provider>
  );
};

FiltersContextProvider.propTypes = {
  children: PropTypes.node,
};
