function isCasteVote(age, caste) {
    if (age >= 18 && caste === "sc/st") {
        return true;
    } else {
        return false;
    }
}
