import {combineReducers} from 'redux';
import uniformReducer from '../components/Uniform/reducer';



export default combineReducers({
  uniforms: uniformReducer,
})
