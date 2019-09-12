let initState = {
    totalNum: 0
}

export const CartReducer = (state = initState, action) => {
    switch (action.type) {
        // 同步购物车数据
        case 'SYNC_CART_GOODS':
            var {cart_Infos, totalPrice, selectedGoodsTotalNum} = action.payload
            var totalNum = 0;
            // 通过循环遍历获取购物车商品总量
            for (var goods_id in cart_Infos) {
                totalNum += cart_Infos[goods_id].amount
            }
            // 返回新的数据
            return {...state, totalNum, cart_Infos, totalPrice, selectedGoodsTotalNum}
        case 'ADD_CART':
            state.totalNum += 1
            return {...state}
        // 点击结算时保存购物车数据
        case 'BUY_NOW':
            return {...state, ...action.payload}
        case 'CLEAR': 
            return {}
            default:
            // 返回默认数据
            return state
    }
    
}