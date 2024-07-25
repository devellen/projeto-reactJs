import { CContainer, CRow, CCol} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import '../css/pags.css';
import cardapio from '../images/cardapio2.png'
const Cardapio = () => { 
    return ( 
        <CContainer className='container'> 
            <CRow> 
                <CCol>
                <div>
                    <img src={cardapio} alt="cardapio" className='image' /> 
                </div>
                </CCol>
            </CRow> 
        </CContainer> 
        ); 
    }; 
    
export default Cardapio;