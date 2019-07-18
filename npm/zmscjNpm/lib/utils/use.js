/**
 * @Autohr: willy
 * @Data: 2019-7-18
 */
export var useSFC = function useSFC (parame) {
  let install = function install (Vue) {
    Vue.component(parame.name, parame)
  };
  return install
};