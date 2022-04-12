import React, { useState } from 'react';
import OtherInfo from './OtherInfo';
import PersonalInfo from './PersonalInfo';
import SignUpInfo from './SignUpInfo';


function Form() {

  const [page, setPage] = useState(0);
  const [width, setWidth] = useState(33.3);

  const [formData, setFormData] = useState({
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      username: "",
      nationality: "",
      other: "",
  });

  const FormTitles = ["Sign Up", "Personal Info", "Other"];

  const PageDisplay = () => {
      if (page === 0){
          return <SignUpInfo formData={formData} setFormData={setFormData}/>;
      }else if (page === 1){
          return <PersonalInfo formData={formData} setFormData={setFormData}/>;
      }else {
          return <OtherInfo formData={formData} setFormData={setFormData}/>;
      }
  };

  return (
    <div className='form'>
        <div className='progressbar'>
            <div style={{width: width+'%'}}></div>
        </div>
        <div className='form-container'>
            <div className="header">
                <h1>{ FormTitles[page] }</h1>
            </div>
            <div className="body">
                {PageDisplay()}
            </div>
            <div className="footer">
                <button
                    style={{cursor: page === 0 ? 'default':'pointer'}}
                    disabled={page === 0}
                    onClick={() => {
                        setPage((currPage) => currPage - 1);
                        setWidth((currWidth) => currWidth - 33.3)
                    }}
                >
                    Prev
                </button>

                <button
                    onClick={() => {
                        if(page === FormTitles.length - 1){
                            alert("FORM SUBMITTED!");
                            console.log(formData);
                        }else{
                            setPage((currPage) => currPage + 1);
                            setWidth((currWidth) => currWidth + 33.3);
                        }
                    }}
                >
                    {page === FormTitles.length - 1 ?  'Submit' : 'Next'}
                </button>
            </div>
        </div>
    </div>
  )
}

export default Form