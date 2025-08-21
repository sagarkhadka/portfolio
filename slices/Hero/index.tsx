import { FC } from 'react'
import { Content } from '@prismicio/client'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import { PrismicNextLink } from '@prismicio/next'
import { Bounded } from '@/components/Bounded'

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
	return (
		<Bounded
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}>
			<div className='font-sans'>
				<PrismicRichText field={slice.primary.title} />
				<PrismicRichText field={slice.primary.copy} />
				{slice.primary.button.map((link) => (
					<PrismicNextLink
						key={link.key}
						field={link}
						className={link.variant}
					/>
				))}
			</div>
		</Bounded>
	)
}

export default Hero
