module.exports = {
  rules: {
    match: {
      meta: {
        type: "problem",
        docs: {
          description: "Forbid a filename pattern",
        },
        messages: {
          match: "File '{{filename}}' matches forbidden pattern {{pattern}}",
        },
      },
      /** @param {import('eslint').Rule.RuleContext} context */
      create: (context) => ({
        Program: (node) => {
          const { patterns, ignores } = context.options[0] || {};
          const filename = context.getFilename();

          if (ignores && ignores.includes(filename.split(/\//).at(-1))) return;

          patterns?.some((pattern) => {
            pattern.test(filename) &&
              context.report({
                node,
                messageId: "match",
                data: {
                  filename,
                  pattern,
                },
              });
          });
        },
      }),
    },
  },
};
