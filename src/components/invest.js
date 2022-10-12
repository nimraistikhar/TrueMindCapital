import React, { useState } from 'react'
import Cart from './cart'

function Invest(props) {
    const [cart, setCart] = useState(false)

    return (
        <>
            <div className='flex justify-center items-center mt-20'>

                {/* *********        User option to buy the schemes         ********* */}

                <div className='flex justify-between items-center w-7/12 shadow p-4 rounded'>
                    <div className='flex flex-col justify-start items-start'>
                        <h4 className='text-base font-bold uppercase'>{props.itemName}</h4>
                        <ul className='flex justify-center items-center invest-font-family'>
                            <li className='text-xs font-semibold text-gray-500'>Equity</li>
                            <li className='text-xs font-black text-gray-500 ml-3 mr-1 mb-2'>.</li>
                            <li className='text-xs font-semibold text-gray-500'>Focused Fund</li>
                            <li className='text-xs font-black text-gray-500 ml-3 mr-1 mb-2'>.</li>
                            <li className='text-xs font-semibold text-gray-500'>Very High Riskometer</li>
                        </ul>
                    </div>

                    {/* ************          Invest Button          ************* */}

                    <button
                        className='font-black border-blue rounded py-2 px-4 text-base bg-white hover:bg-gray-100'
                        onClick={() => setCart(true)}
                    >
                        Invest Now
                    </button>
                </div>
            </div>

            {/* *****************    Invest Cart     ******************* */}

            {cart ? (
                <Cart
                    trigger={props.trigger}
                    itemMinimumAmount={props.itemMinimumAmount}
                    itemMiximumAmount={props.itemMiximumAmount}
                />
            ) : null}
        </>
    )
}

export default Invest