import React from 'react';

interface IProps {
	error: string
}

export function ErrorMessage({error}: IProps) {
	return (
		<p className="text-center text-red-600">{error}</p>
	);
}
