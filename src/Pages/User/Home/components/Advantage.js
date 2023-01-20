import React from 'react';
import QuickLoan from './../../../../Assets/logo/quickLoan.png';
import CustomerSatisfaction from './../../../../Assets/logo/customerSatisfaction.png';
import Prepayment from './../../../../Assets/logo/prepayment.png';

const Advantage = () => {
  return (
    <div className='grid grid-cols-1 text-center mx-10 bg-advantage-1 mt-24 md:grid-cols-3 sm:grid-cols-3'>
      <div className='flex border-r-[1px] border-slate-300'>
        <img src={QuickLoan} className="py-8 pl-8 pr-4 h-32" alt="Quick Loan Approvals" />
        <span className='py-12 text-lg font-medium text-gray-500 font-poppins'>Quick Loan Approvals</span>
      </div>
      <div className='flex border-r-[1px] border-slate-300'>
        <img src={CustomerSatisfaction} className="py-8 pl-8 pr-4 h-32" alt="Quick Loan Approvals" />
        <span className='py-12 text-lg font-medium text-gray-500 font-poppins'>20,000 Customer Satisfactions</span>
      </div>
      <div className='flex'>
        <img src={Prepayment} className="py-8 pl-8 pr-4 h-32" alt="Quick Loan Approvals" />
        <span className='py-12 text-lg font-medium text-gray-500 font-poppins'>No Prepayment Required</span>
      </div>
    </div>
  );
};

export default Advantage;