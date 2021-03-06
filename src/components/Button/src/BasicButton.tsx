import { defineComponent, computed } from 'vue';
  import Icon from '@/components/Icon/src/Icon.vue';
  import { buttonProps } from './props';

  export default defineComponent({
    name: 'AButton',
    components: {'icon' :Icon },
    inheritAttrs: false,
    props: buttonProps,
    setup(props, { attrs }) {
      // get component class
      const getButtonClass = computed(() => {
        const { color, disabled } = props;
        return [
          {
            [`ant-btn-${color}`]: !!color,
            [`is-disabled`]: disabled,
          },
          attrs.class,
        ];
      });

      // get inherit binding value
      const getBindValue = computed(() => ({ ...attrs, ...props }));

      return { getBindValue, getButtonClass };
    },
    render(){
      return <div></div>
    }
  });