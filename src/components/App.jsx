import React, {useState} from 'react'


function App() {

  // States of variables to track
  const [feet, setFeet] = useState();
  const[inches, setInches] = useState();
  const [weight, setWeight] = useState();
  const [bmi, setBmi] = useState();
  

  function CalculateBMI(event){
    event.preventDefault();
    const height = (feet*12)+ (inches *1);

      const result = (weight / (height * height) * 703);
      const bmi  = Math.round(result*10)/10;
      
      setBmi(bmi); 
    
    
  }
  
  function reload(){
    window.location.reload()
  }
   

  return (
    <div className="app">
      <div className='container'>
      <h2 className='center'>BMI Calculator</h2>
        <form>
            <div>
            <label>Height: </label>
            <input value={feet} onChange={(event) => setFeet(event.target.value)} placeholder='feet' />
            <input className = 'inches' value={inches} onChange={(event) => setInches(event.target.value)} placeholder='inches' />
            </div>
            <div>
            <label>Weight: </label>
            <input value={weight} onChange={(event) => setWeight(event.target.value)} placeholder='pounds' />
            </div>
          <div>
            <button className='btn btn-margin' onClick ={CalculateBMI} type='submit'>Compute BMI</button>
            <br />
            <button className='btn btn-outline' onClick={reload} type='submit'>Clear</button>
          </div>
        </form>

        <div className='center'>
          <h3>Your BMI: {bmi} </h3>
        </div>
    </div>

    </div> 
  );
}


export default App;