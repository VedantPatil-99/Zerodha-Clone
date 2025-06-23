import React from "react";
import HeroSection from "./HeroSection";
import ImgLeftBlock from "./ImgLeftBlock";
import ImgRightBlock from "./ImgRightBlock";
import Universe from "./Universe";
import productData from "@/productData";

const ProductsPage = () => {
	return (
		<>
			<HeroSection />
			{productData.map((item) => {
				if (item.layout === "left") {
					return <ImgLeftBlock key={item.id} data={item} />;
				}
				return <ImgRightBlock key={item.id} data={item} />;
			})}
			<Universe />
		</>
	);
};

export default ProductsPage;
