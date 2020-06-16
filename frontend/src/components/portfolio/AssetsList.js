import React from 'react'

const AssetsList = ({assets}) => {
    return (
        <>
        {assets && assets.map(asset => {
            return (
                <div>{asset.coinName}</div>
            )
        })}
        </>
    )
}
export default AssetsList