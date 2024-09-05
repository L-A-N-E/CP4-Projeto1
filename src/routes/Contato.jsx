import React from "react"
import { ContatoStyle } from "../styles/ContatoStyle"

const Contato = () =>{
    return(
        <>
            <ContatoStyle>
                <section>
                    <div className="container-contato">
                        <h1>Contato</h1>
                        <form>
                            <div className="input">
                                <label className="label-contato">Nome: </label>
                                <input type="text" placeholder="Digite o seu nome" className="input-contato" required/>
                            </div>
                            <div className="input">
                                <label className="label-contato">Email: </label>
                                <input type="email" placeholder="Digite o seu email" className="input-contato" required/>
                            </div>
                            <div className="btn-contato">
                                <button>Enviar</button>
                            </div>
                        </form>
                    </div>
                </section>
            </ContatoStyle>       
        </>
    )
}
export default Contato