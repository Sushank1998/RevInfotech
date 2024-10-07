import heroImg from '../assets/mainImg.png';

function HeroSection() {
  return (
    <div 
      className="relative flex items-end justify-start px-10 w-full h-[450px] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <h1 className='text-8xl font-bold text-white bg-opacity-75 '>
        Our Menu
      </h1>
    </div>
  );
}

export default HeroSection;
