import React, { useRef } from 'react';
import ReactSelect, { components } from 'react-select';
import './MultiSelect.style.css';

const MultiSelect = (props) => {
  const valueRef = useRef(props.value);
  valueRef.current = props.value;

  const selectAllOption = {
    id: '<SELECT_ALL>',
    name: props.selectAllType,
  };

  const isSelectAllSelected = () => {
    if (valueRef.current) {
      return valueRef.current.length === props.options.length && !props.loading;
    }
  };

  const isOptionSelected = (option) => {
    if (valueRef.current) {
      return (
        valueRef.current.some(({ id }) => id === option.id) ||
        isSelectAllSelected()
      );
    }
  };

  const getOptions = () => [selectAllOption, ...props.options];

  const getValue = () =>
    isSelectAllSelected() ? [selectAllOption] : props.value;

  const onChange = (newValue, actionMeta) => {
    const { action, option, removedValue } = actionMeta;

    if (action === 'select-option' && option.id === selectAllOption.id) {
      props.onChange(props.options, actionMeta);
    } else if (
      (action === 'deselect-option' && option.id === selectAllOption.id) ||
      (action === 'remove-value' && removedValue.id === selectAllOption.id)
    ) {
      props.onChange([], actionMeta);
    } else if (
      actionMeta.action === 'deselect-option' &&
      isSelectAllSelected()
    ) {
      props.onChange(
        props.options.filter(({ id }) => id !== option.id),
        actionMeta,
      );
    } else {
      props.onChange(newValue || [], actionMeta);
    }
  };

  const IndicatorsContainer = (props) => {
    return (
      components.IndicatorsContainer && (
        <components.IndicatorsContainer
          {...props}
          className="indicator-wrapper"
        >
          {components.DropdownIndicator && (
            <components.DropdownIndicator
              {...props}
            ></components.DropdownIndicator>
          )}
        </components.IndicatorsContainer>
      )
    );
  };

  const GroupHeading = (props) => <components.GroupHeading {...props} />;

  const Control = (props) => {
    let newProps = { ...props };

    return (
      <components.Control
        {...newProps}
        className={`dropdown-control ${
          newProps.isFocused ? 'dropdown-control-focused' : ''
        }`}
      />
    );
  };

  const Menu = (props) => {
    const newProps = {
      ...props,
      className: `dropdown-menu`,
    };
    return (
      <>
        <components.Menu {...newProps}>{props.children}</components.Menu>
      </>
    );
  };

  const MenuList = (props) => {
    const newProps = {
      ...props,
      className: `dropdown-menu-inner`,
    };
    return <components.MenuList {...newProps} />;
  };

  const Option = (props) => {
    const newProps = {
      ...props,
    };

    return <components.Option {...newProps} />;
  };

  return (
    <ReactSelect
      isOptionSelected={isOptionSelected}
      options={getOptions()}
      value={getValue()}
      onChange={onChange}
      hideSelectedOptions={false}
      isMulti
      isLoading={props.loading}
      placeholder={props.placeholder}
      getOptionLabel={(option) => option.name}
      getOptionValue={(option) => option.id}
      components={{
        Control,
        IndicatorsContainer,
        Option,
        Menu,
        MenuList,
        GroupHeading,
      }}
      isClearable={true}
      closeMenuOnSelect={true}
      styles={{
        menu: (base) => ({ ...base, zIndex: 9999 }),
        control: (base) => ({
          ...base,
          backgroundColor: props.currentThemeBG,
          border: '1px solid #0077c5',
        }),
      }}
    />
  );
};

export default MultiSelect;
