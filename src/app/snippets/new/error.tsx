'use client';

interface IErrorPageProps {
	error: Error;
	reset: () => void;
}

export default function ErrorPage({ error, reset }: IErrorPageProps) {
	return (
		<div>
			<h1>Some Error Occurred</h1>
			<p>{error.message}</p>
		</div>
	);
}
