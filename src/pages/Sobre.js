import { CContainer, CRow, CCol} from '@coreui/react';
import sobre from '../images/sobre.png'

const Sobre = () => { 
    return ( 
        <CContainer> 
            <CRow> 
                <CCol>
                <div>
                    <img src={sobre} alt="sobre" className='image' /> 
                </div>
                </CCol>
            </CRow> 
        </CContainer> 
        ); 
    }; 
    
export default Sobre;