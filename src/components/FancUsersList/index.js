import React, {useState, useEffect} from 'react';
import Spinner from "../Spinner";
import Error from "../Error"
import { getJsonUsers } from "../../api";
import useData from "../../hooks/useData";


const FancUsersList = () => {
    const {data: users, error, isPanding} = useData(getJsonUsers);

   if (isPanding){
       return <Spinner/>;
   }
   if(isPanding){
       return <Error/>;
   }
        return (<ol>
            {users.map((user) => (<li key = {user.id}> {user.name}</li>
            ))}
        </ol>
        );
};

export default FancUsersList;