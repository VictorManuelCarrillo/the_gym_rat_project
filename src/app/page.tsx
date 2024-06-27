'use client'
import { MainLayout as Layout } from '@/components/templates/layout'
import { Banner } from '@/components/molecules/surfaces/banner/Banner'
import { SectionsPanel } from '@/components/molecules/surfaces/paper/SectionsPanel' // Asegúrate de ajustar la ruta correctamente

// Datos de las secciones
const sectionsData = [
	{
		title: 'PLATAFORMA DE ENTRENAMIENTO',
		href: '/entrenamiento',
		backgroundColor: '#2e2e38',
	},
	{
		title: 'CURSOS ONLINE ESCUELA GYM VIRTUAL',
		href: '/escuela',
		subtitle:'ola',
		backgroundColor: '#d79c00',
	},
	{
		title: 'PROGRAMAS ACOMPAÑAMIENTO',
		href: '/acompañamientos',
		subtitle: 'sola',
		backgroundColor: '#ff0078',
	},
  
]

export default function Home() {
	return (
		<Layout>
			<Banner
				title='Nosotros somos GymRat'
				subtitle='Somos tu mejor opción para empezar a tener el cuerpo que siempre has deseado'
				imageUrl='/images/pages/home/image.png'
			/>
			<SectionsPanel sections={sectionsData} />
		</Layout>
	)
}
