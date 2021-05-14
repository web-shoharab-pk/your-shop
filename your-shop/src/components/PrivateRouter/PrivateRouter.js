import React, { useContext } from 'react';
import { Redirect, Route  } from 'react-router';
import { UserContaxt } from '../../App';

const PrivateRouter = ({ children, ...rest }) => {
   
    const {userDetails} = useContext(UserContaxt);
 
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    userDetails.email ? (
                        children
                         
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {   from: location        }
                               
                            }}                           
                        />
                          
                    )
                     
                }
            />
        </div>
    );
};

export default PrivateRouter;