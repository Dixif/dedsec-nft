import React from 'react'
import instagramLogo from '../Assets/owner/instagram.png'
import twitterLogo from '../Assets/owner/twitter.png'
import moreIcon from '../Assets/owner/more.png'
import './Main.css'
import { useState, useEffect } from 'react'

export const Main = ({ selectedPunk, punkListData }) => {

    const [activePunk, setActivePunk] = useState(punkListData[3]);

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
        console.log(activePunk);
    }, [punkListData, selectedPunk]);

    return (
        <div className='main'>
            <div className="mainContent">
                <div className="punkHighlight">
                    <div className="punkContainer">
                        <img src={activePunk.image_url} className='selectedPunk' alt="" />
                    </div>
                </div>
                <div className="punkDetails" style={{ color: "#fff" }}>
                    <div className="title">{activePunk.name}
                        <span className="itemNumber">#{activePunk.token_id}</span>
                    </div>
                <div className="owner">
                    <div className="ownerImageContainer">
                        <img src={activePunk.owner.profile_img_url} className='selectedPunk' alt="" />
                    </div>
                    <div className="ownerDetails">
                        <div className="ownerNameHandle">
                            <div>{activePunk.owner.address}</div>
                            <div className='ownerHandle'>Ded..$ec</div>
                        </div>
                        <div className="ownerlink">
                            <img src={instagramLogo} href="https://www.instagram.com/its_me_dixif/?utm_medium=copy_link" alt="" />
                        </div>
                        <div className="ownerlink">
                            <img src={twitterLogo} alt="" />
                        </div>
                        <div className="ownerlink">
                            <img src={moreIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Main
