import { useEffect } from "react";
import { useInfoUser } from "../hooks/useInfoUser";
import SpinnerComponent from "../components/SpinnerComponent.";
import CardComponent from './../components/CardComponent';



function Home(){
    const { getInfoUser, errorInfoUser, isInfoUserLoading, dataInfoUser } = useInfoUser();
    useEffect(() => {
        getInfoUser();

    }, [getInfoUser]);

    console.log("dataInfoUser", dataInfoUser);
    return(
        <>
            <h1 class="title">Listado de Usuarios</h1>
            {isInfoUserLoading && <SpinnerComponent/>}
            {errorInfoUser && <p>Error al traer la data</p>}
            {!isInfoUserLoading && !errorInfoUser && (
                <div class="card-component" >
                {dataInfoUser.map((user, index) => (
                    <div key={index} class="card">
                        <CardComponent key={index} data={user}/> 
                    </div>

                ))}
                </div>
            )}
            
            
        </>
    )
}
export default Home;