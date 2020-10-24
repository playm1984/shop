const countItemPlus = (id) => {
    return{
        type: "COUNT_ITEM_PLUS",
        payload: id
    }  
}

const countItemMinus = (id) => {
    return{
        type: "COUNT_ITEM_MINUS",
        payload: id
    }  
}

const addOuterWearPay = (id) => {
    return{
        type: "ADD_OUTERWEAR_PAY",
        payload: id
    }
}

export { countItemPlus, countItemMinus, addOuterWearPay }