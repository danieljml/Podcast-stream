import { useReducer, useEffect } from 'react';
import { getObject, setObject } from '../persistency';

const identity = (x: any) => x;

export const usePersistentReducer = (reducer: any, key: string, initialValue: any, initializer: any = null): any => {
	const [state, dispatch] = useReducer(reducer, getObject(key, initialValue), initializer ? initializer: identity)
	useEffect(() => { setObject(key, state, initialValue) }, [state])
	return [ state, dispatch ];
}
