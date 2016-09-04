RoundOffer = {
    roundOffToPlace(num, place) {
        var shift = Math.pow(10, place);

        return Math.round(num * shift) / shift;
    }
}
