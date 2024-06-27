import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Drawer, Box, ListItemText, ListItem, List, Switch, FormControlLabel, Collapse, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Title } from '@/components/atoms/text/Title'
import { TextButton } from '@/components/atoms/button/TextButton'
import { IconButton } from '@/components/atoms/button/IconButton'

interface NavBarProps {
	toggleTheme: () => void
	isDarkTheme: boolean
}

const menuData = [
	{ label: 'Home', path: '/' },
	{ label: 'About', path: '/about' },
	{
		label: 'Services',
		submenu: [
			{ label: 'Web Development', path: '/services/web-development' },
			{ label: 'Mobile Development', path: '/services/mobile-development' },
		],
	},
	{
		label: 'Ola',
		submenu: [
			{ label: 'Web ola', path: '/ola/web-development' },
			{ label: 'Mobile ola', path: '/ola/mobile-ola' },
		],
	},
	{ label: 'Contact', path: '/contact' },
]

export const NavBar: React.FC<NavBarProps> = ({ toggleTheme, isDarkTheme }) => {
	//? Drawer handler state
	const [drawerOpen, setDrawerOpen] = useState(false)
	//? Page title handler state
	const [pageTitle, setPageTitle] = useState('Home')
	//? Submenu handler state
	const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
	const [submenuAnchorEls, setSubmenuAnchorEls] = useState<{
		[key: string]: HTMLElement | null
	}>({})
	//? Menu handler fn
	const handleDrawerToggle = () => {
		setDrawerOpen(!drawerOpen)
		setOpenSubmenu(null)
	}
	//? Menu & submenu handler fn
	const handleMenuOpen = (submenu: string, event: React.MouseEvent<HTMLElement>) => {
		setSubmenuAnchorEls((prevState) => ({
			...prevState,
			[submenu]: event.currentTarget,
		}))
	}
	const handleMenuClose = (submenu: string) => {
		setSubmenuAnchorEls((prevState) => ({ ...prevState, [submenu]: null }))
	}
	const handleSubmenuToggle = (submenu: string) => {
		setOpenSubmenu(openSubmenu === submenu ? null : submenu)
	}
	const handleNavigation = (path: string) => {
		window.location.href = path
		setDrawerOpen(false)
		setOpenSubmenu(null)
	}
	//? Page title handler fn
	useEffect(() => {
		const routeToTitleMap: { [key: string]: string } = {
			'/': 'Home',
			'/about': 'About Us',
			'/contact': 'Contact Us',
			'/services/web-development': 'Web Development',
			'/services/mobile-development': 'Mobile Development',
			'/ola/web-development': 'Web ola',
			'/ola/mobile-ola': 'Mobile ola',
		}

		const currentPath = window.location.pathname
		const title = routeToTitleMap[currentPath] || 'Page'
		setPageTitle(title)

		const handleRouteChange = () => {
			const newTitle = routeToTitleMap[window.location.pathname] || 'Page'
			setPageTitle(newTitle)
		}

		window.addEventListener('popstate', handleRouteChange)
		return () => window.removeEventListener('popstate', handleRouteChange)
	}, [])
	//* Rendering menu items ____________________________________________________________________________________________//
	const renderMenuItems = () =>
		menuData.map((item) => {
			if (item.submenu) {
				return (
					<React.Fragment key={item.label}>
						<TextButton
							label={item.label}
							color='inherit'
							onClick={(e) => handleMenuOpen(item.label, e)}
							aria-controls={`${item.label}-menu`}
							aria-haspopup='true'
							endIcon={submenuAnchorEls[item.label] ? <ExpandLess /> : <ExpandMore />}
						/>
						<Menu
							sx={{ marginTop: 0.8, marginLeft: -1 }}
							id={`${item.label}-menu`}
							anchorEl={submenuAnchorEls[item.label]}
							open={Boolean(submenuAnchorEls[item.label])}
							onClose={() => handleMenuClose(item.label)}
							keepMounted
							anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
							transformOrigin={{ vertical: 'top', horizontal: 'right' }}
						>
							{item.submenu.map((subitem) => (
								<MenuItem key={subitem.label} onClick={() => handleNavigation(subitem.path)}>
									{subitem.label}
								</MenuItem>
							))}
						</Menu>
					</React.Fragment>
				)
			}
			return <TextButton key={item.label} label={item.label} color='inherit' onClick={() => handleNavigation(item.path)} />
		})

	//* Drawer___________________________________________________________________________________________________________//
	const renderDrawerItems = () =>
		menuData.map((item) => (
			<React.Fragment key={item.label}>
				<ListItem onClick={item.submenu ? () => handleSubmenuToggle(item.label) : () => handleNavigation(item.path)}>
					<ListItemText primary={item.label} />
					{item.submenu ? openSubmenu === item.label ? <ExpandLess /> : <ExpandMore /> : null}
				</ListItem>
				{item.submenu && (
					<Collapse in={openSubmenu === item.label} timeout='auto' unmountOnExit>
						<List component='div' disablePadding>
							{item.submenu.map((subitem) => (
								<ListItem key={subitem.label} onClick={() => handleNavigation(subitem.path)}>
									<ListItemText primary={subitem.label} />
								</ListItem>
							))}
						</List>
					</Collapse>
				)}
			</React.Fragment>
		))
	//* Main component___________________________________________________________________________________________________//
	return (
		<>
			<AppBar position='static'>
				<Toolbar sx={{ justifyContent: 'space-between' }}>
					<Title text={'gymrat - ' + pageTitle} type='h6' />
					<Box sx={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row-reverse'}}>
						<FormControlLabel control={<Switch checked={isDarkTheme} onChange={toggleTheme} />} label={isDarkTheme ? 'Dark' : 'Light'} />
						<Box sx={{ display: { xs: 'none', md: 'block' } }}>{renderMenuItems()}</Box>
					</Box>
				</Toolbar>
			</AppBar>
			<IconButton
				icon={<MenuIcon sx={{ fontSize: '1.5em' }} />}
				styles={{
					position: 'absolute',
					display: { xs: 'flex,', md: 'none' },
					right: '1.2em',
					bottom: '0.8em',
				}}
				onClick={handleDrawerToggle}
			/>
			<Drawer anchor='left' open={drawerOpen} onClose={handleDrawerToggle} sx={{ display: { xs: 'block', md: 'none' } }}>
				<Box sx={{ width: 250 }} role='presentation'>
					<List sx={{':hover': {cursor: 'pointer'}}}>{renderDrawerItems()}</List>
				</Box>
			</Drawer>
		</>
	)
}
