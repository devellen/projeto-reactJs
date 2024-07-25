import { CContainer, CRow, CCol, CButton} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import '../css/Home.css' 
import logo from '../images/logo.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'

const Home = () => { 
    return ( 
        <CContainer className="container-center"> 
            <CRow> 
                <CCol className="header-container"> 
                    <div>
                        <img src={logo} alt="Logo" className='logo' /> 
                    </div>
                </CCol>
                <CCol  xs lg={4} className='row2'> 
                    <CButton color="secondary" shape="rounded-0" className="button" href="/cardapio">Cardápio</CButton> 
                    <CButton color="secondary" shape="rounded-0" className="button" href='/pratos'>Pratos da estação</CButton> 
                    <CButton color="secondary" shape="rounded-0" className="button" href='/espaco'>O espaço</CButton> 
                    <CButton color="secondary" shape="rounded-0" className="button" href='/faq'>FAQ de delivery</CButton> 
                    <CButton color="secondary" shape="rounded-0" className="button" href='/sobre'>Sobre nós</CButton>
                    <div className='sociais'>
                        <img src={facebook} alt="Logo" className='icon-social'/>
                        <img src={instagram} alt="Logo" className='icon-social'/> 
                        <img src={twitter} alt="Logo" className='icon-social'/> 
                    </div> 
                </CCol>
            </CRow> 
        </CContainer> 
        ); 
    }; 
    
export default Home;