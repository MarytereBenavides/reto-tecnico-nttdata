export const infoUser= async () =>{
    try{
        const response = await fetch('https://randomuser.me/api/?page=1&results=10&seed=abc');
        const data = await response.json();
        return data;
    }catch(error){
        console.log('Fetch Error', error);
        throw error; 
    }
}