import { CContainer, CRow, CCol} from '@coreui/react';
import espaco from '../images/espaco.png'
const Espaco = () => { 
    return ( 
        <CContainer> 
            <CRow> 
                <CCol>
                <div>
                    <img src={espaco} alt="espaco" className='image' /> 
                </div>
                </CCol>
            </CRow> 
        </CContainer> 
        ); 
    }; 
    
export default Espaco;