import React, { FC } from 'react';

export const Card: FC = (props) => (
    <>
        <div className="bg-gray-200 border-t-4 border-discord px-page py-6 max-w-2xl rounded-lg">
            {props.children}
        </div>
    </>
);

export const CardTitle: FC = (props) => (
    <h1 className="text-4xl font-bold">{props.children}</h1>
);

export const CardBody: FC = (props) => (
    <p className="mt-4 mb-6">
        {props.children}
    </p>
);
