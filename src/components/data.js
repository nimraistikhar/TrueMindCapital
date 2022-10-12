import React, { Component } from 'react'
import Invest from './invest';

export class Data extends Component {
    constructor(props) {
        super(props);

        //     Storing Data

        this.state = {
            Data: [
                {
                    "userId": 1,
                    "id": "YLGD",
                    "name": "WhiteOak Capital Liquid Fund",
                    "code": "LGD",
                    "nav": "1160.05 (25-Jul-2022)",
                    "rtaCode": "YLGD",
                    "rtaName": "CAMS",
                    "minimumInvestment": 500,
                    "benchmark": "CRISIL Liquid Fund Index",
                    "expenseRatio": "0.24",
                    "exitLoad": "If redeemed bet. 7 Days to 7 Days;  Exit Load is Nil; If redeemed bet. 6 Days to 6 Days;  Exit Load is 0.0045%; If redeemed bet. 5 Days to 5 Days;  Exit Load is 0.005%; If redeemed bet. 4 Days to 4 Days;  Exit Load is 0.0055%; If redeemed bet. 3 Days to 3 Days;  Exit Load is 0.006%; If redeemed bet. 2 Days to 2 Days;  Exit Load is 0.0065%; If redeemed bet. 1 Day to 1 Day;  Exit Load is 0.007%; ",
                    "objective": "The investment objective of the Scheme is to generate optimal returns consistent with moderate levels of risk and high liquidity by investing in high quality debt and money market instruments.However, there is no assurance or guarantee that the investment objective of the Scheme will be achieved.The Scheme does not assure or guarantee any returns.",
                    "aum": 60.8698,
                    "amc": "WhiteOak Capital Mutual Fund",
                    "nature": "Debt",
                    "fundManager": "Piyush Baranwal",
                    "classification": "Liquid Fund",
                    "category": "DEBT",
                    "riskmeter": "Low Riskometer",
                    "maximumPurchaseAmount": "100000.000",
                    "minimumPurchaseAmount": "500.000",
                    "purchaseAmountMultiplier": "1.000"
                },
                {
                    "userId": 2,
                    "id": "P8123",
                    "name": "ICICI Prudential Ultra Short Term Fund",
                    "code": "8123",
                    "nav": "24.2217 (25-Jul-2022)",
                    "rtaCode": "P8123",
                    "rtaName": "CAMS",
                    "minimumInvestment": 5000,
                    "benchmark": "CRISIL Ultra Short Duration Fund B-I Index*",
                    "expenseRatio": "0.39",
                    "exitLoad": " Nil ",
                    "objective": "To generate income through investments in a range of debt and money market instruments.However, there can be no assurance or guarantee that the investment objective of the Scheme would be achieved.",
                    "aum": 10489.00654315,
                    "amc": "ICICI Prudential Mutual Fund",
                    "nature": "Debt",
                    "fundManager": "Manish Banthia,Ritesh Lunawat",
                    "classification": "Ultra Short Duration Fund",
                    "category": "DEBT",
                    "riskmeter": "Moderate Riskometer",
                    "maximumPurchaseAmount": "100000.000",
                    "minimumPurchaseAmount": "5000.000",
                    "purchaseAmountMultiplier": "1.000"
                },
                {
                    "userId": 3,
                    "id": "K53G",
                    "name": "Kotak Infrastructure & Economic Reform Fund",
                    "code": "53G",
                    "nav": "37.523 (25-Jul-2022)",
                    "rtaCode": "K53G",
                    "rtaName": "CAMS",
                    "minimumInvestment": 5000,
                    "benchmark": "Nifty Infrastructure TRI",
                    "expenseRatio": "1.16",
                    "exitLoad": "If redeemed bet. 0 Day to 365 Days;  Exit Load is 1%; ",
                    "objective": "The investment objective of the Scheme is to generate long-term capital appreciation from a diversified portfolio of predominantly equity and equity-related securities of companies involved in economic development of India as a result of potential investments in infrastructure and unfolding economic reforms.There is no assurance that the investment objective of the Scheme will be achieved.",
                    "aum": 533.2934,
                    "amc": "Kotak Mahindra Mutual Fund",
                    "nature": "Equity",
                    "fundManager": "Harish Krishnan",
                    "classification": "Thematic",
                    "category": "EQUITY",
                    "riskmeter": "Very High Riskometer",
                    "maximumPurchaseAmount": "121321312.000",
                    "minimumPurchaseAmount": "5000.000",
                    "purchaseAmountMultiplier": "2.000"
                },
                {
                    "userId": 4,
                    "id": "128VFDG",
                    "name": "Axis Value Fund",
                    "code": "128VFDG",
                    "nav": "9.77 (25-Jul-2022)",
                    "rtaCode": "128VFDG",
                    "rtaName": "KARVY",
                    "minimumInvestment": 5000,
                    "benchmark": "NIFTY 500 Value 50 TRI",
                    "expenseRatio": "1.17",
                    "exitLoad": "If redeemed bet. 0 Day to 360 Days;  Exit Load is 1%; ",
                    "objective": "To generate consistent long-term capital appreciation by investing predominantly in equity and equity related securities by following value investing strategy. However, there can be no assurance that the investment objective of the Scheme will be achieved.",
                    "aum": 231.745,
                    "amc": "Axis Mutual Fund",
                    "nature": "Equity",
                    "fundManager": "Jinesh Gopani,Hitesh Das",
                    "classification": "Value Fund",
                    "category": "EQUITY",
                    "riskmeter": "Very High Riskometer",
                    "maximumPurchaseAmount": "100000.000",
                    "minimumPurchaseAmount": "5000.000",
                    "purchaseAmountMultiplier": "1.000"
                },
                {
                    "userId": 5,
                    "id": "LD81G",
                    "name": "SBI Focused Equity Fund",
                    "code": "D81G",
                    "nav": "240.003 (25-Jul-2022)",
                    "rtaCode": "LD81G",
                    "rtaName": "CAMS",
                    "minimumInvestment": 5000,
                    "benchmark": "S&P BSE 500 TRI",
                    "expenseRatio": "0.68",
                    "exitLoad": "If redeemed bet. 0 Year to 1 Year;  Exit Load is 1%; ",
                    "objective": "To provide the investor with the opportunity of long - term capital appreciation by investing in a concentrated portfolio of equity and equity related securities.",
                    "aum": 23803.9956,
                    "amc": "SBI Mutual Fund",
                    "nature": "Equity",
                    "fundManager": "Rama Iyer Srinivasan",
                    "classification": "Focused Fund",
                    "category": "EQUITY",
                    "riskmeter": "Very High Riskometer",
                    "maximumPurchaseAmount": "1000000.000",
                    "minimumPurchaseAmount": "5000.000",
                    "purchaseAmountMultiplier": "200.000"
                }
            ],
            mutualFund: false,
            itemName: ''
        }
    }

    // Select Schemes Function

    clickMe(item) {
        this.setState({
            mutualFund: true,
            itemName: item.name,
            itemMinimumAmount: item.minimumPurchaseAmount,
            itemMiximumAmount: item.maximumPurchaseAmount,
        });
    }

    render() {
        return (
            <>
                <div className='flex flex-col justify-center items-center mt-32'>
                    <h3 className='text-3xl font-bold uppercase'>Truemind Capital Mutual fund schemes</h3>
                    <div className='border border-gray-100 rounded w-4/5 mt-10 p-3'>

                        {/* *****************         Heading Attributes         ***************** */}

                        <div className='flex justify-start items-start'>
                            <div className='w-4/12'>
                                <div className='text-white text-lg font-medium p-3 title-bg text-start'>Name</div>
                            </div>
                            <div className='w-1/4'>
                                <div className='text-white text-lg font-medium p-3 title-bg text-start'>Classification</div>
                            </div>
                            <div className='w-2/12'>
                                <div className='text-white text-lg font-medium p-3 title-bg text-start'>Category</div>
                            </div>
                            <div className='w-1/4'>
                                <div className='text-white text-lg font-medium p-3 title-bg text-start'>Riskmeter</div>
                            </div>
                        </div>

                        {/* ******************           Product List UI            ******************* */}

                        {this.state.Data.map((item, Index) => {
                            return (
                                <ul className='flex justify-start items-start border-ui hover:bg-gray-100 cursor-pointer' onClick={this.clickMe.bind(this, item)} >
                                    <li className='w-4/12'>
                                        <div className='text-base text-base font-medium p-3 text-start'>{item.name}</div>
                                    </li>
                                    <li className='w-1/4'>
                                        <div className='text-base text-base font-medium p-3 text-start'>{item.classification}</div>
                                    </li>
                                    <li className='w-2/12'>
                                        <div className='text-base text-base font-medium p-3 text-start'>{item.category}</div>
                                    </li>
                                    <li className='w-1/4'>
                                        <div className='text-base text-base font-medium p-3 text-start'>{item.riskmeter}</div>
                                    </li>
                                </ul>
                            )
                        })}
                    </div>
                </div>

                {/* **************         Select any Procedure Response          ****************** */}

                {this.state.mutualFund ? (
                    <Invest
                        itemName={this.state.itemName}
                        itemMinimumAmount={this.state.itemMinimumAmount}
                        itemMiximumAmount={this.state.itemMiximumAmount}
                    />
                ) : null}

            </>
        )
    }
}

export default Data