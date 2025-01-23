import globals from 'globals';
import pluginJs from '@eslint/js';
import { parser, plugin, config } from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHook from 'eslint-plugin-react-hooks';
import pluginRouter from '@tanstack/eslint-plugin-router';

/** @type {import('eslint').Linter.Config[]} */
export default [

    { files: ['src/**/*.{mjs,cjs,ts,tsx}', 'src/*.{mjs,cjs,ts,tsx}'], ignores: ['**/out/**', 'dist/**', '**/node_modules/**', '*.config.js'],
        languageOptions: {
            parser,
            parserOptions: {
                project: './tsconfig.json'
            }
        }
     },
    {
        plugins: {
            'react-hooks': pluginReactHook
        }
    },
    { languageOptions: { globals: globals.node } },
    pluginJs.configs.recommended,
    ...config({
        languageOptions: { parser },
        plugins: { '@typescript-eslint': plugin }
    }),
    ...pluginRouter.configs['flat/recommended'],
    pluginReact.configs.flat.recommended,
    {
        rules: {
            ...pluginReactHook.configs.recommended.rules,
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',
            'react/react-in-jsx-scope': 'off',
            'no-undef': 'off',
            'no-unused-vars': 'off',
            'no-redeclare': 'off'
        }
    }
];
