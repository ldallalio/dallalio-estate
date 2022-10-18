import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'; // import the icons you need
import Logo from '../assests/images/logo.png';

export default function Header() {
  const toggleBtn = () => {
    const nav = document.querySelector('.navbar');

    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
    } else {
      nav.classList.add('active');
    }
  };
  return (
    <>
      <Head>
        <title>Luxury Real Estate</title>
        <meta name="description" content="Sharon Dallalio Reality" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="navbar ">
        <div className="logo">
          <Image src={Logo} />
        </div>
        <button className="toggleBtn" onClick={toggleBtn}>
          <FontAwesomeIcon icon={faAlignJustify} />
        </button>
        <ul>
          <li className="navItem">
            <a href="#">About Sharon</a>
          </li>
          <li className="navItem">
            <a href="#">Bio </a>
          </li>
          <li className="navItem">
            <a href="#">Home Search</a>
          </li>
          <li className="navItem">
            <a href="#">Blogs</a>
          </li>
        </ul>
        <div className="contactBtn">
          <a href="#">Contact</a>
        </div>
      </div>
    </>
  );
}
