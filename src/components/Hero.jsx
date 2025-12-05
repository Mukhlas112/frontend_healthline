import './Hero.css';

const Hero = ({ title, subtitle }) => {
  return (
    <header className="hero">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
};

export default Hero;
