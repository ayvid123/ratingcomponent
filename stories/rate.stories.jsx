import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Rate from "../Ratebabel";
import {wink2} from 'react-icons-kit/icomoon/wink2'
const stories = storiesOf("rating",module);

stories.add('Normal',()=>{
    const [rating, setRating] = useState(0);
    return <Rate rating={rating} onRating={(rate) => setRating(rate)}/>
});
stories.add('with user-defined parameters',()=>{
    const [rating, setRating] = useState(0);
    return (
        <Rate filled={'blue'} unfilled={'skyblue'} size={50} icon={wink2}rating={rating} onRating={(rate) => setRating(rate)} />
    );

})