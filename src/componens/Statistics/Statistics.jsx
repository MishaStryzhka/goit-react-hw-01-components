import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import List from './list/List';

const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.list}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <List key={id} label={label} percentage={percentage} />
                    )
                })}

            </ul>
        </section>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
}

export default Statistics;