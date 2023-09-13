import React from 'react'
import { useNavigate} from 'react-router-dom';
// import { saveAs } from 'file-saver';
// import MOCK_DATA from './MOCK_DATA.json';
// import { COLUMNS } from './columns';


/*  Payment button */
export const ButtonComponent = () => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      // Replace "/destination" with the actual path of the destination page
      navigate('./Billing.js');
    };
    
  return (
    <div className='div' style={{ display: 'flex', justifyContent: 'space-between' }}>
    <h1>TRANSACTION</h1>
     <button  style={{fontFamily:"Poppins"}} className='button button3' onClick={handleClick}>CREATE PAYMENT</button>
     </div>
    );
  };

  /* Export button*/
//   export const ExportButton = () => {
//     const exportData = async () => {
//         try {
//           const content = JSON.stringify(MOCK_DATA , null, 2);
//           const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
//           saveAs(blob, 'MOCK_DATA.txt');
//         } catch (error) {
//           console.error('Error exporting data:', error);
//         }
//       };
//     return (
//         <div >
//       <button  className='button2' onClick={exportData}>Export Details</button>
//       </div>  
//     );
//   };



  
export const GlobalFilter=({filter,setFilter})=>{
    return(
        <>
        <span>
            <input 
            className='example' value={filter || ''}
            placeholder='search....'
            onChange={e=> setFilter(e.target.value)}/>
        </span>
        </> 
    )
}

