import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import {Icon} from "react-icons-kit";
import {star} from 'react-icons-kit/fa/star'

const Rate = ({ count, rating, filled, unfilled, onRating,size,icon }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const getColor = (index) => {
    if (hoverRating >= index) {
      return filled;
    } else if (!hoverRating && rating >= index) {
      return filled;
    }
    return unfilled;
  };

  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <Icon
          key={idx}
          className="cursor-pointer"
          size={size}
          icon={icon}
          onClick={() => onRating(idx)}
          style={{ color: getColor(idx) }}
          onMouseEnter={() => setHoverRating(idx)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ));
  }, [count, rating, hoverRating]);

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
  size:30,
};

export default Rate;