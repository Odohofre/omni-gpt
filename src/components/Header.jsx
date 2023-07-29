import omniGpt from '../assets/logo.svg';
import MobileNavBar from './MobileNavBar';

export default function Header() {
  return (
    <header className="flex pt-2.5">
      <div className="bg-background">
        <a href="#">
          <img src={omniGpt} alt="omnigpt Logo" />
        </a>
      </div>

      <nav>
        {/* MOBILE NAVBAR */}
        <MobileNavBar />
      </nav>
    </header>
  );
}
