import PropTypes from 'prop-types';
import css from './list.module.css';
import getRandomHexColor from 'utils/getRandomHexColor';

console.log(getRandomHexColor())
const list = ({ label, percentage }) => {
    return (<li className={css.item} style={{ backgroundColor: getRandomHexColor() }}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage} %</span>
    </li>
    )
};

list.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}

export default list;