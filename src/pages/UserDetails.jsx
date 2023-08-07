import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PDFToImage from '../IntegrationFiles/pdfconverter';
import pdfjs from 'pdfjs-dist';

const UserDetails = () => {
   
    

  const [CheckKyc, setCheckKYC] = useState()
  const isPDF = useRef(false);
  const [ IsApproved, setIsApproved] = useState(false)
  const canvasRef = useRef(null);
  const [imageData, setImageData] = useState(null);

  console.log("In UserDetails")
  const location = useLocation();
  const user = location.state;
  let url= 'bruh';
   console.log(user)
  if(user.kycSubmitted){
  
     
    url = user.document.url
    
  } else{
    url = ""
    console.log("URL IF url PResent",url)
  }  

  const urlParts = url.split('.');
  if (urlParts[3] === 'pdf') {

    isPDF.current = true;

  } else {
    isPDF.current = false;

  }
 
  const handleImage = async () => {
console.log("URL::::",url)
    window.open(url, '_blank');
  }


    const handleSubmit = async() =>{

    }

 

 
  // Use the 'user' object to display the details in UserDetails component
  return (
    <div>


      <h1>User Details</h1>
      <p>Name: {user.username}</p>
      <p>Email: {user.email}</p>


{url?
     
      <div className="row ">
        
      {isPDF.current ? <p>URL OF PDF :<a href={url} target="_blank"> Click here to view </a>  </p> :
        <div className="col-sm-4">
          

            <img src={url} alt="" style={{ width: '900px', height: 'auto', cursor: 'pointer' }} onClick={handleImage} />
            </div>}



       
      </div> : <p> DOCUMENT NOT UPLOADED</p>}

      <form onSubmit={handleSubmit}>
      
        <div>
          <input
            type="checkbox"
            checked={IsApproved}
            onChange={(e) => setIsApproved(e.target.checked)}
          />
          <label>Approved</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserDetails;