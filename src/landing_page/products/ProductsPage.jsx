import React from "react";
import HeroSection from "./../pricing/HeroSection";
import ImgLeftBlock from "./ImgLeftBlock";
import ImgRightBlock from "./ImgRightBlock";
import Universe from "./Universe";

const ProductsPage = () => {
	return (
		<>
			<HeroSection />

			<ImgLeftBlock />
			<ImgRightBlock />
			<ImgLeftBlock />
			<ImgRightBlock />
			<ImgLeftBlock />

			<Universe />
		</>
	);
};

export default ProductsPage;
