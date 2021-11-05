function result(destination, sort){
    let array = []
    for(let index of destination){
        let [town, price, status] = index.split('|')
        class Tickets{
            constructor(town, price, status){
                this.destination = town
                this.price = Number(price)
                this.status = status
            }
        }
        let adventure = new Tickets(town, price, status)
        array.push(adventure)
    }
    let sorttedArray = []
    if(sort == "destination"){
        sorttedArray = array.sort((a,b)=> a.destination.localeCompare(b.destination))
    }else if(sort == "price"){
        sorttedArray = array.sort((a,b)=> a.price - b.price)
    }else{
        sorttedArray = array.sort((a,b)=> a.status.localeCompare(b.status))
    }
    return sorttedArray
}

console.log(result(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'));