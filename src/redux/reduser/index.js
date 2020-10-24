const initialState = {
    shoes: [
        {
            title: 'Офисная одежда',
            sort_1: 'Брюки',
            sort_2: 'Верхняя одежда',
            sort_3: 'Джемперы',
            id: 'shoes_01',
            img: './img/shoes.png'
        },
        {
            title: 'Офисная одежда',
            sort_1: 'Брюки',
            sort_2: 'Верхняя одежда',
            sort_3: 'Джемперы',
            id: 'shoes_02',
            img: './img/shoes.png'
        },
        {
            title: 'Офисная одежда',
            sort_1: 'Брюки',
            sort_2: 'Верхняя одежда',
            sort_3: 'Джемперы',
            id: 'shoes_03',
            img: './img/shoes.png'
        },
        {
            title: 'Офисная одежда',
            sort_1: 'Брюки',
            sort_2: 'Верхняя одежда',
            sort_3: 'Джемперы',
            id: 'shoes_04',
            img: './img/shoes.png'
        },
        {
            title: 'Офисная одежда',
            sort_1: 'Брюки',
            sort_2: 'Верхняя одежда',
            sort_3: 'Джемперы',
            id: 'shoes_05',
            img: './img/shoes.png'
        }
    ],

    outerwear:[
        {
            title: 'Рубашка',
            delivery: 'Сроки доставки /',
            deliveryDay: '2 дня',
            price: '2 400 тг',
            count: 0,
            id: 'outerwear_01',
            img: './img/out.png'
        },
        {
            img: './img/out.png',
            title: 'Рубашка',
            delivery: 'Сроки доставки /',
            deliveryDay: '2 дня',
            price: '2 500 тг',
            count: 0,
            id: 'outerwear_02'
        },
        {
            img: './img/out.png',
            title: 'Рубашка',
            delivery: 'Сроки доставки /',
            deliveryDay: '2 дня',
            price: '2 300 тг',
            count: 0,
            id: 'outerwear_03'
        },
        {
            img: './img/out.png',
            title: 'Рубашка',
            delivery: 'Сроки доставки /',
            deliveryDay: '2 дня',
            price: '2 200 тг',
            count: 0,
            id: 'outerwear_04'
        },
        {
            img: './img/out.png',
            title: 'Рубашка',
            delivery: 'Сроки доставки /',
            deliveryDay: '2 дня',
            price: '2 000 тг',
            count: 0,
            id: 'outerwear_05'
        }
    ],

    userPay:[],
    payCountID: 0
}

const reduser = ( state = initialState, action ) => {
    switch(action.type){
            case "COUNT_ITEM_PLUS":
                const idPlus = action.payload;
                const indexPlus = state.outerwear.findIndex(item => item.id === idPlus)
                const oldPlus = state.outerwear[indexPlus]
                const itemPlus = {...oldPlus, count: oldPlus.count+1}
                const newPay = {...oldPlus, payCountID: state.payCountID++}
                return{
                    ...state,
                    outerwear:[
                        ...state.outerwear.slice(0, indexPlus),
                        itemPlus,
                        ...state.outerwear.slice(indexPlus + 1)
                    ],
                    userPay:[
                        ...state.userPay,
                        newPay
                    ]
                }

            case "COUNT_ITEM_MINUS":
                const idMinus = action.payload;
                const indexMinus = state.outerwear.findIndex(item => item.id === idMinus)
                const oldMinus = state.outerwear[indexMinus]
                const itemMinus = {...oldMinus, count: oldMinus.count - 1}
                return{
                    ...state,
                    outerwear:[
                        ...state.outerwear.slice(0, indexMinus),
                        itemMinus,
                        ...state.outerwear.slice(indexMinus + 1)
                    ],
                    userPay:[
                        ...state.userPay.slice(0, indexMinus),
                        ...state.userPay.slice(indexMinus + 1)
                    ]                   

                }

            default:
                return state
    }
}

export default reduser