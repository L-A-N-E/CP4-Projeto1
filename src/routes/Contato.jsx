import React from "react"

const Contato = () =>{
    return(
        <>
            <section>
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
                    <button className="btn-contato">Enviar</button>
                </form>
            </section>        
        </>
    )
}
export default Contato