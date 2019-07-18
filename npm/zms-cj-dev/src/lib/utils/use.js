export var useSFC = function useSFC (parame) {
  console.log(parame, '1')
  let install = function install (Vue) {
    Vue.component(parame.name, parame)
  };
  return install
};