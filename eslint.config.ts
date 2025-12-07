import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
}, {
  files: ['**/*.ts'],
  rules: {
    'ts/no-explicit-any': 'error',
  },
})
