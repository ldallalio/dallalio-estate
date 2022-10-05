import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faStar } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

function ReviewsSection() {
	let reviews = [
		{
			text: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
			name: "Kelley Smith",
			id: 1,
		},
		{
			text: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
			name: "Josh Smith",
			id: 2,
		},
		{
			text: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
			name: "Bill Jones",
			id: 3,
		},
	];

	return (
		<div className='reviews'>
			{reviews.map((review) => {
				return (
					<div key={review.id} className='reviewItem'>
						<div className='reviewStar'>
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
						</div>
						<p className='reviewText'>{review.text}</p>
						<p className='reviewName'>{review.name}</p>
					</div>
				);
			})}
		</div>
	);
}

export default ReviewsSection;
