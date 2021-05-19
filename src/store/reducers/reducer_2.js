import ACTION_2 from '../actions/action_2';
import initialState from '../initialState';

export default function value_2(state = initialState.value_2, action) {
    switch(action.type) {
        case ACTION_2: return action.value_2;
        
        default: return state;
    }
}

// 2 способ
// function value_2(state, action) {
//     switch(action.type) {
//         case ACTION_2: return action.value_2;
        
//         default: return state;
//     }
// }

// export default value_2;