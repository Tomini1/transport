function transportation (transport, pday, km){
    let taxi_price = 0;
    let train_price = 0;
    let bus_price = 0;
    //let day_rate_perkm = 0.79;
    //let night_rate_perkm = 0.80;
    //let day_night_rate_perkm = 0.09;
    //let day_nightt_rate_perkm = 0.06;

    

    if (typeof transport!== 'string'){
        console.log('Please enter a valid string for vehicle')
        return false;
    }
    if (typeof pday!== 'string'){
        console.log('Please enter a valid string for time')
        return false;
    }
    if (isNaN(km)){
        console.log('please enter a valid number for km')
        return false;
    }
    let time = ['day', 'night']
    let vehicle = ['Taxi', 'Bus', 'Train']

    if (!vehicle.includes(transport)) {
        console.log('Please enter a valid vehicle')
        return false;
    }
    if (!time.includes(pday)){
        console.log('Please enter a valid time')
        return false;
    }

    if (transport === 'Taxi'){
        start_rate = 0.70;
        day_rate_perkm = 0.79;
        night_rate_perkm = 0.90;

        if (pday === 'day'){
            taxi_price = (start_rate + (km * day_rate_perkm))
        }else if(pday === 'night'){
            taxi_price = (start_rate + (km * night_rate_perkm))
        }
    }
    else if (transport === 'Bus'){
        day_rate_perkm = 0.09;
        night_rate_perkm = 0.09;
        
        if( km >= 20){ 
            bus_price = (km * day_rate_perkm)
        }else{
            bus_price = Infinity
        }
    }
    else if (transport === 'Train'){
        day_rate_perkm = 0.06;
        night_rate_perkm =0.06;
        if (km>=100){
            train_price = (km * night_rate_perkm)
        }else {
            train_price = Infinity
        }//else if (train_price < cheapest_price){
       //     cheapest_price = train_price
        //}
    }

    console.log(`Taxi price: ${taxi_price}EUR`)
    console.log(`Bus price: ${bus_price}EUR`)
    console.log(`Train price: ${train_price}EUR`)

    let cheapest_price = Math.min(taxi_price, bus_price, train_price)
    if (cheapest_price === taxi_price){
        console.log(`Taxi is the Cheapest price for ${km}km during ${pday} is ${cheapest_price.toFixed(2)}EUR`)
    }else if (cheapest_price === bus_price){
        console.log(`Bus is the Cheapest price for ${km}km during ${pday} is ${cheapest_price.toFixed(2)}EUR`)
    }else{
        console.log(`Train is the Cheapest price for ${km}km during ${pday}  is ${cheapest_price.toFixed(2)}EUR`)
    }
  
}


