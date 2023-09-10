import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const GraphDetail = ({ data, isFullScreen, cardRef, contentRef }) => {
  const categories = data.sentimentAsCategories;
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Plot
        data={[
          {
            x: ['Positive Tweets'],
            y: [categories.positiveTweets],
            type: 'bar',
            width: 0.2,
            marker: { color: 'green' },
            name: 'Positive Tweets',
          },
          {
            x: ['Neutral Tweets'],
            y: [categories.neutralTweets],
            type: 'bar',
            width: 0.2,
            marker: { color: 'yellow' },
            name: 'Neutral Tweets',
          },
          {
            x: ['Negative Tweets'],
            y: [categories.negativeTweets],
            type: 'bar',
            width: 0.2,
            marker: { color: 'red' },
            name: 'Negative Tweets',
          },
        ]}
        layout={{
          width: isFullScreen
            ? dimensions.width - 40
            : cardRef
            ? cardRef?.current?.offsetWidth - 40
            : contentRef
            ? contentRef?.current?.offsetWidth - 40
            : 600,
          height: isFullScreen
            ? dimensions.height - 40
            : cardRef
            ? cardRef?.current?.offsetHeight - 40
            : contentRef
            ? contentRef?.current?.offsetHeight - 40
            : 400,
          showlegend: true,
          legend: {
            orientation: 'h',
            x: 0.5,
            y: 1.1,
            xanchor: 'center',
          },
          barmode: 'group',
          margin: { t: 40 },
        }}
        config={{ displayModeBar: false }}
      />
    </>
  );
};

export default GraphDetail;
