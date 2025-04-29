
const rules = {
  overrides: [
    {
      files: ['tests/fixtures/**/*.ts'],
      rules: {
        // Disable all rules for this file
        'no-unused-vars': 'off',
        'no-undef': 'off',
        // Add other rules to disable as needed
      },
    },
  ],
}

module.exports = {
  extends: '@chatie',
  rules,
}
