import PropTypes from "prop-types";

const DisplayError = ({ error }) => {
	if (!error || !error.message) return null;
	if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
		return (
			<>
				{error.networkError.result.errors.map(({message, status}) => (
					<div 
						key={new Date().getTime() + Math.floor(Math.random() * Math.floor(999))}
						className="p-8 bg-white my-8 mx-0 shadow-sm border-l-4 border-red-500 break-normal whitespace-wrap max-w-3xl"
					>
						<p className="m-0 grid grid-cols-2" style={{ gridTemplateColumns: "auto 1fr"}} data-test="graphql-error">
							<strong className="mr-4 block">Error: </strong>
							{message.replace("GraphQL error: ", "")}
						</p>
						{status && (
							<p className="m-0 grid grid-cols-2" style={{ gridTemplateColumns: "auto 1fr"}} data-test="graphql-error">
								<strong className="mr-4 block">Status: </strong>
								{message.replace("GraphQL error: ", "")}
							</p>
						)}
					</div>
				))}
			</>
		);

	}
	return (
		<div
            key={new Date().getTime() + Math.floor(Math.random() * Math.floor(999))}
            className="p-8 bg-white my-8 mx-0 shadow-sm border-l-4 border-red-500 break-normal whitespace-wrap max-w-3xl"
        >
			<p className="m-0 grid grid-cols-2" style={{ gridTemplateColumns: "5rem 1fr"}} data-test="graphql-error">
				<strong className="mr-4 block">Error: </strong>
				{error.message.replace("GraphQL error: ", "")}
			</p>
			{error.status && (
				<p className="m-0 grid grid-cols-2" style={{ gridTemplateColumns: "5rem 1fr"}} data-test="graphql-error">
					<strong className="mr-4 block">Status: </strong>
					{error.status}
				</p>
			)}
		</div>
	);
};

DisplayError.defaultProps = {
	error: {},
};

DisplayError.propTypes = {
	error: PropTypes.object,
};

export default DisplayError;
