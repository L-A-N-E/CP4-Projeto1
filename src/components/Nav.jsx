import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
    <>
    <Link to={'/'}>Home</Link>
    <Link to={'/produtos'}>Produtos</Link>
    <Link to={'/sobre'}>Sobre</Link>
    </>
    )
}
