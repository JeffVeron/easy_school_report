 import React from 'react'

 function AdminSignUp (){

    return (
        <div>
            <div>
                <p>logo</p>

            </div>

            <div>
                <ul>
                    <ol> HOME</ol>
                    <ol> SCORE ENTRY</ol>
                    <ol>SCORE SHEETS </ol>
                    <ol> GENERATE REPORTS</ol>
                    
                </ul>

            </div>

            <h1>SIGN UP AS AN ADMIN</h1>

            <div>

                <div>
                    <label>NAME:
                    <input type='text' name ='name'></input>
                    </label>

                    <label> TITLE:
                    <input type='text' name ='title'></input>
                    </label>

                    <label>SCHOOL:
                    <input type='text' name ='school'></input>
                    </label>

                    <label>EMAIL:
                    <input type='email' name ='email'></input>
                    </label>

                    <label>PASSWORD:
                    <input type='password' name ='password'></input>
                    </label>

                    <label>CONFIRM PASSWORD:
                    <input type='password' name ='passwordconfirm'></input>
                    </label>

                    <label> PHOTO OF SCHOOL CREST :
                    <input type='text' name ='schoolcrest'></input>
                    </label>
                   

                </div>

                <button>SIGN UP</button>

            </div>


        </div>


    )
 }

 export default AdminSignUp