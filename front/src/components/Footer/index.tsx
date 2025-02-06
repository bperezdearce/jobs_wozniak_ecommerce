import Link from "next/link";

function Footer() {
    return (
        <footer className="flex flex-col gap-4 sm:flex-row sm:justify-between py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="font-garamondbold text-xl text-gray-800">&copy; 2024. Todos los derechos reservados.</p>
            <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link href="#" className="hover:underline underline-offset-4 font-garamondregular text-lg">Quienes Somos</Link>
                <Link href="#" className="hover:underline underline-offset-4 font-garamondregular text-lg">Contacto</Link>
                <Link href="#" className="hover:underline underline-offset-4 font-garamondregular text-lg">FAQ</Link>
                <Link href="#" className="hover:underline underline-offset-4 font-garamondregular text-lg">Términos y Condiciones</Link>
                <Link href="#" className="hover:underline underline-offset-4 font-garamondregular text-lg">Privacidad</Link>
                <Link href="#" className="hover:underline underline-offset-4 font-garamondregular text-lg">Cookies</Link>
                <Link href="https://www.instagram.com/barbarapda" className="hover:underline underline-offset-4 font-garamondregular text-lg">Instagram</Link>
                <Link href="https://www.youtube.com/@barbarapda_" className="hover:underline underline-offset-4 font-garamondregular text-lg">YouTube</Link>
            </nav>
        </footer>
    )
}

export default Footer;