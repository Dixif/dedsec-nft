import React from 'react'
import instagramLogo from '../Assets/owner/instagram.png'
import twitterLogo from '../Assets/owner/twitter.png'
import moreIcon from '../Assets/owner/more.png'
import './Main.css'

export const Main = () => {
    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='punkHighlight'>
                    <div className='punkContainer'>
                        <img src='https://lh3.googleusercontent.com/GCNl70m8ksjL_Eo1Zqp_0XyBOMsTnypQY4uVL-03fldHfTTvvvic6XqM7myKXVSqT3pab1Hdnh2mjPQmWm0o17P8uz-9KmdHyxfJ3Q' className='selectedPunk' alt=''></img>
                    </div>

                </div>
                <div className='punkDetails' style={{ color: '#fff' }}>
                    <div className='title'>Bandana punk</div>
                    <span className='itemNumber'>*#1</span>
                </div>
                <div className='owner'>
                    <div className='ownerImageContainer'>
                        <img src='https://lh3.googleusercontent.com/GCNl70m8ksjL_Eo1Zqp_0XyBOMsTnypQY4uVL-03fldHfTTvvvic6XqM7myKXVSqT3pab1Hdnh2mjPQmWm0o17P8uz-9KmdHyxfJ3Q' alt=''></img>
                    </div>
                    <div className='ownerDetails'>
                        <div className='ownerNameAndHandle'>
                            <div>0xC1718eEd46A4bf097D2149af99C95916194266D7</div>
                            <div className='ownerHandle'>@dedsec</div>
                        </div>
                        <div className='ownerLink'>
                            <img src={instagramLogo} alt=''></img>
                        </div>
                        <div className='ownerLink'>
                            <img src={twitterLogo} alt=''></img>
                        </div>
                        <div className='ownerLink'>
                            <img src={moreIcon} alt=''></img>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main
