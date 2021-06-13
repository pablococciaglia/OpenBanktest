import React from 'react'
import { Link } from 'react-router-dom'
import triangulo from '../../assets/img/triangulo.png'

/* página del contrato, solo tiene un lorem ipsum en el cuerpo de la pagina y el boton para volver atrás al Home */
export const ContractScreen = () => {
    return (
        <>
            <img src={triangulo} alt="triangulo" className="screen1__triangulo" /> {/* Imagen triangular que señala en que paso del step-progressbar nos encontramos */}
            
            <div className="base__container animate__animated animate__fadeIn">
                
                <div className="base__content">
                    <h1>Terminos y condiciones del servicio</h1>
                    <div className="base__underline"></div>
                    <h3 className="contract__text">
                        Deserunt Lorem ut minim aliquip velit. Adipisicing aliquip nostrud laboris veniam dolor eu nulla non. Nisi qui voluptate amet exercitation adipisicing id mollit do non excepteur esse adipisicing.
                        Id consectetur minim labore irure consectetur. In cillum consectetur occaecat irure do minim quis culpa. Aliquip cillum esse cupidatat velit in. Reprehenderit ut do velit deserunt fugiat magna elit proident. Do ad reprehenderit eu aliquip ex labore. Tempor ipsum esse est consequat culpa exercitation laborum occaecat ex esse commodo ut incididunt. Ex irure adipisicing magna nulla.
                        Cupidatat sit veniam culpa id non quis incididunt minim. Enim exercitation excepteur tempor exercitation laborum excepteur labore non excepteur non nisi. Sunt aliquip officia ex incididunt sit sint proident ut laborum pariatur tempor. In ullamco pariatur amet exercitation enim culpa ex. Sint labore eiusmod ut anim enim pariatur aliquip et elit voluptate dolore.
                        Cupidatat aliqua sint duis ut dolore nisi occaecat reprehenderit elit nulla sunt id anim. Tempor duis duis nulla anim ea amet labore incididunt minim cillum cillum. Officia anim voluptate anim ad elit. Dolore culpa veniam fugiat pariatur occaecat quis in nostrud adipisicing. Elit cillum adipisicing proident officia ex dolore. Ullamco reprehenderit commodo do ullamco et id esse nisi ut labore ex cillum irure.
                        Consectetur aliqua non deserunt labore. Exercitation anim proident ullamco eiusmod in minim non labore cupidatat. Adipisicing laboris voluptate eu elit occaecat pariatur adipisicing non nisi do. Culpa in proident ea do. Id proident enim culpa fugiat.
                        Anim in consectetur reprehenderit proident sit veniam dolor esse. Velit elit nisi dolore id do adipisicing quis eiusmod. Veniam non magna consequat enim laborum mollit. Et fugiat incididunt consectetur enim reprehenderit aliquip ad ipsum culpa eu. Laboris magna eu in anim irure non adipisicing tempor qui consectetur. Sit excepteur dolore elit et voluptate officia.
                        Culpa cillum minim nisi nisi laboris magna sint reprehenderit anim veniam cillum exercitation do nostrud. Culpa aute in amet aute amet quis ullamco deserunt id nostrud officia est aute. Nulla veniam in dolor ullamco deserunt ea culpa. Cillum velit nisi do esse et in laboris labore ullamco. Aliquip fugiat ex culpa voluptate consequat voluptate labore do minim.
                    </h3>
                    <Link to="/"><button className="btn btn-light">Atrás</button></Link>
                    
                </div>
            </div>
        </>
    )
}
