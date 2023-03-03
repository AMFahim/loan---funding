import React from 'react';
import UiRectengularCard from '../../../../components/common/ui/UiRectengularCard';

const Loancard = () => {
    return (
        <div className='flex flex-wrap mx-8'>
            <UiRectengularCard name="Current Loan Package" amount="2000" />
            <UiRectengularCard name="Payable With 2% Interest" amount="2200"/>
            <UiRectengularCard name="Paid" amount="1200"/>
            <UiRectengularCard name="Due" amount ="1000"/>
        </div>
    );
};

export default Loancard;