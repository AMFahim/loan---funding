import React from 'react';

const UiRectengularCard = (props) => {
    return (
            <div className='p-4 border-2 rounded-md w-3/12 bg-gray-800 hover:bg-primary'>
                <h3 className='text-white font-poppin font-semibold'>{props.name}</h3>
                <h2 className='text-white text-3xl p-4'>{props.amount} <sub>USD</sub></h2>
            </div>
    );
};

export default UiRectengularCard;