import React from 'react';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 class="title">{title}</h2>

      <ul class="stat-list">
        <li class="item">
          <span class="label">.docx</span>
          <span class="percentage">{stats[0].percentage}%</span>
        </li>
        <li class="item">
          <span class="label">.pdf</span>
          <span class="percentage">{stats[1].percentage}%</span>
        </li>
        <li class="item">
          <span class="label">.mp3</span>
          <span class="percentage">{stats[2].percentage}%</span>
        </li>
        <li class="item">
          <span class="label">.psd</span>
          <span class="percentage">{stats[3].percentage}%</span>
        </li>
        <li class="item">
          <span class="label">.pdf</span>
          <span class="percentage">{stats[4].percentage}%</span>
        </li>
      </ul>
    </section>
  );
};
