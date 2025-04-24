import { useCallback, useState } from "react";
import { infoUser } from "../services/infoUser";

export function useInfoUser(){
    const[dataInfoUser, setDataInfoUser] = useState([]);
    const [isInfoUserLoading, setIsInfoUserLoading] = useState(false);
    const [errorInfoUser, setErrorInfoUser] = useState(false);

    const getInfoUser = useCallback(async () => {
        setIsInfoUserLoading(true);
        setErrorInfoUser(false);
        try {
            const response = await infoUser();
            setDataInfoUser(response.results || []);
        } catch (error) {
            setErrorInfoUser(true);
            throw error; 
        } finally {
            setIsInfoUserLoading(false);
        }
    }, []);

    return { dataInfoUser, isInfoUserLoading, errorInfoUser, getInfoUser };
}