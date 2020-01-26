{
    frameWork: ${frameWork};
    useConfigFile: ${useConfigFile};
    plugins: {
        {@each plugins as value, key}
            ${value}: ${item}
        {@/each}
    };
    stylePreprocessor: ${stylePreprocessor};
    router: ${router};
    status: ${string};
}