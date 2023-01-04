import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Rate from "../src/rate";
import {wink2} from 'react-icons-kit/icomoon/wink2'
const stories = storiesOf("rating",module);

stories.add('Normal',()=>{
    const [rating, setRating] = useState(0);
    return <Rate rating={rating} onRating={(rate) => setRating(rate)}/>
});
stories.add('with user-defined parameters',()=>{
    const [rating1, setRating1] = useState(0);
    return (
        <Rate filled={'blue'} unfilled={'skyblue'} size={50} count={20}  icon={wink2} rating={rating1} onRating={(rate) => setRating1(rate)} />
    );

})