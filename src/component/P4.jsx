import React from 'react'
import img1 from '../assets/media/p4img1.png'
import img2 from '../assets/media/p4img2.png'
import img3 from '../assets/media/p4img3.png'
import img4 from '../assets/media/p4img4.png'

const P4 = () => {
    return (
        <div>
            <div className="p4m">
                <div className="p4m1">
                    <div className="p4img1">
                        <img src={img1} alt="" />
                    </div>
                    <div className="p4img2">
                        <img src={img2} alt="" />
                    </div>
                    <div className="p4img3">
                        <img src={img3} alt="" />
                    </div>
                    <div className="p4img4">
                        <img src={img4} alt="" />
                    </div>
                </div>
                <div className="p4m2">
                    <div className="p4m2cont1">

                    </div>
                    <div className="p4m2cont2">

                    </div>
                    <div className="p4m2cont3">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default P4
