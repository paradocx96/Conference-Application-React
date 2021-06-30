module.exports = async () => {
    return {
        verbose: true,
        testEnvironment: 'jsdom',
        setupFilesAfterEnv: ['<rootDir>/src/jest-setup.js'],
        moduleNameMapper: {
            '\\.(css|less)$': '<rootDir>/src/__mocks__/styleMock.js',
            '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__mocks__/fileMock.js',
        },
        collectCoverageFrom: [
            '!<rootDir>/src/components/Homepage/Gallery.jsx'
        ]
    };
};