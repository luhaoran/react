import store from './index'

//对外输出所有定义的actionType
export const NAME_CHANGE = 'changeName'
export const LIST_CHANGE = 'listChange'


//根据传来的type和value创建一个action并派遣发送到reducer中
export const actionCreator = (type,value) => {
    const action = {
        type,
        value
    }
    store.dispatch(action)
}