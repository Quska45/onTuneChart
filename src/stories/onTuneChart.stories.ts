import onTuneChart from '../components/onTuneChart/onTuneChart.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
  title: 'Example/V5/OntuneChart',
  component: onTuneChart,
  argTypes: {
    onTuneChartConfig: {
      control: { type: 'object' },
      description: '차트의 옵션 데이터',
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

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  onTuneChartConfig: {
    htmlLegendPosition: 'RIGHT'
  }
};