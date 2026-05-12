import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddDomain, RemoveDomain, ResetFilters, selectFilteredDomains } from '../../../store/slice1';

const FilterBox = ({ filter_name }) => {
    const dispatch = useDispatch();
    const isEmpty = useSelector((state) => state.slice1.isEmpty);
    const filteredDomains = useSelector((state) => state.slice1.filteredDomains);

    const isActive = filter_name === "All" 
        ? isEmpty 
        : filteredDomains.includes(filter_name);

    function handleClick() {
        if (filter_name === "All") {
            if (!isEmpty) dispatch(ResetFilters());
            return;
        }

        if (!isActive) {
            dispatch(AddDomain(filter_name));
        } else {
            dispatch(RemoveDomain(filter_name));
        }
    }

    return (
        <div 
            onClick={handleClick} 
            className={`flex items-center justify-center px-6 py-2 leading-none rounded-full border text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer select-none
                ${isActive 
                    ? "bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)] scale-105" 
                    : "bg-slate-900/50 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-300"
                }
            `}
        >
            {filter_name}
        </div>
    );
}

export default FilterBox;


