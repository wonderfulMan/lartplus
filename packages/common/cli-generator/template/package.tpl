{
    "name": "${projectName}",
    "version": "0.0.1",
    "private": true,
    "scripts": {
        {@each scripts as value, key}
            "${key}": $${value}
        {@/each}
    },
    "dependencies": {
        {@each dependencies as value, key}
            "${key}": $${value}
        {@/each}
    },
    "devDependencies": {
        {@each devDependencies as value, key}
            "${key}": $${value}
        {@/each}
    }
}