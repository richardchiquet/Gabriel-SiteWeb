import Header from "../components/Header"
import Footer from "../components/Footer";
import photoService1 from "../assets/PhotoService/PhotoBatimentCiel.png";




export default function Services() {
    return (
        <div>
            <Header />
            <div className="w-full h-full">
                <div className="w-full h-screen bg-white">
                
                    <img className=" object-[35%_50%]" src={photoService1} alt="Service 1" />
                    <div>
                        <h1 className="text-6xl mb-6 text-center">Services proposés</h1>
                    </div>
                </div>
                
            </div>
            <Footer />
        </div>
    )
}