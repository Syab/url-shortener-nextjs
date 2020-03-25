import React, { useEffect }from 'react';
import Router from 'next/router';

const Index = () =>{

    useEffect(() => {
        const { pathname }  = Router;
        if( pathname === '/' ){
            Router.push('/shorty');
        }
    }, []);

    return null;
};

export default Index;
