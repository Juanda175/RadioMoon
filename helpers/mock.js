const artistas = [
    { id: '1', foto:'https://res.cloudinary.com/dg1gab3uj/image/upload/v1641944720/app%20radio/imagenes/soda_l8dgqr.png'},
    { id: '2', foto:'https://res.cloudinary.com/dg1gab3uj/image/upload/v1641944720/app%20radio/imagenes/queen_ukzqzn.png'},
    { id: '3', foto:'https://res.cloudinary.com/dg1gab3uj/image/upload/v1641944720/app%20radio/imagenes/80_shuhg0.png'},
    { id: '4', foto:'https://res.cloudinary.com/dg1gab3uj/image/upload/v1641944720/app%20radio/imagenes/pink_floyd_tvhd1t.png'},
    { id: '5', foto:'https://res.cloudinary.com/dg1gab3uj/image/upload/v1641944720/app%20radio/imagenes/rolling_smuide.png'},
    { id: '6', foto:'https://res.cloudinary.com/dg1gab3uj/image/upload/v1641944720/app%20radio/imagenes/mana_iude5w.png'},
    { id: '7', foto:'https://res.cloudinary.com/dg1gab3uj/image/upload/v1641944720/app%20radio/imagenes/el_indio_gpqooj.png'},
    { id: '8', foto:'https://res.cloudinary.com/dg1gab3uj/image/upload/v1641944719/app%20radio/imagenes/phil_collins_xarsdj.png'}
];

export const getFetch = new Promise((resolve, reject)=>{

    let condicion = true
    if(condicion){
        setTimeout(()=>{
            resolve(artistas)

        }, 2000)
    }else{
        reject('errer')
    }
})