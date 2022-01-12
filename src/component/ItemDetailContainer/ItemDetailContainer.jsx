import { useEffect } from "react";
import { getFetch } from "../../../helpers/mock";
import { useState } from "react";

const ItemDetailContainer = () => {
    const [artistas, setartistas] = useState({})

    useEffect(() =>{
        getFetch
        .then(resp => setartistas(resp.find(artist => artist.id === '1')))
    },[])

    console.dir(artistas)


    return (
        <div>
            ItemDetail
        </div>
    )
    }

    export default ItemDetailContainer