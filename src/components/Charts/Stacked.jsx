import PropTypes from 'prop-types';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from "@syncfusion/ej2-react-charts";
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'

const Stacked = ({ width, height }) => {
    return (
        <ChartComponent width={width} height={height} id="charts" primaryXAxis={stackedPrimaryXAxis} primaryYAxis={stackedPrimaryYAxis} legendSettings={{ background: 'white' }} chartArea={{ boder: { width: 0 } }} tooltip={{ enable: true }}
        >
            <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
            <SeriesCollectionDirective>
                {/* eslint-disable react/jsx-props-no-spreading */}
                {stackedCustomSeries.map((item, index) =>
                    <SeriesDirective key={index} {...item} />
                )}
            </SeriesCollectionDirective>
        </ChartComponent>
    )
}

Stacked.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,

}
export default Stacked;