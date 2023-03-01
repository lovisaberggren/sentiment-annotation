import textCardStyles from "../styles/TextCard.module.css";

const TextCard = ({ text }: { text: string }) => {
	return <div className={textCardStyles.card}>{text}</div>;
};

export default TextCard;
