import type {Metadata} from 'next'
import styles from './page.module.scss'

export const metadata: Metadata = {
	title: 'Pricing | Next app',
	description: 'Choose a plan that fits your needs',
}

const plans = [
	{
		name: 'Free',
		price: 0,
		currency: '$',
		period: 'month',
		description: 'Perfect for getting started',
		features: ['1 project', '5 GB storage', 'Community support', 'Basic analytics'],
		highlighted: false,
	},
	{
		name: 'Pro',
		price: 19,
		currency: '$',
		period: 'month',
		description: 'For professionals and small teams',
		features: ['10 projects', '50 GB storage', 'Priority support', 'Advanced analytics', 'Custom domain'],
		highlighted: true,
	},
	{
		name: 'Enterprise',
		price: 99,
		currency: '$',
		period: 'month',
		description: 'For large teams and organizations',
		features: [
			'Unlimited projects',
			'500 GB storage',
			'24/7 dedicated support',
			'Full analytics suite',
			'Custom domain',
			'SSO & advanced security',
		],
		highlighted: false,
	},
]

export default function Pricing() {
	return (
		<div className={styles.pricing}>
			<div className="container">
				<h1 className={styles.pricing__title}>Pricing</h1>
				<p className={styles.pricing__subtitle}>Choose a plan that fits your needs</p>
				<ul className={styles.pricing__list}>
					{plans.map((plan) => (
						<li
							key={plan.name}
							className={`${styles.card} ${plan.highlighted ? styles.card_highlighted : ''}`}
						>
							<h2 className={styles.card__name}>{plan.name}</h2>
							<p className={styles.card__description}>{plan.description}</p>
							<div className={styles.card__price}>
								<span className={styles.card__currency}>{plan.currency}</span>
								<span className={styles.card__amount}>{plan.price}</span>
								<span className={styles.card__period}>/ {plan.period}</span>
							</div>
							<ul className={styles.card__features}>
								{plan.features.map((feature) => (
									<li key={feature} className={styles.card__feature}>
										{feature}
									</li>
								))}
							</ul>
							<button
								className={`${styles.card__btn} ${plan.highlighted ? styles.card__btn_primary : ''}`}
								type="button"
							>
								Get started
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
