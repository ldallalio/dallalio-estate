import { useForm, ValidationError } from "@formspree/react";
export default function ContactForm() {
	const [state, handleSubmit] = useForm("xknebqyo");
	if (state.succeeded) {
		return <p>Thanks for joining!</p>;
	}
	return (
		<>
			<form onSubmit={handleSubmit} className='contactForm'>
				<h2>Questions? I`m Here For You!</h2>
				<label htmlFor='email'>Email Address</label>
				<input id='email' type='email' name='email' />
				<ValidationError prefix='Email' field='email' errors={state.errors} />
				<label htmlFor='phone'>Phone Number</label>
				<input id='phone' type='phone' name='phone' />
				<ValidationError prefix='Phone' field='phone' errors={state.errors} />
				<label htmlFor='message'>Message</label>
				<textarea id='message' name='message' />
				<ValidationError
					prefix='Message'
					field='message'
					errors={state.errors}
				/>
				<button type='submit' disabled={state.submitting}>
					Submit
				</button>
			</form>
		</>
	);
}
