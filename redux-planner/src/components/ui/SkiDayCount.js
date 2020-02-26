import React from 'react';
import { PropTypes } from 'react'
import { FaLeaf } from 'react-icons/fa'
import { FaSnowflake } from 'react-icons/fa/'
import { FaCalendarAlt } from 'react-icons/fa'
import '../../stylesheets/SkiDayCount.scss'

const SkiDayCount = ({ total=0, powder=0, backcountry=0 }) =>
    <div className="ski-day-count">
        <div className="total-days">
            <span>{total}</span>
            <FaCalendarAlt />
            <span>days</span>
        </div>
        <div className="powder-days">
            <span>{powder}</span>
            <FaSnowflake />
            <span>powder</span>
        </div>
        <div className="backcountry-days">
            <span>{backcountry}</span>
            <FaLeaf />
            <span>hiking</span>
        </div>
    </div>

// SkiDayCount.propTypes = {
//     total: PropTypes.number,
//     powder: PropTypes.number,
//     backcountry: PropTypes.number
// }

export default SkiDayCount