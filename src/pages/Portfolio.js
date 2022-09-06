import React from 'react';
import MainWrapper from "../component/MainWrapper";
import Footer from "../component/Footer";
import Menu from "../component/Menu";
import PortfolioCard from "../component/PortfolioCard";
import ListPortfolio from "../component/ListPortfolio";
import MainTitle from "../component/MainTitle";
function Portfolio() {
    return (
        <MainWrapper>
            <div className="col-12 col-md-12 col-xl-9">
                <div className="box shadow pb-0">
                  {/* Menu*/}
                    <Menu/>
                  {/*Tittle*/}
                    <MainTitle title={'Portfolio'}/>
                   {/*Gallery*/}
                    <div className="pb-0">
                      {/* Filter*/}
                        <div className="select">
                            <ul className="filter">
                                <ListPortfolio data={'All'} link={'#filter'} class={'filter__item active'} />
                                <ListPortfolio data={'Concept'} link={'#filter'} class={'filter__item'} />
                                <ListPortfolio data={'Design'} link={'#filter'} class={'filter__item'} />
                                <ListPortfolio data={'Life'} link={'#filter'} class={'filter__item'} />
                            </ul>
                        </div>
                       {/*Content*/}
                        <div className="gallery-grid js-masonry js-filter-container">
                            {/*row 1*/}
                            <div className="row">
                                <PortfolioCard img={require('../asset/images1.jpg')} tittle={'Half Avocado'} cat={'Concept'}  />
                                <PortfolioCard img={require("../asset/image_02.jpg")} tittle={'Pink Flamingo'} cat={'Concept'}  />
                                <PortfolioCard img={require("../asset/image_03.jpg")} tittle={'Abstract'} cat={'Design'}  />
                            </div>
                            {/*row 2*/}
                            <div className="row">
                                <PortfolioCard img={require("../asset/image_04.jpg")} tittle={'Abstract #2'} cat={'Design'}  />
                                <PortfolioCard img={require("../asset/image_05.jpg")} tittle={'Abstract #3'} cat={'Design'}  />
                                <PortfolioCard img={require("../asset/image_06.jpg")} tittle={'Golden Gate'} cat={'Life'}  />
                            </div>
                            {/*row 3*/}
                            <div className="row">
                                <PortfolioCard img={require("../asset/image_07.jpg")} tittle={'Peach'} cat={'Concept'}  />
                                <PortfolioCard img={require("../asset/image_08.jpg")} tittle={'Abstract #4'} cat={'Design'}  />
                                <PortfolioCard img={require("../asset/image_09.jpg")} tittle={'Hedgehog'} cat={'Life'}  />
                            </div>
                        </div>
                    </div>
                </div>
              {/* Footer*/}
                <Footer/>
            </div>
        </MainWrapper>
    );
}
export default Portfolio;