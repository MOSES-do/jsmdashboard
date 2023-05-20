// import PropTypes from 'prop-types';
import * as SyncfusionReactCharts from '@syncfusion/ej2-react-charts';
// import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

/* eslint-disable */

const SparkLine = ({ currentColor, id, height, width, color, data, type }) => {
    const { SparklineComponent, Inject, SparklineTooltip } = SyncfusionReactCharts;
    return (
        <SparklineComponent id={id} height={height} width={width} lineWidth={1} valueType="Numeric" fill={color} border={{ color: currentColor, width: 2 }} dataSource={data} xName="xval" yName="yval" type={type}
            tooltipSettings={{
                visible: true,
                format: '${x} : data ${y}',
                trackLineSettings: {
                    visible: true
                }
            }}
        >
            <Inject services={[SparklineTooltip]} />
        </SparklineComponent>
    )
}

// SparkLine.propTypes = {
//     currentColor: PropTypes.string,
//     id: PropTypes.string,
//     height: PropTypes.string,
//     width: PropTypes.string,
//     color: PropTypes.string,
//     data: PropTypes.arrayOf(PropTypes.object).isRequired,
//     type: PropTypes.string
// }

export default SparkLine;