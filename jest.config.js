export default {
    testEnvironment: 'jsdom',
    preset: 'ts-jest',
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Gunakan .ts atau .js sesuai file yang kamu buat
  };