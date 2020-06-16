import React from 'react'

const AssetsList = ({assets}) => {
    return (
        <>
        {assets && assets.map(asset => {
            return (
                <div key={asset.coinName}>{asset.coinName}</div>
            )
        })}
        </>
    )
}
export default AssetsList