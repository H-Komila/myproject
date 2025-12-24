import React from 'react'
import Nimadir from './images/1.png'
import Nimadi from './images/2.png'
import Nimad from './images/3.png'



const Wrapper = () => {
  return (
    <>
    
    <wrapper>
        <div className='container max-w-[1200px] mx-auto px-4'>
            <div>
                <div className=''>
                    <h1>We are building software solution that solves your business challenges</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
                </div>
                <ul>
                    <li>
                          <img src={Nimadir} alt="" />
                          <h1>Invoicing</h1>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                    </li>

                     <li>
                          <img src={Nimadi} alt="" />
                          <h1>Support</h1>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                    </li>

                     <li>
                          <img src={Nimad} alt="" />
                          <h1>Surveying</h1>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                    </li>
                </ul>
            </div>
        </div>
    </wrapper>
    
    </>
  )
}

export default Wrapper