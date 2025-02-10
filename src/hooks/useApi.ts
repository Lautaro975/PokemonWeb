import { useCallback, useEffect, useState } from "react";
import { useApiCall } from "../model/api.model";

type Data<T> = T | null;
export type ErrorType = Error | null;
type useApiOptions = {
    options?:boolean;
}


interface props<T>{
    data: Data<T>,
    loading : boolean,
    error:ErrorType,
    autoFetch:()=>void
}

export const useAPI = <T>(apiCal:useApiCall<T>, options?: useApiOptions ):props<T> => {
    const [data, setData] = useState<Data<T>>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<ErrorType>(null);
    const [hasFetched, setHasFetched] = useState<boolean>(false);
    
    
    const fetchData = useCallback((async()=>{
        setLoading(true);
        const {apiCall, controller} =  apiCal;
        try{
            const call = await apiCall;
            setData(call.data)
            setError(null)        
        }catch(err){
            setError(err as Error)
            console.log(err);
        }finally{
            setHasFetched(true)
            setLoading(false)
        }
        return ()=>{controller.abort()};
    }),[apiCal])
    useEffect(() => {
        if (options && !hasFetched) {
            fetchData();
        }
    }, [options, hasFetched]);

    return {data,loading,error,autoFetch:fetchData}
}



