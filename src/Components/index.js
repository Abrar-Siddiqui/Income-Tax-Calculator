import React, {  useState } from 'react'
import './style.css'
const Income = () => {
     const [value,setValue] = useState('')
     const SubmitHandler = (e) =>{
        e.preventDefault()
        const income = (income) => {
            let tax= 0;
            if(income <= 300000){
                tax = 0;
            }else if(income > 300000 && income <= 600000){
                tax = (income - 300000) *0.05;
            }else if(income > 600000 && income <= 900000){
                tax = (300000) * 0.05 + (income - 600000) * 0.10
            }else if(income > 900000 && income <= 1200000){
                tax = (300000) * 0.05 + (300000) * 0.10 + (income - 900000) * 0.15
            }else if(income > 1200000 && income <= 1500000){
                tax = (300000) * 0.05 + (300000) * 0.10 + ( 300000) * 0.15 + (income - 1200000) * 0.20
            }else{
                tax = (300000 * 0.05) + (300000 * 0.10) +  (300000 * 0.15) + (300000 * 0.20) + (income - 1500000) * 0.30
            }
            alert(`The income tax of an income of ${income} is: ${tax}`);
        }
        income(value)
     }
    return (
    <div>
         <div className="container">
      <h2>Income Tax Calculator</h2>
      <p>Revised Income tax slabs under new tax regime for FY 2023-24 (AY 2024-25)</p>
      <p>
        The income tax slabs under the new income tax regime will be as follows:
      </p>
      <table className="myWrapTable"><tbody><tr><td><strong>Income tax slabs under new tax regime</strong></td><td><strong>Income tax rates under new tax regime</strong></td></tr><tr><td>O to Rs 3 lakh</td><td>0</td></tr><tr><td>Rs 3 lakh to Rs 6 lakh</td><td>5%</td></tr><tr><td>Rs 6 lakh to Rs 9 lakh</td><td>10%</td></tr><tr><td>Rs 9 lakh to Rs 12 lakh</td><td>15%</td></tr><tr><td>Rs 12 lakh to Rs 15 lakh</td><td>20%</td></tr><tr><td>Income above Rs 15 lakh</td><td>30%</td></tr></tbody></table>

      <form id="tax-form" onSubmit={SubmitHandler}>
        <div className="form-group">
          <label htmlFor="income">Annual Income: New Slab</label>
            <input type="number" id="income" name="income" placeholder="Enter your annual income" required onChange={(e)=>setValue(e.target.value)} />
        </div>
        <div className="form-group">
          <button type="submit">Calculate Tax</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Income