import React from 'react';
import filterArray from './filterArray';
import FilterBox from './FilterBox';

const FilterContainer = () => {
    return (
        <div className='flex items-center gap-4 flex-wrap bg-slate-900/20 backdrop-blur-md p-2 rounded-3xl border border-white/5 w-full md:w-auto'>
            <span className="text-xs font-black uppercase tracking-tighter text-slate-500 pl-4">Filter By Domain:</span>
            <div className="flex gap-2 flex-wrap">
                {filterArray.map((val) => (
                    <FilterBox key={val} filter_name={val} />
                ))}
            </div>
        </div>
    );
}

export default FilterContainer;
