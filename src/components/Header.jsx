import '../App.css'
import Button from './Button';
export default function Header() {
  return (
    <header className="header">
        <div className="hero-section">
            <div className="hero-content">
                <h1>Hello, I’m ✌️<br/>Mariam Bakenne</h1>
                <p>Data Scientist | Web Developer</p>
                <div className="hero-buttons">
                    <Button background="bg-gray-800" content="Let's Talk" hover="hover:bg-transparent hover:text-gray-800" textColor="text-white"/>
                    <Button background="bg-transparent" content="My Work" hover="hover:bg-gray-800 hover:text-white" textColor="text-gray-800"/>
                </div>
            </div>
            <img src="/header-img.png" alt="Mark Henry" className="hero-image" />
            <div className="diagonal-background"></div>
        </div>
    </header>
  );
}