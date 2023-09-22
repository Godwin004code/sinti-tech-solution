
import Logo from "../../public/sinti-logo-zip-file/png/logo-no-background.png";

export default function Footer() {
    return (
        <footer className="flex justify-between w-[80%] mx-auto sm:w-[95%] sm:flex-col sm:justify-center sm:text-center sm:items-center">
            <section className="sm:mb-7">
                <img src={Logo.src} alt="footer logo" className='w-[200px]  h-[40px]' />
            </section>
            <section className="my-auto">
                <p className="text-base text-white font-normal">© 2023 SinTi, All Rights Reserved</p>
            </section>
        </footer>
    )
}