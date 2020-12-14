import React, { useContext } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

import { FiltersContext } from '../context/filters-context';

const options = [
  { value: 'ethic', label: 'Ética' },
  { value: 'physics', label: 'Física' },
];

const StyledFilters = styled.div`
  display: flex;
  flex-direction: row;

  .form-input {
    flex: 1 1 auto;
  }
`;

export const Filters = () => {
  const { subjects, setSubjects } = useContext(FiltersContext);
  return (
    <StyledFilters>
      <div className={'form-input'}>
        <Select
          options={options}
          isClearable={true}
          placeholder={'Materia...'}
          isMulti={true}
          value={subjects.map((x) => options.find((y) => y.value == x))}
          onChange={(value) => {
            setSubjects(value === null ? [] : value.map((x) => x.value));
          }}
        />
      </div>
    </StyledFilters>
  );
};
