"use client";
import { SearchManufacturerProps } from '@/types';
import { Button, Transition } from '@headlessui/react';
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions, ComboboxButton } from '@headlessui/react'

import Image from 'next/image';
import React, { useState, Fragment } from 'react';
import { manufacturers } from '@/constants';


const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');
  const filteredManufacturers = query === '' ? manufacturers : manufacturers.filter((item) => (
    item.toLowerCase().replace(/\s+/g,"").includes(query.toLowerCase().replace(/\s+/g, ""))
  ))

  console.log(filteredManufacturers)

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <ComboboxButton className="absolute top-[14px]">
            <Image alt="img" width={20} height={20} src="/car-logo.svg" className="ml-4" />
          </ComboboxButton>
          <ComboboxInput className="search-manufacturer__input" placeholder='volkswagen' onChange={((e)=> setQuery(e.target.value))} displayValue={(manufacturer: string) => manufacturer} />
         <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo='opacity-0' afterLeave={() => setQuery('')}>
          <ComboboxOptions>
           {
            filteredManufacturers.length === 0 && query !== "" ? (
              <ComboboxOption value={query} className="search-manufacturer__option">
              Nothing found "{query}"
              </ComboboxOption>
            ) : (
              
                filteredManufacturers.map((item)=> (
                  <ComboboxOption value={item} key={item} className={({active}) => `relative search-manufacturer__option ${active ? 'bg-primary-blue text white' : 'text-gray-900'}`}>
             {({ focus, selected }) => (
              <div className={`'group flex gap-2', ${ focus && 'bg-blue-100'}`}>
              
                {item}
              </div>
            )}
                 </ComboboxOption>
                ))
              
            )
           }
          </ComboboxOptions>
         </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
