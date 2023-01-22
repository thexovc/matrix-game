import React from 'react'
import './Trx.css'
import TrxCard from './TrxCard'

const Trx = () => {
    return (
        <div className="trx__container">
            <div className="trx__container__title">
                <h1>Transactions</h1>
            </div>

            <div className="trx__container__card__con">

                <TrxCard />
                <TrxCard />
                <TrxCard />
                <TrxCard />

            </div>

        </div>
    )
}

export default Trx