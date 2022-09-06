import React from 'react';

const PortfolioCard=(props)=> {
    return (
        <div className="col-lg-4 gallery-grid__item category-concept">
            <div className="gallery-grid__image-wrap">
                <img
                    className="gallery-grid__image cover medium-zoom-image ls-is-cached lazyloaded"
                    src={props.img} data-zoom="" alt=""/>
            </div>
            <div className="gallery-grid__caption">
                <h4 className="title gallery-grid__title">{props.tittle}</h4>
                <span className="gallery-grid__category">{props.cat}</span>
            </div>
        </div>
    );
}

export default PortfolioCard;