import Image from 'next/image';
import Nav from './components/Navigation/Nav';
import Cardboard from '../public/images/bg/cardboard.jpg';
import Holup from './Holup';

export default function Home() {
  const beingDeveloped = true;

  return (
    <>
      <div style={{
        backgroundImage: `url(${Cardboard.src})`,
        minHeight: '100vh', 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '50px',
        
      }}>
        {beingDeveloped ?
          <>
 
            <Holup />
          </>
          :
          <Nav/>
          
        }
      </div>
    </>
  );
}
