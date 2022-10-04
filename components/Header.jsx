import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

export default function Header() {
	return (
		<>
			<Head>
				<title>Luxury Real Estate</title>
				<meta name='description' content='Sharon Dallalio Reality' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='navbar'>
				<div className='logo'>Logo</div>
				<ul>
					<li className='navItem'>
						<a href='#'>View Properties</a>
					</li>
					<li className='navItem'>
						<a href='#'>Buyers</a>
					</li>
					<li className='navItem'>
						<a href='#'>Sellers</a>
					</li>
					<li className='navItem'>
						<a href='#'>About</a>
					</li>
				</ul>
				<div className='contactBtn'>
					<a href='#'>Contact Us</a>
				</div>
				<button className='toggleBtn'>
					<FontAwesomeIcon icon={faAlignJustify} />
				</button>
			</div>
		</>
	);
}
