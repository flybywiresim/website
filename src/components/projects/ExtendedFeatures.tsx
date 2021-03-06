import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const ExtendedFeatures: React.FC = () => (
    <div className="rounded-lg mx-auto px-4 py-4 max-w-screen-2xl sm:px-6 lg:px-8 pb-14">
        <div className="mx-auto divide-y divide-gray-500 w-1/2 2xl:w-1/2">
            <p className="mt-3 mb-4 pt-3 text-5xl text-center font-medium text-blue-light">
                Features
            </p>
            <p className="pt-5 text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eveniet laboriosam sequi. Ducimus, ea, iure.
            </p>
        </div>

        <div className="grid grid-cols-4 max-w-max mx-auto gap-x-20 gap-y-20 mt-10">
            <Feature />
            <Feature />
            <Feature />
            <Feature />
            <Feature />
            <Feature />
            <Feature />
            <Feature />
        </div>
    </div>
);

const Feature: React.FC = () => (
    <div className="w-72 flex flex-row">
        <FontAwesomeIcon className="mb-auto mt-1 mr-4 text-green-500 text-2xl" size="1x" icon={ faCheck } />
        <div className="space-y-3">
            <h1 className="font-semibold text-2xl">
                Lorem ipsum dolor sit
            </h1>
            <p className="text-lg text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, ducimus!
            </p>
        </div>
    </div>
);
