import { SETZLD, SETZLW, SETZL, SETTLD, SETTLW, SETTL, SETTOPMENU, SETSECONDMENU, SETCRD, SETRULE, SETWAIT, SETUSER } from '../constants'

const initialState = {
	zhuboListDay: [],
	zhuboListWeek: [],
	zhuboList: [],
	tuhaoListDay: [],
	tuhaoListWeek: [],
	tuhaoList: [],
	topMenuState: 1,
	secondMenuState: 1,
	ruleShow: 0,
	curRankData: [],
	waitingState: 0,
	userData: [],
}

export default function update(state = initialState, action) {
	switch(action.type){
		case SETUSER:
			return {
				...state,
				userData: action.data
			}
		break;	
		case SETWAIT:
			return {
				...state,
				waitingState: action.data
			}
		break;	
		case SETRULE:
			return {
				...state,
				ruleShow: action.data
			}
		break;	
		case SETZLD:
			return {
				...state,
				zhuboListDay : action.data
			}
		break;
		case SETZLW:
			return {
				...state,
				zhuboListWeek : action.data
			}
		break;
		case SETZL:
			return {
				...state,
				zhuboList : action.data
			}
		break;
		case SETTLD:
			return {
				...state,
				tuhaoListDay : action.data
			}
		break;
		case SETTLW:
			return {
				...state,
				tuhaoListWeek : action.data
			}
		break;
		case SETTL:
			return {
				...state,
				tuhaoList : action.data
			}
		break;
		case SETTOPMENU:
			return {
				...state,
				topMenuState : action.data
			}
		case SETSECONDMENU:
			return {
				...state,
				secondMenuState : action.data
			}
		case SETCRD:
			return {
				...state,
				curRankData : action.data
			}		
		default:
			return state;
	}
}