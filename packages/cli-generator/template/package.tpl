{
    "name": "${projectName}",
    "scripts": {
        {@each scripts as value, key}
            "${key}": $${value}
        {@/each}
    },
    "dependencies": {
        {@each dependencies as value, key}
            "${key}": $${value}
        {@/each}
    }
}