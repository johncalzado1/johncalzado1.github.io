import React from 'react';

export const FlexItem = ({
    children,
    justifyContent = 'flex-start',
    alignItems = 'flex-start',
    direction = 'column',
    position = 'left',
    wrap = 'wrap',
    grow = false,
    maxWidth = 'auto',
    minWidth = 'auto',
    noMargin = false,
}) => {
    let marginLeft = 'auto';
    let marginRight = 'auto';
    let marginTop = 'auto';
    let marginBottom = 'auto';
    grow = (grow === 1) ? true : false;
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

    if (noMargin === true) {
        marginTop = '0px';
        marginBottom = '0px';
        marginLeft = '0px';
        marginRight = '0px';
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
            marginRight: marginRight,
            flexGrow: grow,
            maxWidth: maxWidth,
            minWidth: minWidth
        }}>
            {children}
        </div >
    )
}
