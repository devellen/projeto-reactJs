import { CContainer, CRow, CCol} from '@coreui/react';
import faq from '../images/faq.png'
const Faq = () => { 
    return ( 
        <CContainer> 
            <CRow> 
                <CCol>
                <div>
                    <img src={faq} alt="faq" className='image' /> 
                </div>
                </CCol>
            </CRow> 
        </CContainer> 
        ); 
    }; 
    
export default Faq;