import { Card as CardPrime } from "primereact/card";
import { Rating } from "primereact/rating";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Card.module.scss";
interface ICard {
	product_id: number;
	name: string;
	abv: string;
	price: string;
	category: string;
	type: string;
	on_sale: boolean;
	image_url: string;
	brewer: string;
	children?: string;
	country: string;
}

const Card: React.FC<ICard> = ({
	product_id,
	name,
	price,
	abv,
	image_url,
	category,
	on_sale,
	brewer,
	type,
	country,
	children,
}) => {
	const navigate = useNavigate();

	const header = () => {
		return (
			<>
				{on_sale && <div className={styles.sale}>SALE</div>}
				<img
					src={image_url}
					className={children ? "imageCard" : "imageCardList"}
					onError={({
						currentTarget,
					}: {
						currentTarget: EventTarget & HTMLImageElement;
					}) => {
						currentTarget.onerror = null;
						currentTarget.src =
							"https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg?w=740&t=st=1654431162~exp=1654431762~hmac=83960a1e7c59ae32aa769e3c53d3661483c154a49d3fd1eca94461094662ec65";
					}}
				/>
			</>
		);
	};
	const title = () => {
		return (
			<>
				<h4>{category}</h4>
				<h2>{name}</h2>
			</>
		);
	};

	const footer = () => {
		return (
			<>
				<Rating value={Number(abv)} readOnly stars={5} cancel={false} />
				<p>{`Price $${price}`}</p>
			</>
		);
	};
	const handleClick = () => {
		navigate(`/prodotti/${product_id}`);
	};
	return (
		<>
			{children ? (
				<div className={"cardPage"}>
					<CardPrime
						header={header}
						className={"animate__animated animate__zoomIn"}
						title={title}
						children={children}
						footer={footer}
					/>{" "}
				</div>
			) : (
				<div className={"cardPdt"} onClick={handleClick}>
					<CardPrime
						className={"animate__animated animate__zoomIn"}
						header={header}
						title={name}
						footer={footer}
					/>
				</div>
			)}
		</>
	);
};
export default memo(Card);
