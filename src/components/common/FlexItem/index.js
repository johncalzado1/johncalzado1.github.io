import React from 'react';

export const FlexItem = ({
    children,
    justifyContent = 'flex-start',
    alignItems = 'flex-start',
    direction = 'column',
    position = 'left',
    wrap = 'wrap'
}) => {
    let marginLeft = 'auto';
    let marginRight = 'auto';
    let marginTop = 'auto';
    let marginBottom = 'auto';

    switch (position) {
        case 'left':
            marginLeft = '0px';
            break;
        case 'right':
            marginRight = '0px';
            break;
        case 'top':
            marginTop = '0px';
            break;
        case 'bottom':
            marginBottom = '0px';
            break;
    }

    return (
        <div style={{
            display: 'flex',
            flexWrap: wrap,
            justifyContent: justifyContent,
            alignItems: alignItems,
            flexDirection: direction,
            marginTop: marginTop,
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            marginRight: marginRight
        }}>
            {children}
        </div >
    )
}
