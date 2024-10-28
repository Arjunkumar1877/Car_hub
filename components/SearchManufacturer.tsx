"use client";
import { SearchManufacturerProps } from '@/types';
import { Button, Combobox, ComboboxInput } from '@headlessui/react';
import Image from 'next/image';
import React from 'react';

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  return (
    <div className='search-manufacturer'>
      <Combobox>
        <div className="relative w-full">
          <Button type="button" className="absolute top-[14px]">
            <Image alt="img" width={20} height={20} src="/car-logo.svg" className="ml-4" />
          </Button>
        </div>
      </Combobox>
      <ComboboxInput className="search-manufacturer__input" />


    </div>
  );
};

export default SearchManufacturer;
