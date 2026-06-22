import Header from "../components/Header"
import Footer from "../components/Footer";
import p001 from "../assets/PhotoProjets/alex-wongx.png";
import p002 from "../assets/PhotoProjets/danist-soh.png";
import p003 from "../assets/PhotoProjets/micro-habitat.png";
import p004 from "../assets/PhotoProjets/Rectangle159x.png";
import p005 from "../assets/PhotoProjets/Rectangle160.png";
import p006 from "../assets/PhotoProjets/Rectangle161.png";
import p007 from "../assets/PhotoProjets/Rectangle162.png";
import p008 from "../assets/PhotoProjets/Rectangle163.png";
import p009 from "../assets/PhotoProjets/Rectangle164.png";
import p010 from "../assets/PhotoProjets/Rectangle165.png";
import p011 from "../assets/PhotoProjets/Rectangle166.png";
import { Link } from "react-router-dom";

export default function Projets() {
    return (
        <div>
            <Header />
            <div>
                <h1 className="text-3xl font-semibold mb-6 text-center m-10">Projets</h1>
                <div className="grid grid-cols-31  gap-7">
                    <div className="col-span-12 col-start-4">
                        <Link to="/projets/Projet1">
                            <img src={p001} alt="Projet 1" />
                        </Link>
                    </div>
                    <div className="col-span-12 col-start-17">
                        <Link to="/projets/Projet2">
                            <img src={p002} alt="Projet 2"/>
                        </Link>
                    </div>
                    <div className="col-span-12 col-start-4">
                        <Link to="/projets/Projet3">
                            <img src={p003} alt="Projet 3" />
                        </Link>
                    </div>
                    <div className="col-span-12 col-start-17">
                        <Link to="/projets/4">
                            <img src={p004} alt="Projet 4" />
                        </Link>
                    </div>
                    <div className="col-span-12 col-start-4">
                        <Link to="/projets/5">
                            <img src={p005} alt="Projet 5" />
                        </Link>
                    </div>
                    <div className="col-span-12 col-start-17">
                        <Link to="/projets/6">
                            <img src={p006} alt="Projet 6" />
                        </Link>
                    </div>
                    <div className="col-span-12 col-start-4">
                        <Link to="/projets/7">
                            <img src={p007} alt="Projet 7" />
                        </Link>
                    </div>
                    <div className="col-span-12 col-start-17">
                        <Link to="/projets/8">
                            <img src={p008} alt="Projet 8" />
                        </Link>
                    </div>
                    <div className="col-span-12 col-start-4">
                        <Link to="/projets/9">
                            <img src={p009} alt="Projet 9" />
                        </Link>
                    </div>
                    <div className="col-span-12 col-start-17">
                        <Link to="/projets/10">
                            <img src={p010} alt="Projet 10" />
                        </Link>
                    </div>
                    <div className="col-span-12 col-start-4">
                        <Link to="/projets/11">
                            <img src={p011} alt="Projet 11" />
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}