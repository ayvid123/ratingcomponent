import  { useMemo, useState} from 'react';
import React from 'react';
import PropTypes from "prop-types";
import {Icon} from "react-icons-kit";
import {star} from 'react-icons-kit/fa/star'
//count, rating, filled, unfilled, onRating,size,icon

/**
 * 
 * @param {Object} props
 * @param {Number} props.count No of icons needed
 * @param {Number} props.rating Give the value from onRating as a parameter
 * @param {color} props.filled  Color in which the selected icons should be dispalyed
 * @param {color} props.unfilled  Color in which the unselected icons should be dispalyed
 * @param {Number} props.onRating Returns the change in value in rating component
 * @param {Number} props.size  Size in which icons should be displayed
 * @param {Icon} props.icon  icon from react-icons-kit 
 * @returns 
 */

const Rate = (props) => {
  const [hoverRating, setHoverRating] = useState(0);

  const getColor = (index) => {
    if (hoverRating >= index) {
      return props.filled;
    } else if (!hoverRating && props.rating >= index) {
      return props.filled;
    }
    return props.unfilled;
  };

  const starRating = useMemo(() => {
    return Array(props.count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <Icon
          key={idx}
          className="cursor-pointer"
          size={props.size}
          icon={props.icon}
          onClick={() => props.onRating(idx)}
          style={{ color: getColor(idx) }}
          onMouseEnter={() => setHoverRating(idx)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ));
  }, [props.count, props.rating, hoverRating]);

  return <div>{starRating}</div>;
};

Rate.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
  onChange: PropTypes.func,
  filled: PropTypes.string,
  unfilled: PropTypes.string,
  size:PropTypes.number,
  icon:PropTypes.element,
};

Rate.defaultProps = {
  count: 5,
  rating: 0,
  filled: "#f5eb3b",
  unfilled: "#DCDCDC",
  icon:star,
  size:20,
};

export default Rate;