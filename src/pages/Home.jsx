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
        <section className="users-section">
            <h1 class="title">Listado de Usuarios</h1>
            {isInfoUserLoading && <SpinnerComponent/>}
            {errorInfoUser && <p className="error-message">Error al traer la data</p>}
            {!isInfoUserLoading && !errorInfoUser && (
                <div className="card-list" >
                {dataInfoUser.map((user, index) => (
                    <div key={index} >
                        <CardComponent key={index} data={user} className="card-wrapper"/> 
                    </div>

                ))}
                </div>
            )}
            
            
        </section>
    )
}
export default Home;