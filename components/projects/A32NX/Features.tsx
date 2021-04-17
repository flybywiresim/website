import React, { forwardRef } from 'react';

export const Features = forwardRef<HTMLDivElement>((_, ref): JSX.Element => (
    <>
        <div className="mx-auto divide-y divide-gray-500 max-w-2xl px-page mt-12">
            <p className="mt-3 mb-4 pt-3 text-5xl text-center font-medium text-blue-light">
                Features
            </p>
            <p className="pt-5 text-center text-xl">
                {/* eslint-disable-next-line max-len */}
                The volunteers in our community work hard around the clock to consistently bring new features and improve the default A320. Let&apos;s take a look at some of the features the A32NX has to offer!
            </p>
        </div>
        <div id="features" className="bg-blue-darker bg-opacity-95 relative py-14">
        </div>
    </>
));
