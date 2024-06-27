import React from 'react'
import Link from 'next/link'
import { Grid } from '@mui/material'
import { Title } from '@/components/atoms/text/Title'
import { Subtitle } from '@/components/atoms/text/Subtitle'

interface SectionProps {
	title: string
	subtitle?: string
	href: string
	color?: 'white' | 'black'
	backgroundColor: string
}

const Section: React.FC<SectionProps> = (props) => {
	const { title, subtitle, href, color = 'white', backgroundColor } = props

	return (
		<Grid
			item
      xs={12}
      sm={6}
      md
			lg={4 <= 3 ? 12 : 3}
			sx={{
				minHeight: '8em',
				bgcolor: backgroundColor,
        transition: '0.3s ease-in-out',
        ':hover': {filter: 'brightness(50%)'}
			}}
		>
			<Link
				href={href}
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					textDecoration: 'none',
					color: color,
				}}
			>
				<Title text={title} type='h5' align='center'/>
				{subtitle && <Subtitle text={subtitle} type='subtitle1'align='center'/>}
			</Link>
		</Grid>
	)
}

interface SectionData {
	title: string
	subtitle?: string
	href: string
	backgroundColor: string
}

interface SectionsPanelProps {
	sections: SectionData[]
}

export const SectionsPanel: React.FC<SectionsPanelProps> = ({ sections }) => {
	return (
		<Grid container sx={{display: 'flex', justifyContent: 'center'}}>
			{sections.map((section, idx) => (
				<Section key={idx} title={section.title} subtitle={section.subtitle} href={section.href} backgroundColor={section.backgroundColor} />
			))}
		</Grid>
	)
}
