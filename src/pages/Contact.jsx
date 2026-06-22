import Header from "../components/Header"
import Footer from "../components/Footer";
import PhotoContact from "../assets/PhotoContact.jpg";
export default function Contact() {
    return (
        <div>
            <Header />
            <div className="bg-secondary-300 w-full h-screen flex flex-col md:flex-row items-center justify-center gap-70 py-20 px-4">
                <div className="">
                    <img src={PhotoContact} alt="Photo de profil" className="w-96 h-96 object-cover rounded-full" />
                </div>
                
                <div>
                    <h1 className="text-xl font-semibold mb-2">Un projet ? Contactez-moi !</h1>
                    <p className="text-black">Je serais ravi d'échanger avec vous sur votre projet d’aménagement ou de construction. <br />N'hésitez pas à me contacter pour toute interrogation ou demande de rendez-vous.</p>
                    <div className="flex space-between flex-wrap justify-starrt mt-6 gap-10">
                        <div>
                            <h2>Zone d'intervention</h2>
                            <p>Ile-de-France et Départements Limitrophes</p>
                        </div>
                        <div>
                            <h2>Horaire</h2>
                            <p>Lundi - Vendredi : 9h - 18h</p>
                        </div>
                        
                    </div>
                    <div className="mt-4">
                        <button className="bg-secondary-700 hover:bg-secondary-800 focus: text-white font-bold py-2 px-4 rounded">
                                Par téléphone
                        </button>
                        <button className="bg-secondary-400 hover:bg-secondary-500 text-white font-bold py-2 px-4 rounded ml-4">
                                Par email
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}