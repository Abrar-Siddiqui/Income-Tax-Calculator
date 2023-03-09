import React, {useState } from 'react'
import './style.css'
const Income = () => {
  const [val,setVal]=useState('')
  const [val1,setVal1]=useState('')
  const [val2,setval2]=useState('')
  const [val3,setval3]=useState('')
  const [val4,setVal4]=useState('')
     const SubmitHandler = (e) =>{
        e.preventDefault();
        juneHadler('june');
        SepHadler('sep');
        DecHadler('dec');
        MarchHadler('march')
     }
     const juneHadler=(month)=>{
      if(val>10000 && month==="june"){
        let tax = (val*15/100);
        setVal1(tax)
      }
    }
    const SepHadler=(month)=>{
      if(val>10000 && month==='sep'){
        let tax = (val*45/100)-(val*15/100)
        setval2(tax)
      }
    }
    const DecHadler=(month)=>{
      if(val>10000 && month==="dec"){
        let tax = (val*75/100)-(val*45/100)
        setval3(tax)
      }
    }
    const MarchHadler=(month)=>{
      if(val>10000 && month==="march"){
        let tax = (val*100/100)-(val*75/100)
        setVal4(tax)
      }
    }      
    return (
    <div>
         <div className="container">
      <h2>DUE Date Of Payment Of Advance Tax</h2>
      <p>Revised Advance tax Slabs under new tax regime for FY 2023-24 </p>
      <table className="myWrapTable"><tbody><tr><td><strong>Due date of payment of advance tax</strong></td><td><strong>For all assessee (except those assessee who has opted for Presumptive taxation scheme)</strong></td></tr>
      <tr>
        <td>Up to 15th June of financial year</td><td>15% of Tax Payable =: {`${val1}`}</td>
        </tr>
      <tr>
        <td>Up to 15th September of financial year</td><td>45% of Tax Payable =: {`${val2}`}</td>
      </tr>
      <tr>
        <td>Up to 15th December of financial year</td><td>75% of tax Payable =: {`${val3}`}</td>
      </tr>
      <tr><td>Up to 15th March of financial year</td><td>100% of tax Payable =: {`${val4}`}</td></tr>
      </tbody></table>

      <form id="tax-form" onClick={SubmitHandler}>
        <div className="form-group">
          <label htmlFor="income">Annual Income: New Slab</label>
            <input type="number" id="income" name="income" placeholder="Enter your annual income" required onChange={(e)=>setVal(e.target.value)} />
        </div>
        <div>
           <button className='btn btn-primary text-white form-control' type='submit'>Submit</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Income