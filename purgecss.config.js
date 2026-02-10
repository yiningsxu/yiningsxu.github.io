module.exports = {
  content: ["./_site/**/*.html"],
  css: ["./_site/assets/css/*.css"],
  output: "./_site/assets/css/",
  safelist: {
    standard: [/collapsed/, /collapse/, /collapsing/, /show/, /fade/, /highlight/, /jupyter-notebook/, /pandas-dataframe/],
    deep: [/^col-/, /^row/, /^container/, /^btn/],
    greedy: [/^data-/, /^aria-/],
  },
};
