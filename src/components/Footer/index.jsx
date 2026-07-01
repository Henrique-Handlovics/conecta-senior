import './footer.css'
import logoUnisanta from "../../assets/logo-unisanta.png";

export default function Footer() {
    return(
        <>
            <footer className="footer">
                <div className='content'>
                    <p>&copy; Desenvolvido por <b>Henrique Handlovics</b> </p>
                    <p>Para <b>Projeto de Extensão - Unisanta</b></p>
                </div>  
                <img
                src={logoUnisanta}
                alt='Logo da Unisanta'
                className='logo-footer'
                />
            </footer>  
        </>
    )
}