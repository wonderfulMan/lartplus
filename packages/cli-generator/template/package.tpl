{
    "currentFrameWork": "${frameWork}",
    "scripts": {
        {@each scripts as value, key}
            "${value}": "${item}"
        {@/each}
    },
    "devDependencies": {
        {@each dps as value, key}
            "${value}": "${item}"
        {@/each}
    }
}