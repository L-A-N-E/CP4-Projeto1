{/*Coloque uma imagem um paragrafo com 20 linhas, pode usar o lorem ipsum*/}
import React from 'react'
// Importando estilo
import { SobreStyle } from '../styles/SobreStyle'

const Sobre = () => {
    return (
    <>
    <SobreStyle>
        <section className='container'>
            <div className='conteudo'>
                <h1 className='h1-sobre'>Sobre</h1>
                <p className='p-sobre'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis euismod euismod dignissim, ante augue vulputate mauris, nec condimentum libero nunc sit amet sapien. Vivamus vel nulla sit amet felis dignissim tempus. Cras lacinia nunc eget urna gravida, a congue dolor iaculis. Proin scelerisque nulla vel orci bibendum, id varius libero suscipit. Aenean feugiat nisi nec dolor faucibus, at gravida eros dapibus. Phasellus luctus arcu eget arcu scelerisque, eget tempus mi sollicitudin.Fusce a magna non est consequat imperdiet. Aliquam erat volutpat. Suspendisse potenti. Morbi auctor lectus vitae enim vestibulum, non fermentum justo consectetur. Integer lacinia orci eget risus vehicula, ut auctor lorem laoreet. Quisque vitae odio vitae eros ultricies volutpat. Donec vehicula sapien at dolor vulputate, id gravida enim blandit. Integer euismod velit a quam tempor, eget posuere justo tincidunt.</p>
            </div>
            <img className='img' src='#' alt='empresa_imagem'/>
        </section>
    </SobreStyle>
    </>
    )
}
export default Sobre
