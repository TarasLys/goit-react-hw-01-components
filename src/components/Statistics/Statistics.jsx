import React from 'react';
import css from './Statistics.module.css';
import { getRandomHexColor } from '../Helpers/color.js';

export const Statistics = ({ stats }) => {
  return (
    <section className={css.statistics}>
      <ul className={css.statlist}>
        {stats.map(stat => (
          <li
            className={css.item}
            key={stat.id}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <span class="label">{stat.label}</span>
            <span class="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
