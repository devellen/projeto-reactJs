import { CContainer, CRow, CCol} from '@coreui/react';
import pratos from '../images/pratos.png'

const Pratos = () => { 
    return ( 
        <CContainer> 
            <CRow> 
                <CCol>
                <div>
                    <img src={pratos} alt="pratos" className='image' /> 
                </div>
                </CCol>
            </CRow> 
        </CContainer> 
        ); 
    }; 
    
export default Pratos;