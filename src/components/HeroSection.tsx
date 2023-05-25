import heroImg from '../assets/illustration-intro.svg';

const HeroSection = () => {
    return <section id="container">
        <div className="flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
            {/*Left item */}
            <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                    Bring everyone together to build Better Product
                </h1>
                <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta porro magni cumque architecto nam!
                    Iusto, autem a. Voluptate molestiae in cumque earum similique recusandae fugit debitis reprehenderit
                    saepe ratione blanditiis totam quia libero, nulla odio unde.
                </p>
                <div className="flex justify-center md:justify-start">
                    <a href="#"
                        className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
                        Get Started
                    </a>
                </div>
            </div>
            {/*Image*/}
            <img src={heroImg} className='md:w-1/2' />
        </div>
    </section>
}

export default HeroSection
