import React from 'react'

const OfflineBackDrop = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 shadow-md">
    <div className="rounded-3xl p-16 w-11/12 md:w-7/12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white ">
        <div className="w-40 md:w-52 mx-auto">
            <img src="https://png.pngtree.com/png-vector/20220805/ourmid/pngtree-title-vector-icon-of-globe-with-a-slashindicating-no-internet-connection-vector-png-image_47836730.jpg" alt="offline" />
        </div>
        <div className="text-2xl text-center">
            You are Offline. Please check your internet connection and try again!
        </div>
    </div>
</div>
  )
}

export default OfflineBackDrop