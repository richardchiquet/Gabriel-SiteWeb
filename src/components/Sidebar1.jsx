import React, {useState} from "react";
import logo from "../assets/logoNB.png"


export default function Sidebar1() {
    const[open,setOpen] =useState(true)

    return(
        <nav className="shadow-md h-screen bg-sprout">
            {/* Header */}

            <a href="" className="flex items-center space-y-10 ">
                <div className=" font-extrabold">El <div>Gabriel</div><div>Santos</div></div>
                <img src={logo} alt="Logo" className="md:w-40 w-20" />
            </a>
            <div className="space-x-2 font-bold text-3xl">Projet</div>
            <ul className="list-disc">
                <li><a href="">Tous</a></li>
                <li>Equipements</li>
                <li>Logements</li>
                <li>Maisons</li>
                <li>Tous</li>
            </ul>
            <div className="space-x-5">Présentation - Contact</div>
            <div className="space-x-5">Actualités</div>
            <div className="space-x-5"></div>
             <ul className="list-decimal space-x-2 ">
                Média
                <li className="list-decimal">Instagram architecture</li>
                <li className="list-decimal">Instagram voyage / croquis</li>
                <li className="list-decimal">Autres</li>
            </ul>


        </nav>
    )


}
