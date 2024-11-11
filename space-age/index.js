export const age = (planetName, secondsOnEarth) => {
    const planets = [
        { planet: "Mercury", value: 0.2408467 },
        { planet: "Venus", value: 0.61519726 },
        { planet: "Earth", value: 1.0 },
        { planet: "Mars", value: 1.8808158 },
        { planet: "Jupiter", value: 11.862615 },
        { planet: "Saturn", value: 29.447498 },
        { planet: "Uranus", value: 84.016846 },
        { planet: "Neptune", value: 164.79132 },
    ];
    const yearInSeconds = 31557600;
    for (let { planet, value } of planets) {
        if (planet.toLowerCase() === planetName.toLowerCase()) {
            // Calcul de l'âge pour la planète correspondante
            const age = secondsOnEarth / (yearInSeconds * value);
            return parseFloat(age.toFixed(2)); // Arrondi au dixième prêt
        }
    }
    throw new Error(`Invalid planet name: ${planetName}`); // Si aucune planète ne correspond
};