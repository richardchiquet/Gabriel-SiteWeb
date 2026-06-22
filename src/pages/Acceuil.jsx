import Header from "../components/Header";
import Footer from "../components/Footer";
import mat1 from "../assets/mat1.jpg";
import mat2 from "../assets/mat2.jpg";
import mat3 from "../assets/mat3.jpg";
import BG1 from "../assets/BG1.png";
import ServicesAcc from "../components/ServicesAcc";
import { Link } from "react-router-dom";
import projet1 from "../assets/PhotoProjets/alex-wongx.png";
import projet2 from "../assets/PhotoProjets/danist-soh.png";
import projet3 from "../assets/PhotoProjets/micro-habitat.png";


export default function AcceuilPage() {
    return (
        <div>
            <Header />
             <div className=" w-full h-full ">
                        {/* Section d'accueil */}
                        <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{backgroundImage: `url(${BG1})`}}>
                            <h1 className=" text-white text-7xl">Gabriel Santos</h1>
                            <br />
                            <p className="text-white text-3xl text-center text">Architect HMONP <br />Créateur d'espace sains et fonctionnels </p>
                            <br />
                            <div className="px-5 py-2 space-x-5">
                                <Link to="/contact" className="btn btn-accent bg-primary-700 hover:bg-primary-500 text-white font-bold py-2 px-4 rounded">Contactez-moi</Link>
                                <Link to="/projets" className="btn btn-secondary bg-primary-400 hover:bg-primary-200 hover:text-black text-white font-bold py-2 px-4 rounded">Voir mes projets</Link>
                            </div>
                        </div>

                        {/* Section de Matériaux */}
                        <div className=" bg-white flex items-center justify-center h-screen ">
                            <div className="px-5 my-5 space-x-5 items-center justify-center">
                                <h2 className="text-3xl text-center ">Une approche par les matériaux</h2>
                                <img className="my-5 w-150  h-20 max-md:hidden" src={mat1} alt="Matériau 1" />
                                <img className="my-5 w-150  h-20 max-md:hidden" src={mat2} alt="Matériau 2" />
                                <img className="my-5 w-150  h-20 max-md:hidden" src={mat3} alt="Matériau 3" />
                            </div>
                            <div className="py-5 px-5">
                                <br />
                                <p className="text-lg">
                                    Je conçois des espaces sains et fonctionnels adaptés <br /> aux usagers, que ce soit de l'habitat ou des établissements <br /> recevant du public.
                                </p>
                                <br />
                                <p className="text-lg">
                                    Mon approche du projet se fait à travers les matériaux : de par leur aspect, <br /> leurs propriétés et leur impact environnemental. <br /> Les matériaux sont un point central dans ma démarche architecturale.
                                </p>
                            </div>
                        </div>
                        {/* Section de Projets */}
                        <div className="bg-primary-100  h-screen">
                            <h1 className="text-3xl px-50 py-20 text-left">Projets</h1>
                            <div className='grid grid-cols-3 gap-30 px-50'>
                                <img src={projet1} alt="Projet 1" className="w-full h-full object-cover" />
                                <img src={projet2} alt="Projet 2" className="w-full h-full object-cover" />
                                <img src={projet3} alt="Projet 3" className="w-full h-full object-cover" />
                            </div>
                            <Link to="/projets" className="btn btn-secondary bg-primary-400 hover:bg-primary-200 hover:text-black text-white font-bold py-2 px-4 rounded mt-10 ml-50">Voir tous les projets</Link>
                        </div>
                        {/* Section de Services */}

                        <ServicesAcc />

                        {/* Section de Contact */}
                        <div className="bg-primary-500 h-screen text-white items-center justify-center flex flex-col">
                            <div>
                                <h1 className="text-5xl">Discutons de votre projet</h1>

                                <p className="text-lg tex text-left mt-5">
                                    Vous avez un projet en tête ? <br />Contactez-moi pour en discuter et nous <br />trouverons ensemble la solution adaptée <br /> à vos besoins.
                                </p>
                                <div className=" py-2 justify-center items-center space-x-5 mt-5">
                                <a href="tel:+33123456789" className="bg-primary-700 hover:bg-primary-500 text-white font-bold py-2 px-4 rounded">
                                    Par téléphone : +33 1 23 45 67 89
                                </a>    
                                <a href="mailto:gabriel.santos@orange.fr" className="bg-primary-400 hover:bg-primary-200 text-white font-bold py-2 px-4 rounded ml-4">
                                    Par email : gabriel.santos@orange.fr
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
            <Footer />
        </div>
    )
}       