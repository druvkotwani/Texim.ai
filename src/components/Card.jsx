import PropTypes from 'prop-types';

const Card = ({ background, shadow }) => {
    console.log(background, shadow)
    return (
        <div className={`flex flex-col items-center w-[360px] h-[576px] py-8 px-4 justify-between rounded-[20px] ${background}`} style={{ boxShadow: `0px 0px 100px 0px ${shadow}` }}>
            Card
        </div>
    )
}

Card.propTypes = {
    background: PropTypes.string.isRequired,
    shadow: PropTypes.string.isRequired,
}

export default Card;
