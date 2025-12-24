#include <stdio.h>
#include <unistd.h> // For sleep function

void display_lyrics() {
    // Array of strings containing the lyrics
    const char *lyrics[] = {
        "I was distracted, and in traffic",
        "I didn't feel it when the earthquake happened",
        "But it really got me thinkin', were you out drinkin'?",
        "Were you in the living room, chillin', watchin' television?",
        "",
        "It's been a year now, think I've figured out how",
        "How to let you go and let communication die out",
        "",
        "I know, you know, we know",
        "You weren't down for forever and it's fine",
        "I know, you know, we know",
        "We weren't meant for each other and it's fine",
        "",
        "But if the world was ending, you'd come over, right?",
        "You'd come over and you'd stay the night",
        "Would you love me for the hell of it?",
        "All our fears would be irrelevant",
        "",
        "If the world was ending, you'd come over, right?",
        "The sky'd be falling and I'd hold you tight",
        "And there wouldn't be a reason why",
        "We would even have to say goodbye",
        "",
        "If the world was ending, you'd come over, right?",
        "Right?"
    };

    int n = sizeof(lyrics) / sizeof(lyrics[0]); // Number of lines in the lyrics array

    // Loop through and print each line with a delay
    for (int i = 0; i < n; i++) {
        printf("%s\n", lyrics[i]);
        sleep(2); // Pause for 2 seconds after each line
    }
}

int main() {
    // Call the function to display the lyrics
    display_lyrics();
    return 0;
}
