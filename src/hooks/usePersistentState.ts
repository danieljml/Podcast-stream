import { useState, useEffect } from 'react';
import { getObject, setObject } from '../persistency';

export const usePersistentState = (key: string, value: any): any => {
	const [state, setState] = useState(getObject(key, value))
	useEffect(() => { setObject(key, state, value) }, [state])
	return [ state, setState ];
}
