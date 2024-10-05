export function start(started) {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
}
