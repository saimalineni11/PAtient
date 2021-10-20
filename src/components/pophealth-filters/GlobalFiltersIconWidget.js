import React from 'react';
import Badge from '@material-ui/core/Badge';


export default (props) => {
  const {
    content,
  } = props;
  return (
      <Badge badgeContent={content}  style={{ fontSize: 30 }} color="primary">
        <i className="material-icons">filter_alt</i>
      </Badge>
  );
}
