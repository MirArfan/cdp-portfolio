import React from 'react'
import OtherProjectPicture from './OtherProjectPicture';
import OtherDetails from './OtherDetails';

const OthersProjectCard = () => {
    
    return (
        <div className='flex gap-1 w-[70%] justify-between'>
            <div className={'flex mt-[50px]  w-[50%] gap-1.5 ' }>
                <OtherProjectPicture/>
                <OtherDetails />
            </div>
            <div className={'flex mt-[50px]  w-[50%] gap-1.5 ' }>
                <OtherProjectPicture/>
                <OtherDetails />
            </div>
            
        </div>

    )
}

export default OthersProjectCard