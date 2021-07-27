import React from 'react';
import ReactSelect, { components } from 'react-select';

const SingleSelect = (props) => {
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
      name={props.name}
      options={props.options}
      onChange={props.onChange}
      value={props.value}
      id={props.id}
      isLoading={props.loading}
      placeholder={props.placeholder}
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
        singleValue: (base) => ({
          ...base,
          color: props.currentThemeColor,
        }),
      }}
    />
  );
};

export default SingleSelect;
