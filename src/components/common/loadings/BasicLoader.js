import React from 'react';

import Loader from 'react-loader-spinner';

//TODO change measurement to always make parent div full

export default () =>
    <div className="m-auto p-3"><Loader className="w-100 h-100 m-auto" type="Circles"
                                                 color="#00BFFF"
                                                 height="500"
                                                 width="500"
    /></div>;