
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

 const SelectComponent =(props)=>{
  return (
    <Autocomplete
      multiple={props.showMultiple}
      id="checkboxes-tags-demo"
      className={props.classes}
      onChange = {(event, newValue) => {
        props.setValue(newValue);
      }}
      value={props.value}
      options={props.options}
      disableCloseOnSelect = {props.showMultiple}
      getOptionSelected={(option, value) => {
        return option.value === value.value;
    }}
      getOptionLabel={(option) => option.title}
      renderOption={(option, { selected }) => (
        <React.Fragment>
         
         {props.showMultiple && <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />}
          {option.title}
        </React.Fragment>
      )}
      
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label={props.label} placeholder={props.label} />
      )}
    />
  );
}
export default SelectComponent;

