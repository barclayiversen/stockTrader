import stocks from '../../data/stocks';

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS' (state) {
        //Interesting thing to note, generally prices 
        //will tank and never recover after a while. 
        //I added the first if check and reduced the 
        //subtraction to ease this. 
        state.stocks.forEach(stock => {
            if (stock.price == 1) {
                stock.price = 2;
            };
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.45))
        });
    }
};

const actions = {
    buyStock: ({ commit }, order) => {
        console.log('in action', order)
        commit('BUY_STOCK', order);
    },
    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocks)
    },
    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS');
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};