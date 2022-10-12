import React, { useState } from 'react'
import { useForm } from "react-hook-form";

function Cart(props) {
    const [value, setValue] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    let min = props.itemMinimumAmount;
    let max = props.itemMiximumAmount;

    return (
        <>

            {/* *****************    Invest Cart     ******************* */}

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col justify-center items-center mt-20 mb-32'>
                    <div className='w-7/12 border border-gray-300 p-5'>

                        {/* *********        User option to buy the schemes         ********* */}

                        <div className='flex justify-between items-start'>
                            <div className='flex flex-col justify-start items-start'>
                                <h4 className='text-base font-bold uppercase'>{props.trigger}</h4>
                                <ul className='flex justify-center items-center invest-font-family'>
                                    <li className='text-xs font-semibold text-gray-500'>Equity</li>
                                    <li className='text-xs font-black text-gray-500 ml-3 mr-1 mb-2'>.</li>
                                    <li className='text-xs font-semibold text-gray-500'>Focused Fund</li>
                                    <li className='text-xs font-black text-gray-500 ml-3 mr-1 mb-2'>.</li>
                                    <li className='text-xs font-semibold text-gray-500'>Very High Riskometer</li>
                                </ul>
                            </div>
                            <div
                                className='font-black text-base'
                            >
                                Min. Amount: ₹{props.itemMinimumAmount}
                            </div>
                        </div>

                        {/* ****************        Enter Amount         ****************** */}

                        <div className='flex flex-col w-full justify-start items-start pt-5'>
                            <label className='font-bold text-gray-600 font-inter text-base pb-1'>Amount</label>
                            <input type="number" placeholder={value} className='p-2 border rounded-lg w-full'
                                {...register("range", {
                                    required: "Amount is required",
                                    min: {
                                        value: min,
                                        message: "Min Amount: ₹" + min,
                                    },
                                    max: {
                                        value: max,
                                        message: "Max Amount: ₹" + max,
                                    }
                                })}
                            />
                            {errors.range && (<small className='text-red-700 font-semibold text-base pt-4 invest-font-family'>{errors.range.message}</small>)}
                        </div>
                    </div>

                    {/* ******************      Final Invest Button      ******************* */}

                    <div className='w-7/12 mt-5'>
                        <button className='bg-blue w-full text-white p-3 font-black rounded-md text-base'>Invest Now</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Cart