import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_WBqax2FWVpk_test_51IzInXBLT0ptijWf5U0epPOv4SILwCpUXCecqYLrSD5y1U7CVlAPL5aLMV3PdxGmVrLFE0NsF24rIqC0Rm8wXoXw00TpggOiwPzS9QlpJScO0pk_test_51IzInXBLT0ptijWf5U0epPOv4SILwCpUXCecqYLrSD5y1U7CVlAPL5aLMV3PdxGmVrLFE0NsF24rIqC0Rm8wXoXw00TpggOiwP7iuL';

	const onToken = (token) => {
		console.log(token);
		alert('Payment Succesful!');
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="X - STORE "
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
