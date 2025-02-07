
import NavBar from "../navBar/NavBar"

export default function Header() {
    return (

        <header className="bg-purple-700 py-6 px-8 md:px-15 lg:px-20">
            <div className="text-white font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight flex-1 text-left">
                <span className="mr-2">DoggyStyle</span>

                <NavBar />
            </div>
        </header>
    )
}