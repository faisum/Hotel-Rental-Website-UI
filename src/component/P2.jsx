import React from 'react'
import './P2.css'
import logo from '../assets/media/logo.png'

const p2 = () => {
  return (
    <div>
      <h2 className="para">Minumum Living Cost take care of everything</h2>
      <div className="paras">
      <div className="parasImg"><img src="https://s3-alpha-sig.figma.com/img/aa1a/32ca/30426403a54de305110513d6cc2c537f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MDylxihYUpZg420RaMg0~lAGjX8sXLjzz68sHjsbeec3sUiFseisQRcHUdYbiM8OT-DEF5d3yCPXFKaSuIJomgFDV-pHOM23u2sWFk-aN3wd-wsEU-XiS-gbeaeBxiP7gjfkJrUjgcgO3LYMw-g~jHgspa8PpSCuPShNCedCgsFDp76EjvbY19rlvEqmnHEzHO723xCzt5ChwOcIfyms3WE-LWYTU-165vCytHaVflquFEX9qoFyA5gBtHckiQbNMgk6uBh~R2iIIaqYP5txSRtWXfjKexMNuu6VTKBcKAVJglJVhM1-xqoWHvhyTbqE0s6FOnn5ctfq5riv7v0IQQ__" alt="#" width={250} height={355} />
      </div>
      <div className="paraslogos">
        <div className="logo1">
        <img src={logo} alt="" />
        <p className='logoPara'>Pay as little as possible</p>
        </div>
        <div className="logo2">
        <img src={logo} alt="" />
        <p className='logoPara logoPara2'>Enjoy wisdom of community!</p>
        </div>
        <div className="logo3">
        <img src={logo} alt="" />
        <p className='logoPara logoPara3'>Lets somebody else take care of landlords</p>
        </div>
        <div className="logo4">
        <img src={logo} alt="" />
        <p className='logoPara'>Pay as little as possible</p>
        </div>
        <div className="logo5">
        <img src={logo} alt="" />
        <p className='logoPara'>Pay as little as possible</p>
        </div>
        <div className="logo6">
        <img src={logo} alt="" />
        <p className='logoPara'>Pay as little as possible</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default p2
