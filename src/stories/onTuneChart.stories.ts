import onTuneChart from '../onTuneChart/onTuneChartComponent/onTuneChart.svelte';
import { TestDataMaker } from '../onTuneChart/TestDataMaker';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
  title: 'Example/V5/OntuneChart',
  component: onTuneChart,
  argTypes: {
    componentWidth: {
      control: { type: 'select' },
      options: ['800px'],
      description: '사용자는 쓰지 않는 속성. storybook에서 width, height가 없으면 스타일 적용이 제대로 안되는 문제가 있어 추가. 추후 삭제 예정',
    },
    componentHeight: {
      control: { type: 'select' },
      options: ['500px'],
      description: 'storybook에서 width, height가 없으면 스타일 적용이 제대로 안되는 문제가 있어 추가. 추후 삭제 예정',
    },
    onTuneChartConfig: {
      control: { type: 'object' },
      description: '차트의 옵션 데이터',
    },
    xAxisDatas: {
      control: { type: 'object' },
      description: 'x축 데이터',
    }
  }
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = ( args ) => ({
  Component: onTuneChart,
  props: args,
  on: {
    click: args.onClick,
  },
});

const testDataMaker = new TestDataMaker( 3600, 20 );
const globalLineTension = 0;

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  componentWidth: '800px',
  componentHeight: '500px',
  onTuneChartConfig: {
    htmlLegend: {
      position: 'RIGHT',
      show: true,
    },
    line: {
      globalTension: globalLineTension,
      globalWidth: 1,
    },
    title: {
      text: 'Chart Component1'
    },
    xAxis: {
      timeRange: 300,
      labelInterval: 14    
    },
    yAxis: {
      min: 0,
      max: 100,
      show: true,
      position: 'LEFT',
    },
    secondYAxis: {
      min: 0,
      max: 100,
      show: true,
      position: 'RIGHT',
    }

  },
  xAxisDatas: testDataMaker.getCategories(),
  series: testDataMaker.getSeries( 1, globalLineTension ),
};