import textCardStyles from "../styles/TextCard.module.css";

const TextCard = ({ id, text }) => {
	return <div className={textCardStyles.card}>{text}</div>;
};

export default TextCard;
