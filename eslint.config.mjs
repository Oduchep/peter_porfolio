import nextConfig from 'eslint-config-next';

const eslintConfig = [
  ...nextConfig,
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];

export default eslintConfig;
